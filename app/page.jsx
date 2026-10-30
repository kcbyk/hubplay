"use client";

import { useState, useEffect } from "react";
import { NETFLIX_DATA } from "../lib/data";
import Navbar from "../components/Navbar";
import ProfileGate from "../components/ProfileGate";
import HeroBillboard from "../components/HeroBillboard";
import MovieRow from "../components/MovieRow";
import MovieCard from "../components/MovieCard";
import DetailModal from "../components/DetailModal";
import VideoPlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";

export default function Home() {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [myList, setMyList] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [playingItem, setPlayingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMyListView, setIsMyListView] = useState(false);
  const [toast, setToast] = useState("");

  // Load My List from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("netflix_next_my_list");
      if (saved) {
        setMyList(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast("");
    }, 2800);
  };

  const handleSelectProfile = (profile) => {
    setCurrentProfile(profile);
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast(`Hoş geldin, ${profile.name}!`);
  };

  const handleToggleList = (item) => {
    setMyList((prev) => {
      const exists = prev.some((m) => m.title === item.title);
      let updated;
      if (exists) {
        updated = prev.filter((m) => m.title !== item.title);
        showToast(`"${item.title}" Listemden kaldırıldı.`);
      } else {
        updated = [...prev, item];
        showToast(`"${item.title}" Listeme eklendi.`);
      }
      localStorage.setItem("netflix_next_my_list", JSON.stringify(updated));
      return updated;
    });
  };

  // If no profile selected, show Profile Gate
  if (!currentProfile) {
    return <ProfileGate onSelectProfile={handleSelectProfile} />;
  }

  // Gather unique catalog titles
  const allTitles = [];
  NETFLIX_DATA.rows.forEach((r) => {
    r.items.forEach((it) => {
      if (!allTitles.some((x) => x.title === it.title)) {
        allTitles.push(it);
      }
    });
  });

  // Filter search results
  const q = searchQuery.trim().toLowerCase();
  const searchResults = q
    ? allTitles.filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          (it.desc && it.desc.toLowerCase().includes(q)) ||
          (it.cast && it.cast.toLowerCase().includes(q)) ||
          (it.genres && it.genres.some((g) => g.toLowerCase().includes(q)))
      )
    : [];

  const exploreTags = ["Drama", "Suç", "Komedi", "Aksiyon", "Gerilim", "Bilim Kurgu"];

  return (
    <div className="browse-app">
      {/* Navbar with smooth scroll blackness and Netflix search */}
      <Navbar
        currentProfile={currentProfile}
        onSwitchProfile={() => setCurrentProfile(null)}
        onSignOut={() => {
          setCurrentProfile(null);
          showToast("Oturum kapatıldı.");
        }}
        myListCount={myList.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={(query) => {
          setSearchQuery(query);
          setIsMyListView(false);
        }}
        onShowMyList={() => {
          setIsMyListView(true);
          setSearchQuery("");
        }}
        onShowHome={() => {
          setIsMyListView(false);
          setSearchQuery("");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Main Content: Hero Billboard is shown ONLY when NOT searching and NOT in My List */}
      {!searchQuery && !isMyListView && (
        <HeroBillboard
          onOpenModal={(item) => setModalItem(item)}
          onPlay={(item) => setPlayingItem(item)}
        />
      )}

      {/* SEARCH RESULTS VIEW (Netflix Style) */}
      {searchQuery ? (
        <div className="search-results-wrapper">
          {/* Related Explore Tags */}
          <div className="search-explore-tags">
            <span className="explore-label">Şununla ilgili aramayı keşfedin:</span>
            {exploreTags.map((tag) => (
              <button
                key={tag}
                className="explore-tag-btn"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {searchResults.length > 0 ? (
            <div className="search-grid">
              {searchResults.map((item) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  onOpenModal={(it) => setModalItem(it)}
                />
              ))}
            </div>
          ) : (
            <div className="search-no-results">
              <h3>Aramanız ("{searchQuery}") ile eşleşen bir sonuç bulunamadı.</h3>
              <ul className="search-suggestions-list">
                <li>Öneriler:</li>
                <li>• Farklı anahtar sözcükler deneyin</li>
                <li>• Bir film veya dizi adına bakın</li>
                <li>• Bir oyuncu, yönetmen veya tür arayın</li>
              </ul>

              <h2 className="row-title" style={{ marginTop: "40px" }}>
                Şunları da beğenebilirsiniz:
              </h2>
              <div className="search-grid" style={{ marginTop: "16px" }}>
                {allTitles.slice(0, 6).map((item) => (
                  <MovieCard
                    key={item.id}
                    item={item}
                    onOpenModal={(it) => setModalItem(it)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : isMyListView ? (
        /* MY LIST VIEW */
        <div className="search-results-wrapper">
          <h2 className="row-title" style={{ marginBottom: "1.5rem" }}>
            Listem ({myList.length})
          </h2>
          {myList.length === 0 ? (
            <p style={{ color: "#888", padding: "40px 0" }}>
              Henüz listenize dizi veya film eklemediniz. Beğendiğiniz yapımları "+" simgesine tıklayarak listenize ekleyebilirsiniz.
            </p>
          ) : (
            <div className="search-grid">
              {myList.map((item) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  onOpenModal={(it) => setModalItem(it)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* STANDARD BROWSE ROWS */
        <main className="catalog-content">
          {NETFLIX_DATA.rows.map((row) => (
            <MovieRow
              key={row.id}
              row={row}
              currentProfile={currentProfile}
              onOpenModal={(item) => setModalItem(item)}
            />
          ))}
        </main>
      )}

      <Footer />

      {/* Detail Modal */}
      {modalItem && (
        <DetailModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          isSavedInList={myList.some((m) => m.title === modalItem.title)}
          onToggleList={handleToggleList}
          onOpenModal={(it) => setModalItem(it)}
          onPlay={(it) => {
            setModalItem(null);
            setPlayingItem(it);
          }}
        />
      )}

      {/* Authentic Netflix Video Player */}
      {playingItem && (
        <VideoPlayer
          item={playingItem}
          onClose={() => setPlayingItem(null)}
        />
      )}

      {/* Toast Notification */}
      {toast && <div className="toast-message">{toast}</div>}
    </div>
  );
}
