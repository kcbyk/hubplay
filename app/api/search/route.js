import { NextResponse } from "next/server";

import { getProvider, listProviders } from "@/lib/stream/registry";

export const dynamic = "force-dynamic";

/**
 * GET /api/search?provider=internet-archive&q=metropolis&page=1&limit=24
 *
 * Uniform search across providers so the UI does not care where a title lives.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const providerName = searchParams.get("provider");
  const query = searchParams.get("q") || "";
  const page = Math.max(Number(searchParams.get("page")) || 1, 1);
  const limit = Math.min(Math.max(Number(searchParams.get("limit")) || 24, 1), 100);

  if (!providerName) {
    return NextResponse.json({ error: "BadRequest", message: "provider is required", providers: listProviders() }, { status: 400 });
  }

  const provider = getProvider(providerName);
  if (!provider) {
    return NextResponse.json(
      { error: "UnknownProvider", message: `No provider "${providerName}"`, providers: listProviders() },
      { status: 404 },
    );
  }

  try {
    const items = await provider.search(query, { page, limit });
    return NextResponse.json({
      provider: provider.name,
      label: provider.label,
      query,
      page,
      count: items.length,
      items,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.name || "SearchError", message: error?.message || "Search failed" },
      { status: 502 },
    );
  }
}
