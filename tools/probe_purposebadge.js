const { chromium } = require('playwright');
const fs = require('fs');
(async ()=>{
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width:1366, height: 1600 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const data = await page.evaluate(()=>{
    const section = Array.from(document.querySelectorAll('section')).find(s=> (s.innerText||'').includes('PURPOSE-BUILT SOLUTION'));
    if(!section) return { error: 'section not found' };
    const article = section.querySelector('article');
    if(!article) return { error: 'article not found' };
    // find element containing text 'CLINICUS SOLUTION'
    const el = Array.from(article.querySelectorAll('*')).find(el => (el.innerText||'').trim() === 'CLINICUS SOLUTION');
    if(!el) return { error: 'purpose-badge not found' };
    const cs = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      text: el.innerText.trim(),
      computed: {
        position: cs.position,
        width: cs.width,
        height: cs.height,
        left: cs.left,
        top: cs.top,
        fontFamily: cs.fontFamily,
        fontStyle: cs.fontStyle,
        fontWeight: cs.fontWeight,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
      }
    };
  });
  fs.writeFileSync('tools/compare/purposebuilt_purposebadge_probe.json', JSON.stringify(data, null, 2));
  console.log('Wrote tools/compare/purposebuilt_purposebadge_probe.json');
  await browser.close();
})();