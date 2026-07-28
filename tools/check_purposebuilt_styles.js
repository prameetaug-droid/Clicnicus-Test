const { chromium } = require('playwright');
const fs = require('fs');
(async ()=>{
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width:1366, height: 1200 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  // find section by eyebrow text
  const result = await page.evaluate(()=>{
    function cs(el){ const s = window.getComputedStyle(el); const r = el.getBoundingClientRect(); return { color: s.color, fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight, lineHeight: s.lineHeight, rect:{x: r.x, y: r.y, width: r.width, height: r.height} }; }
    const sections = Array.from(document.querySelectorAll('section'));
    let targetSection = null;
    for(const sec of sections){ if(sec.innerText && sec.innerText.includes('PURPOSE-BUILT SOLUTION')){ targetSection = sec; break; } }
    if(!targetSection) return { error: 'PurposeBuilt section not found' };
    // challenge badges
    const challengeBadges = Array.from(targetSection.querySelectorAll('.challenge-badge')).map(el=>({ role:'challenge-badge', text: el.innerText.trim(), ...cs(el) }));
    const purposeBadges = Array.from(targetSection.querySelectorAll('.purpose-badge')).map(el=>({ role:'purpose-badge', text: el.innerText.trim(), ...cs(el) }));
    // stats (numbers) - look for elements with numeric text and class text-challenge or large font
    const stats = Array.from(targetSection.querySelectorAll('*')).filter(el=>/(^|\s)(\$|~|\d)/.test((el.innerText||'').trim())).slice(0,10).map(el=>({ role:'stat', text: (el.innerText||'').trim().slice(0,80), ...cs(el) }));
    // solution headings - items.map solution p
    const solutionHeadings = Array.from(targetSection.querySelectorAll('p, h3, h2')).filter(el=> el.innerText && el.innerText.length>5 && el.innerText===el.innerText.toString()).map(el=>({ role:'heading', text: el.innerText.trim().slice(0,120), ...cs(el) }));
    // descriptions small
    const descriptions = Array.from(targetSection.querySelectorAll('p')).filter(el=> el.innerText && el.className.indexOf('mt-2')>=0 || el.innerText.length>20 && el.innerText.length<200).slice(0,10).map(el=>({ role:'description', text: el.innerText.trim().slice(0,160), ...cs(el) }));
    return { challengeBadges, purposeBadges, stats, solutionHeadings, descriptions };
  });
  fs.writeFileSync('./tools/compare/purposebuilt_styles.json', JSON.stringify(result, null, 2));
  console.log('Wrote tools/compare/purposebuilt_styles.json');
  await browser.close();
})();
