/**
 * Generic HTML helpers for provider pages you operate or are permitted to read.
 *
 * This is deliberately *not* a site-specific scraper: it extracts iframes,
 * player-config URLs and schema.org metadata by shape, and refuses to guess when
 * the document does not contain them. Nothing here evaluates page JavaScript.
 */

import { absoluteUrl } from "./hls.js";
import { isTrailerUrl } from "./classify.js";

const IFRAME_TAG = /<iframe\b[^>]*>/gi;
const ATTR = /([a-zA-Z_:][-\w:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/g;

function parseAttributes(tag) {
  const attributes = {};
  let match;
  ATTR.lastIndex = 0;
  while ((match = ATTR.exec(tag)) !== null) {
    const name = match[1].toLowerCase();
    attributes[name] = match[3] ?? match[4] ?? match[5] ?? "";
  }
  return attributes;
}

/**
 * All iframes in a document, with lazy-loading attributes resolved.
 * @returns {Array<{ src:string, isTrailer:boolean, attributes:object }>}
 */
export function extractIframes(html, baseUrl) {
  const source = String(html || "");
  const iframes = [];
  let match;

  IFRAME_TAG.lastIndex = 0;
  while ((match = IFRAME_TAG.exec(source)) !== null) {
    const attributes = parseAttributes(match[0]);
    const raw =
      attributes.src ||
      attributes["data-src"] ||
      attributes["data-lazy-src"] ||
      attributes["data-original"] ||
      "";

    if (!raw || raw.startsWith("about:blank") || raw.startsWith("data:")) continue;

    const src = absoluteUrl(raw, baseUrl);
    if (!/^https?:\/\//i.test(src)) continue;

    iframes.push({ src, isTrailer: isTrailerUrl(src), attributes });
  }

  return iframes;
}

/**
 * File URLs declared in player configuration objects, e.g.
 * `sources: [{ file: "https://cdn/movie.m3u8" }]` or `file: "https://cdn/movie.mp4"`.
 * Matches string literals only — no evaluation, no deobfuscation.
 */
export function extractPlayerUrls(html, baseUrl) {
  const source = String(html || "");
  const urls = new Set();

  const patterns = [
    /\b(?:file|src|url)\s*:\s*["']([^"']+)["']/gi,
    /["'](https?:\/\/[^"'\s]+?\.(?:m3u8|mpd|mp4|webm|mkv)(?:\?[^"'\s]*)?)["']/gi,
  ];

  for (const pattern of patterns) {
    let match;
    pattern.lastIndex = 0;
    while ((match = pattern.exec(source)) !== null) {
      const candidate = absoluteUrl(match[1], baseUrl);
      if (/^https?:\/\//i.test(candidate)) urls.add(candidate);
    }
  }

  return [...urls].map((url) => ({ url, isTrailer: isTrailerUrl(url) }));
}

/**
 * Minimal schema.org extraction: prefers `VideoObject`/`Movie` blocks.
 * @returns {{ title?:string, poster?:string, description?:string,
 *             trailer?:string, year?:string } | null}
 */
export function extractJsonLd(html) {
  const source = String(html || "");
  const blocks = [...source.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  for (const [, raw] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw.trim());
    } catch {
      continue;
    }

    const nodes = Array.isArray(parsed) ? parsed : parsed?.["@graph"] ?? [parsed];
    for (const node of nodes) {
      if (!node || typeof node !== "object") continue;
      const type = String(node["@type"] || "");
      if (!/Movie|VideoObject|TVSeries|CreativeWork/i.test(type)) continue;

      return {
        title: node.name ? String(node.name) : undefined,
        poster: typeof node.image === "string" ? node.image : node.image?.url,
        description: node.description ? String(node.description) : undefined,
        trailer:
          typeof node.trailer === "string"
            ? node.trailer
            : node.trailer?.embedUrl || node.trailer?.contentUrl || undefined,
        year: node.datePublished ? String(node.datePublished).slice(0, 4) : undefined,
      };
    }
  }

  return null;
}

/**
 * Collect every embed/stream candidate from a provider page, main feature first.
 */
export function extractSourcesFromPage(html, baseUrl) {
  const seen = new Set();
  const sources = [];

  const push = (url, isTrailer) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    sources.push({ server: new URL(url).hostname.replace(/^www\./, ""), url, isTrailer });
  };

  for (const iframe of extractIframes(html, baseUrl)) push(iframe.src, iframe.isTrailer);
  for (const candidate of extractPlayerUrls(html, baseUrl)) push(candidate.url, candidate.isTrailer);

  return sources.sort((a, b) => Number(a.isTrailer) - Number(b.isTrailer));
}
