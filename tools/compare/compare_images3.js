const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const _pm = require('pixelmatch'); const pixelmatch = _pm.default || _pm;
function readPng(p){ return PNG.sync.read(fs.readFileSync(p)); }
function writePng(png, out){ fs.writeFileSync(out, PNG.sync.write(png)); }
function resizeNearest(src, targetW, targetH){
  const dest = new PNG({width:targetW, height:targetH});
  for(let y=0;y<targetH;y++){
    const sy = Math.min(src.height-1, Math.floor(y * src.height / targetH));
    for(let x=0;x<targetW;x++){
      const sx = Math.min(src.width-1, Math.floor(x * src.width / targetW));
      const sIdx = (src.width*sy + sx)<<2;
      const dIdx = (targetW*y + x)<<2;
      dest.data[dIdx] = src.data[sIdx];
      dest.data[dIdx+1] = src.data[sIdx+1];
      dest.data[dIdx+2] = src.data[sIdx+2];
      dest.data[dIdx+3] = src.data[sIdx+3];
    }
  }
  return dest;
}
(async ()=>{
  try{
    const userImgPath = 'C:/Users/myban/AppData/Roaming/Code/User/globalStorage/github.copilot-chat/copilot-cli-images/1785054516726-5d0xd939.png';
    const localImgPath = path.resolve('./tools/capture-output/local_screenshot.png');
    const outDir = './tools/compare';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
    const u = readPng(userImgPath);
    const l = readPng(localImgPath);
    const targetW = Math.min(u.width, l.width);
    const ur = resizeNearest(u, targetW, Math.round(u.height * targetW / u.width));
    const lr = resizeNearest(l, targetW, Math.round(l.height * targetW / l.width));
    const width = targetW;
    const height = Math.max(ur.height, lr.height);
    const uFull = new PNG({width,height});
    const lFull = new PNG({width,height});
    // fill with transparent white background
    for(let i=0;i<uFull.data.length;i+=4){ uFull.data[i]=255; uFull.data[i+1]=255; uFull.data[i+2]=255; uFull.data[i+3]=255; }
    for(let i=0;i<lFull.data.length;i+=4){ lFull.data[i]=255; lFull.data[i+1]=255; lFull.data[i+2]=255; lFull.data[i+3]=255; }
    PNG.bitblt(ur,uFull,0,0,ur.width,ur.height,0,0);
    PNG.bitblt(lr,lFull,0,0,lr.width,lr.height,0,0);
    writePng(uFull, outDir+'/user_padded.png');
    writePng(lFull, outDir+'/local_padded.png');
    const diff = new PNG({width,height});
    const numDiff = pixelmatch(uFull.data, lFull.data, diff.data, width, height, {threshold:0.12});
    writePng(diff, outDir+'/diff.png');
    function rgbToHex(r,g,b){ return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1).toUpperCase(); }
    function sample(png, rx, ry){ const x = Math.round(rx * png.width); const y = Math.round(ry * png.height); const idx = (png.width*y + x)<<2; const r=png.data[idx], g=png.data[idx+1], b=png.data[idx+2]; return {x,y,r,g,b,hex:rgbToHex(r,g,b)}; }
    const points = [ {name:'footer-center', rx:0.5, ry:0.88}, {name:'eyebrow-left', rx:0.12, ry:0.18}, {name:'heading', rx:0.2, ry:0.22} ];
    const res = {user:[], local:[]};
    for(const p of points){ res.user.push(Object.assign({name:p.name}, sample(uFull,p.rx,p.ry))); res.local.push(Object.assign({name:p.name}, sample(lFull,p.rx,p.ry))); }
    fs.writeFileSync(outDir+'/samples_padded.json', JSON.stringify(res,null,2));
    console.log('Done:', numDiff, 'diff pixels. outputs:', outDir);
  }catch(e){ console.error(e); process.exit(2);} })();
