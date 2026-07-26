const { chromium } = require('playwright');
(async ()=>{
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 1200 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  try{
    await page.waitForSelector('footer', { timeout: 15000 });
  }catch(e){ console.error('footer not found after wait'); }
  const footerInfo = await page.evaluate(()=>{
    const footer = document.querySelector('footer');
    if(!footer) return {error:'no footer'};
    const nodes = Array.from(footer.querySelectorAll('*'));
    const list = nodes.map(el=>{
      const cs = window.getComputedStyle(el);
      return { tag: el.tagName, class: el.className, text: (el.innerText||'').trim().slice(0,80), color: cs.color, fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight };
    }).filter(x=>x.text || x.tag==='H2' || x.tag==='A' || x.tag==='P');
    const before = window.getComputedStyle(footer, '::before');
    return {items: list, before: { background: before.backgroundColor || before.getPropertyValue('background') }};
  });
  console.log(JSON.stringify(footerInfo, null, 2));
  await browser.close();
})();
