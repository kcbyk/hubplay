/**
 * Stream resolver: turns a provider's media record into the public playback
 * contract used by the HubPlay player.
 *
 *   {
 *     "title": "Film Adı",
 *     "poster": "https://...",
 *     "is_trailer": false,
 *     "sources": [
 *       { "server": "Internet Archive", "file": "https://.../movie.mp4", "type": "mp4" }
 *     ]
 *   }
 *
 * Trailers are detected and dropped by default. HLS entries are read one level
 * deep so `file` points at a concrete variant playlist instead of a master that
 * some players refuse to start.
 */

import { detectStreamType, isTrailerUrl, isPlayableStream } from "./classify.js";
import { parsePlaylist, pickBestVariant } from "./hls.js";
import { requestText } from "./http.js";

export const STREAM_SCHEMA_VERSION = 1;

export class ResolveError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "ResolveError";
    this.details = details;
  }
}

function normaliseServerName(source, providerLabel) {
  return source.server || source.label || providerLabel || "Unknown";
}

function uniqueByFile(sources) {
  const seen = new Set();
  return sources.filter((source) => {
    if (!source.file || seen.has(source.file)) return false;
    seen.add(source.file);
    return true;
  });
}

/**
 * Inspect an HLS source. Master playlists are reduced to their best variant
 * while the full ladder is kept in `variants` for quality switching.
 */
async function resolveHlsSource(source, { maxHeight, fetchPlaylist }) {
  const base = {
    server: source.server,
    file: source.url,
    type: "hls",
    ...(source.quality ? { quality: source.quality } : {}),
    ...(source.language ? { language: source.language } : {}),
  };

  try {
    const text = await fetchPlaylist(source.url);
    const playlist = parsePlaylist(text, source.url);

    if (!playlist.isMaster) {
      return {
        ...base,
        verified: true,
        segments: playlist.segments.length,
        duration: Math.round(playlist.totalDuration),
      };
    }

    const variants = playlist.variants.filter((variant) => variant.uri);
    if (variants.length === 0) return { ...base, verified: true };

    const best = pickBestVariant(variants, { maxHeight });

    return {
      ...base,
      file: best?.uri || source.url,
      ...(best?.quality ? { quality: best.quality } : {}),
      verified: true,
      variants: variants.map((variant) => ({
        file: variant.uri,
        quality: variant.quality,
        bandwidth: variant.bandwidth,
        codecs: variant.codecs,
      })),
    };
  } catch (error) {
    // An unreadable playlist is not fatal: hand the URL back untouched and let
    // the player negotiate it.
    return { ...base, verified: false, resolve_error: error?.message || "playlist unavailable" };
  }
}

/**
 * @param {{ media: { title:string, poster?:string, year?:string|number,
 *                    imdb?:string|number, description?:string,
 *                    sources:Array<{ server?:string, url:string,
 *                                    type?:string, isTrailer?:boolean,
 *                                    quality?:string, language?:string }> },
 *           includeTrailers?: boolean, maxHeight?: number,
 *           fetchPlaylist?: (url:string)=>Promise<string>,
 *           providerLabel?: string, providerId?: string }} options
 */
export async function resolveStreams({
  media,
  includeTrailers = false,
  maxHeight,
  fetchPlaylist = requestText,
  providerLabel,
  providerId,
} = {}) {
  if (!media || typeof media !== "object") {
    throw new ResolveError("resolveStreams: a media object is required");
  }
  if (!Array.isArray(media.sources)) {
    throw new ResolveError("resolveStreams: media.sources must be an array");
  }

  const collected = [];

  for (const rawSource of media.sources) {
    if (!rawSource?.url) continue;

    const trailer = isTrailerUrl(rawSource);
    if (trailer && !includeTrailers) continue;

    const type = detectStreamType(rawSource);
    const server = normaliseServerName(rawSource, providerLabel);

    if (trailer) {
      collected.push({
        server,
        file: rawSource.url,
        type: type === "embed" ? "embed" : type,
        is_trailer: true,
      });
      continue;
    }

    if (!isPlayableStream(type)) {
      // Unknown host: expose it as an embed so the UI can still show it, but do
      // not pretend it is a direct file.
      collected.push({ server, file: rawSource.url, type: "embed", verified: false });
      continue;
    }

    if (type === "hls") {
      collected.push(await resolveHlsSource({ ...rawSource, server }, { maxHeight, fetchPlaylist }));
      continue;
    }

    collected.push({
      server,
      file: rawSource.url,
      type,
      ...(rawSource.quality ? { quality: rawSource.quality } : {}),
      ...(rawSource.language ? { language: rawSource.language } : {}),
      ...(rawSource.size ? { size: rawSource.size } : {}),
      verified: true,
    });
  }

  const sources = uniqueByFile(collected);

  if (sources.length === 0) {
    throw new ResolveError("No playable source found", {
      title: media.title,
      seen: media.sources.length,
      includeTrailers,
    });
  }

  return {
    title: media.title || "Untitled",
    poster: media.poster || null,
    is_trailer: false,
    sources,
    meta: {
      schema_version: STREAM_SCHEMA_VERSION,
      provider: providerId || media.providerId || null,
      year: media.year ?? null,
      imdb: media.imdb ?? null,
      description: media.description ?? null,
      generated_at: new Date().toISOString(),
    },
  };
}

/** Convenience wrapper: provider in, playback contract out. */
export async function resolveFromProvider(provider, id, options = {}) {
  if (!provider || typeof provider.getMedia !== "function") {
    throw new ResolveError("resolveFromProvider: provider with getMedia() is required");
  }

  const media = await provider.getMedia(id);
  if (!media) throw new ResolveError(`Media not found: ${id}`, { id });

  return resolveStreams({
    media,
    providerLabel: provider.label,
    providerId: provider.name,
    ...options,
  });
}
