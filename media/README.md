# Demo medya kütüphanesi

`MEDIA_ROOT` varsayılan olarak bu klasördür. Buradaki dosyalar yalnızca yerel
oynatıcıyı ve resolver'ı test edebilmek için var.

| Klasör | Dosya | Kaynak / lisans |
| --- | --- | --- |
| `big-buck-bunny/` | `big-buck-bunny.mp4` | *Big Buck Bunny* — © Blender Foundation, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). MDN `learning-area` örnek dosyası. |
| `frog/` | `frog.mp4` | MDN `learning-area` örnek klibi (CC0 / açık lisans). |
| `monster/` | `monster.mp4` | MDN `learning-area` örnek klibi (CC0 / açık lisans). |

`big-buck-bunny-trailer.mp4` bilerek aynı içeriğin kopyasıdır: dosya adı
`trailer` geçtiği için resolver bunu **fragman** sayar ve varsayılan olarak
`is_trailer: false` çıktısından çıkarır. Böylece fragman filtreleme davranışı
uçtan uca görülebilir.

## Kendi medyanızı eklemek

```
media/
  Film Adı (Yıl)/
    meta.json          # { "title": "...", "year": "1922", "poster": "https://..." }
    film.mp4
    film-trailer.mp4   # opsiyonel, otomatik olarak fragman sayılır
```

`MEDIA_ROOT` ortam değişkeni ile başka bir klasörü gösterebilirsiniz:

```bash
MEDIA_ROOT=/mnt/nas/filmler npm run dev
```

Kütüphaneye yalnızca dağıtma hakkına sahip olduğunuz içerikleri koyun.
