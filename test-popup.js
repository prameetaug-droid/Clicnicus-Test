const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:3002', { waitUntil: 'networkidle' });
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="phone"]', '1234567890');
  await page.fill('input[name="organization"]', 'Test Org');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'popup-verification.png', fullPage: false });
  await browser.close();
  console.log('Screenshot saved as popup-verification.png');
})();
