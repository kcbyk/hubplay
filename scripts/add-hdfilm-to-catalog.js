const fs = require('fs');
const path = require('path');

const hdfilmJsonPath = path.join(__dirname, '..', 'scraped-hdfilmcehennemi.json');
const dataJsPath = path.join(__dirname, '..', 'lib', 'data.js');

const raw = fs.readFileSync(hdfilmJsonPath, 'utf-8');
const hdfilmData = JSON.parse(raw);
const movies = Array.isArray(hdfilmData) ? hdfilmData : (hdfilmData.movies || []);

console.log(`Hdfilmcehennemi'den ${movies.length} film okundu.`);

// Select top 16 movies
const top16 = movies.slice(0, 16);

// Build row object
const newRow = {
  id: "row-hdfilmcehennemi",
  title: "IMDb Zirvedekiler (Hdfilmcehennemi Seçkisi)",
  type: "standard",
  items: top16
};

// Update lib/data.js
const currentContent = fs.readFileSync(dataJsPath, 'utf-8');
// Insert right after `rows: [`
const updated = currentContent.replace(
  'rows: [',
  `rows: [\n  ${JSON.stringify(newRow, null, 2)},`
);

fs.writeFileSync(dataJsPath, updated, 'utf-8');
console.log("IMDb Zirvedekiler satırı lib/data.js dosyasına başarıyla eklendi!");
