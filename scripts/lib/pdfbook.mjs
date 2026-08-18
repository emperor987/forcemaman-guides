/**
 * Moteur de livre PDF ForceMaman (aucune dépendance externe).
 *
 * Construit des ebooks A4 de ~40 pages avec l'identité visuelle de la marque :
 * fond crème #FAF6F1, cartes #E8DFD4, texte #5C4A3A, une couleur d'accent par
 * ebook (terracotta / sauge / mauve), illustrations en ligne fine.
 *
 * Deux passes de rendu : la première calcule les numéros de page réels des
 * chapitres, la seconde remplit le sommaire.
 *
 * Usage :
 *   import { createBook } from "./lib/pdfbook.mjs";
 *   const book = createBook({ title, accent, ... });
 *   book.render();                  // première passe
 *   book.render();                  // deuxième passe (sommaire paginé)
 *   book.write("out.pdf");
 */
import { writeFileSync, mkdirSync } from "node:fs";

// ---------- Géométrie ----------
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = 54;
const TEXT_W = PAGE_W - M * 2;

// ---------- Couleurs communes (RGB 0..1) ----------
export const COLORS = {
  terracotta: "0.788 0.490 0.365",
  terracottaDark: "0.62 0.36 0.25",
  terracottaSoft: "0.95 0.88 0.82",
  sage: "0.541 0.604 0.494",
  sageDark: "0.38 0.46 0.34",
  sageSoft: "0.88 0.91 0.86",
  mauve: "0.655 0.545 0.639",
  mauveDark: "0.50 0.38 0.49",
  mauveSoft: "0.92 0.88 0.91",
  text: "0.361 0.290 0.227",
  textSoft: "0.48 0.40 0.33",
  cream: "0.980 0.965 0.945",
  card: "0.910 0.875 0.831",
  white: "1 1 1",
  lineSoft: "0.85 0.82 0.78",
};

// ---------- Largeurs de caractères Helvetica (unités /1000) ----------
const W = {};
const set = (chars, v) => [...chars].forEach((c) => (W[c] = v));
set("abcdefhknopqrsuvz", 556);
set("cdegxy", 500);
set("fit", 278);
set("j", 222);
set("l", 222);
set("m", 833);
set("w", 722);
set("r", 333);
set(" ", 278);
set("!,.", 278);
set('"', 355);
set("#$", 556);
set("%", 889);
set("&", 667);
set("'", 191);
set("()", 333);
set("*", 389);
set("+=", 584);
set("-", 333);
set(".", 278);
set("/", 278);
set("0123456789", 556);
set(":;", 278);
set("?", 556);
set("@", 1015);
set("ABCDE", 667);
set("F", 611);
set("GH", 722);
set("I", 278);
set("J", 500);
set("KL", 667);
set("M", 833);
set("N", 722);
set("O", 778);
set("PQ", 667);
set("R", 722);
set("S", 667);
set("TU", 722);
set("V", 667);
set("W", 944);
set("X", 667);
set("YZ", 611);
set("[", 278);
set("\\]", 278);
set("_", 556);
set("`", 333);
set("{", 334);
set("|", 260);
set("}", 334);
set("~", 584);
set("«»", 333);
set("•·", 278);
set("…", 556);
set("’'œ", 222);
const ACCENT = {
  à: "a", â: "a", ä: "a", é: "e", è: "e", ê: "e", ë: "e",
  î: "i", ï: "i", ô: "o", ö: "o", ù: "u", û: "u", ü: "u", ç: "c", œ: "o", æ: "a",
};

function charW(ch, size) {
  const w = W[ch] ?? W[ACCENT[ch]] ?? 500;
  return (w * size) / 1000;
}
export const textW = (s, size) => [...s].reduce((acc, c) => acc + charW(c, size), 0);

// ---------- Encodage WinAnsi ----------
const WIN = {
  à: 224, â: 226, ä: 228, é: 233, è: 232, ê: 234, ë: 235, î: 238, ï: 239,
  ô: 244, ö: 246, ù: 249, û: 251, ü: 252, ç: 231, œ: 156, æ: 230,
  "«": 171, "»": 187, "•": 149, "…": 133, "’": 146, "€": 128, "·": 183, "–": 150,
};
function esc(s) {
  let out = "";
  for (const ch of s) {
    if (ch === "\\" || ch === "(" || ch === ")") out += "\\" + ch;
    else if (WIN[ch]) out += String.fromCharCode(WIN[ch]);
    else if (ch.charCodeAt(0) < 128) out += ch;
    else out += "?";
  }
  return out;
}

