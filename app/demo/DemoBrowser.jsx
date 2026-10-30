"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 24;

export default function DemoBrowser({ providers }) {
  const [provider, setProvider] = useState(providers[0]?.name || "");
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rawUrl, setRawUrl] = useState("");
  const [rawResult, setRawResult] = useState(null);
  const [rawError, setRawError] = useState(null);

  const load = useCallback(async (nextProvider, nextQuery) => {
    if (!nextProvider) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/search?provider=${encodeURIComponent(nextProvider)}&q=${encodeURIComponent(nextQuery)}&limit=${PAGE_SIZE}`,
        { cache: "no-store" },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || `HTTP ${response.status}`);
      setItems(data.items || []);
    } catch (err) {
      setError(err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(provider, "");
  }, [provider, load]);

  const activeProvider = useMemo(
    () => providers.find((item) => item.name === provider),
    [providers, provider],
  );

  const onResolveUrl = async (event) => {
    event.preventDefault();
    setRawError(null);
    setRawResult(null);
    try {
      const response = await fetch(`/api/stream/resolve?url=${encodeURIComponent(rawUrl.trim())}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || `HTTP ${response.status}`);
      setRawResult(data);
    } catch (err) {
      setRawError(err.message);
    }
  };

  return (
    <main className="hp-stream-page">
      <header className="hp-stream-header">
        <div>
          <p className="hp-eyebrow">HubPlay · Stream Layer</p>
          <h1>Resolver demo</h1>
          <p className="hp-lede">
            Sağlayıcıdan medya seçin, <code>/api/stream/resolve</code> uç noktası
            {" "}
            <code>{`{ title, poster, is_trailer, sources }`}</code> sözleşmesini döndürür ve
            oynatıcı bu sözleşmeyi tüketir.
          </p>
        </div>
        <Link className="hp-ghost-button" href="/">
          ← HubPlay
        </Link>
      </header>

      <section className="hp-panel">
        <div className="hp-toolbar">
          <label>
            <span>Sağlayıcı</span>
            <select value={provider} onChange={(event) => setProvider(event.target.value)}>
              {providers.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <form
            className="hp-search"
            onSubmit={(event) => {
              event.preventDefault();
              load(provider, query);
            }}
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Başlık ara…"
              aria-label="Başlık ara"
            />
            <button type="submit">Ara</button>
          </form>
        </div>

        {activeProvider?.name === "internet-archive" && (
          <p className="hp-note">
            Internet Archive genel API&apos;si bu ortamdan erişilemiyorsa arama boş döner; kod
            üretimde doğrudan <code>archive.org</code> ile konuşur.
          </p>
        )}

        {loading && <p className="hp-note">Yükleniyor…</p>}
        {error && <p className="hp-error">{error}</p>}

        {!loading && !error && items.length === 0 && (
          <p className="hp-note">
            Sonuç yok. Yerel sağlayıcı için <code>MEDIA_ROOT</code> klasörüne medya ekleyin.
          </p>
        )}

        <ul className="hp-grid">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/watch/${encodeURIComponent(item.id)}?provider=${provider}`}>
                <div className="hp-thumb">
                  {item.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.poster} alt={item.title} loading="lazy" />
                  ) : (
                    <span className="hp-thumb-fallback">{item.title.slice(0, 1)}</span>
                  )}
                </div>
                <h2>{item.title}</h2>
                <p>
                  {[item.year, item.imdb ? `IMDb ${item.imdb}` : null].filter(Boolean).join(" · ") ||
                    "—"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="hp-panel">
        <h2 className="hp-panel-title">Doğrudan URL çözümle</h2>
        <p className="hp-note">
          Yalnızca erişim yetkiniz olan kaynaklar için. HLS master playlist&apos;leri bir
          seviye açılır ve en iyi varyant seçilir.
        </p>
        <form className="hp-search hp-search-wide" onSubmit={onResolveUrl}>
          <input
            value={rawUrl}
            onChange={(event) => setRawUrl(event.target.value)}
            placeholder="https://ornek.com/film/master.m3u8"
            aria-label="Medya URL'si"
            type="url"
            required
          />
          <button type="submit">Çözümle</button>
        </form>

        {rawError && <p className="hp-error">{rawError}</p>}
        {rawResult && (
          <>
            <div className="hp-actions">
              <Link className="hp-button" href={`/watch/${encodeURIComponent(rawResult.sources[0].file)}?provider=url`}>
                Oynat
              </Link>
            </div>
            <pre className="hp-json">{JSON.stringify(rawResult, null, 2)}</pre>
          </>
        )}
      </section>
    </main>
  );
}
