const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'scraped-netflix.json');
const dataJsPath = path.join(__dirname, '..', 'lib', 'data.js');

if (!fs.existsSync(jsonPath)) {
  console.error("scraped-netflix.json bulunamadı. Önce scrape scriptini çalıştırın.");
  process.exit(1);
}

const raw = fs.readFileSync(jsonPath, 'utf-8');
const scraped = JSON.parse(raw);

// Select best diverse categories
const preferredTitles = [
  "Türkiye'de Bugünün Top 10 Dizi Listesi",
  "Türkiye'de Bugünün Top 10 Film Listesi",
  "Gişe Rekortmeni Filmler",
  "Hollywood Filmleri",
  "Akıl Oyunları",
  "Korku Dolu Diziler",
  "Çok Sıkıldım Diyenlere Özel Öneriler",
  "Sadece Netflix'te",
  "Tekrar Tekrar İzlenen Diziler",
  "90 Dakikalık Filmler",
  "Kahkaha Tufanı Filmler",
  "Drama Dizileri"
];

const selectedRows = [];

// First Top 10 Dizi
const top10Row = scraped.rows.find(r => r.title.includes("Top 10 Dizi") || r.title.includes("Top 10")) || scraped.rows[0];
if (top10Row) {
  top10Row.type = "top10";
  top10Row.items.forEach((item, idx) => {
    item.rank = idx + 1;
  });
  selectedRows.push(top10Row);
}

// Other preferred rows
preferredTitles.forEach(t => {
  if (t.includes("Top 10 Dizi")) return;
  const match = scraped.rows.find(r => r.title.toLowerCase().includes(t.toLowerCase()));
  if (match && !selectedRows.some(x => x.title === match.title)) {
    selectedRows.push(match);
  }
});

// If we need more, add other available rows
scraped.rows.forEach(r => {
  if (selectedRows.length < 10 && !selectedRows.some(x => x.title === r.title)) {
    selectedRows.push(r);
  }
});

console.log(`Seçilen Kategori Sayısı: ${selectedRows.length}`);
selectedRows.forEach(r => console.log(` - ${r.title} (${r.items.length} film)`));

// Generate clean lib/data.js
const currentContent = fs.readFileSync(dataJsPath, 'utf-8');
// Keep createAvatar, userProfiles and hero, replace rows
const heroMatch = currentContent.match(/hero:\s*{[\s\S]*?trailerUrl:.*?\n\s*},/);
const heroBlock = heroMatch ? heroMatch[0] : "";

const newContent = `// Real Netflix Catalog Data extracted via ego-browser
const createAvatar = (bg) =>
  \`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="\${encodeURIComponent(bg)}"/><circle cx="34" cy="38" r="7" fill="%23ffffff"/><circle cx="66" cy="38" r="7" fill="%23ffffff"/><path d="M 28 60 Q 50 82 72 60" stroke="%23ffffff" stroke-width="6" fill="none" stroke-linecap="round"/></svg>\`;

export const NETFLIX_DATA = {
  userProfiles: [
    {
      id: "p1",
      name: "𝐈𝐍𝐙𝐀𝐑 𝐇𝐞𝐫𝐨",
      avatar: createAvatar("#E50914"),
      isKids: false
    },
    {
      id: "p2",
      name: "Birol",
      avatar: createAvatar("#0071EB"),
      isKids: false
    },
    {
      id: "p3",
      name: "Şevkiye",
      avatar: createAvatar("#802BE8"),
      isKids: false
    },
    {
      id: "p4",
      name: "FΛLLΣП 𝐇𝐞𝐫𝐨",
      avatar: createAvatar("#1DB954"),
      isKids: false
    }
  ],
  hero: {
    title: "BERLIN",
    type: "Dizi",
    genre: "Drama • Suç • Gerilim",
    year: "2026",
    seasons: "Mini Dizi",
    rating: "18+",
    match: "%98 Eşleşme",
    synopsis: "Bir Dük Sevilla'da paha biçilemez bir tabloyu çalmaları için Berlin ve çetesinin kapısını çalar. Ama ava gidenin avlanacağını hesap edemeyen Dük, soygunun hedefi hâline gelecektir.",
    cast: "Pedro Alonso, Michelle Jenner, Tristán Ulloa, Begoña Vargas",
    bgImage: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/a0rzcqaxbY-vbvJ_p52ifDlKBbg/AAAABWkSNXHDFmLUt5_DWPK8NjV3dxH7i-c0fc0hjzat8T6P7wlDfVbKegyisf2g_FmoOHPUhhfkvNPBLoD-6W-py-rW1cy3F3LmJknn.webp?r=42f",
    titleLogo: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/yAyD85Mk30V-HjD8wOI-FnnY9_4/AAAABZxvPowYIXvgnaod0Gi_uSQU3I8gTWuka6yj0eDmcw-7R0Ts4fUNE9v4W5eVIYzZkV6xTjIvb3hc32iDYsj7_SpJWzLeLQloKH4rEzrEQlZs.webp?r=5df",
    trailerUrl: "https://www.youtube.com/embed/s_3B5bN5hU0?autoplay=1&mute=1&controls=0&loop=1",
    videoSource: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  rows: ${JSON.stringify(selectedRows, null, 2)}
};
`;

fs.writeFileSync(dataJsPath, newContent, 'utf-8');
console.log("lib/data.js dosyası scraped verilerle başarıyla güncellendi!");
