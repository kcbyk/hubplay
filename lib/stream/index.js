/**
 * HubPlay stream layer — public entry point.
 *
 * Quick start:
 *
 *   import { internetArchiveProvider, resolveFromProvider } from "@/lib/stream";
 *
 *   const payload = await resolveFromProvider(internetArchiveProvider, "night_of_the_living_dead");
 *   // => { title, poster, is_trailer: false, sources: [{ server, file, type }] }
 */

export {
  DEFAULT_HEADERS,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_USER_AGENT,
  buildHeaders,
  registerHostRule,
  resetHostRules,
  ruleForUrl,
} from "./config.js";

export { HttpError, request, requestJson, requestText, setBrowserFallback } from "./http.js";

export {
  TRAILER_HOSTS,
  detectStreamType,
  isPlayableStream,
  isTrailerUrl,
} from "./classify.js";

export {
  absoluteUrl,
  parseAttributeList,
  parseMasterPlaylist,
  parseMediaPlaylist,
  parsePlaylist,
  pickBestVariant,
} from "./hls.js";

export { ResolveError, STREAM_SCHEMA_VERSION, resolveFromProvider, resolveStreams } from "./resolver.js";

export {
  extractIframes,
  extractJsonLd,
  extractPlayerUrls,
  extractSourcesFromPage,
} from "./dom-scraper.js";

export { internetArchiveProvider } from "./providers/internet-archive.js";
export { localLibraryProvider, mediaRoot, resolveWithinRoot } from "./providers/local-library.js";
export { getProvider, listProviders, registerProvider } from "./registry.js";
