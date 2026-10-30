"use client";

import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ row, currentProfile, onOpenModal }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  let titleText = row.title;
  if (row.type === "continue" && currentProfile) {
    titleText = `${currentProfile.name}, İzlemeye Devam Et`;
  }

  return (
    <section className="row-section">
      <h2 className="row-title">
        <span>{titleText}</span>
        <span className="see-all-arrow">
          Hepsini İncele <i className="fa-solid fa-chevron-right"></i>
        </span>
      </h2>

      <div className="slider-wrapper">
        <button
          className="slider-arrow left"
          onClick={scrollLeft}
          aria-label="Geri"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="cards-slider" ref={sliderRef}>
          {row.type === "top10"
            ? row.items.map((item) => (
                <div
                  key={item.id}
                  className="top10-card-wrapper"
                  onClick={() => onOpenModal(item)}
                >
                  <svg className="top10-rank-svg" viewBox="0 0 100 150">
                    <text
                      x="50%"
                      y="75%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="140"
                      fontWeight="900"
                    >
                      {item.rank}
                    </text>
                  </svg>
                  <div className="top10-poster">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                </div>
              ))
            : row.items.map((item) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  isContinue={row.type === "continue"}
                  onOpenModal={onOpenModal}
                />
              ))}
        </div>

        <button
          className="slider-arrow right"
          onClick={scrollRight}
          aria-label="İleri"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
