import { NextResponse } from "next/server";

import { getProvider, listProviders } from "@/lib/stream/registry";
import { ResolveError, resolveFromProvider, resolveStreams } from "@/lib/stream/resolver";
import { detectStreamType, isTrailerUrl } from "@/lib/stream/classify";

export const dynamic = "force-dynamic";

function errorResponse(error) {
  const status = error instanceof ResolveError ? 422 : 502;
  return NextResponse.json(
    {
      error: error?.name || "ResolveError",
      message: error?.message || "Stream could not be resolved",
      ...(error?.details ? { details: error.details } : {}),
    },
    { status },
  );
}

function parseUrlParam(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

/**
 * GET /api/stream/resolve?provider=internet-archive&id=night_of_the_living_dead
 * GET /api/stream/resolve?url=https://example.com/master.m3u8
 *
 * Returns the playback contract:
 * { title, poster, is_trailer, sources: [{ server, file, type }] }
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const providerName = searchParams.get("provider");
  const id = searchParams.get("id");
  const url = searchParams.get("url");
  const includeTrailers = searchParams.get("trailers") === "1";
  const maxHeight = Number(searchParams.get("maxHeight")) || undefined;

  try {
    if (url) {
      const parsed = parseUrlParam(url);
      if (!parsed || !/^https?:$/.test(parsed.protocol)) {
        return NextResponse.json({ error: "BadRequest", message: "url must be http(s)" }, { status: 400 });
      }

      const type = detectStreamType(url);
      return NextResponse.json(
        await resolveStreams({
          media: {
            title: parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname,
            poster: null,
            sources: [{ server: parsed.hostname.replace(/^www\./, ""), url, isTrailer: isTrailerUrl(url) }],
          },
          includeTrailers,
          maxHeight,
        }),
      );
    }

    if (!providerName || !id) {
      return NextResponse.json(
        {
          error: "BadRequest",
          message: "Pass ?provider=&id= or ?url=",
          providers: listProviders(),
        },
        { status: 400 },
      );
    }

    const provider = getProvider(providerName);
    if (!provider) {
      return NextResponse.json(
        { error: "UnknownProvider", message: `No provider "${providerName}"`, providers: listProviders() },
        { status: 404 },
      );
    }

    const payload = await resolveFromProvider(provider, id, { includeTrailers, maxHeight });
    return NextResponse.json(payload);
  } catch (error) {
    return errorResponse(error);
  }
}
