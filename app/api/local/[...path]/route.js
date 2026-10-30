import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

import { mediaRoot, resolveWithinRoot } from "@/lib/stream/providers/local-library";
import { parseRange } from "@/lib/stream/range";

export const dynamic = "force-dynamic";

const MIME_TYPES = {
  ".mp4": "video/mp4",
  ".m4v": "video/mp4",
  ".webm": "video/webm",
  ".mkv": "video/x-matroska",
  ".mov": "video/quicktime",
  ".m3u8": "application/vnd.apple.mpegurl",
  ".ts": "video/mp2t",
  ".vtt": "text/vtt",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

/**
 * GET /api/local/<path>
 *
 * Range-aware file serving for MEDIA_ROOT. Only media extensions are exposed,
 * and every path is confined to the media root.
 */
export async function GET(request, { params }) {
  const segments = Array.isArray(params?.path) ? params.path : [params?.path].filter(Boolean);

  let absolute;
  try {
    absolute = resolveWithinRoot(mediaRoot(), segments.join("/"));
  } catch {
    return new Response("Forbidden", { status: 403 });
  }

  let stat;
  try {
    stat = await fs.stat(absolute);
  } catch {
    return new Response("Not found", { status: 404 });
  }
  if (!stat.isFile()) return new Response("Not found", { status: 404 });

  const extension = path.extname(absolute).toLowerCase();
  const contentType = MIME_TYPES[extension];
  if (!contentType) return new Response("Unsupported media type", { status: 415 });

  const size = stat.size;
  const range = parseRange(request.headers.get("range"), size);

  if (range?.invalid) {
    return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
  }

  const baseHeaders = {
    "content-type": contentType,
    "accept-ranges": "bytes",
    "cache-control": "public, max-age=3600",
    "access-control-allow-origin": "*",
  };

  if (!range) {
    const stream = Readable.toWeb(createReadStream(absolute));
    return new Response(stream, {
      status: 200,
      headers: { ...baseHeaders, "content-length": String(size) },
    });
  }

  const { start, end } = range;
  const stream = Readable.toWeb(createReadStream(absolute, { start, end }));
  return new Response(stream, {
    status: 206,
    headers: {
      ...baseHeaders,
      "content-length": String(end - start + 1),
      "content-range": `bytes ${start}-${end}/${size}`,
    },
  });
}
