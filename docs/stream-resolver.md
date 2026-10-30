# HubPlay Stream Layer

Film **kaynaklarını** (asıl oynatıcı akışlarını) bulup oynatılabilir hale getiren,
sağlayıcı tabanlı bir scraper + resolver katmanı.

```
lib/stream/
├─ config.js                 # merkezî User-Agent / Referer / Origin yönetimi
├─ http.js                   # fetch + timeout + retry + (opsiyonel) browser fallback
├─ classify.js               # fragman tespiti, akış tipi (.m3u8 / .mpd / .mp4 / embed)
├─ hls.js                    # HLS master/media playlist parser + varyant seçimi
├─ resolver.js               # sağlayıcı kaydı -> { title, poster, is_trailer, sources }
├─ range.js                  # HTTP Range parsing
├─ dom-scraper.js            # iframe / player config / JSON-LD çıkarımı
├─ registry.js               # sağlayıcı kayıt defteri
├─ cli.mjs                   # komut satırı arayüzü
└─ providers/
   ├─ internet-archive.js    # public-domain sinema (archive.org)
   └─ local-library.js       # MEDIA_ROOT klasörü (kendi arşiviniz)
```

---

## 1. Çıktı sözleşmesi

Her şey tek bir şekle döner:

```json
{
  "title": "Big Buck Bunny",
  "poster": "https://.../poster.jpg",
  "is_trailer": false,
  "sources": [
    {
      "server": "Internet Archive",
      "file": "https://archive.org/download/.../movie.mp4",
      "type": "mp4"
    }
  ]
}
```

- `is_trailer` her zaman `false`: fragmanlar varsayılan olarak **ayıklanır**.
  `includeTrailers` / `?trailers=1` ile geri getirilir (o zaman ilgili kaynak
  `is_trailer: true` alanıyla işaretlenir ve üst seviye alan yine `false` kalır).
- `type`: `hls` (`.m3u8`), `dash` (`.mpd`), `mp4` veya `embed` (bilinmeyen host).
- HLS kaynaklarında ek alanlar: `quality`, `verified`, `variants[]` (kalite
  merdiveni), `segments`, `duration`.
- `meta`: `schema_version`, `provider`, `year`, `imdb`, `description`,
  `generated_at`.

---

## 2. Fragman yerine asıl kaynak

Üç aşamalı ayıklama:

1. **Host bazlı** — `youtube.com`, `youtu.be`, `vimeo.com`, `dailymotion.com`
   gibi yalnızca klip yayınlayan hostlar fragman sayılır.
2. **İsim bazlı** — `trailer`, `fragman`, `teaser` geçen URL ve dosya adları.
3. **Açık işaret** — sağlayıcı `isTrailer: true` derse itibar edilir.

Kalan her şey "asıl kaynak" adayıdır; `resolveStreams` bunları tiplerine göre
işler. Bilinmeyen bir host `.m3u8/.mp4` ile bitmiyorsa `embed` olarak döner —
oynatıcı bunu iframe'e verir, sahte bir "direkt link" üretilmez.

---

## 3. HTTP & başlık yönetimi

Tüm istekler `lib/stream/config.js` üzerinden geçer:

```js
import { registerHostRule } from "@/lib/stream/config";

registerHostRule("cdn.example.com", {
  referer: "https://app.example.com/",
  origin: "https://app.example.com",
});
```

- Öncelik: **varsayılanlar < host kuralı < istek bazlı override**.
- Alt alan adları üst kuralı miras alır (`a.b.example.com` → `example.com`).
- `http.js`: `AbortSignal.timeout`, üstel geri çekilme + jitter, `Retry-After`
  desteği, 408/425/429/5xx için tekrar deneme.
- `setBrowserFallback(fn)` ile SPA tipi sayfalar için isteğe bağlı
  Playwright/Puppeteer köprüsü takılabilir. Varsayılan olarak kapalıdır ve
  bot koruması aşma amacı taşımaz — yalnızca JS ile render edilen, erişim
  yetkiniz olan sayfalar içindir.

---

## 4. Resolver

```js
import { internetArchiveProvider, resolveFromProvider } from "@/lib/stream";

const payload = await resolveFromProvider(internetArchiveProvider, "night_of_the_living_dead");
```

