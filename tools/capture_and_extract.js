const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  try {
    const outDir = './tools/capture-output';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const page = await context.newPage();
    console.log('Navigating to http://localhost:3000');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
    console.log('Taking full-page screenshot...');
    await page.screenshot({ path: `${outDir}/local_screenshot.png`, fullPage: true });
    console.log('Extracting visible text nodes and computed styles...');
    const elements = await page.evaluate(() => {
      function visible(el){
        if (!(el instanceof Element)) return false;
        const style = window.getComputedStyle(el);
        if (style && (style.visibility === 'hidden' || style.display === 'none' || parseFloat(style.opacity)===0)) return false;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        // offscreen check
        if (rect.bottom < 0 || rect.top > (window.innerHeight || document.documentElement.clientHeight)) return false;
        return true;
      }
      const nodes = Array.from(document.querySelectorAll('body *'));
      const seen = new Set();
      const texts = [];
      for (const el of nodes){
        const t = el.innerText || el.textContent;
        if (!t) continue;
        const trimmed = t.replace(/\s+/g,' ').trim();
        if (!trimmed) continue;
        if (!visible(el)) continue;
        const cs = window.getComputedStyle(el);
        const key = trimmed + '|' + cs.color + '|' + cs.fontFamily;
        if (seen.has(key)) continue;
        seen.add(key);
        texts.push({
          tag: el.tagName,
          text: trimmed,
          snippet: trimmed.length>120? trimmed.slice(0,120)+'...': trimmed,
          color: cs.color,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight
        });
      }
      return texts;
    });
    fs.writeFileSync(`${outDir}/local_text_styles.json`, JSON.stringify(elements, null, 2));
    console.log('Saved', elements.length, 'unique text elements to', `${outDir}/local_text_styles.json`);
    await browser.close();
  } catch (err) {
    console.error('Error:', err);
    process.exitCode = 2;
  }
})();
