"use client";

export default function MovieCard({ item, isContinue, onOpenModal }) {
  return (
    <div className="movie-card" onClick={() => onOpenModal(item)}>
      <img src={item.img} alt={item.title} loading="lazy" />
      <div className="card-title-fallback">{item.title}</div>
      {isContinue && item.progress && (
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${item.progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