veya elle:

```js
import { resolveStreams } from "@/lib/stream";

const payload = await resolveStreams({
  media: {
    title: "Örnek Film",
    poster: "https://img/poster.jpg",
    sources: [
      { server: "A", url: "https://www.youtube.com/embed/xxxx" },        // atılır
      { server: "B", url: "https://cdn.example.com/master.m3u8" },       // açılır
      { server: "C", url: "https://cdn.example.com/movie.mp4" },
    ],
  },
  maxHeight: 720,
});
```

HLS master playlist bir seviye açılır: `pickBestVariant` en yüksek kaliteyi
seçer, `maxHeight` verilirse kapak uygulanır. Playlist okunamazsa kaynak
`verified: false` + `resolve_error` ile döner; istek başarısız olmaz.

---

## 5. API

| Uç nokta | Açıklama |
| --- | --- |
| `GET /api/search?provider=&q=&page=&limit=` | Sağlayıcıda arama |
| `GET /api/stream/resolve?provider=&id=` | Kayıt → oynatma sözleşmesi |
| `GET /api/stream/resolve?url=` | Tek bir `.m3u8`/`.mp4`/embed URL'sini sözleşmeye çevirir |
| `GET /api/local/<path>` | `MEDIA_ROOT` içinden Range destekli dosya servisi |

Opsiyonel parametreler: `maxHeight`, `trailers=1`.

```bash
curl "localhost:3000/api/stream/resolve?provider=local&id=frog&maxHeight=720"
```

Hata gövdesi: `{ "error", "message", "details" }`; 400 (eksik parametre),
404 (bilinmeyen sağlayıcı), 422 (oynatılabilir kaynak yok), 502 (upstream).

---

## 6. CLI

```bash
node lib/stream/cli.mjs providers
node lib/stream/cli.mjs search "metropolis" --provider internet-archive --limit 10
node lib/stream/cli.mjs resolve local big-buck-bunny
node lib/stream/cli.mjs resolve internet-archive night_of_the_living_dead --max-height 720 --json
node lib/stream/cli.mjs resolve url https://example.com/master.m3u8
node lib/stream/cli.mjs playlist https://example.com/master.m3u8   # varyant tablosu
```

---

## 7. Yeni sağlayıcı eklemek

```js
// lib/stream/providers/my-source.js
export const mySource = {
  name: "my-source",
  label: "My Source",
  async search(query, { limit = 24 } = {}) { /* -> Item[] */ },
  async getMedia(id) {
    return {
      id,
      title: "…",
      poster: "…",
      year: "…",
      imdb: "…",
      description: "…",
      sources: [{ server: "…", url: "https://…/master.m3u8", isTrailer: false }],
    };
  },
};
```

`lib/stream/registry.js` içinde `registerProvider(mySource)` çağırın. Search
sonucu şekli: `{ id, title, year, poster, imdb, description }`.

---

## 8. Hukuki çerçeve (önemli)

Bu katman **yalnızca** şu kaynaklar için tasarlandı:

- kendi barındırdığınız medya (`local-library`),
- dağıtım lisansına sahip olduğunuz içerik,
- public-domain / açık lisanslı arşivler (`internet-archive`),
- erişim izniniz olan, otomatik erişime kapalı olmayan sayfalar.

Telif hakkıyla korunan filmleri izinsiz dağıtan siteleri hedefleyen bir
kaynak çıkarıcı **bilinçli olarak** eklenmedi: bot koruması aşma, obfuscated
oynatıcı çözme ve bu hostlara özel embed kazıyıcıları yok. `docs/` altındaki
bu not, kodun ne yaptığı kadar ne yapmadığını da tanımlar.

---

## 9. Test

```bash
npm test
```

Kapsam: başlık birleştirme önceliği, fragman tespiti, HLS attribute parsing
(tırnak içi virgüller), master/media playlist ayrımı, varyant seçimi ve
`maxHeight` davranışı, çıktı sözleşmesi, fragman filtreleme, embed fallback,
DOM çıkarımı, yol kaçışı koruması ve HTTP Range parsing.
