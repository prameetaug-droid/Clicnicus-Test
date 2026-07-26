const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  try {
    const outDir = './screenshots';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const browser = await chromium.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    for (const v of viewports) {
      await page.setViewportSize({ width: v.width, height: v.height });
      const url = 'http://localhost:3000/';
      console.log(`Navigating to ${url} at ${v.name} (${v.width}x${v.height})`);
      await page.goto(url, { waitUntil: 'networkidle' });
      // wait extra to allow HubSpot script to inject
      await page.waitForTimeout(1200);
      const path = `${outDir}/${v.name}.png`;
      await page.screenshot({ path, fullPage: true });
      console.log(`Saved ${path}`);
    }

    await browser.close();
    console.log('Screenshots complete');
    process.exit(0);
  } catch (err) {
    console.error('Screenshot script error:', err);
    process.exit(1);
  }
})();