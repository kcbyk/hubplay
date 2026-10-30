/**
 * Minimal HLS (RFC 8216) playlist reader.
 *
 * Enough to do the thing that actually matters for a resolver: read a master
 * playlist, understand its variants, pick a sensible one, and hand back
 * absolute URLs that a `<video>` element or hls.js can load directly.
 */

const ATTRIBUTE_LIST_MARKERS = [
  "#EXT-X-STREAM-INF:",
  "#EXT-X-MEDIA:",
  "#EXT-X-I-FRAME-STREAM-INF:",
];

/** Parse an HLS attribute list, respecting quoted values that contain commas. */
export function parseAttributeList(input) {
  const attributes = {};
  const text = String(input || "");
  let index = 0;

  while (index < text.length) {
    const equals = text.indexOf("=", index);
    if (equals === -1) break;

    const key = text.slice(index, equals).trim().toUpperCase();
    index = equals + 1;
    if (!key) break;

    let value;
    if (text[index] === '"') {
      const closing = text.indexOf('"', index + 1);
      const end = closing === -1 ? text.length : closing;
      value = text.slice(index + 1, end);
      index = end + 1;
    } else {
      const comma = text.indexOf(",", index);
      const end = comma === -1 ? text.length : comma;
      value = text.slice(index, end).trim();
      index = end;
    }

    attributes[key] = value;

    while (index < text.length && (text[index] === "," || text[index] === " ")) index += 1;
  }

  return attributes;
}

export function absoluteUrl(uri, baseUrl) {
  const trimmed = String(uri || "").trim();
  if (!trimmed) return "";
  try {
    return new URL(trimmed, baseUrl).href;
  } catch {
    return trimmed;
  }
}

function parseResolution(value) {
  if (!value) return null;
  const match = /^(\d+)x(\d+)$/i.exec(String(value).trim());
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
}

/** @returns {{ isMaster:boolean, variants:Array, renditions:Array, text:string }} */
export function parseMasterPlaylist(text, baseUrl) {
  const lines = String(text || "").split(/\r?\n/);
  const variants = [];
  const renditions = [];
  let pendingStreamInfo = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("#EXT-X-STREAM-INF:")) {
      pendingStreamInfo = parseAttributeList(line.slice("#EXT-X-STREAM-INF:".length));
      continue;
    }

    if (line.startsWith("#EXT-X-MEDIA:")) {
      const attrs = parseAttributeList(line.slice("#EXT-X-MEDIA:".length));
      if (attrs.URI) {
        renditions.push({
          type: attrs.TYPE || "AUDIO",
          groupId: attrs["GROUP-ID"] || null,
          name: attrs.NAME || null,
          language: attrs.LANGUAGE || null,
          isDefault: attrs.DEFAULT === "YES",
          uri: absoluteUrl(attrs.URI, baseUrl),
        });
      }
      continue;
    }

    if (line.startsWith("#")) continue;

    if (pendingStreamInfo) {
      const resolution = parseResolution(pendingStreamInfo.RESOLUTION);
      variants.push({
        uri: absoluteUrl(line, baseUrl),
        bandwidth: Number(pendingStreamInfo.BANDWIDTH || 0) || null,
        averageBandwidth: Number(pendingStreamInfo["AVERAGE-BANDWIDTH"] || 0) || null,
        resolution,
        quality: resolution ? `${resolution.height}p` : null,
        codecs: pendingStreamInfo.CODECS || null,
        frameRate: Number(pendingStreamInfo["FRAME-RATE"] || 0) || null,
        name: pendingStreamInfo.NAME || null,
      });
      pendingStreamInfo = null;
    }
  }

  return { isMaster: true, variants, renditions, text: String(text || "") };
}

/** @returns {{ isMaster:boolean, segments:Array, targetDuration:number, totalDuration:number, endList:boolean }} */
export function parseMediaPlaylist(text, baseUrl) {
  const lines = String(text || "").split(/\r?\n/);
  const segments = [];
  let targetDuration = 0;
  let pendingDuration = null;
  let endList = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("#EXT-X-TARGETDURATION:")) {
      targetDuration = Number(line.split(":")[1]) || 0;
      continue;
    }

    if (line.startsWith("#EXTINF:")) {
      pendingDuration = Number.parseFloat(line.slice("#EXTINF:".length).split(",")[0]) || 0;
      continue;
    }

    if (line === "#EXT-X-ENDLIST") {
      endList = true;
      continue;
    }

    if (line.startsWith("#")) continue;

    segments.push({
      uri: absoluteUrl(line, baseUrl),
      duration: pendingDuration ?? 0,
    });
    pendingDuration = null;
  }

  const totalDuration = segments.reduce((sum, segment) => sum + segment.duration, 0);
  return { isMaster: false, segments, targetDuration, totalDuration, endList };
}

/** Detect the playlist flavour and parse accordingly. */
export function parsePlaylist(text, baseUrl) {
  const source = String(text || "");
  if (!source.includes("#EXTM3U")) {
    throw new Error("Not an HLS playlist (missing #EXTM3U)");
  }
  if (source.includes("#EXT-X-STREAM-INF")) {
    return parseMasterPlaylist(source, baseUrl);
  }
  return parseMediaPlaylist(source, baseUrl);
}

/**
 * Pick the highest quality variant that stays within `maxHeight`.
 * Falls back to the smallest variant when every rendition is above the cap.
 */
export function pickBestVariant(variants, { maxHeight } = {}) {
  if (!Array.isArray(variants) || variants.length === 0) return null;

  const scored = variants.map((variant) => ({
    variant,
    height: variant.resolution?.height ?? 0,
    bandwidth: variant.bandwidth ?? 0,
  }));

  const capped = Number.isFinite(maxHeight) && maxHeight > 0;
  const withinCap = capped ? scored.filter((entry) => entry.height > 0 && entry.height <= maxHeight) : scored;

  // Nothing fits under the cap: take the smallest rendition rather than the
  // largest, so a low-bandwidth client still gets something it can play.
  const candidates = withinCap.length > 0 ? withinCap : scored;
  const direction = capped && withinCap.length === 0 ? 1 : -1;

  candidates.sort((a, b) => direction * (a.height - b.height) || direction * (a.bandwidth - b.bandwidth));
  return candidates[0].variant;
}
