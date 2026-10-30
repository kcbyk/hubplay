"use client";

import { useEffect } from "react";
import { NETFLIX_DATA } from "../lib/data";

export default function DetailModal({
  item,
  onClose,
  isSavedInList,
  onToggleList,
  onOpenModal,
  onPlay,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  // Gather similar titles
  const allTitles = [];
  NETFLIX_DATA.rows.forEach((r) => {
    r.items.forEach((it) => {
      if (it.title !== item.title && !allTitles.some((x) => x.title === it.title)) {
        allTitles.push(it);
      }
    });
  });
  const similarTitles = allTitles.slice(0, 6);

  return (
    <div
      className="detail-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-banner">
          <div className="modal-video-wrapper">
            {item.videoUrl ? (
              <iframe
                src={item.videoUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={item.img} alt={item.title} />
            )}
          </div>
          <div className="modal-banner-gradient"></div>
          <div className="modal-banner-content">
            <h2 className="modal-title">{item.title}</h2>
            <div className="modal-actions">
              <button
                className="btn btn-play"
                onClick={() => {
                  onClose();
                  if (onPlay) onPlay(item);
                }}
              >
                <i className="fa-solid fa-play"></i> Oynat
              </button>
              <button
                className="icon-circle-btn"
                onClick={() => onToggleList(item)}
                title={isSavedInList ? "Listemden Çıkar" : "Listeme Ekle"}
              >
                <i
                  className={`fa-solid ${
                    isSavedInList ? "fa-check" : "fa-plus"
                  }`}
                ></i>
              </button>
              <button className="icon-circle-btn" title="Beğendim">
                <i className="fa-regular fa-thumbs-up"></i>
              </button>
              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-circle-btn"
                  title="Orijinal Hdfilmcehennemi Sayfasını Yeni Sekmede Aç"
                  style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-meta-left">
            <div className="modal-tags">
              <span className="match-score">{item.match || "%98 Eşleşme"}</span>
              <span className="year">{item.year || "2026"}</span>
              <span className="rating-box">{item.rating || "18+"}</span>
              <span className="quality-badge">HD</span>
              <span className="quality-badge">5.1 Ses</span>
            </div>
            <p className="modal-desc">
              {item.desc || "Özet ve detaylar yükleniyor."}
            </p>
          </div>

          <div className="modal-meta-right">
            <div className="info-row">
              <span className="info-label">Oyuncu Kadrosu: </span>
              <span className="info-val">
                {item.cast || "Pedro Alonso, Inma Cuesta, Michelle Jenner"}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Türler: </span>
              <span className="info-val">
                {(item.genres || ["Drama", "Gerilim"]).join(", ")}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Bu Dizi: </span>
              <span className="info-val">Zekice, Sürükleyici, Soluksuz</span>
            </div>
          </div>
        </div>

        <div className="modal-similar-section">
          <h3>Benzer Yapımlar</h3>
          <div className="similar-grid">
            {similarTitles.map((rec) => (
              <div
                key={rec.id}
                className="similar-card"
                onClick={() => onOpenModal(rec)}
              >
                <img src={rec.img} alt={rec.title} />
                <div className="similar-card-info">
                  <div className="similar-card-title">{rec.title}</div>
                  <div className="similar-card-desc">{rec.desc || ""}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
