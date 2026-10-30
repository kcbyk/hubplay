// Netflix Catalog Data extracted from live Netflix Browse session
const NETFLIX_DATA = {
  userProfiles: [
    { id: "p1", name: "𝐈𝐍𝐙𝐀𝐑 𝐇𝐞𝐫𝐨", avatar: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwKc51W40OxvqxnqrxZxRRGcm8O8PSCnRXOET3qOBAZu8Ukj05UhhK-EZHTnJM344LGZETv926NOJANKj91umaaaNTAK4.png?r=201", isKids: false },
    { id: "p2", name: "Birol", avatar: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdIZzbStdtkdCwS-tIgssEFLHpumEgm354stPxYLocYGddu9XYUpGuyqdaCQcL06mRNsjY2BgG48fe60XmavqaWUXA.png?r=1d4", isKids: false },
    { id: "p3", name: "Şevkiye", avatar: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW3_XWJ8xL3a1fQjF2bF2h7W8MhN7-W9nB-f_wzFhDqB_N1bW3R4mX6Zc8dF4wR5.png?r=54d", isKids: false },
    { id: "p4", name: "FΛLLΣП 𝐇𝐞𝐫𝐨", avatar: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQ0aFqfJk4k9o_k9Y0j5rF7eK1lM2n3o4p5q6r7s8t9u0v1w2x3y4z5.png?r=88c", isKids: false },
    { id: "p5", name: "Çocuk", avatar: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcLzW_Kx6Zf0Yy2H3q1lM2n3o4p5q6r7s8t9u0v1w2x3y4z5.png?r= kids", isKids: true }
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
    trailerUrl: "https://www.youtube.com/embed/s_3B5bN5hU0?autoplay=1&mute=1&controls=0&loop=1"
  },
  rows: [
    {
      id: "continue-watching",
      title: "İzlemeye Devam Et",
      type: "continue",
      items: [
        {
          id: "cw1",
          title: "La Casa de Papel",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABTtqegIn6Wx8fphxn8hEtgi9HrXCPnpKr_dLQ9-x5q792OiVoqSN4PWwLLsFm1bUo5MmGINoUVXtTcrQ4TMzeQmLo0Cn4LwQ5mk.webp?r=8e7",
          progress: 75,
          season: "5. Kısım",
          rating: "18+",
          match: "%99 Eşleşme",
          genres: ["Heyecanlı", "Gerilimli", "Aksiyon"],
          desc: "Sekiz hırsız, rehineler alarak kendilerini İspanya Kraliyet Darphanesine kilitler. Olaylar geliştikçe bir suç dehası, polisi manipüle eder."
        },
        {
          id: "cw2",
          title: "Lupin",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABbowFjE41I2xDVf37Jx5PLimyLhSCqJp_Z0vF2LehdUK2K7UUdBnbkahNGTX8_ta-p9Cva5ilxYqxF34jp73eP4VMOdZki8UsG2AFAyu-qlS_GdlicyplGpJiDmfIWCBlOWjkQRpaJ1kMjlZtE-f-xZfD5TksOeDXDB3UxrJowjtkVLubtlSdaYjbAI1S8ehzNFdjCzR9DTbz1qnWSpxRg.webp?r=0a2",
          progress: 40,
          season: "3. Kısım",
          rating: "16+",
          match: "%96 Eşleşme",
          genres: ["Zekice", "Sürükleyici", "Gizem"],
          desc: "Kibar hırsız Assane Diop, adaletsiz bir aile yüzünden babasının intikamını almak için harekete geçer."
        },
        {
          id: "cw3",
          title: "Squid Game",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdiylk6ZJdnK6liliADoFv2C49AZUPFY1TWyoXoBRJus8eluavoOzcAbx1QDKeDUD2BU0uqBgUKkmsR3dCSZq5kozltmEljh84w.webp?r=11e",
          progress: 90,
          season: "2. Sezon",
          rating: "18+",
          match: "%97 Eşleşme",
          genres: ["Karanlık", "Gerilim", "Dram"],
          desc: "Para sıkıntısı çeken yüzlerce oyuncu, ölümcül çocuk oyunlarında yarışmak için tuhaf bir daveti kabul eder."
        },
        {
          id: "cw4",
          title: "Resident Alien",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABchMzaZMnKissOZVU1aBcJVK6josJTc-id7guYqhKdn-mVRFBhtdKN5eAgCH1LEPmtcjo_HqeZShHC4Mpl7usYQkR4E9c__fdrg.webp?r=62b",
          progress: 25,
          season: "2. Sezon",
          rating: "16+",
          match: "%93 Eşleşme",
          genres: ["Esprili", "Bilim Kurgu", "Komedi"],
          desc: "Dünya'ya gizli bir görevle gelen uzaylı, Colorado'daki küçük bir kasabada doktor kılığına girer."
        }
      ]
    },
    {
      id: "top10",
      title: "Türkiye'de Bugünün Top 10 Dizi Listesi",
      type: "top10",
      items: [
        {
          rank: 1,
          id: "t1",
          title: "Berlin",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABWmL5282QindRs1gF7qooz-2b4NYRha5NevKjIl08gxVsqXdmLfTazzr75ORFFMGwZV-bN1tZDgPJNuY5bpg1mMix5tnouZP8NQu8XhK8Gy98sXdK0wQFmxMnRcJ4aPDs9koltSSTVwzJa0r2LcYkteeh1QOM8WeLSbn12v9Y2Bzu60.webp?r=c83",
          rating: "18+",
          match: "%99 Eşleşme",
          genres: ["Aksiyon", "Soygun", "Heyecanlı"],
          desc: "Berlin ve yetenekli çetesi, Paris'in en büyük müzayede evlerinden birinden 44 milyon avroluk mücevher çalmak için toplanır."
        },
        {
          rank: 2,
          id: "t2",
          title: "Organize İşler",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABZxPe4GZVOnNgM8n5WFWzaxcVdVZ9Sc9isxo1EqJm2_Cw5mid6mE4ko7XowM4Bx_RiRfL8Dp-Wd7nnWUu-C17K26lGJgH5M_92SHreagV2yahApTIL_rU77m2LCNCktwRgNqcCynaHWiHvEcgFpIRHslPhgnmKB-RLsAgy-0tP0.webp?r=b0d",
          rating: "16+",
          match: "%95 Eşleşme",
          genres: ["Yerli", "Komedi", "Suç"],
          desc: "İstanbul sokaklarında organize işler peşinde koşan Asım Noyan ve ekibinin eğlenceli ve aksiyon dolu maceraları."
        },
        {
          rank: 3,
          id: "t3",
          title: "Lupin",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABXE2oxOdIw2Sktie-xUWEFTfIBMefSxPEu8Ac-DE4fV4lbBN1KCWA7UB6z81wJX7xLZf-srtzDrqgp0Jww0KHSPWgs61cr3xIN4V.webp?r=398",
          rating: "16+",
          match: "%96 Eşleşme",
          genres: ["Zekice", "Gizem", "Macera"],
          desc: "Arsène Lupin'in maceralarından esinlenen kibar hırsız Assane Diop, adaleti kendi elleriyle sağlamaya kararlıdır."
        },
        {
          rank: 4,
          id: "t4",
          title: "Seni Tanıyorum",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABbTzAKEwkqPcNRwRChisC3WWBUeGqyay3nKZ4RKjp7ZL0QJSKQyjPC6gRm6sLpgKCoWm_qL4O463_KkQhXpp87tXZ3B9pMXiy6l3.webp?r=7bb",
          rating: "18+",
          match: "%94 Eşleşme",
          genres: ["Psikolojik", "Dram", "Gerilim"],
          desc: "Ünlü bir gazetecinin başından geçen gizemli bir roman konusu kendi geçmişiyle kesişir."
        },
        {
          rank: 5,
          id: "t5",
          title: "Katil Makine",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABbe9OTeVuc9ex4WDOXiOBN-45k9QwBRJ4FsNlaNAptUxYVa3274fHuSE-Vgdf12xFyi-FnVGVGwOXP7JariPk2uMPNLjqfvxAUJp1M2sQI3tu-VIGIRHsw61GhmUQe-95plTM0JYmxFzMBx3MlKS-kGM6yP3yoIFXL49mTLWC5E.webp?r=ce1",
          rating: "18+",
          match: "%92 Eşleşme",
          genres: ["Bilim Kurgu", "Karanlık", "Gerilim"],
          desc: "Gizli bir askeri yapay zeka deneyi kontrolden çıkınca insanoğlu hayatta kalma mücadelesi verir."
        },
        {
          rank: 6,
          id: "t6",
          title: "ONE PIECE",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/_YyUT33Ze3kFXjMydIZFIm6ajHk/AAAABbtqKBbGvalXQA8kkhhnqUXtEnBKMnFu_fkw4G-pQR1C8_fRx4rJcYAHdBnJ14LTqUPmP0C0oRhwh5l-XuAWk02SOt3wg5IbUTlo5g-otxwwkFtjYZg9kAj8GmvVq3Q6edoYCKvKrBuB96dQr3ncd7yHKhrjt7w3zBFjBcIGLbE.webp?r=e46",
          rating: "13+",
          match: "%98 Eşleşme",
          genres: ["Fantastik", "Macera", "Aksiyon"],
          desc: "Korsanlar Kralı olmak isteyen Monkey D. Luffy ve Hasır Şapka Korsanları efsanevi hazinenin peşine düşer."
        }
      ]
    },
    {
      id: "trending-now",
      title: "Çok Sıkıldım Diyenlere Özel Öneriler",
      type: "standard",
      items: [
        {
          id: "tr1",
          title: "Organize İşler",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABW381eX5bSM9Rw4nGJy6kDh2Tdc7YGg2ILnGw4rs65MYptObveBNhYm3tu3dzrjezzJcnLnlHLxvOXjz96g4VR1NLqx0jXM0pB1r4ucK7r3oaERaloATbo_bCgU8umqY6LfXgT7tn6ti10o2TJTje4J9SzyGuAvxUtwRlitYt7xtLAzaiarueJuDLq5v0XfBeOaJYgAyJ1iRf6eNYA.webp?r=fc3",
          rating: "16+",
          match: "%95 Eşleşme",
          genres: ["Komedi", "Suç", "Mizahi"],
          desc: "Asım Noyan ve çetesi, oto hırsızlığı ve dolandırıcılık işlerinde usta olsa da aşk ve karma onların peşini bırakmaz."
        },
        {
          id: "tr2",
          title: "Ted",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABU2L8Hahxdhw3PvYfjsaD-WS0Jk8Sv8qMQfzm6Lenrk9rpD5_cAUmaTiSnrjDMs3i7ZzkdOSMQsKiwpx8ijYCszapNnL9g20Dr4.webp?r=462",
          rating: "18+",
          match: "%91 Eşleşme",
          genres: ["Müstehcen", "Komedi", "Absürt"],
          desc: "Çocukluk dileğiyle canlanan küstah ve eğlenceli ayıcık Ted ile John Bennett'in dostluğu kahkaha tufanı yaratıyor."
        },
        {
          id: "tr3",
          title: "Ghosts",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABYsbJbykXApx_VuMhtfc2DHJ8GfyS8jkrQIktxcye5XVzKm3bqNW00D7-OBzD___jGgApbBo7kk3YE-1dlX1uhaUKIqRjbpMCl8Tms3Et0pcZhn1OWMC70HO6tbXs0noMiZqyP87Xsm5AswY9qA7rFjlkHH2cW9OgfqnrDM.webp?r=360",
          rating: "13+",
          match: "%89 Eşleşme",
          genres: ["Sitcom", "Doğaüstü", "Keyifli"],
          desc: "Genç bir çift miras kalan harap malikaneyi otele çevirmeye çalışırken buradaki neşeli hayaletlerle tanışır."
        },
        {
          id: "tr4",
          title: "ONE PIECE",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQTYfZpd2wYiSApzT_kZK9l8n7coYn79qyyHZ_kz0_vg_bZcgyaikUpQnUOFsfVLEu9MMwyjY0ffNwJRavrnLfO8VmIKK8aDQdI.webp?r=7ec",
          rating: "13+",
          match: "%98 Eşleşme",
          genres: ["Macera", "Aksiyon", "Heyecan Verici"],
          desc: "Hasır Şapka Korsanları açık denizlere yelken açarak Grand Line boyunca hazineler ve dostluklar kazanır."
        },
        {
          id: "tr5",
          title: "Çatlak Profesör",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABfCUbpcttk_U3s0GO6tsFNPj08yrL-0RTwPsc8-kwqeOl2fHq5pt7POEOB2l4thR2x-8kTI8PwSRa2TmIfcecUDBWqEQJ9w6sz0.webp?r=89c",
          rating: "13+",
          match: "%87 Eşleşme",
          genres: ["Nostaljik", "Komedi", "Romantik"],
          desc: "Eddie Murphy'nin efsanevi performansı: İyi huylu profesör Klump geliştirdiği iksirle kendinden emin Buddy Love'a dönüşür."
        },
        {
          id: "tr6",
          title: "Seni Tanıyorum",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABS5VBxpzhD2wKtJ3zrcq9n91OdQrtro8y8b9AKfgwjc7jSRftJLF3nvDtkz6dakd93xSy6qlDymwsWZZqW-DrXK1PDnQGnBN8dNfVppgzSFN8MkqvgigqXPuDb_H3hjWWpc8eCl2b9mCIA1W.webp?r=b90",
          rating: "18+",
          match: "%94 Eşleşme",
          genres: ["Gerilim", "Karanlık", "Dram"],
          desc: "Geçmişin gün yüzüne çıkmasıyla bir kadının hayatı altüst olur; kimseye güvenemeyeceği bir kabus başlar."
        }
      ]
    },
    {
      id: "crime-dramas",
      title: "Suç ve Gizem Temalı Diziler",
      type: "standard",
      items: [
        {
          id: "cr1",
          title: "La Casa de Papel",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABTtqegIn6Wx8fphxn8hEtgi9HrXCPnpKr_dLQ9-x5q792OiVoqSN4PWwLLsFm1bUo5MmGINoUVXtTcrQ4TMzeQmLo0Cn4LwQ5mk.webp?r=8e7",
          rating: "18+",
          match: "%99 Eşleşme",
          genres: ["Soygun", "Heyecanlı", "Drama"],
          desc: "Tarihin en büyük soygununu planlayan Profesör ve kırmızı tulumlu ekibi tüm dünyayı ekran başına kilitler."
        },
        {
          id: "cr2",
          title: "Squid Game",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABdiylk6ZJdnK6liliADoFv2C49AZUPFY1TWyoXoBRJus8eluavoOzcAbx1QDKeDUD2BU0uqBgUKkmsR3dCSZq5kozltmEljh84w.webp?r=11e",
          rating: "18+",
          match: "%97 Eşleşme",
          genres: ["Karanlık", "Gerilim", "Psikolojik"],
          desc: "Yeşil eşofmanlı 456 yarışmacı, devasa ödül havuzu için ölüm kalım mücadelesine girişir."
        },
        {
          id: "cr3",
          title: "Resident Alien",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABchMzaZMnKissOZVU1aBcJVK6josJTc-id7guYqhKdn-mVRFBhtdKN5eAgCH1LEPmtcjo_HqeZShHC4Mpl7usYQkR4E9c__fdrg.webp?r=62b",
          rating: "16+",
          match: "%93 Eşleşme",
          genres: ["Gizem", "Suç Çözme", "Komedi"],
          desc: "Kasaba şerifinin cinayet soruşturmasına yardım eden uzaylı Harry, insan duygularını anlamaya başlar."
        },
        {
          id: "cr4",
          title: "Katil Makine",
          img: "https://occ-0-7332-778.1.nflxso.net/dnm/api/v6/LSExTNdA1vCOYNZ8eHZ6J0eyIcQ/AAAABQBuLWmes8S-Xb2VnykAfAVHv1RiObLwJ1xHyz653H06xJzTt3pN05ukP6tlXPAM8Z-R52sIWbGUjaErpCEjOLesfw_g4wmu30Q.webp?r=539",
          rating: "18+",
          match: "%90 Eşleşme",
          genres: ["Teknoloji", "Suç", "Aksiyon"],
          desc: "Ölümcül bir takip ve yapay zeka tarafından yönetilen sibernetik bir av."
        }
      ]
    }
  ]
};
