/**
 * Génère les PNG de marque ForceMaman (favicons + image Open Graph)
 * sans dépendance externe : encodeur PNG maison (zlib + CRC32).
 *
 * Usage : node scripts/gen-assets.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

// ---------- Couleurs de la marque ----------
const TERRACOTTA = [201, 125, 93];
const TERRACOTTA_LIGHT = [217, 138, 107];
const CREAM = [250, 246, 241];
const SAGE = [138, 154, 126];
const MAUVE = [167, 139, 163];
const TEXT = [92, 74, 58];
const CARD = [232, 223, 212];

// ---------- Encodeur PNG ----------
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(width, height, rgba) {
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 4)] = 0; // filtre None
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const dst = y * (1 + width * 4) + 1 + x * 4;
      raw[dst] = rgba[src];
      raw[dst + 1] = rgba[src + 1];
      raw[dst + 2] = rgba[src + 2];
      raw[dst + 3] = rgba[src + 3];
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ---------- Rendu supersamplé ----------
function render(width, height, draw, ss = 4) {
  const W = width * ss;
  const H = height * ss;
  const acc = new Float64Array(width * height * 4);
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const [r, g, b, a] = draw((px + 0.5) / W, (py + 0.5) / H);
      const ox = Math.floor(px / ss);
      const oy = Math.floor(py / ss);
      const o = (oy * width + ox) * 4;
      acc[o] += r * a;
      acc[o + 1] += g * a;
      acc[o + 2] += b * a;
      acc[o + 3] += a;
    }
  }
  const rgba = new Uint8ClampedArray(width * height * 4);
  const n = ss * ss;
  for (let i = 0; i < width * height; i++) {
    const a = acc[i * 4 + 3] / n;
    if (a <= 0) continue;
    rgba[i * 4] = Math.round(acc[i * 4] / acc[i * 4 + 3]);
    rgba[i * 4 + 1] = Math.round(acc[i * 4 + 1] / acc[i * 4 + 3]);
    rgba[i * 4 + 2] = Math.round(acc[i * 4 + 2] / acc[i * 4 + 3]);
    rgba[i * 4 + 3] = Math.round(a);
  }
  return rgba;
}

// ---------- Primitives ----------
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

function sdRoundRect(px, py, cx, cy, hw, hh, r) {
  const qx = Math.abs(px - cx) - (hw - r);
  const qy = Math.abs(py - cy) - (hh - r);
  const ax = Math.max(qx, 0);
  const ay = Math.max(qy, 0);
  return Math.hypot(ax, ay) + Math.min(Math.max(qx, qy), 0) - r;
}

function inRect(px, py, x0, y0, x1, y1, r = 0) {
  return sdRoundRect(px, py, (x0 + x1) / 2, (y0 + y1) / 2, (x1 - x0) / 2, (y1 - y0) / 2, r) <= 0;
}

const inHeart = (px, py, hx, hy, s) => {
  const x = (px - hx) / s;
  const y = (hy - py) / s;
  return (x * x + y * y - 1) ** 3 - x * x * y * y * y <= 0;
};

/** Monogramme F (pavé géométrique avec empattements) en coordonnées 0..1 */
const F_BARS = [
  [0.4, 0.22, 0.475, 0.76], // hampe
  [0.36, 0.22, 0.665, 0.305], // barre haute
  [0.4, 0.435, 0.615, 0.515], // barre médiane
  [0.335, 0.195, 0.405, 0.265], // empattement haut gauche
  [0.355, 0.72, 0.425, 0.79], // empattement bas gauche
];

const inF = (px, py, scale = 1, ox = 0, oy = 0) =>
  F_BARS.some(([x0, y0, x1, y1]) =>
    inRect((px - ox) / scale, (py - oy) / scale, x0, y0, x1, y1, 0.012),
  );

