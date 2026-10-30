// Hdfilmcehennemi Film Robotu Scraper using ego-browser
try {
  const task = await taskSpace("hdfilmcehennemi scraper");
  const page = task.page("p1");

  console.log("Hdfilmcehennemi Film Robotu açılıyor...");
  await page.goto("https://www.hdfilmcehennemi.nl/film-robotu-1/", {
    waitUntil: "domcontentloaded",
    timeout: 25000
  });
  await page.waitForTimeout(2500);

  // Click load more to get 96+ movies
  for (let c = 1; c <= 3; c++) {
    const clicked = await page.evaluate(() => {
      const btn = document.querySelector('button.load-more, .load-more');
      if (btn && btn.offsetParent !== null) {
        btn.click();
        return true;
      }
      return false;
    });
    if (clicked) {
      console.log(`Daha Fazla Göster #${c} tıklandı...`);
      await page.waitForTimeout(2200);
    }
  }

  // Parse films
  const movies = await page.evaluate(() => {
    const cardElements = Array.from(document.querySelectorAll('.poster, a.poster, .film-card, [class*="poster"]')).filter(el => {
      return el.querySelector('img') && el.innerText.trim().length > 2;
    });

    const parsed = [];
    cardElements.forEach((el, index) => {
      const imgEl = el.querySelector('img');
      const text = el.innerText.split('\n').map(s => s.trim()).filter(Boolean);
      const imdbEl = el.querySelector('.imdb, [class*="imdb"], .score');
      const imdb = imdbEl ? imdbEl.innerText.trim() : (text.find(t => /^\d\.\d$/.test(t)) || "8.5");
      const year = text.find(t => /^(19|20)\d{2}$/.test(t)) || "2024";

      let title = el.querySelector('.title, h2, h3, .poster-title')?.innerText?.trim();
      if (!title) {
        const titleCandidates = text.filter(t => !/^\d+(\.\d+)?$/.test(t) && !t.includes("Dublaj") && !t.includes("Altyazı"));
        title = titleCandidates[0] || imgEl?.alt?.trim() || `Film ${index + 1}`;
      }

      const imgSrc = imgEl?.src || imgEl?.dataset?.src || "";

      if (title && imgSrc && !parsed.some(m => m.title === title)) {
        parsed.push({
          id: `hdf-${index + 1}`,
          title: title,
          img: imgSrc,
          imdb: imdb,
          year: year,
          rating: parseFloat(imdb) >= 8.5 ? "18+" : "16+",
          match: `%${Math.min(99, Math.floor(parseFloat(imdb) * 10 + 5))} Eşleşme`,
          genres: ["IMDb En İyiler", "Kült Filmler"],
          desc: `${title} (${year}). IMDb: ${imdb}/10. Hdfilmcehennemi üzerinden taranan yüksek puanlı kült yapım şimdi HubPlay'de.`
        });
      }
    });

    return parsed;
  });

  console.log(`Toplam ${movies.length} film çekildi!`);

  const fs = await import("node:fs/promises");
  await fs.writeFile(
    "C:/Users/senol/OneDrive/Desktop/Yeni klasör (4)/scraped-hdfilmcehennemi.json",
    JSON.stringify(movies, null, 2),
    "utf-8"
  );
  console.log("scraped-hdfilmcehennemi.json dosyasına kaydedildi.");

  await task.finish({ keep: ["p1"] });
} catch (e) {
  console.error("Hata:", e);
}
