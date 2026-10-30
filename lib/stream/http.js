/**
 * Small HTTP client used by every provider and by the HLS resolver.
 *
 * Features: central headers, timeouts, bounded retries with backoff and
 * Retry-After support, and a pluggable browser fallback for genuinely
 * JavaScript-rendered pages (single-page apps that ship no server HTML).
 *
 * The browser fallback exists for pages you are authorised to read. It is not a
 * bot-protection bypass and deliberately ships without any such machinery.
 */

import {
  DEFAULT_RETRIES,
  DEFAULT_RETRY_BASE_DELAY_MS,
  DEFAULT_TIMEOUT_MS,
  buildHeaders,
} from "./config.js";

const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

let browserFallback = null;

/**
 * Register a fallback fetcher for pages that require JS execution.
 * Signature: `async (url, { headers, timeout }) => ({ status, text, url, headers })`.
 * Pass `null` to disable.
 */
export function setBrowserFallback(fn) {
  browserFallback = typeof fn === "function" ? fn : null;
}

export class HttpError extends Error {
  constructor(message, { status = 0, url = "", retryable = false } = {}) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.url = url;
    this.retryable = retryable;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function retryDelay(attempt, retryAfterHeader, baseDelay) {
  const retryAfter = Number(retryAfterHeader);
  if (Number.isFinite(retryAfter) && retryAfter > 0) {
    return Math.min(retryAfter * 1000, 10_000);
  }
  const backoff = baseDelay * 2 ** attempt;
  const jitter = Math.random() * baseDelay * 0.5;
  return Math.round(backoff + jitter);
}

/**
 * @param {string} url
 * @param {{ method?: string, headers?: Record<string,string>, body?: any,
 *           timeout?: number, retries?: number, retryBaseDelayMs?: number,
 *           useBrowserFallback?: boolean }} [options]
 * @returns {Promise<{ status:number, ok:boolean, url:string,
 *                     headers:Headers, text:string }>}
 */
export async function request(url, options = {}) {
  const {
    method = "GET",
    headers = {},
    body,
    timeout = DEFAULT_TIMEOUT_MS,
    retries = DEFAULT_RETRIES,
    retryBaseDelayMs = DEFAULT_RETRY_BASE_DELAY_MS,
    useBrowserFallback = true,
  } = options;

  let lastError = new HttpError(`Request failed: ${url}`, { url });

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    let response;

    try {
      response = await fetch(url, {
        method,
        body,
        headers: buildHeaders(url, headers),
        redirect: "follow",
        signal: AbortSignal.timeout(timeout),
      });
    } catch (error) {
      const isAbort = error?.name === "AbortError" || error?.name === "TimeoutError";
      lastError = new HttpError(
        isAbort ? `Timed out after ${timeout}ms: ${url}` : `Network error for ${url}: ${error?.message}`,
        { url, retryable: true },
      );
      if (attempt < retries) {
        await sleep(retryDelay(attempt, null, retryBaseDelayMs));
        continue;
      }
      break;
    }

    if (RETRYABLE_STATUS.has(response.status) && attempt < retries) {
      lastError = new HttpError(`HTTP ${response.status} for ${url}`, {
        status: response.status,
        url,
        retryable: true,
      });
      await sleep(retryDelay(attempt, response.headers.get("retry-after"), retryBaseDelayMs));
      continue;
    }

    if (!response.ok) {
      lastError = new HttpError(`HTTP ${response.status} for ${url}`, {
        status: response.status,
        url,
      });
      break;
    }

    return {
      status: response.status,
      ok: true,
      url: response.url || url,
      headers: response.headers,
      text: await response.text(),
    };
  }

  if (useBrowserFallback && browserFallback && (!lastError.status || lastError.status >= 400)) {
    try {
      const rendered = await browserFallback(url, {
        headers: buildHeaders(url, headers),
        timeout,
      });
      if (rendered && typeof rendered.text === "string") {
        return {
          status: rendered.status ?? 200,
          ok: true,
          url: rendered.url || url,
          headers: rendered.headers ?? new Headers(),
          text: rendered.text,
        };
      }
    } catch {
      /* fall through to the original error */
    }
  }

  throw lastError;
}

export async function requestText(url, options = {}) {
  const { text } = await request(url, options);
  return text;
}

export async function requestJson(url, options = {}) {
  const { text, ...rest } = await request(url, options);
  try {
    return { ...rest, data: JSON.parse(text) };
  } catch (error) {
    throw new HttpError(`Invalid JSON from ${url}: ${error?.message}`, { url });
  }
}
