const API_TOKEN = process.env.APIFY_API_TOKEN || '';
const ACTOR_NAME = 'easyapi~netflix-search-scraper';

async function searchNetflix(keywords, maxItems = 10) {
  const keywordArray = Array.isArray(keywords) ? keywords : [keywords];
  console.log(`Apify Netflix Scraper başlatılıyor... Aranıyor: [${keywordArray.join(', ')}]`);

  const runRes = await fetch(`https://api.apify.com/v2/acts/${ACTOR_NAME}/runs?token=${API_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      keywords: keywordArray,
      maxItems: maxItems
    })
  });

  const runData = await runRes.json();
  if (!runData.data) {
    throw new Error('Apify Çalıştırma Hatası: ' + JSON.stringify(runData));
  }

  const runId = runData.data.id;
  const datasetId = runData.data.defaultDatasetId;
  console.log(`Görev Başlatıldı (Run ID: ${runId}). Sonuçlar bekleniyor...`);

  // Poll until finished
  while (true) {
    await new Promise(r => setTimeout(r, 4000));
    const statusRes = await fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${API_TOKEN}`);
    const statusData = await statusRes.json();
    const status = statusData.data.status;
    console.log(`Durum: ${status}`);

    if (status === 'SUCCEEDED') {
      const itemsRes = await fetch(`https://api.apify.com/v2/datasets/${datasetId}/items?token=${API_TOKEN}`);
      const items = await itemsRes.json();
      console.log(`\nBAŞARILI: ${items.length} adet Netflix yapımı bulundu!\n`);
      return items;
    } else if (['FAILED', 'ABORTED', 'TIMED-OUT'].includes(status)) {
      throw new Error(`Görev başarısız oldu (${status}).`);
    }
  }
}

// CLI usage: node scripts/apify-search.js "Aksiyon"
const query = process.argv[2] || "fashion";
searchNetflix(query, 5)
  .then(results => {
    console.log(JSON.stringify(results.slice(0, 3), null, 2));
  })
  .catch(console.error);
