const { chromium } = require('playwright');
const fs = require('fs');
(async ()=>{
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width:1366, height: 1600 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const data = await page.evaluate(()=>{
    const out = [];
    const section = Array.from(document.querySelectorAll('section')).find(s=> (s.innerText||'').includes('PURPOSE-BUILT SOLUTION'));
    if(!section) return { error: 'section not found' };
    const articles = Array.from(section.querySelectorAll('article'));
    for(const art of articles){
      const artCs = window.getComputedStyle(art);
      const artRect = art.getBoundingClientRect();
      // find small heading 'Hospital Readmissions' or first h inside
      const smallHeading = Array.from(art.querySelectorAll('p, h3, h4, h2, span')).find(el=> /Hospital Readmissions|Patient Non-Compliance|Administrative Burden/.test((el.innerText||'')) );
      const smallCs = smallHeading ? window.getComputedStyle(smallHeading) : null;
      out.push({
        article: { borderWidth: artCs.borderWidth, borderStyle: artCs.borderStyle, borderColor: artCs.borderColor, background: artCs.backgroundColor, borderRadius: artCs.borderRadius, rect:{x:artRect.x,y:artRect.y,width:artRect.width,height:artRect.height} },
        heading: smallHeading ? { text: smallHeading.innerText.trim().slice(0,120), color: smallCs.color, fontFamily: smallCs.fontFamily, fontSize: smallCs.fontSize, fontWeight: smallCs.fontWeight, lineHeight: smallCs.lineHeight } : null
      });
    }
    return out;
  });
  fs.writeFileSync('tools/compare/purposebuilt_card_probe.json', JSON.stringify(data, null, 2));
  console.log('Wrote tools/compare/purposebuilt_card_probe.json');
  await browser.close();
})();
