// Automated Netflix Scraper using ego-browser
try {
  const task = await taskSpace("netflix catalog scraper");
  const page = task.page("p1");

  // Prevent browser notification prompts
  try {
    await page.cdp("Page.addScriptToEvaluateOnNewDocument", {
      source: `
        if (window.Notification) {
          window.Notification.requestPermission = () => Promise.resolve('denied');
          Object.defineProperty(window.Notification, 'permission', { get: () => 'denied' });
        }
      `
    });
  } catch (e) {}

  console.log("1. Netflix Ana Sayfasına bağlanılıyor...");
  await page.goto("https://www.netflix.com/browse", { waitUntil: "domcontentloaded", timeout: 20000 });
  await page.waitForTimeout(2500);

  // Profile Gate check & selection
  await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('*'));
    const t = all.find(el => el.innerText && el.innerText.includes('𝐈𝐍𝐙𝐀𝐑') && el.children.length === 0);
    if (t) (t.closest('a, button, li, div.profile') || t).click();
  });
  await page.waitForTimeout(3500);

  // Progressive scroll to load rows
  console.log("2. Tüm kategoriler ve afişler taranıyor...");
  for (let s = 0; s < 7; s++) {
    await page.evaluate(() => window.scrollBy(0, 900));
    await page.waitForTimeout(1000);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  // Scrape data
  console.log("3. Film ve dizi verileri ayıklanıyor...");
  const result = await page.evaluate(() => {
    const h2List = Array.from(document.querySelectorAll('h2')).filter(h => {
      const text = h.innerText?.trim();
      return text &&
             text.length > 2 &&
             !text.includes("Gizlilik") &&
             !text.includes("Cookie") &&
             !text.includes("İzlemeye Devam");
    });

    const rows = [];
    h2List.forEach((h2, idx) => {
      const rowTitle = h2.innerText.trim();
      let container = h2.parentElement;
      for (let i = 0; i < 5 && container; i++) {
        if (container.querySelectorAll('img').length >= 3) break;
        container = container.parentElement;
      }
      if (!container) return;

      const imgs = Array.from(container.querySelectorAll('img')).filter(img => {
        return img.src && img.src.includes('occ') && img.width > 100;
      });

      const items = [];
      imgs.forEach((img, imgIdx) => {
        let cardTitle = img.alt?.trim();
        if (!cardTitle) {
          const parentA = img.closest('a, button, [aria-label]');
          cardTitle = parentA?.getAttribute('aria-label')?.trim();
        }
        if (!cardTitle || cardTitle.length < 2 || cardTitle.includes("LOGO")) {
          cardTitle = `${rowTitle} Yapımı #${imgIdx + 1}`;
        }

        if (!items.some(it => it.img === img.src)) {
          const isTop10 = rowTitle.toLowerCase().includes("top 10");
          items.push({
            id: `scraped-${idx}-${imgIdx}`,
            title: cardTitle,
            img: img.src,
            rank: isTop10 ? items.length + 1 : undefined,
            match: `%${90 + Math.floor(Math.random() * 9)} Eşleşme`,
            rating: cardTitle.length % 3 === 0 ? "18+" : "16+",
            genres: [rowTitle.replace(/Türkiye'de|Bugünün|Dizi|Listesi|Özel/gi, "").trim() || "Popüler"],
            desc: `${cardTitle} şimdi HubPlay'de. Nefes kesen sahneleri ve sürükleyici hikayesiyle kaçırılmayacak bir yapım.`
          });
        }
      });

      if (items.length > 0) {
        rows.push({
          id: `row-${idx}`,
          title: rowTitle,
          type: rowTitle.toLowerCase().includes("top 10") ? "top10" : "standard",
          items: items.slice(0, 15)
        });
      }
    });

    return { rows };
  });

  const fs = await import("node:fs/promises");
  await fs.writeFile(
    "C:/Users/senol/OneDrive/Desktop/Yeni klasör (4)/scraped-netflix.json",
    JSON.stringify(result, null, 2),
    "utf-8"
  );
  console.log(`4. Başarılı! Toplam ${result.rows.length} kategori ve ${result.rows.reduce((sum, r) => sum + r.items.length, 0)} film/dizi kaydedildi.`);

  await task.finish({ keep: ["p1"] });
} catch (e) {
  console.error("Scraper Hatası:", e);
}
