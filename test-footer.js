const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  
  // Scroll to footer
  await page.evaluate(() => window.scrollBy(0, 13500));
  await new Promise(r => setTimeout(r, 1000));
  
  // Take screenshot
  await page.screenshot({ path: "footer-final-check.png" });
  console.log("✅ Footer screenshot saved as footer-final-check.png");
  
  await browser.close();
})();
