/**
 * Central network configuration for HubPlay's stream layer.
 *
 * Everything that talks to the outside world goes through `buildHeaders()` so
 * that User-Agent / Referer / Origin live in exactly one place. Per-host rules
 * let a provider declare what a given origin expects without repeating that
 * knowledge in every request.
 *
 * Only point this at sources you are allowed to access: content you own, content
 * you are licensed to distribute, public-domain archives, or sites whose terms
 * and robots.txt permit automated access.
 */

export const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";

export const DEFAULT_HEADERS = Object.freeze({
  "user-agent": DEFAULT_USER_AGENT,
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9," +
    "application/json;q=0.9,*/*;q=0.8",
  "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
  "cache-control": "no-cache",
  pragma: "no-cache",
});

export const DEFAULT_TIMEOUT_MS = 20_000;
export const DEFAULT_RETRIES = 2;
export const DEFAULT_RETRY_BASE_DELAY_MS = 400;

/** Hosts that are happy with a bare request. Extend per project as needed. */
const DEFAULT_HOST_RULES = Object.freeze({
  "archive.org": { referer: null, origin: null },
  "ia801.us.archive.org": { referer: null, origin: null },
});

const hostRules = new Map(Object.entries(DEFAULT_HOST_RULES));

/**
 * Register (or overwrite) the network profile for a hostname.
 *
 * @param {string} hostname e.g. "media.example.com"
 * @param {{ referer?: string|null, origin?: string|null, userAgent?: string,
 *           headers?: Record<string,string> }} rule
 */
export function registerHostRule(hostname, rule = {}) {
  if (!hostname) throw new Error("registerHostRule: hostname is required");
  hostRules.set(String(hostname).toLowerCase(), { ...rule });
  return rule;
}

/** Drop runtime additions and fall back to the built-in defaults. */
export function resetHostRules() {
  hostRules.clear();
  for (const [host, rule] of Object.entries(DEFAULT_HOST_RULES)) {
    hostRules.set(host, rule);
  }
}

/**
 * Find the most specific rule for a URL by walking up its parent domains
 * (`cdn.foo.example.com` -> `cdn.foo.example.com`, `foo.example.com`,
 * `example.com`, `com`).
 */
export function ruleForUrl(url) {
  let hostname;
  try {
    hostname = new URL(url).hostname.toLowerCase();
  } catch {
    return {};
  }

  const parts = hostname.split(".");
  for (let i = 0; i < parts.length; i += 1) {
    const candidate = parts.slice(i).join(".");
    if (hostRules.has(candidate)) return hostRules.get(candidate);
  }
  return {};
}

/**
 * Compose the final header set for a request.
 * Precedence: defaults < host rule < per-request overrides.
 */
export function buildHeaders(url, overrides = {}) {
  const rule = ruleForUrl(url);
  const headers = { ...DEFAULT_HEADERS, ...(rule.headers || {}) };

  if (rule.userAgent) headers["user-agent"] = rule.userAgent;
  if (rule.referer) headers.referer = rule.referer;
  if (rule.origin) headers.origin = rule.origin;

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined || value === null) continue;
    headers[key.toLowerCase()] = value;
  }

  return headers;
}
