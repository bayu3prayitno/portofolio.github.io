const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = __dirname;

const jobs = [
  ['public/assets/profile/foto.png', 700, 82],
  ['public/assets/profile/foto1.png', 700, 82],
  ['public/assets/Projects/web/web_polines.png', 900, 78],
  ['public/assets/Projects/pbl/2.png', 900, 78],
  ['public/assets/Projects/pbl/3.png', 900, 78],
  ['public/assets/Projects/pbl/4.png', 900, 78],
  ['public/assets/Projects/pbl/5.png', 900, 78],
  ['public/assets/Projects/mobile/1.png', 700, 78],
  ['public/assets/Projects/mobile/4.jpg', 900, 78],
  ['public/assets/Projects/mobile/5.png', 900, 78],
  ['public/assets/kegiatan/TECHCOMFEST2025.jpg', 900, 78],
  ['public/assets/kegiatan/udemy.png', 500, 82],
  ['public/assets/kegiatan/ipnu.jpg', 900, 78],
  ['public/assets/kegiatan/jurnal.png', 900, 78],
];

(async () => {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const [rel, maxWidth, quality] of jobs) {
    const inputPath = path.join(ROOT, rel);
    const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');
    const before = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    const after = fs.statSync(outputPath).size;
    totalBefore += before;
    totalAfter += after;
    console.log(
      `${rel} -> ${path.basename(outputPath)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
    );
  }

  console.log('---');
  console.log(`TOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
})();
