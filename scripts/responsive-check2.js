const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.reload({ waitUntil: 'networkidle' });
    const metrics = await page.evaluate(() => {
      const section = Array.from(document.querySelectorAll('section')).find((sec) => {
        const heading = sec.querySelector('h2');
        return heading?.textContent?.trim() === 'One Platform For Your Complete Care Management';
      });
      const leftCard = Array.from(section?.querySelectorAll('div') || []).find((div) =>
        div.className.includes('bg-[#EDF5FE]') && div.className.includes('overflow-hidden')
      );
      const featureCards = Array.from(section?.querySelectorAll('div') || []).filter((div) =>
        div.className.includes('feature-card')
      );
      const header = section?.querySelector('h2');
      const desc = section?.querySelector('p');
      const getRect = (node) => node?.getBoundingClientRect?.() || null;
      const leftRect = getRect(leftCard);
      const headerRect = getRect(header);
      const descRect = getRect(desc);
      const overlaps = featureCards.map((card) => {
        const rect = getRect(card);
        if (!rect || !leftRect) return false;
        return rect.left < leftRect.right && rect.right > leftRect.left && rect.top < leftRect.bottom && rect.bottom > leftRect.top;
      }).filter(Boolean).length;
      return { leftRect, headerRect, descRect, featureCards: featureCards.length, overlapCount: overlaps };
    });
    console.log(JSON.stringify({ viewport: vp.name, width: vp.width, height: vp.height, metrics }, null, 2));
  }

  await browser.close();
})();