/** Pastille carrée arrondie terracotta + F ivoire + cœur mauve (0..1) */
function drawIcon(px, py) {
  const sdBg = sdRoundRect(px, py, 0.5, 0.5, 0.5, 0.5, 0.24);
  if (sdBg > 0) return [0, 0, 0, 0];
  let col = mix(TERRACOTTA_LIGHT, TERRACOTTA, py);
  let alpha = 1;
  // liseré ivoire
  const ring = sdRoundRect(px, py, 0.5, 0.5, 0.47, 0.47, 0.2);
  if (Math.abs(ring) < 0.018) col = mix(col, CREAM, 0.45);
  if (inF(px, py)) col = CREAM;
  if (inHeart(px, py, 0.79, 0.82, 0.115)) col = MAUVE;
  return [...col, alpha * 255];
}

/** Image Open Graph 1200x630 : pastille + monogramme + nom de marque */
function drawOg(px, py, W = 1200, H = 630) {
  const x = px * W;
  const y = py * H;
  let col = CREAM;
  // halos décoratifs
  if (Math.hypot(x - 1040, y - 110) < 240) col = mix(CREAM, TERRACOTTA, 0.1);
  if (Math.hypot(x - 140, y - 560) < 300) col = mix(CREAM, SAGE, 0.12);
  // pastille terracotta gauche avec monogramme
  const sq = { cx: 300, cy: 315, hw: 190, hh: 190, r: 52 };
  const sdSq = sdRoundRect(x, y, sq.cx, sq.cy, sq.hw, sq.hh, sq.r);
  if (sdSq <= 0) {
    col = mix(TERRACOTTA_LIGHT, TERRACOTTA, (y - sq.cy + sq.hh) / (2 * sq.hh));
    const lx = (x - (sq.cx - sq.hw)) / (2 * sq.hw);
    const ly = (y - (sq.cy - sq.hh)) / (2 * sq.hh);
    if (inF(lx, ly)) col = CREAM;
    if (inHeart(lx, ly, 0.79, 0.82, 0.115)) col = MAUVE;
    if (Math.abs(sdRoundRect(x, y, sq.cx, sq.cy, sq.hw - 10, sq.hh - 10, sq.r - 8)) < 5)
      col = mix(col, CREAM, 0.35);
  }
  // texte "FORCEMAMAN" (police bitmap 5x7) en terracotta
  const glyphs = FONT;
  const text = "FORCEMAMAN";
  const scale = 7;
  const gap = 2 * scale;
  let gx = 620;
  const gy = 295;
  for (const ch of text) {
    const g = glyphs[ch];
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 5; c++) {
        if (g[r][c]) {
          const rx = gx + c * scale;
          const ry = gy + r * scale;
          if (x >= rx && x < rx + scale && y >= ry && y < ry + scale) {
            col = mix(col, TERRACOTTA, 0.9);
          }
        }
      }
    }
    gx += 5 * scale + gap;
  }
  // trait + trois pastilles signature
  if (Math.abs(y - 405) < 3 && x >= 620 && x <= 950) col = mix(col, CARD, 0.9);
  const dots = [
    [640, TERRACOTTA],
    [672, SAGE],
    [704, MAUVE],
  ];
  for (const [dx, dc] of dots) {
    if (Math.hypot(x - dx, y - 452) < 11) col = mix(col, dc, 0.95);
  }
  return [...col, 255];
}

// ---------- Police bitmap 5x7 (lettres nécessaires uniquement) ----------
const FONT = {
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
};
for (const k of Object.keys(FONT)) {
  FONT[k] = FONT[k].map((row) => [...row].map((c) => c === "1"));
}

// ---------- Génération ----------
mkdirSync("public", { recursive: true });
const targets = [
  ["public/favicon-32x32.png", 32, drawIcon],
  ["public/favicon-128x128.png", 128, drawIcon],
  ["public/apple-touch-icon.png", 180, drawIcon],
  ["public/favicon-192x192.png", 192, drawIcon],
  ["public/favicon-512x512.png", 512, drawIcon],
  ["public/og-image.png", 1200, drawOg],
];

for (const [file, size, draw] of targets) {
  const isOg = file.includes("og-image");
  const w = isOg ? 1200 : size;
  const h = isOg ? 630 : size;
  const rgba = render(w, h, draw, size >= 512 ? 2 : 4);
  writeFileSync(file, encodePng(w, h, rgba));
  console.log("écrit", file, w + "x" + h);
}
