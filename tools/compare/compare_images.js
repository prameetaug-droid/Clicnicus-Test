const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const { createCanvas, loadImage } = require('canvas');

(async function(){
  try {
    const userImgPath = 'C:/Users/myban/AppData/Roaming/Code/User/globalStorage/github.copilot-chat/copilot-cli-images/1785054516726-5d0xd939.png';
    const localImgPath = path.resolve('./tools/capture-output/local_screenshot.png');
    const outDir = './tools/compare';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    if (!fs.existsSync(userImgPath)) return console.error('User screenshot not found:', userImgPath);
    if (!fs.existsSync(localImgPath)) return console.error('Local screenshot not found:', localImgPath);

    const userImg = await loadImage(userImgPath);
    const localImg = await loadImage(localImgPath);
    // Resize both to same width (use 1200) keeping aspect ratio
    const targetWidth = Math.min(1200, Math.max(userImg.width, localImg.width));
    function fit(img){
      const scale = targetWidth / img.width;
      return { width: Math.round(img.width*scale), height: Math.round(img.height*scale), scale };
    }
    const u = fit(userImg);
    const l = fit(localImg);
    const canvas = createCanvas(Math.max(u.width, l.width), Math.max(u.height, l.height));
    const ctx = canvas.getContext('2d');

    // draw user image on left canvas area
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(userImg, 0, 0, u.width, u.height);
    const userBuf = canvas.toBuffer('image/png');
    fs.writeFileSync(outDir+'/user_resized.png', userBuf);

    // draw local image
    const canvas2 = createCanvas(Math.max(u.width, l.width), Math.max(u.height, l.height));
    const ctx2 = canvas2.getContext('2d');
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx2.drawImage(localImg, 0, 0, l.width, l.height);
    const localBuf = canvas2.toBuffer('image/png');
    fs.writeFileSync(outDir+'/local_resized.png', localBuf);

    // read as PNG to compare using pixelmatch - normalize to same dimensions by using max dims and leaving empty areas transparent
    const img1 = PNG.sync.read(fs.readFileSync(outDir+'/user_resized.png'));
    const img2 = PNG.sync.read(fs.readFileSync(outDir+'/local_resized.png'));
    const width = Math.max(img1.width, img2.width);
    const height = Math.max(img1.height, img2.height);
    const img1full = new PNG({width, height});
    const img2full = new PNG({width, height});
    PNG.bitblt(img1, img1full, 0,0, img1.width, img1.height, 0,0);
    PNG.bitblt(img2, img2full, 0,0, img2.width, img2.height, 0,0);
    const diff = new PNG({width, height});
    const numDiff = pixelmatch(img1full.data, img2full.data, diff.data, width, height, {threshold:0.12});
    fs.writeFileSync(outDir+'/diff.png', PNG.sync.write(diff));

    // sample some coordinates relative to footer area and header eyebrow
    function sample(imgPath, relX, relY){
      const img = PNG.sync.read(fs.readFileSync(imgPath));
      const x = Math.round(relX*img.width);
      const y = Math.round(relY*img.height);
      const idx = (img.width * y + x) << 2;
      const r = img.data[idx];
      const g = img.data[idx+1];
      const b = img.data[idx+2];
      return {r,g,b,hex: rgbToHex(r,g,b), x, y};
    }
    function rgbToHex(r,g,b){ return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1).toUpperCase(); }

    // define sample points (relative): footer center, eyebrow left (approx), heading
    const samplePoints = [
      {name:'footer-center', rx:0.5, ry:0.88},
      {name:'eyebrow-left', rx:0.12, ry:0.18},
      {name:'heading', rx:0.2, ry:0.22}
    ];
    const results = {user:[], local:[]};
    for(const p of samplePoints){ results.user.push({name:p.name, ...sample(outDir+'/user_resized.png', p.rx, p.ry)}); results.local.push({name:p.name, ...sample(outDir+'/local_resized.png', p.rx, p.ry)}); }
    fs.writeFileSync(outDir+'/samples.json', JSON.stringify(results, null, 2));

    console.log('Done. Differences:', numDiff, 'files:', outDir);
  } catch (e){ console.error(e); process.exit(2);} 
})();
