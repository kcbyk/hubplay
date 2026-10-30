# HubPlay 🎬

HubPlay is a high-fidelity, modern streaming platform web clone inspired by Netflix, built with **Next.js 14 (App Router)**, **React 18**, and clean CSS.

![HubPlay](https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/a0rzcqaxbY-vbvJ_p52ifDlKBbg/AAAABWkSNXHDFmLUt5_DWPK8NjV3dxH7i-c0fc0hjzat8T6P7wlDfVbKegyisf2g_FmoOHPUhhfkvNPBLoD-6W-py-rW1cy3F3LmJknn.webp?r=42f)

## ✨ Features

- **Profile Selection Gate**: Netflix-style "Who's Watching?" profile selector with sharp SVG smile avatars.
- **Dynamic Navbar**: Scroll-driven gradual blackness transition with smooth opacity blending.
- **Netflix Search Bar**: Smoothly expanding magnifying glass with instant real-time title search, category exploration tags, and clear ("X") button.
- **Hero Billboard**: Featured banner ("BERLIN") with Play and More Info modal triggers.
- **Catalog Rows & Carousels**:
  - Türkiye'de Bugünün Top 10 Dizi & Film Listesi (with large SVG ranking numbers).
  - IMDb Zirvedekiler (Hdfilmcehennemi selection).
  - Gişe Rekortmeni Filmler, Hollywood Filmleri, Akıl Oyunları, Korku Dolu Diziler, and more.
- **Detail Modal**: Rich modal with synopsis, match score, age rating, genre tags, and similar recommendations.
- **Authentic Netflix Video Player**:
  - Full-screen container with auto-hiding controls (cursor vanishes after 3.5s of inactivity).
  - Interactive timeline scrubber with live timestamp tooltip and buffer progress.
  - 10-second rewind (`-10s`) and forward (`+10s`) buttons.
  - Expandable volume slider with mute toggle.
  - Audio & Subtitle selector menu.
  - Playback speed controls (0.5x, 0.75x, 1x, 1.25x, 1.5x).
  - Episode selector drawer.
  - Full keyboard shortcuts (`Space`/`K` for play/pause, `F` for fullscreen, `M` for mute, `ArrowLeft`/`ArrowRight` for seek, `Esc` to exit).
- **Web Scraper Scripts**:
  - `npm run scrape`: Scrapes real Netflix browse catalogs using `ego-browser`.
  - `npm run scrape:hdfilm`: Scrapes IMDb top movies from Hdfilmcehennemi robot using `ego-browser`.
  - `npm run sync`: Syncs and formats scraped movies directly into the catalog.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/kcbyk/hubplay.git

# Navigate into project directory
cd hubplay

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Icons**: FontAwesome 6 & Lucide
- **Styling**: Vanilla CSS (Netflix Design System)
- **Browser Automation**: ego-browser

## 📄 License

MIT License. Educational and demonstration project.
