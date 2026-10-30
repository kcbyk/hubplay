// Real Netflix Catalog Data extracted via ego-browser
const createAvatar = (bg) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="${encodeURIComponent(bg)}"/><circle cx="34" cy="38" r="7" fill="%23ffffff"/><circle cx="66" cy="38" r="7" fill="%23ffffff"/><path d="M 28 60 Q 50 82 72 60" stroke="%23ffffff" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`;

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
  rows: [
  {
  "id": "row-hdfilmcehennemi",
  "title": "IMDb Zirvedekiler (Hdfilmcehennemi Seçkisi)",
  "type": "standard",
  "items": [
    {
      "id": "hdf-1",
      "title": "Esaretin Bedeli",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/1-esaretin-bedeli-film-izle.webp",
      "imdb": "9.3",
      "year": "1994",
      "rating": "18+",
      "match": "%98 Eşleşme",
      "embedUrl": "https://www.youtube.com/embed/PLl99DlL6b4?autoplay=1&mute=0",
      "sourceUrl": "https://www.hdfilmcehennemi.nl/1-esaretin-bedeli-film-izle-hdf-hdf-6/",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Esaretin Bedeli (1994). IMDb: 9.3/10. Masum olduğunu iddia eden bankacı Andy Dufresne ve Red'in umut dolu Shawshank dostluğu şimdi HubPlay'de."
    },
    {
      "id": "hdf-4",
      "title": "Where There Is Love There Is No Darkness",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/where-there-is-love-there-is-no-darkness.webp",
      "imdb": "9.2",
      "year": "2025",
      "rating": "18+",
      "match": "%97 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Where There Is Love There Is No Darkness (2025). IMDb: 9.2/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-6",
      "title": "The Godfather 1",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/hd-the-godfather-izle.webp",
      "imdb": "9.2",
      "year": "1972",
      "rating": "18+",
      "match": "%97 Eşleşme",
      "embedUrl": "https://www.youtube.com/embed/sY1S34973zA?autoplay=1&mute=0",
      "sourceUrl": "https://www.hdfilmcehennemi.nl/hd-the-godfather-izle-10/",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "The Godfather 1 (1972). IMDb: 9.2/10. Corleone ailesinin başına geçen Michael'ın efsanevi mafya destanı şimdi HubPlay'de."
    },
    {
      "id": "hdf-8",
      "title": "Batman Kara Şövalye",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/batman-kara-sovalye-hd-film-izle.webp",
      "imdb": "9.1",
      "year": "2008",
      "rating": "18+",
      "match": "%96 Eşleşme",
      "embedUrl": "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1&mute=0",
      "sourceUrl": "https://www.hdfilmcehennemi.nl/batman-kara-sovalye-hd-film-izle-hdf-hdf-8/",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Batman Kara Şövalye (2008). IMDb: 9.1/10. Joker'in kaos yarattığı Gotham sokaklarında Batman'in en zorlu sınavı şimdi HubPlay'de."
    },
    {
      "id": "hdf-10",
      "title": "Twenty One Pilots More Than We Ever Imagined",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/twenty-one-pilots-more-than-we-ever-imagined.webp",
      "imdb": "9.1",
      "year": "2026",
      "rating": "18+",
      "match": "%96 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Twenty One Pilots More Than We Ever Imagined (2026). IMDb: 9.1/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-12",
      "title": "Hababam Sınıfı",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/the-chaos-class.webp",
      "imdb": "9.1",
      "year": "1975",
      "rating": "18+",
      "match": "%96 Eşleşme",
      "embedUrl": "https://www.youtube.com/embed/bL7R-E9Gf6E?autoplay=1&mute=0",
      "sourceUrl": "https://www.hdfilmcehennemi.nl/the-chaos-class-2-hdf-1/",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Hababam Sınıfı (1975). IMDb: 9.1/10. Rıfat Ilgaz'ın ölümsüz eseri, İnek Şaban ve Mahmut Hoca'nın kahkaha dolu macerası şimdi HubPlay'de."
    },
    {
      "id": "hdf-14",
      "title": "Yüzüklerin Efendisi Kralın Dönüşü",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/1-yuzuklerin-efendisi-kralin-donusu-izle.webp",
      "imdb": "9.0",
      "year": "2003",
      "rating": "18+",
      "match": "%95 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Yüzüklerin Efendisi Kralın Dönüşü (2003). IMDb: 9.0/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-16",
      "title": "The Godfather 2",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/hd-the-godfather-2-izle.webp",
      "imdb": "9.0",
      "year": "1974",
      "rating": "18+",
      "match": "%95 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "The Godfather 2 (1974). IMDb: 9.0/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-18",
      "title": "CM101MMXI Fundamentals",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/cm101mmxi-fundamentals.webp",
      "imdb": "9.0",
      "year": "2013",
      "rating": "18+",
      "match": "%95 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "CM101MMXI Fundamentals (2013). IMDb: 9.0/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-20",
      "title": "Schindler'in Listesi",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/hd-schindlerin-listesi-film-izle.webp",
      "imdb": "9.0",
      "year": "1993",
      "rating": "18+",
      "match": "%95 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Schindler'in Listesi (1993). IMDb: 9.0/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-22",
      "title": "12 Kızgın Adam",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/12-angry-men.webp",
      "imdb": "9.0",
      "year": "1957",
      "rating": "18+",
      "match": "%95 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "12 Kızgın Adam (1957). IMDb: 9.0/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-24",
      "title": "The Message",
      "img": "https://www.hdfilmcehennemi.nl/images/list/poster/the-message.webp",
      "imdb": "8.9",
      "year": "1976",
      "rating": "18+",
      "match": "%94 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "The Message (1976). IMDb: 8.9/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-26",
      "title": "Yüzüklerin Efendisi Yüzük Kardeşliği",
      "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEWCAQAAACQmf5YAAABcklEQVR42u3QQREAAAwCoNm/9Ep4viACOcaiQLlylCtHuXKUK1eOcuUoV45y5ShXrhzlylGuHOXKlaNcOcqVo1w5ypUrR7lylCtHuXLlKFeOcuUoV45y5cpRrhzlylGuXDnKlaNcOcqVo1y5cpQrR7lylCtXjnLlKFeOcuUoV64c5cpRrhzlypWjXDnKlaNcOcqVK0e5cpQrR7ly5ShXjnLlKFeOcuXKUa4c5cpRrlw5ypWjXDnKlaNcuXKUK0e5cpQrR7ly5ShXjnLlKFeuHOXKUa4c5cpRrlw5ypWjXDnKlStHuXKUK0e5cpQrV45y5ShXjnLlylGuHOXKUa4c5cqVo1w5ypWjXLlylCtHuXKUK0e5cuUoV45y5ShXrhzlylGuHOXKUa5cOcqVo1w5ypUrR7lylCtHuXKUK1eOcuUoV45y5cpRrhzlylGuHOXKlaNcOcqVo1y5cgXKlaNcOcqVo1y5cpQrR7lylCtHuXLl9D0p/AEXcCOh5QAAAABJRU5ErkJggg==",
      "imdb": "8.9",
      "year": "2001",
      "rating": "18+",
      "match": "%94 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Yüzüklerin Efendisi Yüzük Kardeşliği (2001). IMDb: 8.9/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-28",
      "title": "Tosun Paşa",
      "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEWCAQAAACQmf5YAAABcklEQVR42u3QQREAAAwCoNm/9Ep4viACOcaiQLlylCtHuXKUK1eOcuUoV45y5ShXrhzlylGuHOXKlaNcOcqVo1w5ypUrR7lylCtHuXLlKFeOcuUoV45y5cpRrhzlylGuXDnKlaNcOcqVo1y5cpQrR7lylCtXjnLlKFeOcuUoV64c5cpRrhzlypWjXDnKlaNcOcqVK0e5cpQrR7ly5ShXjnLlKFeOcuXKUa4c5cpRrlw5ypWjXDnKlaNcuXKUK0e5cpQrR7ly5ShXjnLlKFeuHOXKUa4c5cpRrlw5ypWjXDnKlStHuXKUK0e5cpQrV45y5ShXjnLlylGuHOXKUa4c5cqVo1w5ypWjXLlylCtHuXKUK0e5cuUoV45y5ShXrhzlylGuHOXKUa5cOcqVo1w5ypUrR7lylCtHuXKUK1eOcuUoV45y5cpRrhzlylGuHOXKlaNcOcqVo1y5cgXKlaNcOcqVo1y5cpQrR7lylCtHuXLl9D0p/AEXcCOh5QAAAABJRU5ErkJggg==",
      "imdb": "8.9",
      "year": "1976",
      "rating": "18+",
      "match": "%94 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Tosun Paşa (1976). IMDb: 8.9/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-30",
      "title": "Attack on Titan the Movie The Last Attack",
      "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEWCAQAAACQmf5YAAABcklEQVR42u3QQREAAAwCoNm/9Ep4viACOcaiQLlylCtHuXKUK1eOcuUoV45y5ShXrhzlylGuHOXKlaNcOcqVo1w5ypUrR7lylCtHuXLlKFeOcuUoV45y5cpRrhzlylGuXDnKlaNcOcqVo1y5cpQrR7lylCtXjnLlKFeOcuUoV64c5cpRrhzlypWjXDnKlaNcOcqVK0e5cpQrR7ly5ShXjnLlKFeOcuXKUa4c5cpRrlw5ypWjXDnKlaNcuXKUK0e5cpQrR7ly5ShXjnLlKFeuHOXKUa4c5cpRrlw5ypWjXDnKlStHuXKUK0e5cpQrV45y5ShXjnLlylGuHOXKUa4c5cqVo1w5ypWjXLlylCtHuXKUK0e5cuUoV45y5ShXrhzlylGuHOXKUa5cOcqVo1w5ypUrR7lylCtHuXKUK1eOcuUoV45y5cpRrhzlylGuHOXKlaNcOcqVo1y5cgXKlaNcOcqVo1y5cpQrR7lylCtHuXLl9D0p/AEXcCOh5QAAAABJRU5ErkJggg==",
      "imdb": "8.9",
      "year": "2024",
      "rating": "18+",
      "match": "%94 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "Attack on Titan the Movie The Last Attack (2024). IMDb: 8.9/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    },
    {
      "id": "hdf-32",
      "title": "İyi, Kötü ve Çirkin",
      "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEWCAQAAACQmf5YAAABcklEQVR42u3QQREAAAwCoNm/9Ep4viACOcaiQLlylCtHuXKUK1eOcuUoV45y5ShXrhzlylGuHOXKlaNcOcqVo1w5ypUrR7lylCtHuXLlKFeOcuUoV45y5cpRrhzlylGuXDnKlaNcOcqVo1y5cpQrR7lylCtXjnLlKFeOcuUoV64c5cpRrhzlypWjXDnKlaNcOcqVK0e5cpQrR7ly5ShXjnLlKFeOcuXKUa4c5cpRrlw5ypWjXDnKlaNcuXKUK0e5cpQrR7ly5ShXjnLlKFeuHOXKUa4c5cpRrlw5ypWjXDnKlStHuXKUK0e5cpQrV45y5ShXjnLlylGuHOXKUa4c5cqVo1w5ypWjXLlylCtHuXKUK0e5cuUoV45y5ShXrhzlylGuHOXKUa5cOcqVo1w5ypUrR7lylCtHuXKUK1eOcuUoV45y5cpRrhzlylGuHOXKlaNcOcqVo1y5cgXKlaNcOcqVo1y5cpQrR7lylCtHuXLl9D0p/AEXcCOh5QAAAABJRU5ErkJggg==",
      "imdb": "8.8",
      "year": "1966",
      "rating": "18+",
      "match": "%93 Eşleşme",
      "genres": [
        "IMDb En İyiler",
        "Hdfilmcehennemi Seçkisi"
      ],
      "desc": "İyi, Kötü ve Çirkin (1966). IMDb: 8.8/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de."
    }
  ]
},
  {
    "id": "row-15",
    "title": "Türkiye'de Bugünün Top 10 Dizi Listesi",
    "type": "top10",
    "items": [
      {
        "id": "net-15-0",
        "title": "Organize İşler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABYSk5HhHtitnzN89cC5kvzRLSrlwQeUGNrtjBGqi2je-mpYoRjnU2D3q_6BLJuCzziShu1XzXQqq1gEJbTrTS5Pn4gshSwxRWByMTe6xfC7j-L3W_TrBRwrIlsaclkgZohyo2xXEz7AEpFS9IptyRAZV1xCrzitgRTuXHJNcIG8.webp?r=8d1",
        "rank": 1,
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Organize İşler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-1",
        "title": "Lupin",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABQWkeo62RQdXXCf1zrTl22U-iGe0U5v1f9vJH_YL2zroD0nYf6a7OWcWOWaHhQtVRWGVHwFbODI77g49y7yf_U8oDV7sa1DD30f7_tT9SCQRYYTLOFT2jBKmXXv8v11RjuIWXvmESlGGcRwQfSw-bOFIKtWKbsDn7Gk8ORKTvItw2d4.webp?r=4fb",
        "rank": 2,
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Lupin şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-2",
        "title": "Gupi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABXE2oxOdIw2Sktie-xUWEFTfIBMefSxPEu8Ac-DE4fV4lbBN1KCWA7UB6z81wJX7xLZf-srtzDrqgp0Jww0KHSPWgs61cr3xIN4V.webp?r=398",
        "rank": 3,
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Gupi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-3",
        "title": "Seni Tanıyorum",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABRJwDMCcN7sCViXAmjk09QI_8pnJttFuFi_FOfdwrbqrqhLvbSRtYoQ-dC7MFF0akL1j2SJflhfsP8CiyHBCSFJUC8FYC5CVlANk.webp?r=3d5",
        "rank": 4,
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Seni Tanıyorum şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-4",
        "title": "Below",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABbe9OTeVuc9ex4WDOXiOBN-45k9QwBRJ4FsNlaNAptUxYVa3274fHuSE-Vgdf12xFyi-FnVGVGwOXP7JariPk2uMPNLjqfvxAUJp1M2sQI3tu-VIGIRHsw61GhmUQe-95plTM0JYmxFzMBx3MlKS-kGM6yP3yoIFXL49mTLWC5E.webp?r=ce1",
        "rank": 5,
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Below şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-5",
        "title": "Asilzade",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABd2llYSsP-ZF3oi8KmapBLrh36zMS1yXGi5Me7e_Y2FMBZpA7YRsfHrtFs87B8Oflut2Ikkl-UBol0P75IvcSlGCkxJS1k9JyhXoV_u0XWkFuWh12fKI_hKtCTImNRPzdeAk9wsYlnKyNQ9Y6lzzV8iDk6ZAorVSuajLB-nxPF8.webp?r=428",
        "rank": 6,
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Asilzade şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-6",
        "title": "Matthew Perry'nin Son Yılları",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABTOWLVldSXhFa0d9ikB6HUo81QdeQR6Wb9edWR06GbHppAiqZ40h-g6qTHVCYFgEq7Zw_rmVNZC0Qv1U7K1XSGcvHwVgJqO-dEzn1jGyYJipSPxn0gBE69FZ0h_q1qt9b_nNAw93NmDXvyXZQnzKF01wqBwPBwBOmaL3XyowNUI.webp?r=b6d",
        "rank": 7,
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Matthew Perry'nin Son Yılları şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-7",
        "title": "Cennetin Doğusu",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABXDyTIKiu-R2b7DEkkempGgo7R4d6vBYuxXRXrGEQlX7kH8oZ-03upTW9ipmgMNMJb6n26hFSjE5XIOkMz3ELzPZNkrbRZmNUTHt-rpAhN3Hp50h8yYwogJn3xJTVp9luEKD8INj85tAXC6hswCNCD1KvEXZaeILswPaRHSZXO4.webp?r=d4e",
        "rank": 8,
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Top 10"
        ],
        "desc": "Cennetin Doğusu şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-8",
        "title": "Nobody Wants This",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABUfFM9fm_421K_00jofH0Rr1o-r8lc4yu0InL8R5wnSQx8XlMy7obzRQB1GK3V6dhESM1HRnR5oE5o4nBju23zle8OkK1m4xUWttA-TQ8NqKoFIHGBmBKeFIYo6ZBXz2ZJ8q-M7Tm8HKJPhYYhHcaQzMkpXyTEIJ5dv0ldc7.webp?r=87c",
        "rank": 9,
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "Nobody Wants This şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-15-9",
        "title": "The Mentalist",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABZ1Z777u4ThaYInGNOZfmr1dI05BbV6UFHVG1U_3s4zZw_5bKlzDUB_ayzx-X7VUujKRCEjZTqZV_zRZi7P6Z-AksBW-T-JatHkn.webp?r=2c5",
        "rank": 10,
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10"
        ],
        "desc": "The Mentalist şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-23",
    "title": "Türkiye'de Bugünün Top 10 Film Listesi",
    "type": "top10",
    "items": [
      {
        "id": "net-23-0",
        "title": "Otis Kasırgasının Tam Ortasında",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABfv_w-17_E_zDZ8dQRuTzG08FGmz9vcNRL9x93Wb-vTQX1SuUrYJboqYOlW0FL56RtiTVEyI-jJJtNGZUfK9H1xdi6vRNUMp22B409MJXZ5qsFO44ufbkfpfIhxR-jqB7K5AETH_Wh3u6TTvjgVkvf3f0v1ZoGIARYg7DTJn1eQ.webp?r=770",
        "rank": 1,
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Otis Kasırgasının Tam Ortasında şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-1",
        "title": "Kurt Adam",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABVrJ4p-NREFQNHfDOvDD4n0cjofntAa80X8eWiQdOCNxShNy_FbJ7ij51Pn0fcqk8uHOMvyYrM_fG0hoiHX74u2IbQjeeuhR5zs0T9bgy9kDEemqizBLeOK1_LA3alwXLQN7U0tM876XYZVUvSH9v16BhCUSclmfFPPg4iWW_Qg.webp?r=882",
        "rank": 2,
        "match": "%93 Eşleşme",
        "rating": "18+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Kurt Adam şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-2",
        "title": "Addams Ailesi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABRHy2pPqm79qTXnvQ5YLGtkyMdOR-P3_GE5t1UPFfbVZHPlqHAE98u2my5Ey0tJkiNB_KEaLxFbgOacgL1PCdfzdJuokTZFh8sWr5m7xmbCrg7gbpKVS5_wym37i6ZZnNmJsgORdFMOXmPvkPzWbhb_hivQp0LlF6jbmiXoyw0M.webp?r=4e2",
        "rank": 3,
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Addams Ailesi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-3",
        "title": "Addams Ailesi 2",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABUuHqDrEavmKFQTKKaaNJqfwrpH_BSI_wQfZyvZnxqRSu9xkHxhkui6UsWSlAcuUQrFHSmVPemno-N1GwdrdPNdSnFiL4sbjGf3nI09-F31IKVrmx81rCPEZFzbVI0WUI757Z3LlJn6PkW6v1B4MxhhK82Obi9CeZa9Md6DzbFw.webp?r=8d5",
        "rank": 4,
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Addams Ailesi 2 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-4",
        "title": "Animals",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABYgPtPA86e9u5uS1qWBshMGOyYUIJb6rwX-jKNENdVMKCd0SJOhUnG_U0C7dXEaXv6BK0fCJy--S5Qp92RJ3Zj5FeNtAiCsM5mnjkiy_KrsknG5XgUKbvUNkr6ULcY9OqVmtRPnc5DN07RJ_dsj_-nMKP-TtBRDvzadNWyf4LSg.webp?r=670",
        "rank": 5,
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Animals şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-5",
        "title": "Organize İşler: Sazan Sarmalı",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABVOxfHQ4VtUMaHDPhMMYEKIsGKBvmoOyPZGZWfPn4iPXEVP9ahmfe23Lkj5riT8f_5kQaJGgHoSaechKXY_s7rc2hqqAQ9mVHUV_.webp?r=c14",
        "rank": 6,
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Organize İşler: Sazan Sarmalı şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-6",
        "title": "Buz Devri 3: Dinozorların Şafağı",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABcf-BMQnSN-cqByB2OIyV7EgvHHJb9riu0HoZwkx4aVOayFmiehqWeJCEgpBwWbiWwHkSRLxUtkbusKNszbD4gIau-FWM_2Ddv6Q7e8P082fxtTZdvAJazYnL9SwixayTxFVq4M1dC7zNoG_BKOd6-bA1dNfeYG9e0PnzhdoFpA.webp?r=43c",
        "rank": 7,
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Buz Devri 3: Dinozorların Şafağı şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-7",
        "title": "Buz Devri: Büyük Çarpışma",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABfyZkMO3sem2zMuuIuW_mPSnstU79UgP2UW2Mnd-7kdUOZrEDOrdW_AYYkz05SFhdddVKkS-k3pJuHquReHO_Re9LpW7kd2r5bYXbLOuWykkajCxbIlQRIRMbGmVxqNgGdux1tuz_ykZzJst7U4CZjpkm4dzEq-1mTemq06kY0A.webp?r=ea3",
        "rank": 8,
        "match": "%95 Eşleşme",
        "rating": "16+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Buz Devri: Büyük Çarpışma şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-8",
        "title": "Buz Devri 4: Kıtalar Ayrılıyor",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABZqAGUDL3gjiCSDhpnTq2LGuYl8Pn89JTBsdT3R_aXAPZ-LngJe5CRAVogFlohyt5zoMt8afCJTMMQegPCl_0vcUM92TVfb-7n3PUR7ImhMXz0vd_UH6tbjXHnAvJxIcLbJkwx_SJsobNTBzC-Av50_2r1FrLaPNlfT14r1Cy84.webp?r=7ba",
        "rank": 9,
        "match": "%93 Eşleşme",
        "rating": "18+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Buz Devri 4: Kıtalar Ayrılıyor şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-23-9",
        "title": "Hayalet Gemi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABfbmuIm9Wo6Ud-2PdwnWy4SXDwbZhk-epanlBxUyX65pEVaFafi4ehuNVRwtPQNrWjP_Iuy2LK2zroDQuZyUHoCIZiS69q43dGvmnP7T4XL6hqPE2iF7sRhHpegdx5QhPZc1MjROcVPR5ExGiOZAkb4MocTWkgZK88uN_A7xcvg.webp?r=45a",
        "rank": 10,
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "Top 10 Film"
        ],
        "desc": "Hayalet Gemi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-16",
    "title": "Gişe Rekortmeni Filmler",
    "type": "standard",
    "items": [
      {
        "id": "net-16-0",
        "title": "Hayalet Sürücü",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbOZiYfzXV5w5TDBDBYzwTne5hU4_26FZYumm1hDWpfZIc16e5cw53i6YHxU7nCpokNPSpAnyzLWTvcgaX01B0W5_2SdSJ_JcdU.webp?r=730",
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Hayalet Sürücü şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-1",
        "title": "Hızlı ve Öfkeli 9",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQeI8ifr7TT3nrM0EK0H5sIuBXZFF6hK-RdPoOi_Qgx9eNp-o0Le8E6US2MCw41HHkH_Ut8HHk0VJjl1W7MwvTwT82pb36v__NY.webp?r=ed6",
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Hızlı ve Öfkeli 9 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-2",
        "title": "Mogli: Orman Çocuğu",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABatYk-lxAYu7lBml6McBWTs3k4Fppx8GFJYZPWC6NCMFTgeVVJKLYBVKhp6E3LW_fuzgbNyH6oPAhUFQMIdPUvvX6ikC3ypcrkM.webp?r=18d",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Mogli: Orman Çocuğu şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-3",
        "title": "Warcraft: İki Dünyanın İlk Karşılaşması",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABaiSW3cpGtHoYqfRjwobNpHTqCR-_wom9crRq29dQgvdXzqsQLJlzKdySQVqTG-WSiv1ukO6XYqxPBJs_C9tcKAaPhkN-7UOUsg.webp?r=c33",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Warcraft: İki Dünyanın İlk Karşılaşması şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-4",
        "title": "Hızlı ve Öfkeli 5: Rio Soygunu",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABToY0e161AK3HtLgcJAfbzVjDJv1CbvmJReTJ40TEjfczJ59fTDBFo021vIo3WbekxwPRc1C5W0fJywJ98UwsOGfPWJXfz2vjDE.webp?r=2d3",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Hızlı ve Öfkeli 5: Rio Soygunu şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-5",
        "title": "Nuh: Büyük Tufan",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABXTDaD1nm_LBcDuoxN5yh7hcdF5M4urntsGYkZ4Bf6p8CaQYn2nMy4ORZcxjyoTnOa5hJm9DgCiAYGL7_rBHPBG3Y1f8vpwQ-u4.webp?r=9d9",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Nuh: Büyük Tufan şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-6",
        "title": "Aquaman",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfRKw2xjxGgM7qtcMKxk85yCR_CE1TMgswjr90DYwDkySM6HRJe9ey07lCoc3JkOSzM0CeZWnXqyeP_NfY9zBkKDKw1RZHGE09M.webp?r=d5e",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Aquaman şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-7",
        "title": "Şimdi ya da Asla",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZlpgLZIwHyz37N_FesY68obBe238jGmZc2-nKZeIbfFLDscIPtHE-co2OLAgoR1CYZvLQ15ullPBKRL2o-GU9xy2JWd-QJ_BFI.webp?r=dc5",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Şimdi ya da Asla şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-8",
        "title": "Sahil Güvenlik",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcNWcsi6gFSfK1x4hCrd7kkCATxBXymdQxAzJukp4PKhG5y90006LeGziMhzlyS_h2PYQHlx0Gh1894A3wzF-SsQ6QO-zCE9wqk.webp?r=47f",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Sahil Güvenlik şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-9",
        "title": "Siyah Giyen Adamlar",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdPFdGkoFVOym5JvV5KnfvO_qQVUJldASAzOgz8LwYB2HQdtUTFR6-fx54SOL5A6o2YUt3r85TOVjNvGrd83gnOyWDdwbdF-PgM.webp?r=1d2",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Siyah Giyen Adamlar şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-16-10",
        "title": "Çatlak Profesör",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfCUbpcttk_U3s0GO6tsFNPj08yrL-0RTwPsc8-kwqeOl2fHq5pt7POEOB2l4thR2x-8kTI8PwSRa2TmIfcecUDBWqEQJ9w6sz0.webp?r=89c",
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "Gişe Rekortmeni Filmler"
        ],
        "desc": "Çatlak Profesör şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-14",
    "title": "Hollywood Filmleri",
    "type": "standard",
    "items": [
      {
        "id": "net-14-0",
        "title": "Bebek Bakıcısı",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcp4Fabf3NSpqrwQeEvAZWh2caFMtl2sOoSxi4PIDhK0kD3DyAknczRdBgvUXPZ4IEz2UV_xCqe0maCD1niAcf1b-1P_ec46nMI.webp?r=683",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Bebek Bakıcısı şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-1",
        "title": "İki Fıstık",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWSRWEmS5Nr5ZFj6J220onR2Mxl7GiIsViyb1_174hT7KBJ3MYf2gXQSUSwhCyIGNru_ZoCt9XfO_alyRqYZFdJD9nXrd9s8stU.webp?r=450",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "İki Fıstık şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-2",
        "title": "Ayı Teddy",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQ1XjAu3HJ_aAI549-9IkamtWoBLA04BGsoQYL-kZmkbmHRZ3I6ZTMguE-ojR3_vF0WruxIwTqkdLAaH9WnTEY40qNYAeq-py-w.webp?r=c19",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Ayı Teddy şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-3",
        "title": "Red Notice",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUWd9ogZxiKi5rkBbsnF2gcdKGxPCIValBlPRoDEA3700Iwgmi8yk82fLqHXAXsUgaBBxF8_wYV0Eten0eZpZGX7TvhVoWqbXnI.webp?r=37f",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Red Notice şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-4",
        "title": "Gizemli Adaya Yolculuk",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABarsxBDFmYNrhJD2MyViduXnZm9-rm6gUj2gRz8ppx1X5EyMA5iLXInA4i8rVmug9NgaXrAE_9RHJJxiF0N3cOpQXGkw11OO6gI.webp?r=72d",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Gizemli Adaya Yolculuk şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-5",
        "title": "Yaralı Yüz",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABaWqnC3FgIP83Oew3eO1VJ7R7NWG1muytwN7slT6TacqxilOj4330u8KCDtcXIbDbkVH2c41uzFyfYF1TmGF4v52rbRRsUwz4rPwkI7I0Mp-h2VG8CdZgGvO7FFL68ozd11wBHDQ00poyPVC7yN3SA8kIFJlygtBTUfc6WFo_-7VevAwptn5jglMuMc.webp?r=049",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Yaralı Yüz şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-6",
        "title": "Suicide Squad: Gerçek Kötüler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABVg6ck5aL_v7x1faCRzDrG_Bu-wZyuRCrfmgv2B0w4K0qckCu1o5psmbCnfWS787P_eBYI4pw2oxGSGOJBlYLGj8z-A52xr9Jqw.webp?r=6ce",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Suicide Squad: Gerçek Kötüler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-7",
        "title": "Mumya",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYlfygwTjS-Q8WjG_2zU6VHsJId6m-BxQC2dIVKa8yw6gKiaRWuj_MHiu9iyKYmLrMbkAGgF_5Ud553jdKB-uwEhh4XWm7XoO-E.webp?r=56c",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Mumya şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-8",
        "title": "Önce Kadınlar",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABXKPIVbTN_okxBbpa2ogo6SG4EXtestnVW8RsvMJoSp5tfNGwC5v0DWZfHAPRRbJKwd3D6agPA_vSOK5eLlxPWWOhj9wnUXPimo.webp?r=2d6",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Önce Kadınlar şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-9",
        "title": "Dünyanın Merkezine Yolculuk",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUh0ZPAjTRo51zl2YID3Fikjc1iq4oLsDvo4O7x4PnravSJ-tmKQl6N_v3X8NUHaJlVP5A7m_9MRHB6NB9DgWVmh1f_6M7LZFtk.webp?r=7f6",
        "match": "%98 Eşleşme",
        "rating": "18+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Dünyanın Merkezine Yolculuk şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-14-10",
        "title": "Hızlı ve Öfkeli 9",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQeI8ifr7TT3nrM0EK0H5sIuBXZFF6hK-RdPoOi_Qgx9eNp-o0Le8E6US2MCw41HHkH_Ut8HHk0VJjl1W7MwvTwT82pb36v__NY.webp?r=ed6",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Hollywood Filmleri"
        ],
        "desc": "Hızlı ve Öfkeli 9 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-5",
    "title": "Akıl Oyunları",
    "type": "standard",
    "items": [
      {
        "id": "net-5-0",
        "title": "The Mentalist",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABTiGtB9tRx5SpGD6_E4nF57q08x7rS_H2eyNQShWVWTp_r7aI-842jKL817fyrBuKBH0wdfuArnKY09UvhmTZwykLnOyjVWfv4T6sUlbKcxQjllsw7ekx3rHGBU9U3Wo0l_eC26tuKVds651.webp?r=c86",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "The Mentalist şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-1",
        "title": "Cassandra",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABVk9cF7u_4w1cJzUhamDuoxCZkEZdf6r-cmx_UG8mTClFbTIC_YqZMeoSZj9OJeO33KpixXa2i1qLknBJLWnIeHRWbg6ebx9NBU.webp?r=f44",
        "match": "%98 Eşleşme",
        "rating": "18+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Cassandra şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-2",
        "title": "Kübra",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfdq_6oHPdYIBWAF6ok7H-TzVhGsxNKprImNjGSqux3HUWi_qQEJyoGYaD_QX69e9o6G_NG-HRx_M0sByURh1tme_ZGJ8cD3xn4.webp?r=32f",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Kübra şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-3",
        "title": "Freud",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABS7zB0c0Xak4Ntr_-gKLVePuAg3Z_R2Wz-WM3Fw1ZeyG_ISZCGrddwAy3gGff1nFhs_Svkzr_aM4VM8ErbUzVeKpMo5kHMZyccE.webp?r=610",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Freud şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-4",
        "title": "Joker",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABXeQp9UvcqEahIGhI9WScTrxwdDGfOfWv73ljbWJXXx-JCvXwCXu-CbQcyHRW8wUh-3aXVksA--sHTxP_bhtDtROrHXq6Y_6Kmw.webp?r=992",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Joker şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-5",
        "title": "Kötü Adamın 10 Günü",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABflqNaSFi3oFIZQJVsidPBriZc6ncv2aZb8MxER6AwUTRCldC6Tiu3F3D_FmhzhTkDvc78m4Tn55v1aZNnlzTGnpGdb4nG-8SYc.webp?r=275",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Kötü Adamın 10 Günü şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-6",
        "title": "Kelebek Etkisi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZVgRqXUXZRYRY-4FAJIwB4q3RD1deXAD0KgfC9_IwT7_cxNJwD-fCCY3uXETPo9MzYHARBDDfOOMvHiKJJmB2NEK2UapY37ikP9SXahR9MbSqCmW0O9KkYoUYjoREfLoS-xgpBGMpGGPD17IYHl8wd2KLkPpI4GEtvVJDl1IA.webp?r=8ac",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Kelebek Etkisi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-7",
        "title": "Miras Bulmacası",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZrQknuwjtNANq6Kq77Qw6TwlpX7eKIMUwo-J0ArWJ9nLQZYkBu1NdruBpIKn-tuAtZmaJxMhpmw1LzX6DETM8rqXVxz3Jkwkhk.webp?r=70c",
        "match": "%96 Eşleşme",
        "rating": "18+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Miras Bulmacası şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-8",
        "title": "Kuzuların Sessizliği",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWjv7EdPNqSCYme3EyKrjxuqtk1ge-8EPc7C8odPj21K-thmQwNPRnZ2eWSQLreNrg5C3Q2br6Hjjtua8o3QLMDDhmCE6Qw_CTO83d_raqwe-q14UMl95FKDgLvp54AqkhcbeDPmP2H0xGhJjrCpPge_1wOqKu8Ryq-iOKKXgQ.webp?r=e57",
        "match": "%95 Eşleşme",
        "rating": "16+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Kuzuların Sessizliği şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-9",
        "title": "Dövüş Kulübü",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWfq7N-mXOMjfr8Zu8Y7U33BrW8Civ5vZU95E7Jz8fXp7_e6I4gpiN3ShLb3YvMGCjZeLtYPnoHfSYYImFJoiqLFoknw9CVt4lk.webp?r=5b1",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Dövüş Kulübü şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-5-10",
        "title": "Başlangıç",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABRcER7-EAimKOE8JWs5QMORCfOh4eNNwwDknIlIaX7suBuoELdrCD3VomWCzbag67qRpWOu5LGjySkrdjlVAGsqq3yrnSUk-CYhwlGRrO9MCQNHWnXg1T1Kw3JhBvRnRh6eyzFcVnJKhd_rZmDQsc5ePN8BFRdyTNFhLzy8O1j9Y4Xj3q8k5alOrovg.webp?r=0d2",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Akıl Oyunları"
        ],
        "desc": "Başlangıç şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-18",
    "title": "Korku Dolu Diziler",
    "type": "standard",
    "items": [
      {
        "id": "net-18-0",
        "title": "The Walking Dead",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSk-G3t1NYYuwIIZjMRG58e3HPNoCHcbSecZWleiXVgKrn0sHih8KXcW8_KkCw1jJFQrHgLdjWlxWQRFUAjVgXjIM07l1Q6i2P0.webp?r=55a",
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "The Walking Dead şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-1",
        "title": "Stranger Things",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUXxDxGSGY6x9umdrtaUIS2_N9L-vWoXLbuwdJTDrrwRv6-_i9woVUtOnPgHPzJU3qrM9YpLOwrPJcgBUiWnxdfZACUp75T3v9A.webp?r=dce",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Stranger Things şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-2",
        "title": "Girigo",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYu8Bjl7gbYQxO34xKIaPb3FRL_WftI3I0AjVGXWVM4KaujfKI9xfcNARoryvzp2zJfKaQDPv_WvmBscp7oCByGLfYNfd62HB6Q.webp?r=592",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Girigo şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-3",
        "title": "The East Palace",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYC2QdKWLfjUENgyx7Fce5mwSD9dPLtQdTLoVMXS2Eh2fm9zdOwPvMeOnBY3gExFhouDuIQFdMP2kwRvbvzFjn93qksGUrR2xb4.webp?r=571",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "The East Palace şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-4",
        "title": "Glitch",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdmcQk3L-PbMzl4JloksNN5xU5EhPEN0TmIMiVecVRXSUxEOgCNa86wumoLWMSOk59ozAho4wsUUOYxN7ZlEuVInzfUBXHuOHF0.webp?r=aec",
        "match": "%96 Eşleşme",
        "rating": "18+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Glitch şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-5",
        "title": "Kingdom",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABV6xoAir7B9XRqorsqMrJeBt5rwpx8F5h8jB2f07XOxIHHVOE5zbhjavjllGF2xC3WwNHuW9DzAfBqwKqMuYa1SndLreavAmwRs.webp?r=b61",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Kingdom şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-6",
        "title": "Parasyte: The Maxim",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcEeNPzUrw6R5oUwPCxsc8VEhFHcM5XaqKZGNUy2mP4YIH6AnMt-Y4ISqyGPe0dAPWgodR6NIOKem5FQcHC26-uGGU88-zksziY.webp?r=d54",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Parasyte: The Maxim şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-7",
        "title": "Dracula",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcaw8DBMy0QUoWl74wKjgCiFUO8PZf748ythHZiF62J_xCi6M-LbFFmqgxfUneurtbQIszGUVXsFweWqApUSMZLPOOWG69hHGuM.webp?r=b12",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Dracula şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-8",
        "title": "The Haunting: Tepedeki Ev",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZPIiLTTd6eDQ4kWmkdXO0BKEtjPnKEK5JiHqXMlWGhWycFdsof2zheCE39bYGJMQlgLCa33il9YhNVoJjse2g7oNDgn6EdkGWM.webp?r=49f",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "The Haunting: Tepedeki Ev şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-9",
        "title": "The Haunting: Bly Malikânesi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWP6Daw0_hLFIXQxU9jPs0OVQ22GqAHqYX9P-PS5_5mjYqXsYQUajN_5brvosMbEcitP46BD5qSiSq0VWcSXlTv9Y-3aEtlcUwg.webp?r=325",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "The Haunting: Bly Malikânesi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-18-10",
        "title": "Gece Yarısı Ayini",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABVkl9h4U0tkpVbxpEQalibOPzfd5VTknDL80oh_sKBpiLbIOYKSu1ZGwoiObhhwWxnZfQM0tSx6Me-yEH-WD-dSfd5Zc-DyTB8w.webp?r=b58",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Korku Dolu ler"
        ],
        "desc": "Gece Yarısı Ayini şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-0",
    "title": "Çok Sıkıldım Diyenlere Özel Öneriler",
    "type": "standard",
    "items": [
      {
        "id": "net-0-0",
        "title": "Seni Tanıyorum",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABS5VBxpzhD2wKtJ3zrcq9n91OdQrtro8y8b9AKfgwjc7jSRftJLF3nvDtkz6dakd93xSy6qlDymwsWZZqW-DrXK1PDnQGnBN8dNfVppgzSFN8MkqvgigqXPuDb_H3hjWWpc8eCl2b9mCIA1W.webp?r=b90",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Seni Tanıyorum şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-1",
        "title": "Organize İşler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABTpZlhoDKmBcJu0Sge9DjGVYJpCGQos48e1MJv4LOiL3dWe4Jfr3RBMTfK98NS2lfs1p96IKFZ1Ddb6WB18NxSkkbhroqbwI_zfHGh043efts6VO3YS38W59v9WMXuk3e88UCOA0VuKH4knf7MXr4-3LGd43cx0yUgsok4Xr6bG9aFiUEwZ-mENFoSLA6XMxOoyLyXAcYRk9828QKw.webp?r=51e",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Organize İşler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-2",
        "title": "Lupin",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbowFjE41I2xDVf37Jx5PLimyLhSCqJp_Z0vF2LehdUK2K7UUdBnbkahNGTX8_ta-p9Cva5ilxYqxF34jp73eP4VMOdZki8UsG2AFAyu-qlS_GdlicyplGpJiDmfIWCBlOWjkQRpaJ1kMjlZtE-f-xZfD5TksOeDXDB3UxrJowjtkVLubtlSdaYjbAI1S8ehzNFdjCzR9DTbz1qnWSpxRg.webp?r=0a2",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Lupin şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-3",
        "title": "La casa de papel",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQC_SpFV2BNaM6s8JTAYHWuQFjxnLq-si9-ZmJd959qHjyLHsQN8KSKLSg-nIYCyKuCGRSRG-ywe59QgErs_cX_eVTEImIV2r8g.webp?r=131",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "La casa de papel şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-4",
        "title": "Ted",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABU2L8Hahxdhw3PvYfjsaD-WS0Jk8Sv8qMQfzm6Lenrk9rpD5_cAUmaTiSnrjDMs3i7ZzkdOSMQsKiwpx8ijYCszapNnL9g20Dr4.webp?r=462",
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Ted şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-5",
        "title": "Resident Alien",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABchMzaZMnKissOZVU1aBcJVK6josJTc-id7guYqhKdn-mVRFBhtdKN5eAgCH1LEPmtcjo_HqeZShHC4Mpl7usYQkR4E9c__fdrg.webp?r=62b",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Resident Alien şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-6",
        "title": "Ghosts",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYsbJbykXApx_VuMhtfc2DHJ8GfyS8jkrQIktxcye5XVzKm3bqNW00D7-OBzD___jGgApbBo7kk3YE-1dlX1uhaUKIqRjbpMCl8Tms3Et0pcZhn1OWMC70HO6tbXs0noMiZqyP87Xsm5AswY9qA7rFjlkHH2cW9OgfqnrDM.webp?r=360",
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Ghosts şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-7",
        "title": "Lucifer",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABban0512ybRJlEO3Ujfxb9FIvnx1LiaPK8SWSDKoczVQKdTL5pt2Qpzu1_q5mEsjH2Hh8IYUCwqUGPgdYCB91NP976Vu3fTRg6U.webp?r=fb8",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Lucifer şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-8",
        "title": "Squid Game",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdiylk6ZJdnK6liliADoFv2C49AZUPFY1TWyoXoBRJus8eluavoOzcAbx1QDKeDUD2BU0uqBgUKkmsR3dCSZq5kozltmEljh84w.webp?r=11e",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "Squid Game şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-9",
        "title": "72 Saat",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZmuTkWyGPLG182DcqO8kPZ4Iio_h1kKCkLhPqB3X3I-45ZeJzqZmNri4Vj33n6vZCQQfFiqZbDHboGSaRmo9LhPJWNQU9zRXKg.webp?r=2d1",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "72 Saat şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-0-10",
        "title": "ONE PIECE",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdor8L7oDLk3saS4k-0qQe8SecpZX-F_IMhNeEumQYU_9_6wIGwOi27yNN1TrFyAkKC6bekjCZt0offGng_lkKi5IfajWiuh20c.webp?r=2e8",
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Çok Sıkıldım Diyenlere  Öneriler"
        ],
        "desc": "ONE PIECE şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-19",
    "title": "Sadece Netflix'te",
    "type": "standard",
    "items": [
      {
        "id": "net-19-0",
        "title": "Cem Yılmaz: Diamond Elite Platinum Plus",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABS5oO6SYMYxjRXHuJ-fdi2wLYDHwtwnLz2LzAbB-0VJf2tsWJrNlS-xDnvFRv7aL0F1xaFMMOhAVgEaU4962TpI9gLaYPtFtgzE.webp?r=27c",
        "match": "%98 Eşleşme",
        "rating": "18+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Cem Yılmaz: Diamond Elite Platinum Plus şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-1",
        "title": "Azizler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABckW30vsWMNyLEnY285Q9tDjleoVjkH0MtTRAHxtJ0E7ANfHHvRR3sxMdJ1clbNPjSROvq73v1bk3I5khgKjnvbxzbWIMtu34eQ.webp?r=9bd",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Azizler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-2",
        "title": "Meteliksiz Zenginler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbK3Tvj6ajwbvcbVuZqww0eS9tG4JdZaAdDMAmYBOMoj289qNDTp4oy7Hk8VEV6DDRM13qAgDULAVx21k34cXvLPRRJtpSHtFz7x4q2mOGcSMVVjIc8F04ALw08t7D6jCM1vTsGiY2Lgm3j7VjMg-LkrFpXtjsrlAutpw9WfWg.webp?r=5e8",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Meteliksiz Zenginler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-3",
        "title": "Kuş Uçuşu",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABT3pvJT_WSOzUQhg6pxJyPxBAIQihueTLnvrcuY-Kk-icmlpnd5wEFHuj_XOiYkbI7ObdZjORtKLJAHHnkHrerHZoKFZ8f90oVc.webp?r=1c5",
        "match": "%95 Eşleşme",
        "rating": "18+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Kuş Uçuşu şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-4",
        "title": "Platonik",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSpuy4Aoo-rffDmMJhGFethrmbFrKK64XXkHWDC3VKJKF55JFUUZ21WlClhR7A-uzvM-HvEBOGeQMDL00kivsLLUObpytPTi0DA.webp?r=4d4",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Platonik şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-5",
        "title": "Ağaçkakan Woody Yaz Kampında",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZN928mVdLHzw6Ovx49EFhvORDyhkLybNbOfquD-lVkVhu8ErmQYNtMNTyKbq_jFzAZzSoKDXcZdgWjU8XcbcCYt-2KAC49VN8E.webp?r=7ce",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Ağaçkakan Woody Yaz Kampında şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-6",
        "title": "Aşk 101",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYNLmczWzFJjLHBqohNQICXW4onrkpOffcMdWhe03B2iEEbO-63yzfgO3dSgkl1I_c1psm5oCyO_aLF0EaPwWeEPYTV9o1UXmnE.webp?r=bd7",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Aşk 101 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-7",
        "title": "The Gentlemen",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYwnCEurPzsH7lOiKyiGCUPh9xcXJq8Gcpc92Z9lbbDURUfLHOxspSMSOoPgZbePNK5SpwA37pt1T1BkofVe6BiwZT7yZHiWvyc.webp?r=79f",
        "match": "%95 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "The Gentlemen şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-8",
        "title": "Ölümcül Kaçamak",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABRKxleUQUNy_2ff1muIO1UzWS3JA7mwqteTB_SZeVsQsUWhJyyqu6kw4yaSavtr6sU6fp3_qka632zjD7Z0bdyd4RhyoaubjCTc.webp?r=56c",
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Ölümcül Kaçamak şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-9",
        "title": "Stranger Things",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUXxDxGSGY6x9umdrtaUIS2_N9L-vWoXLbuwdJTDrrwRv6-_i9woVUtOnPgHPzJU3qrM9YpLOwrPJcgBUiWnxdfZACUp75T3v9A.webp?r=dce",
        "match": "%94 Eşleşme",
        "rating": "18+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Stranger Things şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-19-10",
        "title": "Mogli: Orman Çocuğu",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABatYk-lxAYu7lBml6McBWTs3k4Fppx8GFJYZPWC6NCMFTgeVVJKLYBVKhp6E3LW_fuzgbNyH6oPAhUFQMIdPUvvX6ikC3ypcrkM.webp?r=18d",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Sadece Netflix'te"
        ],
        "desc": "Mogli: Orman Çocuğu şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-6",
    "title": "Tekrar Tekrar İzlenen Diziler",
    "type": "standard",
    "items": [
      {
        "id": "net-6-0",
        "title": "Young Sheldon",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcYvsoBrQcttgGfFle7_4b4rsGSej-KTVdII21maq7z7iXtGevqM62ak4T66e5SikltJGzLq23pWY18RWio3hxxcAwAUSt4Zg2U.webp?r=722",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Young Sheldon şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-1",
        "title": "ONE PIECE",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdor8L7oDLk3saS4k-0qQe8SecpZX-F_IMhNeEumQYU_9_6wIGwOi27yNN1TrFyAkKC6bekjCZt0offGng_lkKi5IfajWiuh20c.webp?r=2e8",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "ONE PIECE şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-2",
        "title": "Wednesday",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbBZyKMOtMj2wDOifdbujonxj0lvt5S3HmgfGfhba_M79dsPSZITRCv5aJgshYuWGGBE0P0LqfQnQCnncHVpKN34RnZZmlTBgPU.webp?r=2e0",
        "match": "%96 Eşleşme",
        "rating": "18+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Wednesday şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-3",
        "title": "Squid Game",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdiylk6ZJdnK6liliADoFv2C49AZUPFY1TWyoXoBRJus8eluavoOzcAbx1QDKeDUD2BU0uqBgUKkmsR3dCSZq5kozltmEljh84w.webp?r=11e",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Squid Game şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-4",
        "title": "Avatar: The Last Airbender",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABW76r0JPhBt6huBlRAvASjo8V7wi-bRuT-vlfFtJtJH7CQtsp9pDH0D21m3SqTabj-5gTL9Qon2JlXbzGsDwI16C53TEMSf4Zec.webp?r=faa",
        "match": "%95 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Avatar: The Last Airbender şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-5",
        "title": "Friends",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABc-7vOs_5RpSti-ZVd_jMiGRj22djMFY6lVo9ChWE0G58060f2wgTVyFEWu-BXz-iY0n2gOYY4Z0T-pcCo9tw1eejFlfHJ8U-mA.webp?r=452",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Friends şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-6",
        "title": "Breaking Bad",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSFuEI05eGffN-BZrLPdU69PCH2QqP4BPau5j_ZbLvWC8WirUh8R-9-eg9llR8zNTOVdwD-Xnwm9hOVJBG708Wdyhn9LuhMYJsE.webp?r=01d",
        "match": "%98 Eşleşme",
        "rating": "18+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Breaking Bad şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-7",
        "title": "Genie, Make a Wish",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABT3w4Cku0PYcuWwf_BoYZzb5cI0ZIP2NhhPKe_YDke-nVGGqMsU_loCqanRR2hf4BzLbadl6fiWoNISlf7VcJ3mOiU6c4Y7PVPI.webp?r=235",
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Genie, Make a Wish şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-8",
        "title": "Vikingler",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABd4U786c9LHNMO3LxrFnqx44YI__FW56rW6z07HctlMHbi-REqRqtmRjXOdPafNnqKkWYMrXxY_iW4HWFr3549MihAb5Xl7fal8.webp?r=ade",
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "Vikingler şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-9",
        "title": "The Vampire Diaries",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABVHRXmci9-2Ssg5E52fbys0uV_T9yBpw8IiuzEa5q9HlKKLME0IUWhkxFhkdJjs08Q7438AeXnlQ0O5UasCH2R2VJfHtH_KdQJ0.webp?r=b6e",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "The Vampire Diaries şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-6-10",
        "title": "The Walking Dead",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSk-G3t1NYYuwIIZjMRG58e3HPNoCHcbSecZWleiXVgKrn0sHih8KXcW8_KkCw1jJFQrHgLdjWlxWQRFUAjVgXjIM07l1Q6i2P0.webp?r=55a",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Tekrar Tekrar İzlenen ler"
        ],
        "desc": "The Walking Dead şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-24",
    "title": "90 Dakikalık Filmler",
    "type": "standard",
    "items": [
      {
        "id": "net-24-0",
        "title": "Sadece Arkadaşız",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABaBEaDTX6QaYPkT3rFHY2B7mjHp76I9LQ53oT7Tz8CET9q3VwO8e_qAyFQ90lYkBWbo-924aTn2PY-052K5xdI44mThaY7OTw2U.webp?r=dd9",
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Sadece Arkadaşız şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-1",
        "title": "Adalet",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfEnimSgMM2QGu4gqLH9c-BNh-ETpyb6fQDzdg2rFC2Lyl_HLdoh2tNpniVPV1pN0v0vSrJE3jfSaZFsaTdtrphqzAwa4o8900CQt3XnM02ISh4ukRx_R7FYrVB6NKUx5fkRPIlpPHNKCxHhYfJqmjJJWJE5pnwsDdizPnj3RCfY-3ilmsudCgU3B6c.webp?r=b72",
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Adalet şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-2",
        "title": "Hep Yek: Düğün",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYzbcMz39Ag0nOZ3Fxs6vNFfnYo5RsiGbbK05Sx98iR5vKWs43qRBfZejXq9gRXQxbySOP6Ph3vQic1xzcc7VPbl5d9q3jsP3hU.webp?r=6d6",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Hep Yek: Düğün şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-3",
        "title": "Önce Kadınlar",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABXKPIVbTN_okxBbpa2ogo6SG4EXtestnVW8RsvMJoSp5tfNGwC5v0DWZfHAPRRbJKwd3D6agPA_vSOK5eLlxPWWOhj9wnUXPimo.webp?r=2d6",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Önce Kadınlar şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-4",
        "title": "Konuş, Havla, Değiş",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYc2xiaS6NRw2XNxXyIoxpjtjxSpvMUGVVZn4oQZykoaIj5X9hez-XJFfwyiP5BUpGge-i4GsEGxBzHf1Fcb-WGFWq8qrCHDXmE.webp?r=27b",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Konuş, Havla, Değiş şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-5",
        "title": "İstanbul için son çağrı",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABW1R8888mA7_ili405c7e8yr6k_yoO95cHVB9h5XM5Bs2ecKgioCeRt67IqoZUCFjK_--6bmGTfnQBOuPeJB9GFI0EZQIdm5Bbg.webp?r=a09",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "İstanbul için son çağrı şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-6",
        "title": "Pembe Panter",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABTJTakkfPRn2KBdLflGNppOOWwcHXJMBwfVhqrhOq16Y-UtTNiT8T2A5poWryUiL4TiQCsMlrcQGKYVx16M1yvchHx7IGtNZCoWrRkHO9YgV6A_OMkBpN-ybrHW80QN8wm49Nv9uS8JZN9XoULaZyiDCHiWkHz_o5y2ctHqtrnL_p_SLeUFt9qU9gjk.webp?r=344",
        "match": "%90 Eşleşme",
        "rating": "18+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Pembe Panter şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-7",
        "title": "Metruk Adam",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABcF3Hh47T7TP7mTWX1cL3O7tG4BOLByXSmd8QvAnKzMrabtm_P0_1E-fnMmmNduy64UzJY5ZEI2KMJ6xv0pEDRI3Ev7_lSKZmKk.webp?r=b8f",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Metruk Adam şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-8",
        "title": "Kanguru Jack",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUdteCUHaUjip1tZjZs7snkFoloe1wnIMCtcXEgwUWurfz6HL6k_PJ0H5qYQJn84z7cXAx-VsIjKxqM2Mz61aq73rWKEY-Cw7n0.webp?r=6b2",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Kanguru Jack şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-9",
        "title": "Dünyanın Merkezine Yolculuk",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUh0ZPAjTRo51zl2YID3Fikjc1iq4oLsDvo4O7x4PnravSJ-tmKQl6N_v3X8NUHaJlVP5A7m_9MRHB6NB9DgWVmh1f_6M7LZFtk.webp?r=7f6",
        "match": "%93 Eşleşme",
        "rating": "18+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Dünyanın Merkezine Yolculuk şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-24-10",
        "title": "Ana-Oğul Balayı",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABR4AHAcsd6EafwAfHugnVDxTVIb7lnHxds3VHbEm4SSchiCaTGcrFj3Y_XwM1N5m_jziq-z8iXCtKDfXW1_XuTMdzLBtsVzN2jM.webp?r=15e",
        "match": "%96 Eşleşme",
        "rating": "18+",
        "genres": [
          "90 Dakikalık Filmler"
        ],
        "desc": "Ana-Oğul Balayı şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-1",
    "title": "Kahkaha Tufanı Filmler",
    "type": "standard",
    "items": [
      {
        "id": "net-1-0",
        "title": "Soyut Dışavurumcu Bir Dostluğun Anatomisi Veyahut Yan Yana",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZUn1-M1OIuU_zYDuirM_Dx2groeATcmnWOngO6uHLYZU_WvQiB9_ippTpzXZBrimzt_HbN_R4jskyBq1OAmPlJHSUxKXSMZ9fg.webp?r=826",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Soyut Dışavurumcu Bir Dostluğun Anatomisi Veyahut Yan Yana şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-1",
        "title": "Bursa Bülbülü",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABc95V7UTrm9VHmuNlks7opzj7shjkVPW6l5jKoeBWv-GaFGzPYIdLbo5-9FIH88fqCQfeomNfAQJOy_hcb3HAL_gvuuFL2wHiss.webp?r=775",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Bursa Bülbülü şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-2",
        "title": "D.I.S.C.O.",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABeHYRGXqGN1dGqKrj0OGqvvMrOznYDOUMzLZa0x3Mn955TFrsInJWZfVZbhegBJZTzQjkwMEfUhJVqkm4HSq1VUZvE8KID9p-6Y.webp?r=378",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "D.I.S.C.O. şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-3",
        "title": "Tur Rehberi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYWjtPOBVDgp-p8wWsbt2F4CQRDZWfq-3anbR-QRWjeRQ43VYeLm_5DYg0SEJbh9LPDE5pDVLVg38JCmcKy8a7RYEXxMTIQe-Og.webp?r=465",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Tur Rehberi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-4",
        "title": "Kardeşler Araştırma",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSHPwh6ut1nk27SxqiJ65sx9W_lxvrvuCplxNzBOXr32E6_uiS6fpZ2pJIQKq64NOzsfpke4JKiv3vloy7kRVKCSKPGXYTla2Gc.webp?r=3ae",
        "match": "%94 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Kardeşler Araştırma şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-5",
        "title": "Mutluyuz",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABe-FgUyD3crXN1ykx_nlPCggCXiQ-FVgNb7zIDdXEDe4UJkaRf9bCpTP1NuonW9HQ5OAWvJE-yRpFq2unmoCNa-MyvyIBXpHxFg.webp?r=dec",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Mutluyuz şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-6",
        "title": "Gelin Takımı 2",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABVes3I5_d-FvkoxBI3oJpX4CD_B3l4DolUK-4gGoCMggMNibmc8BVduKCDLZ7pGOmj48Yvy6aSCTxH0ZSWzhqvBmqkMwEb5hUFY.webp?r=e16",
        "match": "%98 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Gelin Takımı 2 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-7",
        "title": "Sağ Salim 3: Ölü ya da Diri",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfHCpzGw189tJU8OXke3OCF2mWfOBSr_TjkjutE1fKuGEEi8dxY73niRaFr3M55D0bBMQvLUKFrrHXrLXQBoHE_O1Xf1XBthRaQ.webp?r=ef3",
        "match": "%93 Eşleşme",
        "rating": "18+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Sağ Salim 3: Ölü ya da Diri şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-8",
        "title": "Çakallarla Dans 7",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZ3jUwDgmj92KcVB2_P9qX26jobM0JqWhtADPRePQEZ5uOY7T2eyoD0hO1OKd_y1lEqWIjkAoLhZJ1ElH8R_nyDRQTx8GWxxlkc.webp?r=519",
        "match": "%97 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Çakallarla Dans 7 şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-9",
        "title": "Takıntılar",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZ7rAokGl_aFY9MmW83qlYfs9ejbwxwa4DrqtIssBZLvvdUjCDIxp30Pq_fI3bnIATq_i8XFo8cfjerDNZUMgO2anaCoW1OtzhQ.webp?r=251",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Takıntılar şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-1-10",
        "title": "Buz Devri 4: Kıtalar Ayrılıyor",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABZg6PMmOc2u2Jff5HKOCwU2GUFtpUcAq_y8fGIGX_uKenBZFNVfE3uIY83qK8-YPkQu-UNjOnh93JilpZrooIfaW8mtssw_RuMEF3ojTf0kXdEcFSiuQiyQuI-weeCe7owX7trlGiEcO3kPuLqvgEwnNTBKXmK9S8pLqmZVB-ptbHMePgF9AGbT5jnlXkcupxmshOrhq8M1qPs_MNw.webp?r=96c",
        "match": "%94 Eşleşme",
        "rating": "18+",
        "genres": [
          "Kahkaha Tufanı Filmler"
        ],
        "desc": "Buz Devri 4: Kıtalar Ayrılıyor şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  },
  {
    "id": "row-26",
    "title": "Drama Dizileri",
    "type": "standard",
    "items": [
      {
        "id": "net-26-0",
        "title": "Pablo Escobar, Kötülüğün Efendisi",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABSaVZT8zwaKH7wkWQsyMwaZVZvIjOxNpHNE3E_vQnjbvHCpXD5bsjyIbDmpzSbAhSxcIMi5WHQLFtS4q6a6PQSbsgSm0mjHXYwA.webp?r=a0f",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Pablo Escobar, Kötülüğün Efendisi şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-1",
        "title": "Doctor X: Mafia in White",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYaSg4zs36DfwqJfXe2KDx2x8W0ZeQFeO-HTEWkZ1Bj5OlSMMX2lA8GvisG7aoNIjj_KJC8gAI2RO5Zr_lmR4Z44ymJwd0_FkQoYMEcNM3gyy6nJMfZZOmPpjnH0qXz_MYL60ItArhsha41lLe9vA0w4RUIo0lFniEbKwAIWQT381f1dBXhPowwz9z7bAXZPDj8bdbfbf32fo9dzVtcZgB2-Y3NeOPV0CBbIaG5fm6LrcVrUE-kdXaTLSwr2F7anoIDo4LybM0Bse-DhENYtAGCRVwrTkVulwD0GxkoBRl5cabKmn6utoIXdpTRcyyuw0g.webp?r=6c8",
        "match": "%97 Eşleşme",
        "rating": "18+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Doctor X: Mafia in White şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-2",
        "title": "Smallville",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWtoF7u9ZyMg0f-Y8qNQbX1NvLYBLKY9FCzQdvo2zh4dnrv4UbAKrHaP-jvB1K08gNp7l2n1HntsiMYAROUBJAxzOmnJiszyXkc.webp?r=8e4",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Smallville şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-3",
        "title": "Şahmaran",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABc7aXiNYzBI6XxZL7V0yaCBp172ioV9_j0d391WeWNZ1tkG61AZzO9bkc36qo3GGAg6eqJc3zCdnnHe0VBZrxFeZLFDhHmqdWhU.webp?r=4ff",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Şahmaran şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-4",
        "title": "Manifest",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABWgPIdKlU1XffhsvJOUlvOkniasQejS_pm_BFNgJaXZUwelJxa1Pwit2U6sKE6awrq64_yXFH1dAhonNnZcabj-OeOFJat3ko3U.webp?r=f18",
        "match": "%92 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Manifest şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-5",
        "title": "Bloodhounds",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABRHdCkXVBxJRZnZqD91xPE5EbwBzKuPbtdY8lWGb82lVfWzHHgaF-eUejScsAa6MhbaQORXMQ-kuO5GIoZKBvvrXft1Y02B72Sg.webp?r=2c7",
        "match": "%96 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Bloodhounds şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-6",
        "title": "Matlock",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbt6Her1exJiCAu7bbGXKZTsX_pXLqOKyWVNx9jFcQ4DWjzmZWBcza15anTAGgFlHjye1EJbLTc4nMR1oc7AHPHU_fcuD-K-dmcrWb1_NuZ5b7ljF-jZv4_sXSENGWNUo6kjYf0gFqZeXWuhHUh3h39ViQLqFM4-s9p122dFeA.webp?r=96c",
        "match": "%93 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Matlock şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-7",
        "title": "Suits",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbA_S7fk8uAuMGp8S3wPUXMosecu5IS9ve7HZv-iufMIbmYvSmyt_Qot-L6_eIo2VwcO1Z8J9_s9Sd-UKdQ0hxBOPPH7MLvVm9E.webp?r=e4d",
        "match": "%90 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Suits şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-8",
        "title": "All of Us Are Dead",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABeOeOpZZHPLgvSHxeSA4BlGHkpy5en-W13zqbmkM1LlKKXgKxXqx53W3-GXaaQKUaHuEHKxqqZ7gxzfdGSIQOefrNtonlwdFPHw.webp?r=7ec",
        "match": "%92 Eşleşme",
        "rating": "18+",
        "genres": [
          "Drama leri"
        ],
        "desc": "All of Us Are Dead şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-9",
        "title": "Below",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfwSfvUvY0kl5y2GkA2Zf6cMqQh1xFcril_y2Iv65DdVwYww4vonE045cskbg6S6ZygGj6Qrj40b0sGP-L-jweyI_tkya9FgRN1KiTYUPCAnHdgbQkGahCHVE-w7Hz9y1VRWUNPXrnaCkE6UB8agX1JTEfgs5wz9XWEqtjZZLEdYVqExr4l5t1dUgEseGIfbkG60Z9lTM3ewBa7pbg.webp?r=b71",
        "match": "%91 Eşleşme",
        "rating": "16+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Below şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      },
      {
        "id": "net-26-10",
        "title": "Dexter",
        "img": "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABUYW3AAzAOVRMDuopcseIRZxN74jkXjKxORRfTD3wBGWhrkguY9oMQEfngJNfFLxJxrxHDw9uKyDz71hOMlXrf8mypnDTTke0H4.webp?r=2ba",
        "match": "%91 Eşleşme",
        "rating": "18+",
        "genres": [
          "Drama leri"
        ],
        "desc": "Dexter şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım."
      }
    ]
  }
]
};
