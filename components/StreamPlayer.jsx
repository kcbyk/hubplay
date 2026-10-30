"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Plays the playback contract returned by /api/stream/resolve.
 * - `hls`  -> native HLS where supported, hls.js otherwise
 * - `mp4`  -> <video src>
 * - `embed`-> sandboxed iframe (used for unknown hosts / trailers)
 */
export default function StreamPlayer({ payload, autoPlay = true }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  const source = payload?.sources?.[activeIndex];
  const isEmbed = source?.type === "embed";
  const isHls = source?.type === "hls";

  useEffect(() => {
    setError(null);
    const video = videoRef.current;
    if (!video || !source || isEmbed) return undefined;

    // Safari and most TVs handle HLS natively.
    const nativeHls = video.canPlayType("application/vnd.apple.mpegurl") !== "";

    if (isHls && !nativeHls) {
      let cancelled = false;

      import("hls.js")
        .then(({ default: Hls }) => {
          if (cancelled || !Hls.isSupported()) {
            if (!cancelled) setError("Bu tarayıcı HLS oynatmayı desteklemiyor.");
            return;
          }
          const hls = new Hls({ enableWorker: true });
          hls.loadSource(source.file);
          hls.attachMedia(video);
          hls.on(Hls.Events.ERROR, (_event, data) => {
            if (data?.fatal) setError(`Akış hatası: ${data.details || data.type}`);
          });
          hlsRef.current = hls;
        })
        .catch(() => setError("hls.js yüklenemedi (npm install hls.js)."));

      return () => {
        cancelled = true;
        hlsRef.current?.destroy();
        hlsRef.current = null;
      };
    }

    video.src = source.file;
    return () => {
      video.removeAttribute("src");
      video.load();
    };
  }, [source, isEmbed, isHls]);

  if (!payload) return null;

  return (
    <div className="hp-stream-shell">
      <div className="hp-stream-stage">
        {isEmbed ? (
          <iframe
            key={source.file}
            src={source.file}
            title={payload.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allowFullScreen
          />
        ) : (
          <video
            key={source?.file}
            ref={videoRef}
            controls
            autoPlay={autoPlay}
            playsInline
            preload="metadata"
            poster={payload.poster || undefined}
          />
        )}
        {error && <p className="hp-stream-error">{error}</p>}
      </div>

      <div className="hp-stream-meta">
        <h1>{payload.title}</h1>
        {payload.meta?.year && <span>{payload.meta.year}</span>}
        {payload.meta?.imdb && <span>IMDb {payload.meta.imdb}</span>}
        <span className="hp-badge">{source?.type?.toUpperCase()}</span>
      </div>

      {payload.sources.length > 1 && (
        <div className="hp-stream-sources">
          {payload.sources.map((item, index) => (
            <button
              key={`${item.file}-${index}`}
              type="button"
              className={index === activeIndex ? "is-active" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              {item.server}
              {item.quality ? ` · ${item.quality}` : ""}
              <em>{item.type}</em>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
