/**
 * Source classification: what kind of stream is this, and is it a trailer?
 *
 * Trailers are first-class here because the whole point of the resolver is to
 * separate "the actual feature" from the marketing clip sitting next to it.
 */

/** Hosts that only ever serve promotional clips. */
export const TRAILER_HOSTS = Object.freeze([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
  "dailymotion.com",
  "www.dailymotion.com",
  "vimeo.com",
  "player.vimeo.com",
]);

const TRAILER_HOST_SUFFIXES = Object.freeze(["youtube.com", "youtube-nocookie.com", "dailymotion.com", "vimeo.com", "youtu.be"]);

const TRAILER_PATTERNS = Object.freeze([
  /(^|[^a-z])trailer([^a-z]|$)/i,
  /(^|[^a-z])fragman([^a-z]|$)/i,
  /(^|[^a-z])teaser([^a-z]|$)/i,
  /official[-_]?trailer/i,
  /\/embed\/trailer/i,
]);

const EXTENSION_TYPES = Object.freeze({
  ".m3u8": "hls",
  ".mpd": "dash",
  ".mp4": "mp4",
  ".m4v": "mp4",
  ".webm": "mp4",
  ".mkv": "mp4",
  ".mov": "mp4",
});

export function parseUrlSafe(value) {
  try {
    return new URL(String(value));
  } catch {
    return null;
  }
}

/**
 * Is this source a trailer rather than the main feature?
 * Accepts a raw URL or a `{ url, isTrailer }` source object.
 */
export function isTrailerUrl(source) {
  if (!source) return false;

  if (typeof source === "object" && source.isTrailer === true) return true;

  const raw = typeof source === "string" ? source : source.url || source.file;
  if (!raw) return false;

  const url = parseUrlSafe(raw);
  if (url) {
    const host = url.hostname.toLowerCase();
    if (TRAILER_HOST_SUFFIXES.some((suffix) => host === suffix || host.endsWith(`.${suffix}`))) {
      return true;
    }
  }

  return TRAILER_PATTERNS.some((pattern) => pattern.test(String(raw)));
}

/**
 * @returns {"hls"|"dash"|"mp4"|"embed"}
 */
export function detectStreamType(source) {
  const raw = typeof source === "string" ? source : source?.url || source?.file;
  if (!raw) return "embed";

  if (typeof source === "object" && typeof source.type === "string") {
    const declared = source.type.toLowerCase();
    if (["hls", "dash", "mp4"].includes(declared)) return declared;
  }

  const url = parseUrlSafe(raw);
  const pathname = (url ? url.pathname : String(raw).split(/[?#]/)[0]).toLowerCase();
  const dot = pathname.lastIndexOf(".");

  if (dot !== -1) {
    const type = EXTENSION_TYPES[pathname.slice(dot)];
    if (type) return type;
  }

  return "embed";
}

/** True when we can hand the URL straight to a media element. */
export function isPlayableStream(type) {
  return type === "hls" || type === "mp4" || type === "dash";
}
