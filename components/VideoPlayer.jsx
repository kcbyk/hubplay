"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoPlayer({ item, onClose, onNextEpisode }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const scrubberTrackRef = useRef(null);
  const hideControlsTimeout = useRef(null);

  // Player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bufferedEnd, setBufferedEnd] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Menus
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showAudioSubtitlesMenu, setShowAudioSubtitlesMenu] = useState(false);
  const [showEpisodesMenu, setShowEpisodesMenu] = useState(false);

  // Audio & Subtitles state
  const [selectedAudio, setSelectedAudio] = useState("Türkçe [Orijinal]");
  const [selectedSubtitle, setSelectedSubtitle] = useState("Kapalı");

  // Hover Scrubber state
  const [hoverPosition, setHoverPosition] = useState(null); // { percent, time, clientX }
  const [isDragging, setIsDragging] = useState(false);

  // Center animation ripple (play/pause/seek)
  const [centerRipple, setCenterRipple] = useState(null); // 'play' | 'pause' | 'rewind' | 'forward'

  // Video source fallback
  const videoSrc =
    item?.videoSource ||
    (item?.title?.toLowerCase().includes("organize")
      ? "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      : item?.title?.toLowerCase().includes("lupin")
      ? "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4");

  // Format time (e.g. 12:34 or 1:23:45)
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) {
      return `${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
    }
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Format remaining time (Netflix style: -45:12)
  const formatRemaining = (cur, dur) => {
    if (isNaN(dur) || dur <= 0) return "00:00";
    const rem = Math.max(0, dur - cur);
    return `-${formatTime(rem)}`;
  };

  // Trigger center feedback ripple icon
  const triggerRipple = (type) => {
    setCenterRipple(type);
    setTimeout(() => {
      setCenterRipple(null);
    }, 600);
  };

  // Autohide controls logic
  const resetHideTimer = () => {
    setIsControlsVisible(true);
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    if (isPlaying && !showSpeedMenu && !showAudioSubtitlesMenu && !showEpisodesMenu) {
      hideControlsTimeout.current = setTimeout(() => {
        setIsControlsVisible(false);
      }, 3500);
    }
  };

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    };
  }, [isPlaying, showSpeedMenu, showAudioSubtitlesMenu, showEpisodesMenu]);

  // Handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          triggerRipple("play");
        })
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      triggerRipple("pause");
      setIsControlsVisible(true);
    }
  };

  // Seek relative seconds (e.g. -10s, +10s)
  const seekRelative = (sec) => {
    if (!videoRef.current) return;
    const newTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + sec));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    triggerRipple(sec < 0 ? "rewind" : "forward");
    resetHideTimer();
  };

  // Handle Volume change
  const handleVolumeChange = (newVol) => {
    if (!videoRef.current) return;
    const clamped = Math.max(0, Math.min(1, newVol));
    videoRef.current.volume = clamped;
    setVolume(clamped);
    if (clamped === 0) {
      setIsMuted(true);
      videoRef.current.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
    }
    resetHideTimer();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
      if (volume === 0) {
        setVolume(0.5);
        videoRef.current.volume = 0.5;
      }
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
    resetHideTimer();
  };

  // Playback speed
  const changeSpeed = (speed) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
    resetHideTimer();
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Scrubber drag / click calculation
  const calculateScrubTime = (e) => {
    if (!scrubberTrackRef.current || !duration) return 0;
    const rect = scrubberTrackRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const percent = offsetX / rect.width;
    return percent * duration;
  };

  const handleScrubberMouseDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    const targetTime = calculateScrubTime(e);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleScrubberMouseMove = (e) => {
    if (!scrubberTrackRef.current || !duration) return;
    const rect = scrubberTrackRef.current.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const percent = (offsetX / rect.width) * 100;
    const time = (offsetX / rect.width) * duration;
    setHoverPosition({ percent, time, clientX: e.clientX });

    if (isDragging && videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleScrubberMouseLeave = () => {
    setHoverPosition(null);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      resetHideTimer();
      switch (e.key) {
        case "Escape":
          if (showSpeedMenu || showAudioSubtitlesMenu || showEpisodesMenu) {
            setShowSpeedMenu(false);
            setShowAudioSubtitlesMenu(false);
            setShowEpisodesMenu(false);
          } else {
            onClose();
          }
          break;
        case " ":
        case "k":
        case "K":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          seekRelative(-10);
          break;
        case "ArrowRight":
          e.preventDefault();
          seekRelative(10);
          break;
        case "ArrowUp":
          e.preventDefault();
          handleVolumeChange(volume + 0.1);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleVolumeChange(volume - 0.1);
          break;
        case "m":
        case "M":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    volume,
    isMuted,
    isPlaying,
    duration,
    showSpeedMenu,
    showAudioSubtitlesMenu,
    showEpisodesMenu,
  ]);

  // Video event handlers
  const handleTimeUpdate = () => {
    if (!videoRef.current || isDragging) return;
    setCurrentTime(videoRef.current.currentTime);

    // Buffer tracking
    if (videoRef.current.buffered.length > 0) {
      const end = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      setBufferedEnd(end);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Autoplay policy fallback: mute and play
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      });
  };

  const handleWaiting = () => setIsBuffering(true);
  const handlePlaying = () => {
    setIsBuffering(false);
    setIsPlaying(true);
  };

  const playedPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferedPercent = duration > 0 ? (bufferedEnd / duration) * 100 : 0;

  const episodeList = [
    { num: 1, title: "1. Bölüm: Enerji Çölü", duration: "48 dk", desc: "Berlin ve ekibi, Paris'te paha biçilmez mücevherlerin peşine düşer." },
    { num: 2, title: "2. Bölüm: Aşk ve Çapa", duration: "53 dk", desc: "Aşk her şeyi karmaşıklaştırırken planlanan soygun bir dönüm noktasına ulaşır." },
    { num: 3, title: "3. Bölüm: Sahte Çember", duration: "44 dk", desc: "Polisin dikkati başka yere çekilirken ekip kritik hamleyi yapar." },
    { num: 4, title: "4. Bölüm: Geceyarısı Paris", duration: "50 dk", desc: "Sırların açığa çıkmasıyla Berlin'in liderliği sınanır." },
  ];

  // Check if item has an embed stream or trailer
  const isEmbedMode = Boolean(item?.embedUrl || item?.trailerUrl);
  const embedSourceUrl = item?.embedUrl || item?.trailerUrl;

  return (
    <div
      ref={containerRef}
      className={`netflix-video-player-container ${
        isControlsVisible ? "controls-visible" : "controls-hidden"
      }`}
      onMouseMove={resetHideTimer}
      onClick={() => {
        if (showSpeedMenu) setShowSpeedMenu(false);
        if (showAudioSubtitlesMenu) setShowAudioSubtitlesMenu(false);
        if (showEpisodesMenu) setShowEpisodesMenu(false);
      }}
    >
      {/* Either Embed (YouTube / Stream) OR Native HTML5 Video Element */}
      {isEmbedMode ? (
        <iframe
          src={embedSourceUrl}
          className="netflix-video-element"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "none", width: "100%", height: "100%", zIndex: 1 }}
        />
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          className="netflix-video-element"
          autoPlay
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onEnded={() => setIsPlaying(false)}
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        />
      )}

      {/* Buffering Spinner */}
      {!isEmbedMode && isBuffering && (
        <div className="player-buffering-overlay">
          <div className="netflix-spinner"></div>
        </div>
      )}

      {/* Center Animation Ripple for Play/Pause/Rewind/Forward */}
      {!isEmbedMode && centerRipple && (
        <div className="center-ripple-indicator">
          {centerRipple === "play" && <i className="fa-solid fa-play"></i>}
          {centerRipple === "pause" && <i className="fa-solid fa-pause"></i>}
          {centerRipple === "rewind" && (
            <div className="ripple-skip">
              <i className="fa-solid fa-rotate-left"></i>
              <span>10</span>
            </div>
          )}
          {centerRipple === "forward" && (
            <div className="ripple-skip">
              <i className="fa-solid fa-rotate-right"></i>
              <span>10</span>
            </div>
          )}
        </div>
      )}

      {/* TOP CONTROLS BAR */}
      <div className="player-top-bar" onClick={(e) => e.stopPropagation()}>
        <div className="player-top-left">
          <button
            className="player-back-btn"
            onClick={onClose}
            aria-label="Geri Dön"
            title="Geri Dön (Esc)"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="player-title-box">
            <h1 className="player-main-title">{item?.title || "BERLIN"}</h1>
            <span className="player-sub-title">1. Sezon 1. Bölüm</span>
          </div>
        </div>

        <div className="player-top-right">
          <span className="player-age-pill">{item?.rating || "18+"}</span>
          <button className="player-icon-btn" title="Sorun Bildir">
            <i className="fa-regular fa-flag"></i>
          </button>
        </div>
      </div>

      {/* BOTTOM CONTROLS BAR (Only in native video mode) */}
      {!isEmbedMode && (
        <div className="player-bottom-bar" onClick={(e) => e.stopPropagation()}>
        {/* Timeline Scrubber */}
        <div
          ref={scrubberTrackRef}
          className="player-scrubber-container"
          onMouseDown={handleScrubberMouseDown}
          onMouseMove={handleScrubberMouseMove}
          onMouseLeave={handleScrubberMouseLeave}
        >
          {/* Hover timestamp tooltip */}
          {hoverPosition && (
            <div
              className="scrubber-hover-tooltip"
              style={{ left: `${hoverPosition.percent}%` }}
            >
              {formatTime(hoverPosition.time)}
            </div>
          )}

          <div className="scrubber-track">
            {/* Buffered track */}
            <div
              className="scrubber-buffered"
              style={{ width: `${bufferedPercent}%` }}
            ></div>
            {/* Played track */}
            <div
              className="scrubber-played"
              style={{ width: `${playedPercent}%` }}
            >
              <div className="scrubber-thumb"></div>
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="player-controls-row">
          {/* Left Buttons: Play, -10s, +10s, Volume, Remaining Time */}
          <div className="controls-group-left">
            {/* Play / Pause */}
            <button
              className="player-control-btn play-pause-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Duraklat" : "Oynat"}
              title={isPlaying ? "Duraklat (Boşluk)" : "Oynat (Boşluk)"}
            >
              <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
            </button>

            {/* Rewind 10s */}
            <button
              className="player-control-btn seek-btn"
              onClick={() => seekRelative(-10)}
              aria-label="10 saniye geri sar"
              title="10 saniye geri sar (Sol Ok)"
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span className="seek-text">10</span>
            </button>

            {/* Forward 10s */}
            <button
              className="player-control-btn seek-btn"
              onClick={() => seekRelative(10)}
              aria-label="10 saniye ileri sar"
              title="10 saniye ileri sar (Sağ Ok)"
            >
              <i className="fa-solid fa-rotate-right"></i>
              <span className="seek-text">10</span>
            </button>

            {/* Volume Control with hover slider */}
            <div className="player-volume-wrapper">
              <button
                className="player-control-btn volume-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                title={isMuted ? "Sesi Aç (M)" : "Sesi Kapat (M)"}
              >
                <i
                  className={`fa-solid ${
                    isMuted || volume === 0
                      ? "fa-volume-xmark"
                      : volume < 0.5
                      ? "fa-volume-low"
                      : "fa-volume-high"
                  }`}
                ></i>
              </button>
              <div className="volume-slider-box">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="netflix-volume-slider"
                  aria-label="Ses Düzeyi"
                />
              </div>
            </div>

            {/* Time Indicator */}
            <div className="player-time-indicator">
              <span className="time-remaining">
                {formatRemaining(currentTime, duration)}
              </span>
            </div>
          </div>

          {/* Right Buttons: Next Episode, Episodes, Audio/Subtitles, Speed, Fullscreen */}
          <div className="controls-group-right">
            {/* Next Episode */}
            <button
              className="player-control-btn"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.play();
                }
              }}
              title="Sonraki Bölüm"
              aria-label="Sonraki Bölüm"
            >
              <i className="fa-solid fa-forward-step"></i>
            </button>

            {/* Episodes Menu Toggle */}
            <div className="player-menu-wrapper">
              <button
                className={`player-control-btn ${showEpisodesMenu ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEpisodesMenu((prev) => !prev);
                  setShowAudioSubtitlesMenu(false);
                  setShowSpeedMenu(false);
                }}
                title="Bölümler"
                aria-label="Bölümler"
              >
                <i className="fa-solid fa-rectangle-list"></i>
              </button>

              {showEpisodesMenu && (
                <div className="player-popup-menu episodes-popup" onClick={(e) => e.stopPropagation()}>
                  <div className="popup-header">Bölümler • 1. Sezon</div>
                  <div className="episodes-list-scroll">
                    {episodeList.map((ep) => (
                      <div
                        key={ep.num}
                        className={`episode-item ${ep.num === 1 ? "current" : ""}`}
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                          }
                          setShowEpisodesMenu(false);
                        }}
                      >
                        <div className="ep-num">{ep.num}</div>
                        <div className="ep-info">
                          <div className="ep-title-row">
                            <span className="ep-title">{ep.title}</span>
                            <span className="ep-dur">{ep.duration}</span>
                          </div>
                          <p className="ep-desc">{ep.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Audio & Subtitles Menu Toggle */}
            <div className="player-menu-wrapper">
              <button
                className={`player-control-btn ${showAudioSubtitlesMenu ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAudioSubtitlesMenu((prev) => !prev);
                  setShowEpisodesMenu(false);
                  setShowSpeedMenu(false);
                }}
                title="Ses ve Altyazı"
                aria-label="Ses ve Altyazı"
              >
                <i className="fa-regular fa-message"></i>
              </button>

              {showAudioSubtitlesMenu && (
                <div className="player-popup-menu audio-subs-popup" onClick={(e) => e.stopPropagation()}>
                  <div className="audio-subs-columns">
                    {/* Audio Column */}
                    <div className="subs-col">
                      <div className="popup-header">Ses</div>
                      <div
                        className={`sub-option ${selectedAudio === "Türkçe [Orijinal]" ? "selected" : ""}`}
                        onClick={() => setSelectedAudio("Türkçe [Orijinal]")}
                      >
                        {selectedAudio === "Türkçe [Orijinal]" && <i className="fa-solid fa-check"></i>}
                        <span>Türkçe [Orijinal]</span>
                      </div>
                      <div
                        className={`sub-option ${selectedAudio === "İngilizce" ? "selected" : ""}`}
                        onClick={() => setSelectedAudio("İngilizce")}
                      >
                        {selectedAudio === "İngilizce" && <i className="fa-solid fa-check"></i>}
                        <span>İngilizce</span>
                      </div>
                      <div
                        className={`sub-option ${selectedAudio === "İspanyolca" ? "selected" : ""}`}
                        onClick={() => setSelectedAudio("İspanyolca")}
                      >
                        {selectedAudio === "İspanyolca" && <i className="fa-solid fa-check"></i>}
                        <span>İspanyolca</span>
                      </div>
                    </div>

                    {/* Subtitles Column */}
                    <div className="subs-col">
                      <div className="popup-header">Altyazı</div>
                      <div
                        className={`sub-option ${selectedSubtitle === "Kapalı" ? "selected" : ""}`}
                        onClick={() => setSelectedSubtitle("Kapalı")}
                      >
                        {selectedSubtitle === "Kapalı" && <i className="fa-solid fa-check"></i>}
                        <span>Kapalı</span>
                      </div>
                      <div
                        className={`sub-option ${selectedSubtitle === "Türkçe" ? "selected" : ""}`}
                        onClick={() => setSelectedSubtitle("Türkçe")}
                      >
                        {selectedSubtitle === "Türkçe" && <i className="fa-solid fa-check"></i>}
                        <span>Türkçe</span>
                      </div>
                      <div
                        className={`sub-option ${selectedSubtitle === "İngilizce [CC]" ? "selected" : ""}`}
                        onClick={() => setSelectedSubtitle("İngilizce [CC]")}
                      >
                        {selectedSubtitle === "İngilizce [CC]" && <i className="fa-solid fa-check"></i>}
                        <span>İngilizce [CC]</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Playback Speed Menu Toggle */}
            <div className="player-menu-wrapper">
              <button
                className={`player-control-btn speed-btn ${showSpeedMenu ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSpeedMenu((prev) => !prev);
                  setShowAudioSubtitlesMenu(false);
                  setShowEpisodesMenu(false);
                }}
                title="Oynatma Hızı"
                aria-label="Oynatma Hızı"
              >
                <i className="fa-solid fa-gauge-high"></i>
              </button>

              {showSpeedMenu && (
                <div className="player-popup-menu speed-popup" onClick={(e) => e.stopPropagation()}>
                  <div className="popup-header">Oynatma Hızı</div>
                  {[0.5, 0.75, 1, 1.25, 1.5].map((spd) => (
                    <div
                      key={spd}
                      className={`speed-option ${playbackSpeed === spd ? "selected" : ""}`}
                      onClick={() => changeSpeed(spd)}
                    >
                      {playbackSpeed === spd && <i className="fa-solid fa-check"></i>}
                      <span>{spd === 1 ? "1.0x (Normal)" : `${spd}x`}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fullscreen Button */}
            <button
              className="player-control-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran"}
              title={isFullscreen ? "Tam Ekrandan Çık (F)" : "Tam Ekran (F)"}
            >
              <i
                className={`fa-solid ${
                  isFullscreen ? "fa-compress" : "fa-expand"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
