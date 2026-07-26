const { chromium } = require('playwright');
const fs = require('fs');
(async ()=>{
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width:1366, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const data = await page.evaluate(()=>{
    const section = Array.from(document.querySelectorAll('section')).find(s=> (s.innerText||'').includes('OUR SOLUTION'));
    if(!section) return { error: 'section not found' };
    const cards = Array.from(section.querySelectorAll('div')).filter(d=> d.querySelector && d.querySelector('h3'));
    const out = [];
    for(const c of cards){
      const titleEl = c.querySelector('h3');
      if(!titleEl) continue;
      const title = titleEl.innerText.trim();
      const cs = window.getComputedStyle(c);
      // find icon img or svg
      const img = c.querySelector('img');
      const svg = c.querySelector('svg');
      const iconSrc = img ? img.getAttribute('src') : (svg ? 'inline-svg' : null);
      const iconBgEl = c.querySelector('.mb-3') || c.querySelector('div');
      const iconBg = iconBgEl ? window.getComputedStyle(iconBgEl).backgroundColor : null;
      out.push({ title, background: cs.backgroundColor, iconSrc, iconBg });
    }
    return out;
  });
  fs.writeFileSync('tools/compare/oursolution_probe.json', JSON.stringify(data, null, 2));
  console.log('Wrote tools/compare/oursolution_probe.json');
  await browser.close();
})();