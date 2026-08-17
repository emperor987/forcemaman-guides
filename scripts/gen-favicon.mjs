// Génère les PNG de la favicon ForceMaman (aucune dépendance externe).
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public");

// Couleurs
const bg = [201, 125, 93]; // #C97D5D terracotta
const fg = [250, 246, 241]; // #FAF6F1 crème

function roundedRect(x, y, w, h, r) {
  return (px, py) => {
    const cx = Math.min(Math.max(px, x + r), x + w - r);
    const cy = Math.min(Math.max(py, y + r), y + h - r);
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy <= r * r;
  };
}

// Lettre F dessinée en rectangles, avec un léger slant italique
function isF(px, py, s) {
  const slant = (py - 7 * s) * 0.12;
  const x = px - slant;
  // tige verticale
  if (x >= 10 * s && x <= 14.5 * s && py >= 7 * s && py <= 26 * s) return true;
  // barre du haut
  if (x >= 10 * s && x <= 22.5 * s && py >= 7 * s && py <= 11.5 * s) return true;
  // barre du milieu
  if (x >= 10 * s && x <= 20 * s && py >= 15 * s && py <= 19 * s) return true;
  return false;
}

function render(size) {
  const s = size / 64;
  const inside = roundedRect(2 * s, 2 * s, 60 * s, 60 * s, 14 * s);
  const px = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const isBg = inside(x + 0.5, y + 0.5);
      const isLetter = isF(x + 0.5, y + 0.5, s);
      if (isLetter) {
        px[i] = fg[0];
        px[i + 1] = fg[1];
        px[i + 2] = fg[2];
        px[i + 3] = 255;
      } else if (isBg) {
        px[i] = bg[0];
        px[i + 1] = bg[1];
        px[i + 2] = bg[2];
        px[i + 3] = 255;
      }
    }
  }
  // Filtre 0 (None) sur chaque ligne
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const idat = deflateSync(raw);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeBuf = Buffer.from(type, "ascii");
    const crcBuf = Buffer.alloc(4);
    const crcTable = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
    let crc = 0xffffffff;
    for (const b of Buffer.concat([typeBuf, data])) {
      crc = crcTable[(crc ^ b) & 0xff] ^ (crc >>> 8);
    }
    crcBuf.writeUInt32BE((crc ^ 0xffffffff) >>> 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "favicon-32x32.png"), render(32));
writeFileSync(resolve(outDir, "apple-touch-icon.png"), render(180));
console.log("favicon PNG générés (32px + 180px)");