const FONTS = [
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Times-BoldItalic >>",
];

/**
 * Crée un livre. `cfg` :
 *   title, tagline, coverMeta, coverSub, footerLabel,
 *   accent, accentDark, accentSoft, content(b)
 */
export function createBook(cfg) {
  const C = cfg;
  const doc = { pages: [] };
  let page = null;
  let y = 0;
  let totalPages = 0;
  const sectionPages = {};

  // ---------- Primitives bas niveau ----------
  function newPage(withFooter = true) {
    totalPages += 1;
    page = { ops: [], num: totalPages };
    doc.pages.push(page);
    y = PAGE_H - M;
    if (withFooter) footer();
  }
  // Démarre un chapitre sur une nouvelle page et enregistre son numéro
  // pour le sommaire (deuxième passe).
  function chapterPage(key) {
    newPage();
    sectionPages[key] = totalPages;
  }
  function ensure(h) {
    if (y - h < M) newPage();
  }
  function op(s) {
    page.ops.push(s);
  }
  function text(x, yy, size, font, color, s) {
    op(`BT /${font} ${size} Tf ${color} rg ${x.toFixed(2)} ${yy.toFixed(2)} Td (${esc(s)}) Tj ET`);
  }
  function rect(x, yy, w, h, color) {
    op(`${color} rg ${x.toFixed(2)} ${yy.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f`);
  }
  function rrect(x, yy, w, h, r, color) {
    const k = 0.5523 * r;
    op(`${color} rg`);
    op(`${(x + r).toFixed(2)} ${yy.toFixed(2)} m ${(x + w - r).toFixed(2)} ${yy.toFixed(2)} l ${(x + w - r + k).toFixed(2)} ${yy.toFixed(2)} c ${(x + w).toFixed(2)} ${(yy + r - k).toFixed(2)} ${(x + w).toFixed(2)} ${(yy + r).toFixed(2)} l ${(x + w).toFixed(2)} ${(yy + h - r).toFixed(2)} l ${(x + w).toFixed(2)} ${(yy + h - r + k).toFixed(2)} c ${(x + w - r + k).toFixed(2)} ${(yy + h).toFixed(2)} ${(x + w - r).toFixed(2)} ${(yy + h).toFixed(2)} l ${(x + r).toFixed(2)} ${(yy + h).toFixed(2)} l ${(x + r - k).toFixed(2)} ${(yy + h).toFixed(2)} c ${x.toFixed(2)} ${(yy + h - r + k).toFixed(2)} ${x.toFixed(2)} ${(yy + h - r).toFixed(2)} l ${x.toFixed(2)} ${(yy + r).toFixed(2)} l ${x.toFixed(2)} ${(yy + r - k).toFixed(2)} c ${(x + r - k).toFixed(2)} ${yy.toFixed(2)} ${(x + r).toFixed(2)} ${yy.toFixed(2)} l h f`);
  }
  function line(x0, y0, x1, y1, color, lw = 1) {
    op(`${color} RG ${lw} w ${x0.toFixed(2)} ${y0.toFixed(2)} m ${x1.toFixed(2)} ${y1.toFixed(2)} l S`);
  }
  function circle(cx, cy, r, color, fill = false, lw = 1) {
    const k = 0.5523 * r;
    if (fill) op(`${color} rg`);
    else op(`${color} RG ${lw} w`);
    op(`${(cx + r).toFixed(2)} ${cy.toFixed(2)} m ${(cx + r).toFixed(2)} ${(cy + k).toFixed(2)} c ${(cx + k).toFixed(2)} ${(cy + r).toFixed(2)} ${cx.toFixed(2)} ${(cy + r).toFixed(2)} l ${(cx - k).toFixed(2)} ${(cy + r).toFixed(2)} c ${(cx - r).toFixed(2)} ${(cy + k).toFixed(2)} ${(cx - r).toFixed(2)} ${cy.toFixed(2)} l ${(cx - r).toFixed(2)} ${(cy - k).toFixed(2)} c ${(cx - k).toFixed(2)} ${(cy - r).toFixed(2)} ${cx.toFixed(2)} ${(cy - r).toFixed(2)} l ${(cx + k).toFixed(2)} ${(cy - r).toFixed(2)} c ${(cx + r).toFixed(2)} ${(cy - k).toFixed(2)} ${(cx + r).toFixed(2)} ${cy.toFixed(2)} l h ${fill ? "f" : "S"}`);
  }
  // Courbe de Bézier simple (ligne fine)
  function curve(x0, y0, c1x, c1y, c2x, c2y, x1, y1, color, lw = 1.1) {
    op(`${color} RG ${lw} w ${x0.toFixed(2)} ${y0.toFixed(2)} m ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${x1.toFixed(2)} ${y1.toFixed(2)} c S`);
  }
  function poly(points, color, lw = 1.1) {
    const cmds = points.map(([x, yy], i) => `${x.toFixed(2)} ${yy.toFixed(2)} ${i === 0 ? "m" : "l"}`).join(" ");
    op(`${color} RG ${lw} w ${cmds} S`);
  }

  // ---------- Mise en page ----------
  function footer() {
    const yy = M - 22;
    line(M, yy + 10, PAGE_W - M, yy + 10, COLORS.lineSoft, 0.8);
    text(M, yy, 7.5, "F1", COLORS.textSoft, C.footerLabel);
    text(PAGE_W - M - textW(String(totalPages), 7.5), yy, 7.5, "F1", COLORS.textSoft, String(totalPages));
  }
  function wrap(s, maxW, size) {
    const words = s.split(/\s+/);
    const lines = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? cur + " " + w : w;
      if (textW(test, size) <= maxW || !cur) cur = test;
      else {
        lines.push(cur);
        cur = w;
      }
    }
    if (cur) lines.push(cur);
    return lines;
  }
  function para(s, opts = {}) {
    const { size = 10.5, leading = 15.5, color = COLORS.text, font = "F1", indent = 0, maxW = TEXT_W } = opts;
    for (const ln of wrap(s, maxW - indent, size)) {
      ensure(leading);
      text(M + indent, y, size, font, color, ln);
      y -= leading;
    }
  }
  function paraIn(x, w, s, opts = {}) {
    const { size = 10.5, leading = 15, color = COLORS.text, font = "F1", maxH } = opts;
    for (const ln of wrap(s, w, size)) {
      if (maxH && y - leading < maxH) break;
      ensure(leading);
      text(x, y, size, font, color, ln);
      y -= leading;
    }
  }
  function spacer(h) {
    y -= h;
  }
  function heading(s, opts = {}) {
    const { size = 17, font = "F4", color = C.accentDark, before = 16, after = 8, x = M } = opts;
    y -= before;
    ensure(size + after);
    text(x, y, size, font, color, s);
    y -= size + after;
  }
  function subhead(s, opts = {}) {
    const { size = 12.5, font = "F2", color = COLORS.text, before = 10, after = 5 } = opts;
    y -= before;
    ensure(size + after);
    text(M, y, size, font, color, s);
    y -= size + after;
  }
  function label(s, color = C.accent) {
    ensure(14);
    text(M, y, 8.5, "F2", color, s.toUpperCase());
    y -= 14;
  }
  function bullet(s, color = C.accent, opts = {}) {
    const { size = 10.5, leading = 15.5, maxW = TEXT_W } = opts;
    const tx = M + 16;
    const lines = wrap(s, maxW - 16, size);
    for (const ln of lines) {
      ensure(leading);
      if (ln === lines[0]) circle(M + 2.5, y - 2.5, 1.8, color, true);
      text(tx, y, size, "F1", COLORS.text, ln);
      y -= leading;
    }
  }
  function checkRow(s, color = C.accent, opts = {}) {
    const { size = 10.5 } = opts;
    const lines = wrap(s, TEXT_W - 30, size);
    const h = lines.length * 15 + 12;
    ensure(h + 4);
    line(M, y - 11, M + 11, y - 11, color, 1.2);
    line(M + 11, y - 11, M + 11, y, color, 1.2);
    line(M + 11, y, M, y, color, 1.2);
    line(M, y, M, y - 11, color, 1.2);
    let yy = y - 3;
    for (const ln of lines) {
      text(M + 22, yy, size, "F1", COLORS.text, ln);
      yy -= 15;
    }
    y -= h;
    spacer(4);
  }
  function blankSection(title, notes, lines = 5) {
    heading(title, { size: 13, before: 12, after: 6 });
    if (notes) {
      para(notes, { size: 9.5, leading: 13.5, color: COLORS.textSoft });
      spacer(2);
    }
    for (let i = 0; i < lines; i++) {
      ensure(20);
      line(M, y, PAGE_W - M, y, "0.80 0.76 0.70", 0.7);
      y -= 22;
    }
    spacer(6);
  }
  function infoBox(title, items, opts = {}) {
    const { color = C.accent, colorDark = C.accentDark, boxColor = C.accentSoft } = opts;
    const size = 10;
    const leading = 14.5;
    const padX = 16;
    const titleH = 26;
    const lines = items.flatMap((it) => wrap(it, TEXT_W - padX * 2, size));
    const h = titleH + lines.length * leading + 14;
    ensure(h + 8);
    const yTop = y;
    rrect(M, yTop - h, TEXT_W, h, 14, boxColor);
    rect(M, yTop - h, 5, h, color);
    text(M + padX + 4, yTop - 16, 10.5, "F2", colorDark, title);
    let yy = yTop - 16 - leading;
    for (const ln of lines) {
      text(M + padX + 4, yy, size, "F1", COLORS.text, ln);
      yy -= leading;
    }
    y = yTop - h - 8;
  }
  function steps(items, color = C.accent, dark = C.accentDark) {
    items.forEach((s, i) => {
      const size = 10.5;
      const lines = wrap(s, TEXT_W - 34, size);
      const h = Math.max(24, lines.length * 15 + 10);
      ensure(h);
      circle(M + 10, y - 9, 8, color, true);
      text(M + 10 - textW(String(i + 1), 9) / 2, y - 6.5, 9, "F2", COLORS.white, String(i + 1));
      let yy = y - 4;
      for (const ln of lines) {
        text(M + 26, yy, size, "F1", COLORS.text, ln);
        yy -= 15;
      }
      y -= h;
      spacer(3);
    });
  }
  function quoteBox(s, opts = {}) {
    const { size = 11.5, leading = 17, color = C.accentDark } = opts;
    const lines = wrap(s, TEXT_W - 20, size);
    const h = lines.length * leading + 26;
    ensure(h + 8);
    const yTop = y;
    rrect(M, yTop - h, TEXT_W, h, 14, COLORS.white);
    line(M + 14, yTop - 14, M + 14, yTop - h + 14, color, 1.6);
    let yy = yTop - 22;
    for (const ln of lines) {
      text(M + 30, yy, size, "F3", color, ln);
      yy -= leading;
    }
    y = yTop - h - 8;
  }
  function table(rows, opts = {}) {
    const { colW = 130, size = 10, leading = 14, headerColor = C.accentDark, padY = 8 } = opts;
    for (const [a, b] of rows) {
      const ha = wrap(a, colW - 8, size).length * leading + padY * 2;
      const hb = wrap(b, TEXT_W - colW - 16, size).length * leading + padY * 2;
      const h = Math.max(ha, hb, 26);
      ensure(h + 4);
      line(M, y, PAGE_W - M, y, COLORS.lineSoft, 0.7);
      let yy = y - padY - 3;
      for (const ln of wrap(a, colW - 8, size)) {
        text(M + 6, yy, size, "F2", headerColor, ln);
        yy -= leading;
      }
      yy = y - padY - 3;
      for (const ln of wrap(b, TEXT_W - colW - 16, size)) {
        text(M + colW + 8, yy, size, "F1", COLORS.text, ln);
        yy -= leading;
      }
      y -= h;
      spacer(2);
    }
    line(M, y, PAGE_W - M, y, COLORS.lineSoft, 0.7);
    spacer(8);
  }

  // ---------- Illustrations en ligne fine ----------
  function illustration(name, cx, cy, s, color = C.accent) {
    // `s` = échelle ; dessins centrés sur (cx, cy)
    const t = (x, yy) => [cx + x * s, cy - yy * s];
    const L = (x0, y0, x1, y1, lw = 1.3) => {
      const [a, b] = t(x0, y0);
      const [c, d] = t(x1, y1);
      line(a, b, c, d, color, lw);
    };
    const Cv = (x0, y0, c1x, c1y, c2x, c2y, x1, y1, lw = 1.3) => {
      const [a, b] = t(x0, y0);
      const [c, d] = t(c1x, c1y);
      const [e, f] = t(c2x, c2y);
      const [g, h] = t(x1, y1);
      curve(a, b, c, d, e, f, g, h, color, lw);
    };
    const Ci = (x0, y0, r, lw = 1.3) => {
      const [a, b] = t(x0, y0);
      circle(a, b, r * s, color, false, lw);
    };
    switch (name) {
      case "crib": {
        L(-30, -14, 30, -14, 1.6);
        L(-30, -14, -30, 14, 1.6);
        L(30, -14, 30, 14, 1.6);
        L(-30, 14, 30, 14, 1.6);
        L(-30, 14, -34, 20, 1.2);
        L(30, 14, 34, 20, 1.2);
        for (let i = -22; i <= 22; i += 8) L(i, -14, i, 4, 1);
        Cv(-22, 6, -10, 14, 10, 14, 22, 6, 1.2);
        Ci(16, 2, 4, 1.2);
        break;
      }
      case "bottle": {
        Cv(-6, 2, -14, -4, -14, -12, -6, -16, 1.4);
        Cv(-6, -16, 2, -20, 6, -20, 14, -16, 1.4);
        L(-14, -6, 14, -6, 1.4);
        L(14, -6, 14, -14, 1.4);
        L(14, -14, 20, -14, 1.4);
        L(20, -14, 20, -6, 1.4);
        Cv(6, -24, 2, -28, -2, -28, -6, -24, 1.2);
        L(-3, -16, -3, -22, 1.2);
        L(3, -16, 3, -22, 1.2);
        break;
      }
      case "heart": {
        Cv(0, 12, 16, 0, 16, -10, 0, -18, 1.5);
        Cv(0, 12, -16, 0, -16, -10, 0, -18, 1.5);
        break;
      }
      case "moon": {
        Cv(6, 0, 6, 16, -8, 14, -8, 0, 1.5);
        Cv(-8, 0, -8, -14, 6, -16, 6, 0, 1.5);
        Ci(-2, -4, 1.4, 1.1);
        Ci(2, 4, 1.4, 1.1);
        break;
      }
      case "calendar": {
        L(-18, 16, 18, 16, 1.5);
        L(-18, -14, 18, -14, 1.5);
        L(-18, 16, -18, -14, 1.5);
        L(18, 16, 18, -14, 1.5);
        L(-12, 20, -12, 12, 1.3);
        L(12, 20, 12, 12, 1.3);
        L(-14, 10, 0, 10, 1.2);
        L(0, 10, 0, 4, 1.2);
        L(0, 4, 6, 4, 1.2);
        L(6, 4, 6, -2, 1.2);
        L(6, -2, 12, -2, 1.2);
        L(12, -2, 12, -8, 1.2);
        break;
      }
      case "list": {
        L(-20, 18, 20, 18, 1.4);
        L(-20, 6, 20, 6, 1.4);
        L(-20, -6, 20, -6, 1.4);
        L(-20, -18, 20, -18, 1.4);
        L(-13, 15, -13, 9, 1.4);
        L(-13, 9, -8, 9, 1.4);
        L(-8, 9, -8, 3, 1.4);
        L(-8, 3, -3, 3, 1.4);
        L(-3, 3, -3, -3, 1.4);
        L(-3, -3, 2, -3, 1.4);
        Ci(14, 18, 3, 1.3);
        Ci(14, 6, 3, 1.3);
        Ci(14, -6, 3, 1.3);
        Ci(14, -18, 3, 1.3);
        break;
      }
      case "bag": {
        Cv(-22, 2, -24, -10, -12, -14, 0, -14, 1.5);
        Cv(0, -14, 12, -14, 24, -10, 22, 2, 1.5);
        Cv(22, 2, 22, 14, 10, 18, 0, 18, 1.5);
        Cv(0, 18, -10, 18, -22, 14, -22, 2, 1.5);
        Cv(-6, -14, -6, -22, 6, -22, 6, -14, 1.4);
        L(-16, -6, 16, -6, 1.2);
        Ci(0, 4, 4, 1.3);
        break;
      }
      case "stroller": {
        Ci(-16, 6, 4, 1.4);
        Ci(16, 6, 4, 1.4);
        L(-16, 2, -16, -6, 1.4);
        L(16, 2, 16, -6, 1.4);
        L(-20, -6, 20, -6, 1.3);
        Cv(-22, -8, -28, -10, -26, -18, -14, -18, 1.4);
        Cv(-14, -18, 6, -18, 12, -18, 16, -8, 1.4);
        L(16, -8, 20, -6, 1.4);
        Cv(-10, -18, -10, -26, 0, -26, 6, -18, 1.4);
        Ci(-2, -24, 3.5, 1.3);
        break;
      }
      case "body": {
        Ci(0, 30, 10, 1.4);
        Cv(-13, 18, -16, 8, -12, 0, -8, -6, 1.4);
        Cv(13, 18, 16, 8, 12, 0, 8, -6, 1.4);
        Cv(-8, -6, -10, -18, 4, -18, 4, -6, 1.4);
        Cv(4, -6, 4, -18, -10, -18, -8, -6, 1.4);
        L(-12, -6, -20, -16, 1.3);
        L(12, -6, 20, -16, 1.3);
        Cv(-20, -16, -14, -20, -8, -18, -4, -14, 1.2);
        Cv(20, -16, 14, -20, 8, -18, 4, -14, 1.2);
        Ci(0, -6, 4, 1.2);
        break;
      }
      case "droplets": {
        Cv(0, 22, 10, 10, 10, -6, 0, -14, 1.5);
        Cv(0, 22, -10, 10, -10, -6, 0, -14, 1.5);
        Ci(-14, -4, 2.6, 1.2);
        Ci(14, 6, 2.6, 1.2);
        Ci(6, -20, 2.2, 1.2);
        break;
      }
      case "flower": {
        Ci(0, 0, 6, 1.4);
        Ci(0, 12, 6, 1.4);
        Ci(11, 6, 6, 1.4);
        Ci(7, -9, 6, 1.4);
        Ci(-7, -9, 6, 1.4);
        Ci(-11, 6, 6, 1.4);
        Ci(0, 0, 2.6, 1.2);
        L(0, -6, 0, -20, 1.3);
        L(-4, -26, 0, -20, 1.2);
        L(4, -26, 0, -20, 1.2);
        break;
      }
      case "bubbles": {
        Ci(0, 8, 14, 1.5);
        Ci(18, -6, 8, 1.4);
        Ci(-18, -10, 6, 1.3);
        L(-2, 2, 2, -2, 1.2);
        L(-6, 6, 6, -6, 1.2);
        L(-8, 8, 8, -8, 1.2);
        Ci(18, -4, 1.4, 1.1);
        Ci(-16, -10, 1.2, 1.1);
        break;
      }
      case "cloud": {
        Cv(-18, 6, -26, 4, -26, -6, -14, -8, 1.4);
        Cv(-14, -8, -12, -18, 0, -16, 2, -8, 1.4);
        Cv(2, -8, 12, -18, 20, -10, 18, -4, 1.4);
        Cv(18, -4, 26, 0, 24, 8, 16, 10, 1.4);
        Cv(16, 10, 10, 14, 0, 12, -2, 8, 1.4);
        Cv(-2, 8, -10, 12, -18, 10, -18, 6, 1.4);
        Ci(-8, 0, 1.6, 1.1);
        Ci(2, 2, 1.6, 1.1);
        Ci(10, 0, 1.6, 1.1);
        break;
      }
      case "sun": {
        Ci(0, 0, 10, 1.4);
        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI) / 4;
          const x0 = Math.cos(a) * 14;
          const y0 = Math.sin(a) * 14;
          const x1 = Math.cos(a) * 20;
          const y1 = Math.sin(a) * 20;
          L(x0, y0, x1, y1, 1.2);
        }
        break;
      }
      case "hand": {
        Cv(-14, 10, -18, -6, -8, -10, -2, -14, 1.3);
        Cv(-2, -14, 4, -18, 4, -6, 4, -2, 1.3);
        Cv(4, -2, 4, -16, 10, -16, 10, -4, 1.3);
        Cv(10, -4, 10, -14, 15, -13, 15, -3, 1.3);
        Cv(15, -3, 15, -10, 20, -8, 19, 2, 1.3);
        Cv(19, 2, 14, 10, 6, 12, 0, 10, 1.3);
        Cv(0, 10, -8, 12, -14, 10, -14, 10, 1.3);
        break;
      }
      case "leaf": {
        Cv(0, 18, 14, 6, 14, -10, 0, -18, 1.5);
        Cv(0, 18, -14, 6, -14, -10, 0, -18, 1.5);
        L(0, 14, 0, -14, 1.1);
        L(0, 6, -5, 0, 1);
        L(0, -2, 5, -8, 1);
        break;
      }
      case "scale": {
        Cv(0, -2, -8, -10, -14, -6, -20, -14, 1.3);
        Cv(0, -2, 8, -10, 14, -6, 20, -14, 1.3);
        L(-20, -14, 20, -14, 1.3);
        L(0, -2, 0, -14, 1.3);
        Ci(0, 6, 6, 1.4);
        Cv(-6, 6, -6, 2, 0, 2, 0, 6, 1.2);
        Cv(6, 6, 6, 2, 0, 2, 0, 6, 1.2);
        break;
      }
      case "book": {
        Cv(-16, 12, -4, 18, 0, 10, 0, 10, 1.4);
        Cv(0, 10, 0, 18, 16, 12, 16, -10, 1.4);
        Cv(16, -10, 4, -18, 0, -8, 0, -8, 1.4);
        Cv(0, -8, 0, -18, -16, -12, -16, 12, 1.4);
        L(0, 10, 0, -8, 1.2);
        L(-8, 6, -8, -4, 1.1);
        L(8, 6, 8, -4, 1.1);
        break;
      }
      default:
        break;
    }
  }

  // ---------- Pages de structure ----------
  function cover() {
    newPage(false);
    rect(0, 0, PAGE_W, PAGE_H, COLORS.cream);
    circle(110, 730, 170, C.accentSoft, true);
    circle(505, 140, 140, "0.94 0.88 0.80", true);
    circle(505, 140, 100, "0.90 0.80 0.73", false, 1.2);
    circle(90, 130, 80, "0.92 0.86 0.82", false, 1);
    rect(0, 0, PAGE_W, 10, C.accent);
    rect(0, PAGE_H - 10, PAGE_W, 10, C.accent);
    text(M, 720, 13, "F2", C.accent, "F O R C E M A M A N");
    text(M, 612, 40, "F4", C.accentDark, C.title);
    line(M, 566, M + 150, 566, "0.78 0.66 0.55", 1);
    paraIn(M, TEXT_W, C.tagline, { size: 14, leading: 20, color: COLORS.textSoft, font: "F3" });
    y = 480;
    rrect(M, y - 84, TEXT_W, 84, 14, COLORS.white);
    text(M + 18, y - 26, 12, "F2", C.accentDark, C.coverMeta || "Écrit par Maria, ancienne sage-femme");
    paraIn(M + 18, TEXT_W - 36, C.coverSub || "Écrit avec ce qu'elle sait en tant que professionnelle, et ce qu'elle a vécu en tant que maman.", {
      size: 10, leading: 15, maxH: 48,
    });
    y = 120;
    text(M, y, 11, "F3", COLORS.textSoft, "Maria Garcia · Sage-femme");
  }

  function tocPage(items) {
    newPage();
    heading("Sommaire", { before: 8 });
    spacer(6);
    for (const [n, t, key] of items) {
      ensure(30);
      const pg = sectionPages[key] ? `p. ${sectionPages[key]}` : "";
      text(M, y, 11, "F2", C.accent, n);
      text(M + 34, y, 11.5, "F1", COLORS.text, t);
      text(PAGE_W - M - textW(pg, 10.5), y, 10.5, "F1", COLORS.textSoft, pg);
      y -= 30;
    }
    spacer(8);
    line(M, y, PAGE_W - M, y, COLORS.lineSoft, 0.8);
    spacer(10);
    para(
      "Ce guide est un outil d'accompagnement et d'information. Il ne remplace pas l'avis d'un professionnel de santé. En cas de doute ou de symptôme, consulte ta sage-femme, ton médecin ou un professionnel qualifié.",
      { size: 9.5, leading: 14, color: COLORS.textSoft },
    );
  }

  function closing(sources) {
    newPage();
    sectionPages.rappel = totalPages;
    label("Rappel important", C.accent);
    heading("Ce guide ne remplace pas un avis professionnel", { before: 4 });
    para(
      "Les informations de ce guide sont des repères généraux, écrits dans un langage accessible. Elles ne remplacent en aucun cas l'avis, le diagnostic ou le suivi d'un professionnel de santé.",
    );
    para(
      "En cas de doute, de douleur, de fièvre, de saignement inhabituel ou de tout symptôme qui t'inquiète, contacte sans attendre ta sage-femme, ton médecin, ta maternité ou le 15 en cas d'urgence. En France, le 15 et le 112 sont joignables 24h/24.",
    );
    spacer(6);
    infoBox("Si tu te sens dépassée", [
      "Le baby blues est fréquent et passager, autour du 2e au 5e jour après la naissance.",
      "Si la tristesse ou l'anxiété durent plus de deux semaines ou deviennent envahissantes, parles-en : une dépression du post-partum touche environ 10 à 20 % des mères et se soigne très bien.",
      "En parler à un professionnel, c'est un acte de courage et de soin, pas une faiblesse.",
    ], { color: C.accent, colorDark: C.accentDark, boxColor: C.accentSoft });
    newPage();
    label("Repères et sources officielles");
    heading("Pour aller plus loin en confiance", { before: 4 });
    para("Les repères de ce guide s'appuient sur des sources officielles françaises, consultables librement :");
    spacer(4);
    for (const s of sources) bullet(s, C.accent);
    spacer(8);
    line(M, y, PAGE_W - M, y, COLORS.lineSoft, 0.8);
    spacer(10);
    para(
      "ForceMaman est une marque de SAFAA Beauty. Les guides ForceMaman sont écrits par Maria Garcia, ancienne sage-femme pendant 8 ans et maman, avec ce qu'elle sait en tant que professionnelle et ce qu'elle a vécu en tant que maman.",
      { size: 9.5, leading: 14, color: COLORS.textSoft },
    );
    para("© ForceMaman · Tous droits réservés · forcemaman.fr", { size: 9.5, leading: 14, color: COLORS.textSoft });
  }

  /**
   * Pages de fin d'ebook : suivi personnel (plusieurs pages), rappel
   * important + sources, et dernière page. `suivi` est un tableau de pages,
   * chaque page étant un tableau de sections [titre, note, lignes].
   */
  function finalPages({ suivi = [], suiviTitle, suiviNote, sources = [], lastText, lastSub }) {
    suivi.forEach((sections, i) => {
      chapterPage(i === 0 ? "suivi" : `suivi${i + 1}`);
      if (i === 0 && suiviTitle) {
        label(suiviTitle, C.accent);
        heading("Pages à remplir, sans pression", { before: 4, size: 20 });
        if (suiviNote) {
          para(suiviNote, { size: 10, leading: 15, color: COLORS.textSoft });
          spacer(4);
        }
      }
      for (const [title, note, lines] of sections) {
        blankSection(title, note, lines ?? 6);
      }
    });
    closing(sources);
    lastPage(lastText, lastSub);
  }

  function lastPage(finalText, finalSub) {
    newPage(false);
    rect(0, 0, PAGE_W, PAGE_H, COLORS.cream);
    circle(505, 700, 130, C.accentSoft, true);
    circle(90, 120, 90, "0.94 0.88 0.80", true);
    illustration("heart", 297, 430, 6, C.accent);
    text(M, 620, 26, "F4", C.accentDark, C.title);
    paraIn(M, TEXT_W, finalText, { size: 12, leading: 19, color: COLORS.textSoft, font: "F3", maxH: 90 });
    y = 330;
    text(PAGE_W - M - textW(finalSub, 9.5), y, 9.5, "F1", COLORS.textSoft, finalSub);
  }

  // ---------- API publique ----------
  return {
    get pages() {
      return doc.pages.length;
    },
    get sectionPages() {
      return sectionPages;
    },
    newPage,
    chapterPage,
    text,
    rect,
    rrect,
    line,
    circle,
    curve,
    ensure,
    spacer,
    wrap,
    para,
    paraIn,
    heading,
    subhead,
    label,
    bullet,
    checkRow,
    blankSection,
    infoBox,
    steps,
    quoteBox,
    table,
    illustration,
    cover,
    tocPage,
    closing,
    finalPages,
    lastPage,
    footer,
    get y() {
      return y;
    },
    set y(v) {
      y = v;
    },
    C,
    render() {
      doc.pages = [];
      totalPages = 0;
      for (const k of Object.keys(sectionPages)) delete sectionPages[k];
      C.content(this);
    },
    assemble() {
      const contents = doc.pages.map(
        (p) =>
          `<< /Length ${Buffer.byteLength(p.ops.join("\n"), "latin1")} >>\nstream\n${p.ops.join("\n")}\nendstream`,
      );
      const n = contents.length;
      const pageObjs = contents.map(
        (_, i) =>
          `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 ${n + 3} 0 R /F2 ${n + 4} 0 R /F3 ${n + 5} 0 R /F4 ${n + 6} 0 R >> >> /Contents ${i + 3} 0 R >>`,
      );
      const kids = pageObjs.map((_, i) => `${i + 3} 0 R`).join(" ");
      const all = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        `<< /Type /Pages /Kids [${kids}] /Count ${n} >>`,
        ...contents,
        ...pageObjs,
        ...FONTS,
      ];
      let pdf = "%PDF-1.4\n";
      const offsets = [];
      for (let i = 0; i < all.length; i++) {
        offsets.push(Buffer.byteLength(pdf, "latin1"));
        pdf += `${i + 1} 0 obj\n${all[i]}\nendobj\n`;
      }
      const xrefPos = Buffer.byteLength(pdf, "latin1");
      pdf += `xref\n0 ${all.length + 1}\n0000000000 65535 f \n`;
      for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
      pdf += `trailer\n<< /Size ${all.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
      return pdf;
    },
    write(path) {
      mkdirSync("public/ebooks", { recursive: true });
      writeFileSync(path, this.assemble(), "latin1");
      console.log("PDF écrit :", path);
      console.log("Pages :", doc.pages.length);
    },
  };
}

export { PAGE_W, PAGE_H, M, TEXT_W };
