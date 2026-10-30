"use client";

import { useState } from "react";
import { NETFLIX_DATA } from "../lib/data";

export default function HeroBillboard({ onOpenModal, onPlay }) {
  const [isMuted, setIsMuted] = useState(true);
  const hero = NETFLIX_DATA.hero;

  const heroItem = {
    id: "hero-berlin",
    title: hero.title,
    img: hero.bgImage,
    desc: hero.synopsis,
    match: hero.match,
    rating: hero.rating,
    year: hero.year,
    cast: hero.cast,
    genres: [hero.genre],
    videoUrl: hero.trailerUrl,
  };

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay(heroItem);
    } else {
      onOpenModal(heroItem);
    }
  };

  const handleInfoClick = () => {
    onOpenModal(heroItem);
  };

  return (
    <header className="hero-billboard">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${hero.bgImage}')` }}
      >
        <div className="hero-vignette"></div>
        <div className="hero-bottom-gradient"></div>
      </div>

      <div className="hero-info">
        <div className="hero-title-container">
          {hero.titleLogo ? (
            <img
              src={hero.titleLogo}
              alt={hero.title}
              className="hero-title-logo"
            />
          ) : (
            <h1 className="hero-title-text">{hero.title}</h1>
          )}
        </div>

        <div className="hero-meta">
          <span className="hero-type">{hero.type}</span>
          <span className="meta-dot">•</span>
          <span className="hero-genre">{hero.genre}</span>
          <span className="meta-dot">•</span>
          <span className="hero-year">{hero.year}</span>
          <span className="meta-dot">•</span>
          <span className="hero-badge">{hero.rating}</span>
        </div>

        <p className="hero-synopsis">{hero.synopsis}</p>

        <div className="hero-buttons">
          <button className="btn btn-play" onClick={handlePlayClick}>
            <i className="fa-solid fa-play"></i> Oynat
          </button>
          <button className="btn btn-more-info" onClick={handleInfoClick}>
            <i className="fa-solid fa-circle-info"></i> Daha Fazla Bilgi
          </button>
        </div>
      </div>

      <div className="hero-right-controls">
        <button
          className="audio-toggle-btn"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label="Sesi aç/kapat"
        >
          <i
            className={`fa-solid ${
              isMuted ? "fa-volume-xmark" : "fa-volume-high"
            }`}
          ></i>
        </button>
        <div className="age-badge-container">
          <span className="age-box">{hero.rating}</span>
        </div>
      </div>
    </header>
  );
}
