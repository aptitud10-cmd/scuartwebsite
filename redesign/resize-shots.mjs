import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sharp = require('c:/Users/willi/scuartwebsite/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js');

const files = [
  { name: 'studio-1280', w: 640 },
  { name: 'studio-768',  w: 384 },
  { name: 'studio-375',  w: 188 },
];

for (const f of files) {
  const info = await sharp(`redesign/shots/${f.name}.png`)
    .resize({ width: f.w })
    .toFile(`redesign/shots/${f.name}-sm.png`);
  console.log(`${f.name}-sm: ${info.width}x${info.height}`);
}
