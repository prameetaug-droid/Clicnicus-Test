const { chromium } = require('playwright');
(async ()=>{
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 1200 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const footerInfo = await page.evaluate(()=>{
    const footer = document.querySelector('footer');
    if(!footer) return {error:'no footer'};
    const h2 = footer.querySelector('h2');
    const h2cs = h2 ? window.getComputedStyle(h2) : null;
    const eyebrow = footer.querySelector('.text-xs, .text-[11px], .text-[10px], p');
    const eyebrowCs = eyebrow ? window.getComputedStyle(eyebrow) : null;
    // computed style of ::before pseudo-element on footer
    const before = window.getComputedStyle(footer, '::before');
    return {
      h2: h2 ? { text: h2.innerText.trim().slice(0,120), color: h2cs.color, fontFamily: h2cs.fontFamily, fontSize: h2cs.fontSize, fontWeight: h2cs.fontWeight } : null,
      eyebrow: eyebrow ? { text: eyebrow.innerText.trim().slice(0,120), color: eyebrowCs.color, fontFamily: eyebrowCs.fontFamily, fontSize: eyebrowCs.fontSize, fontWeight: eyebrowCs.fontWeight } : null,
      before: before ? { background: before.backgroundColor || before.background || before.getPropertyValue('background') } : null
    };
  });
  console.log(JSON.stringify(footerInfo, null, 2));
  await browser.close();
})();
