/**
 * NETFLIX CLONE CONTROLLER
 * Full client-side interactive logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentProfile = null;
  let myList = JSON.parse(localStorage.getItem("netflix_my_list") || "[]");
  let isAudioMuted = true;

  // DOM Elements
  const profileGate = document.getElementById("profile-gate");
  const browseApp = document.getElementById("browse-app");
  const profileListContainer = document.getElementById("profile-list-container");
  const mainNav = document.getElementById("main-nav");
  const headerAvatar = document.getElementById("header-avatar");
  const activeProfileTrigger = document.getElementById("active-profile-trigger");
  const profileDropdownMenu = document.getElementById("profile-dropdown-menu");
  const dropdownOtherProfiles = document.getElementById("dropdown-other-profiles");
  const btnSwitchProfile = document.getElementById("btn-switch-profile");
  const btnSignout = document.getElementById("btn-signout");
  const bellBtn = document.getElementById("bell-btn");
  const notificationsMenu = document.getElementById("notifications-menu");
  const searchToggle = document.getElementById("search-toggle");
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");
  const navMyList = document.getElementById("nav-my-list");
  const myListCount = document.getElementById("my-list-count");
  const searchResultsSection = document.getElementById("search-results-section");
  const searchGridContainer = document.getElementById("search-grid-container");
  const catalogRowsContainer = document.getElementById("catalog-rows-container");

  // Hero Elements
  const heroBg = document.getElementById("hero-bg");
  const heroTitleLogo = document.getElementById("hero-title-logo");
  const heroTitleText = document.getElementById("hero-title-text");
  const heroType = document.getElementById("hero-type");
  const heroGenre = document.getElementById("hero-genre");
  const heroYear = document.getElementById("hero-year");
  const heroRating = document.getElementById("hero-rating");
  const heroSynopsis = document.getElementById("hero-synopsis");
  const btnHeroPlay = document.getElementById("btn-hero-play");
  const btnHeroMoreInfo = document.getElementById("btn-hero-more-info");
  const audioToggle = document.getElementById("audio-toggle");
  const audioIcon = document.getElementById("audio-icon");

  // Modal Elements
  const detailModal = document.getElementById("detail-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalMatch = document.getElementById("modal-match");
  const modalYear = document.getElementById("modal-year");
  const modalRating = document.getElementById("modal-rating");
  const modalCast = document.getElementById("modal-cast");
  const modalGenres = document.getElementById("modal-genres");
  const modalVideoContainer = document.getElementById("modal-video-container");
  const btnModalPlay = document.getElementById("btn-modal-play");
  const btnModalAddList = document.getElementById("btn-modal-add-list");
  const modalListIcon = document.getElementById("modal-list-icon");
  const modalSimilarGrid = document.getElementById("modal-similar-grid");
  const toastMessage = document.getElementById("toast-message");

  let activeModalItem = null;

  // ==========================================
  // 1. INITIALIZATION & PROFILE GATE
  // ==========================================
  function init() {
    renderProfileGate();
    updateMyListCount();
    setupEventListeners();
  }

  function renderProfileGate() {
    profileListContainer.innerHTML = "";
    NETFLIX_DATA.userProfiles.forEach((profile) => {
      const tile = document.createElement("div");
      tile.className = "profile-tile";
      tile.setAttribute("data-profile-id", profile.id);

      tile.innerHTML = `
        <div class="profile-avatar-box">
          <img src="${profile.avatar}" alt="${profile.name}">
        </div>
        <span class="profile-name">${profile.name}</span>
      `;

      tile.addEventListener("click", () => selectProfile(profile));
      profileListContainer.appendChild(tile);
    });
  }

  function selectProfile(profile) {
    currentProfile = profile;
    headerAvatar.src = profile.avatar;

    // Optional audio playback
    const introAudio = document.getElementById("netflix-intro-sound");
    if (introAudio) {
      introAudio.volume = 0.5;
      introAudio.play().catch(() => {});
    }

    // Switch view
    profileGate.classList.add("hidden");
    browseApp.classList.remove("hidden");
    window.scrollTo(0, 0);

    // Initialize Browse Content
    setupHero();
    renderCatalogRows();
    renderDropdownProfiles();
    showToast(`Hoş geldin, ${profile.name}!`);
  }

  function renderDropdownProfiles() {
    dropdownOtherProfiles.innerHTML = "";
    NETFLIX_DATA.userProfiles
      .filter((p) => p.id !== currentProfile.id)
      .forEach((p) => {
        const item = document.createElement("div");
        item.className = "dropdown-profile-item";
        item.innerHTML = `
          <img src="${p.avatar}" alt="${p.name}">
          <span>${p.name}</span>
        `;
        item.addEventListener("click", () => {
          selectProfile(p);
          profileDropdownMenu.classList.add("hidden");
        });
        dropdownOtherProfiles.appendChild(item);
      });
  }

  // ==========================================
  // 2. HERO BILLBOARD SETUP
  // ==========================================
  function setupHero() {
    const hero = NETFLIX_DATA.hero;
    heroBg.style.backgroundImage = `url('${hero.bgImage}')`;

    if (hero.titleLogo) {
      heroTitleLogo.src = hero.titleLogo;
      heroTitleLogo.classList.remove("hidden");
      heroTitleText.classList.add("hidden");
    } else {
      heroTitleText.textContent = hero.title;
      heroTitleText.classList.remove("hidden");
      heroTitleLogo.classList.add("hidden");
    }

    heroType.textContent = hero.type;
    heroGenre.textContent = hero.genre;
    heroYear.textContent = hero.year;
    heroRating.textContent = hero.rating;
    heroSynopsis.textContent = hero.synopsis;

    btnHeroPlay.onclick = () => {
      openModal({
        id: "hero-berlin",
        title: hero.title,
        img: hero.bgImage,
        desc: hero.synopsis,
        match: hero.match,
        rating: hero.rating,
        year: hero.year,
        cast: hero.cast,
        genres: [hero.genre],
        videoUrl: hero.trailerUrl
      });
    };

    btnHeroMoreInfo.onclick = () => {
      openModal({
        id: "hero-berlin",
        title: hero.title,
        img: hero.bgImage,
        desc: hero.synopsis,
        match: hero.match,
        rating: hero.rating,
        year: hero.year,
        cast: hero.cast,
        genres: [hero.genre],
        videoUrl: hero.trailerUrl
      });
    };

    audioToggle.onclick = () => {
      isAudioMuted = !isAudioMuted;
      audioIcon.className = isAudioMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
      showToast(isAudioMuted ? "Ses kapatıldı" : "Ses açıldı");
    };
  }

  // ==========================================
  // 3. CATALOG ROWS & CAROUSEL RENDERING
  // ==========================================
  function renderCatalogRows() {
    catalogRowsContainer.innerHTML = "";

    NETFLIX_DATA.rows.forEach((row) => {
      const section = document.createElement("section");
      section.className = "row-section";
      section.id = `row-${row.id}`;

      // Title heading
      let titleHtml = row.title;
      if (row.type === "continue" && currentProfile) {
        titleHtml = `${currentProfile.name}, İzlemeye Devam Et`;
      }

      section.innerHTML = `
        <h2 class="row-title">
          <span>${titleHtml}</span>
          <span class="see-all-arrow">Hepsini İncele <i class="fa-solid fa-chevron-right"></i></span>
        </h2>
        <div class="slider-wrapper">
          <button class="slider-arrow left" aria-label="Geri"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="cards-slider" id="slider-${row.id}"></div>
          <button class="slider-arrow right" aria-label="İleri"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      `;

      const sliderContainer = section.querySelector(`#slider-${row.id}`);

      // Render cards based on type
      if (row.type === "top10") {
        row.items.forEach((item) => {
          sliderContainer.appendChild(createTop10Card(item));
        });
      } else {
        row.items.forEach((item) => {
          sliderContainer.appendChild(createStandardCard(item, row.type === "continue"));
        });
      }

      // Slider scroll behavior
      const arrowLeft = section.querySelector(".slider-arrow.left");
      const arrowRight = section.querySelector(".slider-arrow.right");

      arrowLeft.addEventListener("click", () => {
        sliderContainer.scrollBy({ left: -sliderContainer.clientWidth * 0.75, behavior: "smooth" });
      });

      arrowRight.addEventListener("click", () => {
        sliderContainer.scrollBy({ left: sliderContainer.clientWidth * 0.75, behavior: "smooth" });
      });

      catalogRowsContainer.appendChild(section);
    });
  }

  function createStandardCard(item, isContinue = false) {
    const card = document.createElement("div");
    card.className = "movie-card";

    let progressBarHtml = "";
    if (isContinue && item.progress) {
      progressBarHtml = `
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${item.progress}%"></div>
        </div>
      `;
    }

    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="card-title-fallback">${item.title}</div>
      ${progressBarHtml}
    `;

    card.addEventListener("click", () => openModal(item));
    return card;
  }

  function createTop10Card(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "top10-card-wrapper";

    wrapper.innerHTML = `
      <svg class="top10-rank-svg" viewBox="0 0 100 150">
        <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-size="140" font-weight="900">${item.rank}</text>
      </svg>
      <div class="top10-poster">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
    `;

    wrapper.addEventListener("click", () => openModal(item));
    return wrapper;
  }

  // ==========================================
  // 4. DETAIL MODAL POPUP
  // ==========================================
  function openModal(item) {
    activeModalItem = item;

    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc || "Açıklama mevcut değil.";
    modalMatch.textContent = item.match || "%95 Eşleşme";
    modalYear.textContent = item.year || "2026";
    modalRating.textContent = item.rating || "16+";
    modalCast.textContent = item.cast || "Oyuncu listesi yükleniyor...";
    modalGenres.textContent = (item.genres || ["Drama", "Gerilim"]).join(", ");

    // Video banner or high-res image
    modalVideoContainer.innerHTML = "";
    if (item.videoUrl) {
      modalVideoContainer.innerHTML = `
        <iframe src="${item.videoUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
    } else {
      modalVideoContainer.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
      `;
    }

    // Check list status
    updateModalListButton();

    // Render Similar Items
    renderSimilarTitles(item);

    detailModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    detailModal.classList.add("hidden");
    modalVideoContainer.innerHTML = "";
    document.body.style.overflow = "auto";
    activeModalItem = null;
  }

  function updateModalListButton() {
    if (!activeModalItem) return;
    const isAdded = myList.some((m) => m.title === activeModalItem.title);
    if (isAdded) {
      modalListIcon.className = "fa-solid fa-check";
      btnModalAddList.title = "Listemden Çıkar";
    } else {
      modalListIcon.className = "fa-solid fa-plus";
      btnModalAddList.title = "Listeme Ekle";
    }
  }

  function toggleMyList() {
    if (!activeModalItem) return;
    const index = myList.findIndex((m) => m.title === activeModalItem.title);
    if (index > -1) {
      myList.splice(index, 1);
      showToast(`"${activeModalItem.title}" Listemden kaldırıldı.`);
    } else {
      myList.push(activeModalItem);
      showToast(`"${activeModalItem.title}" Listeme eklendi.`);
    }
    localStorage.setItem("netflix_my_list", JSON.stringify(myList));
    updateModalListButton();
    updateMyListCount();
  }

  function updateMyListCount() {
    myListCount.textContent = myList.length;
  }

  function renderSimilarTitles(currentItem) {
    modalSimilarGrid.innerHTML = "";
    const allTitles = [];
    NETFLIX_DATA.rows.forEach((r) => {
      r.items.forEach((it) => {
        if (it.title !== currentItem.title && !allTitles.some((x) => x.title === it.title)) {
          allTitles.push(it);
        }
      });
    });

    const recommendations = allTitles.slice(0, 6);
    recommendations.forEach((rec) => {
      const card = document.createElement("div");
      card.className = "similar-card";
      card.innerHTML = `
        <img src="${rec.img}" alt="${rec.title}">
        <div class="similar-card-info">
          <div class="similar-card-title">${rec.title}</div>
          <div class="similar-card-desc">${rec.desc || ""}</div>
        </div>
      `;
      card.addEventListener("click", () => openModal(rec));
      modalSimilarGrid.appendChild(card);
    });
  }

  // ==========================================
  // 5. SEARCH & LIST FILTERING
  // ==========================================
  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResultsSection.classList.add("hidden");
      catalogRowsContainer.classList.remove("hidden");
      return;
    }

    const allItems = [];
    NETFLIX_DATA.rows.forEach((r) => {
      r.items.forEach((it) => {
        if (!allItems.some((x) => x.title === it.title)) {
          allItems.push(it);
        }
      });
    });

    const results = allItems.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        (it.desc && it.desc.toLowerCase().includes(q)) ||
        (it.genres && it.genres.some((g) => g.toLowerCase().includes(q)))
    );

    searchGridContainer.innerHTML = "";
    if (results.length === 0) {
      searchGridContainer.innerHTML = `<p style="grid-column: 1/-1; color: #888; padding: 20px 0;">"${query}" ile eşleşen dizi veya film bulunamadı.</p>`;
    } else {
      results.forEach((it) => {
        searchGridContainer.appendChild(createStandardCard(it));
      });
    }

    catalogRowsContainer.classList.add("hidden");
    searchResultsSection.classList.remove("hidden");
  }

  function showMyListView() {
    searchResultsSection.classList.remove("hidden");
    catalogRowsContainer.classList.add("hidden");
    searchResultsSection.querySelector(".row-title").textContent = "Listem";

    searchGridContainer.innerHTML = "";
    if (myList.length === 0) {
      searchGridContainer.innerHTML = `<p style="grid-column: 1/-1; color: #888; padding: 20px 0;">Henüz listenize dizi veya film eklemediniz.</p>`;
    } else {
      myList.forEach((it) => {
        searchGridContainer.appendChild(createStandardCard(it));
      });
    }
  }

  // ==========================================
  // 6. EVENT LISTENERS
  // ==========================================
  function setupEventListeners() {
    // Window scroll for sticky navbar
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    });

    // Search Toggle
    searchToggle.addEventListener("click", () => {
      searchBox.classList.toggle("open");
      if (searchBox.classList.contains("open")) {
        searchInput.focus();
      }
    });

    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });

    // Profile Trigger Dropdown
    activeProfileTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdownMenu.classList.toggle("hidden");
      notificationsMenu.classList.add("hidden");
    });

    // Notifications Trigger
    bellBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      notificationsMenu.classList.toggle("hidden");
      profileDropdownMenu.classList.add("hidden");
    });

    document.addEventListener("click", () => {
      profileDropdownMenu.classList.add("hidden");
      notificationsMenu.classList.add("hidden");
    });

    // Switch Profile Button
    btnSwitchProfile.addEventListener("click", (e) => {
      e.preventDefault();
      browseApp.classList.add("hidden");
      profileGate.classList.remove("hidden");
    });

    // Sign Out
    btnSignout.addEventListener("click", (e) => {
      e.preventDefault();
      browseApp.classList.add("hidden");
      profileGate.classList.remove("hidden");
      showToast("Oturum kapatıldı.");
    });

    // Logo click returns to home
    document.getElementById("logo-refresh").addEventListener("click", (e) => {
      e.preventDefault();
      searchResultsSection.classList.add("hidden");
      catalogRowsContainer.classList.remove("hidden");
      searchInput.value = "";
      searchBox.classList.remove("open");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Nav Listem click
    navMyList.addEventListener("click", (e) => {
      e.preventDefault();
      showMyListView();
    });

    // Modal Close
    modalClose.addEventListener("click", closeModal);
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !detailModal.classList.contains("hidden")) {
        closeModal();
      }
    });

    btnModalAddList.addEventListener("click", toggleMyList);

    btnModalPlay.addEventListener("click", () => {
      showToast(`"${activeModalItem?.title || "Video"}" oynatılıyor...`);
    });
  }

  function showToast(msg) {
    toastMessage.textContent = msg;
    toastMessage.classList.remove("hidden");
    setTimeout(() => {
      toastMessage.classList.add("hidden");
    }, 2800);
  }

  // Start app
  init();
});
