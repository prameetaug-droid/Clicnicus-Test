const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
  const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
  ];
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.reload({ waitUntil: 'networkidle' });
    const metrics = await page.evaluate(() => {
      const section = Array.from(document.querySelectorAll('section')).find((sec) => sec.querySelector('h2')?.textContent?.trim() === 'One Platform For Your Complete Care Management');
      const divs = Array.from(section?.querySelectorAll('div') || []);
      const imageWrapper = divs.find((div) => div.querySelector('img') == null && div.querySelector('svg') == null && div.className.includes('relative'));
      const textBlock = divs.find((div) => div.querySelector('h3')?.textContent?.trim() === 'Unified Dashboard');
      const description = section?.querySelector('p');
      const getRect = (node) => node?.getBoundingClientRect?.() || null;
      return {
        divClasses: divs.slice(0, 10).map((div) => ({ className: div.className, text: div.textContent?.trim().slice(0, 60) })),
        imageWrapperClass: imageWrapper?.className,
        textBlockClass: textBlock?.className,
        leftRect: getRect(imageWrapper),
        textRect: getRect(textBlock),
        descRect: getRect(description),
      };
    });
    console.log(JSON.stringify({ viewport: vp.name, metrics }, null, 2));
  }
  await browser.close();
})();
