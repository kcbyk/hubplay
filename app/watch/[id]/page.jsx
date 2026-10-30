import Link from "next/link";

import "../../stream.css";

import StreamPlayer from "@/components/StreamPlayer";
import { getProvider } from "@/lib/stream/registry";
import { resolveFromProvider, ResolveError } from "@/lib/stream/resolver";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "HubPlay · İzle",
};

async function resolvePayload(id, providerName, searchParams) {
  const maxHeight = Number(searchParams?.maxHeight) || undefined;
  const includeTrailers = searchParams?.trailers === "1";

  if (providerName === "url") {
    const { resolveStreams } = await import("@/lib/stream/resolver");
    const target = decodeURIComponent(id);
    return resolveStreams({
      media: { title: target.split("/").pop() || target, poster: null, sources: [{ server: "URL", url: target }] },
      maxHeight,
      includeTrailers,
    });
  }

  const provider = getProvider(providerName);
  if (!provider) throw new ResolveError(`Bilinmeyen sağlayıcı: ${providerName}`);

  return resolveFromProvider(provider, id, { maxHeight, includeTrailers });
}

export default async function WatchPage({ params, searchParams }) {
  const providerName = searchParams?.provider || "local";
  const id = decodeURIComponent(params?.id || "");

  let payload;
  let failure;
  try {
    payload = await resolvePayload(id, providerName, searchParams);
  } catch (error) {
    failure = error;
  }

  if (failure) {
    return (
      <main className="hp-stream-page">
        <Link className="hp-ghost-button" href="/demo">
          ← Demo
        </Link>
        <div className="hp-panel hp-panel-narrow">
          <h1>Akış çözümlenemedi</h1>
          <p className="hp-error">{failure.message}</p>
          <p className="hp-note">
            Sağlayıcı: <code>{providerName}</code> · Kayıt: <code>{id}</code>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="hp-stream-page">
      <Link className="hp-ghost-button" href="/demo">
        ← Demo
      </Link>
      <StreamPlayer payload={payload} />
      <section className="hp-panel">
        <h2 className="hp-panel-title">API yanıtı</h2>
        <pre className="hp-json">{JSON.stringify(payload, null, 2)}</pre>
      </section>
    </main>
  );
}
