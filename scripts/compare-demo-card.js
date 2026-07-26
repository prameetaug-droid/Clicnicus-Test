const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch').default || require('pixelmatch');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'figd_jmYmz93a2tj6aEfGe6kq5SwOgR0jJruDA3AfXvj5';
const FILE_KEY = process.env.FILE_KEY || 'PzP0rTk0bxDo9V59y9FbEW';
// node id for demo card/group (from earlier inspection)
const FIGMA_NODE = '10:484';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error('Failed to download ' + url + ' status ' + res.statusCode));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function fetchFigmaImage() {
  const dest = './screenshots/figma-demo.png';
  if (fs.existsSync(dest)) {
    console.log('Using existing Figma export at', dest);
    return dest;
  }
  const ids = encodeURIComponent(FIGMA_NODE);
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids}&format=png&scale=2`;
  const res = await fetch(url, { headers: { 'X-Figma-Token': FIGMA_TOKEN } });
  if (!res.ok) throw new Error('Figma images API error: ' + res.status);
  const json = await res.json();
  const imageUrl = json.images[FIGMA_NODE];
  if (!imageUrl) throw new Error('No image URL returned for node ' + FIGMA_NODE);
  await download(imageUrl, dest);
  return dest;
}

async function screenshotElement(viewport, name) {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewportSize(viewport);
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.demo-card', { timeout: 5000 });
  const el = await page.$('.demo-card');
  const dest = `./screenshots/local-demo-${name}.png`;
  await el.screenshot({ path: dest });
  await browser.close();
  return dest;
}

async function compare(imgAPath, imgBPath, outPath) {
  const imgA = PNG.sync.read(fs.readFileSync(imgAPath));
  const imgB = PNG.sync.read(fs.readFileSync(imgBPath));
  // compare only the overlapping region (crop to the smaller image) to avoid counting canvas whitespace
  const width = Math.min(imgA.width, imgB.width);
  const height = Math.min(imgA.height, imgB.height);
  const a = new PNG({ width, height });
  const b = new PNG({ width, height });
  // copy the top-left region of each image into the comparison canvases
  PNG.bitblt(imgA, a, 0, 0, width, height, 0, 0);
  PNG.bitblt(imgB, b, 0, 0, width, height, 0, 0);
  const diff = new PNG({ width, height });
  const numDiff = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.1 });
  fs.writeFileSync(outPath, PNG.sync.write(diff));
  return numDiff;
}

(async () => {
  try {
    if (!fs.existsSync('./screenshots')) fs.mkdirSync('./screenshots');
    console.log('Fetching Figma export...');
    const figmaPath = await fetchFigmaImage();
    console.log('Figma image saved to', figmaPath);
    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];
    for (const v of viewports) {
      console.log('Capturing local', v.name);
      const localPath = await screenshotElement({ width: v.width, height: v.height }, v.name);
      const outDiff = `./screenshots/diff-${v.name}.png`;
      console.log('Comparing', localPath, 'to', figmaPath);
      const diffs = await compare(localPath, figmaPath, outDiff);
      console.log(`Diff for ${v.name}: ${diffs} pixels different -> ${outDiff}`);
    }
    console.log('All comparisons complete');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();