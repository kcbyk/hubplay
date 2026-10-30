"use client";

import { useState, useEffect, useRef } from "react";
import { NETFLIX_DATA } from "../lib/data";

export default function Navbar({
  currentProfile,
  onSwitchProfile,
  onSignOut,
  myListCount,
  onSearch,
  onShowMyList,
  onShowHome,
  searchQuery,
  setSearchQuery,
}) {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchBoxRef = useRef(null);
  const searchInputRef = useRef(null);

  // Scroll listener for gradual blackness effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      // 0 at top, reaches solid #141414 around 50px-70px scroll
      const progress = Math.min(1, Math.max(0, currentScroll / 60));
      setScrollOpacity(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking outside the search box to close it if empty
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(e.target) &&
        !searchQuery
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

  const toggleSearch = (e) => {
    if (e) e.stopPropagation();
    setIsSearchOpen((prev) => {
      if (!prev) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 60);
        return true;
      }
      return prev;
    });
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    onSearch(val);
  };

  const handleClearSearch = (e) => {
    e.stopPropagation();
    setSearchQuery("");
    onSearch("");
    searchInputRef.current?.focus();
  };

  // If there is an active search, force navbar to be solid #141414 (Netflix behavior)
  const isSolid = scrollOpacity > 0 || !!searchQuery;
  const navBackgroundStyle = isSolid
    ? {
        backgroundColor: "rgba(20, 20, 20, 1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
      }
    : {
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.75) 10%, rgba(0,0,0,0) 100%)",
      };

  return (
    <nav className="netflix-nav" style={navBackgroundStyle}>
      <div className="nav-left">
        <button
          onClick={() => {
            setSearchQuery("");
            setIsSearchOpen(false);
            onShowHome();
          }}
          className="logo-link"
          aria-label="HubPlay Home"
        >
          <div className="hubplay-logo">
            <span className="hub-tag">HUB</span>
            <span className="play-tag">PLAY</span>
            <i className="fa-solid fa-play play-icon-badge"></i>
          </div>
        </button>

        <ul className="nav-links">
          <li className={!searchQuery ? "active" : ""}>
            <button onClick={onShowHome}>Ana Sayfa</button>
          </li>
          <li>
            <button onClick={onShowHome}>Diziler</button>
          </li>
          <li>
            <button onClick={onShowHome}>Filmler</button>
          </li>
          <li>
            <button onClick={onShowHome}>Yeni ve Popüler</button>
          </li>
          <li>
            <button onClick={onShowMyList} className="flex items-center">
              Listem <span className="badge-count">{myListCount}</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        {/* Netflix Authentic Expandable Search Box */}
        <div
          ref={searchBoxRef}
          className={`netflix-search-box ${isSearchOpen || searchQuery ? "open" : ""}`}
        >
          <button
            type="button"
            className="search-icon-btn"
            onClick={toggleSearch}
            aria-label="Arama"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            ref={searchInputRef}
            type="text"
            className="search-text-input"
            placeholder="Başlıklar, kişiler, türler..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchOpen(true)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClearSearch}
              aria-label="Aramayı Temizle"
              title="Temizle"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
