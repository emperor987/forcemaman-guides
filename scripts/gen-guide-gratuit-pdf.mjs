/**
 * Génère le guide gratuit PDF « Les 7 Systèmes ForceMaman » (~30 pages).
 * Mise en page A4, polices standards PDF (Helvetica + Times), palette
 * ForceMaman. Aucune dépendance externe. Deux passes pour remplir les
 * numéros de pages du sommaire.
 *
 * Usage : node scripts/gen-guide-gratuit-pdf.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";

// ---------- Géométrie ----------
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = 54;
const TEXT_W = PAGE_W - M * 2;

// ---------- Couleurs (RGB 0..1) ----------
const TERRACOTTA = "0.788 0.490 0.365";
const TERRACOTTA_D = "0.65 0.38 0.27";
const SAGE = "0.541 0.604 0.494";
const MAUVE = "0.655 0.545 0.639";
const TEXT = "0.361 0.290 0.227";
const TEXT_SOFT = "0.48 0.40 0.33";
const CREAM = "0.980 0.965 0.945";
const WHITE = "1 1 1";

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
set("!,", 278);
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
const textW = (s, size) => [...s].reduce((acc, c) => acc + charW(c, size), 0);

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

// ---------- Document ----------
const doc = { pages: [] };
let page = null;
let y = 0;
let totalPages = 0;

function newPage() {
  totalPages += 1;
  page = { ops: [], num: totalPages };
  doc.pages.push(page);
  y = PAGE_H - M;
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

// ---------- Mise en page ----------
function footer() {
  const yy = M - 22;
  line(M, yy + 10, PAGE_W - M, yy + 10, "0.85 0.82 0.78", 0.8);
  text(M, yy, 7.5, "F1", TEXT_SOFT, "Les 7 Systèmes ForceMaman · Guide gratuit");
  text(PAGE_W - M - textW(String(totalPages), 7.5), yy, 7.5, "F1", TEXT_SOFT, String(totalPages));
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
  const { size = 10.5, leading = 15.5, color = TEXT, font = "F1" } = opts;
  for (const ln of wrap(s, TEXT_W, size)) {
    ensure(leading);
    text(M, y, size, font, color, ln);
    y -= leading;
  }
}

function paraIn(x, w, s, opts = {}) {
  const { size = 10.5, leading = 15, color = TEXT, font = "F1", maxH } = opts;
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
  const { size = 17, font = "F4", color = TERRACOTTA_D, before = 16, after = 8 } = opts;
  y -= before;
  ensure(size + after);
  text(M, y, size, font, color, s);
  y -= size + after;
}

function label(s, color = SAGE) {
  ensure(14);
  text(M, y, 8.5, "F2", color, s.toUpperCase());
  y -= 14;
}

function bullet(s, color = TERRACOTTA) {
  const size = 10.5;
  const leading = 15.5;
  const tx = M + 16;
  const lines = wrap(s, TEXT_W - 16, size);
  for (const ln of lines) {
    ensure(leading);
    if (ln === lines[0]) circle(M + 2.5, y - 2.5, 1.8, color, true);
    text(tx, y, size, "F1", TEXT, ln);
    y -= leading;
  }
}

function checkRow(s) {
  const size = 10.5;
  const lines = wrap(s, TEXT_W - 30, size);
  const h = lines.length * 15 + 12;
  ensure(h + 4);
  line(M, y - 11, M + 11, y - 11, TERRACOTTA, 1.2);
  line(M + 11, y - 11, M + 11, y, TERRACOTTA, 1.2);
  line(M + 11, y, M, y, TERRACOTTA, 1.2);
  line(M, y, M, y - 11, TERRACOTTA, 1.2);
  let yy = y - 3;
  for (const ln of lines) {
    text(M + 22, yy, size, "F1", TEXT, ln);
    yy -= 15;
  }
  y -= h;
  spacer(4);
}

function blankSection(title, notes) {
  heading(title, { size: 13, before: 12, after: 6 });
  if (notes) {
    para(notes, { size: 9.5, leading: 13.5, color: TEXT_SOFT });
    spacer(2);
  }
  for (let i = 0; i < 4; i++) {
    ensure(20);
    line(M, y, PAGE_W - M, y, "0.80 0.76 0.70", 0.7);
    y -= 22;
  }
  spacer(6);
}

function infoBox(title, items) {
  const size = 10;
  const leading = 14.5;
  const padX = 16;
  const titleH = 24;
  const lines = items.flatMap((it) => wrap(it, TEXT_W - padX * 2, size));
  const h = titleH + lines.length * leading + 14;
  ensure(h + 8);
  const yTop = y;
  rrect(M, yTop - h, TEXT_W, h, 14, "0.93 0.90 0.86");
  rect(M, yTop - h, 5, h, SAGE);
  text(M + padX + 4, yTop - 16, 10.5, "F2", TERRACOTTA_D, title);
  let yy = yTop - 16 - leading;
  for (const ln of lines) {
    text(M + padX + 4, yy, size, "F1", TEXT, ln);
    yy -= leading;
  }
  y = yTop - h - 8;
}

function steps(items) {
  items.forEach((s, i) => {
    const size = 10.5;
    const lines = wrap(s, TEXT_W - 34, size);
    const h = Math.max(24, lines.length * 15 + 10);
    ensure(h);
    circle(M + 10, y - 9, 8, TERRACOTTA, true);
    text(M + 10 - textW(String(i + 1), 9) / 2, y - 6.5, 9, "F2", WHITE, String(i + 1));
    let yy = y - 4;
    for (const ln of lines) {
      text(M + 26, yy, size, "F1", TEXT, ln);
      yy -= 15;
    }
    y -= h;
    spacer(3);
  });
}

// ---------- Contenu ----------
const systems = [
  {
    n: "01",
    name: "Le Cahier Unique",
    problem:
      "Les informations sont éparpillées partout : un post-it ici, une note dans le téléphone là, un souvenir qu'on espère ne pas oublier. Résultat, la tête tourne en permanence.",
    system:
      "Un seul cahier (ou une seule note sur ton téléphone), où tout est centralisé : rendez-vous médicaux, horaires de tétées si tu les suis, questions à poser à la sage-femme, idées à noter pour plus tard.",
    how: [
      "Choisis un seul support, papier ou numérique, et n'en change plus.",
      "Garde-le toujours au même endroit, à portée de main.",
      "Une seule règle : si ça te traverse l'esprit et que tu risques de l'oublier, ça va dans le cahier, immédiatement.",
    ],
    tip: "Ne vise pas un carnet parfait. Une page pour les rendez-vous, une page pour les questions, et le reste au fil de l'eau, c'est déjà énorme. Pense à y noter tes questions pour le suivi à domicile de la sage-femme et pour la consultation post-natale : tu arriveras avec tout en tête, sans stress.",
  },
  {
    n: "02",
    name: "La Boîte à 3",
    problem:
      "Le rangement des vêtements de bébé devient vite un casse-tête : trop petit, taille suivante, à laver. Chaque habillage se transforme en chasse au trésor.",
    system:
      "Trois bacs clairement identifiés : Actuel, Taille suivante, À laver. Un tri hebdomadaire de 5 minutes suffit à garder tout en ordre, sans y penser entre deux.",
    how: [
      "Étiquette 3 bacs ou paniers avec ces 3 catégories.",
      "Chaque vêtement propre va directement dans le bon bac, jamais ailleurs.",
      "Un seul moment dans la semaine (ex. dimanche soir) pour trier le bac à laver.",
    ],
    tip: "Quand quelqu'un te propose de l'aide, donne-lui une mission précise : vider le bac à laver, ranger la taille suivante. Une aide ciblée vaut mieux qu'une aide floue. Et n'oublie pas : les bodies dépareillés n'ont jamais fait de mal à personne.",
  },
  {
    n: "03",
    name: "Les Repas de Secours",
    problem:
      "Cuisiner devient un effort immense certains jours, et la solution de facilité coûte cher et n'est pas toujours satisfaisante. Manger sainement ressemble à une mission impossible.",
    system:
      "Trois recettes simples, validées à l'avance, dont les ingrédients sont toujours en stock à la maison. Plus besoin de réfléchir les jours sans énergie.",
    how: [
      "Choisis 3 recettes que tu sais faire les yeux fermés, avec des ingrédients qui se congèlent ou se conservent.",
      "Prépare une double quantité une fois par semaine et congèle le surplus.",
      "Garde toujours le stock de base de ces 3 recettes à la maison.",
    ],
    tip: "Les premiers mois, bien manger veut surtout dire manger régulièrement et s'hydrater. Une assiette simple et chaude, préparée d'avance, vaut mille plats élaborés. N'hésite pas à accepter les plats cuisinés par ton entourage, et à faire tes courses en ligne si tu peux.",
  },
  {
    n: "04",
    name: "Le Panier Nomade",
    problem:
      "On se retrouve à courir d'une pièce à l'autre pour chercher un mouchoir, une couche, un change. Chaque petit besoin devient un aller-retour.",
    system:
      "Un panier unique qui contient l'essentiel et qui te suit de pièce en pièce dans la maison. Tu ne cherches plus, tu attrapes.",
    how: [
      "Choisis un panier avec une poignée, facile à transporter.",
      "À l'intérieur : couches, lingettes, un change complet, un mouchoir, une tétine de secours.",
      "Il ne reste jamais fixe : il te suit là où tu es dans la maison.",
    ],
    tip: "Un rappel important : le panier sert au change et à l'éveil, jamais au sommeil. Pour dormir, bébé est toujours couché sur le dos, dans son lit ou son cododo, sans coussin, sans couverture ni peluche, dans une gigoteuse adaptée. C'est la recommandation officielle pour prévenir la mort inattendue du nourrisson.",
  },
  {
    n: "05",
    name: "La Trousse Départ Éclair",
    problem:
      "Sortir avec bébé demande souvent 15 à 20 minutes de préparatifs de dernière minute. Alors on renonce, ou on part stressée.",
    system:
      "Un sac déjà équipé en permanence, jamais vidé complètement, prêt à partir en moins de 5 minutes. La sortie redevient un plaisir simple.",
    how: [
      "Prépare un sac dédié aux sorties, distinct du panier nomade.",
      "Contenu fixe qui ne bouge jamais : couches, lingettes, change complet, doudou, biberon ou nécessaire d'allaitement.",
      "Après chaque sortie, reremplis immédiatement ce qui a été utilisé.",
    ],
    tip: "Une sortie de vingt minutes au grand air, même dans le quartier, compte vraiment : pour toi et pour bébé. Protège-le du soleil avec des vêtements légers et de l'ombre, et choisis le moment où il est éveillé et calme. Et si la sortie capote, ce n'est pas grave : le sac est prêt pour la prochaine.",
  },
  {
    n: "06",
    name: "La Règle du Suffisant",
    problem:
      "La pression de bien faire pousse à vouloir tout accomplir parfaitement, ce qui épuise sans jamais suffire. On se compare, on culpabilise, on s'épuise.",
    system:
      "Un principe simple : chaque jour, une seule chose vraiment prioritaire, le reste est suffisant tel quel, sans culpabilité.",
    how: [
      "Chaque matin, identifie une seule priorité réelle pour la journée.",
      "Tout le reste peut attendre, être délégué, ou simplement ne pas être fait.",
      "Rappelle-toi : une maison suffisante pendant quelques mois n'a jamais fait de mal à personne.",
    ],
    tip: "Un repère important : après la naissance, il est fréquent de traverser un petit creux émotionnel autour du 2e au 5e jour, c'est le baby blues, et il passe généralement seul. En revanche, si la tristesse, l'anxiété ou la fatigue morale durent plus de deux semaines ou deviennent envahissantes, parle-en à ta sage-femme, ton médecin ou un professionnel de santé. Demander de l'aide, c'est déjà prendre soin de toi et de bébé.",
  },
  {
    n: "07",
    name: "Le Sas du Soir",
    problem:
      "Les soirées sont souvent chaotiques, ce qui rend les matins suivants encore plus difficiles. On se couche épuisée et on se réveille débordée.",
    system:
      "5 gestes simples et rapides le soir, qui rendent le lendemain matin nettement plus doux. Un sas entre la journée et la nuit.",
    how: [
      "Préparer les vêtements du lendemain pour bébé.",
      "Vérifier que la trousse départ éclair est complète.",
      "Remplir à nouveau le panier nomade.",
      "Sortir ce qu'il faut pour le repas du lendemain.",
      "Un dernier tour du salon pour repartir sur une base propre.",
    ],
    tip: "Ce rituel signale aussi à ton corps que la journée se termine : lumière douce, téléphone posé, et quelques minutes rien que pour toi avant de dormir. Dix minutes le soir valent mieux qu'une heure le matin.",
  },
];

const TOC_ITEMS = [
  ["01", "Avant de commencer", "avant"],
  ["02", "Pourquoi des systèmes plutôt que des to-do lists", "pourquoi"],
  ["03", "Les 7 systèmes", "systems"],
  ["04", "Ton plan des 7 jours pour tout mettre en place", "plan"],
  ["05", "Mon suivi personnel (pages à remplir)", "suivi"],
  ["06", "Un mot pour finir", "fin"],
  ["07", "Rappel important et sources", "sources"],
];

// ---------- Construction ----------
function build(tocPages) {
  doc.pages = [];
  totalPages = 0;
  const sectionPages = {};

  /* ===== COUVERTURE ===== */
  newPage();
  rect(0, 0, PAGE_W, PAGE_H, CREAM);
  circle(110, 720, 180, "0.94 0.88 0.80", true);
  circle(500, 130, 150, "0.94 0.86 0.80", true);
  circle(500, 130, 110, "0.90 0.80 0.73", false, 1.2);
  circle(95, 120, 90, "0.92 0.86 0.82", false, 1);
  rect(0, 0, PAGE_W, 10, TERRACOTTA);
  rect(0, PAGE_H - 10, PAGE_W, 10, TERRACOTTA);
  text(M, 720, 13, "F2", SAGE, "F O R C E M A M A N");
  text(M, 610, 44, "F4", TERRACOTTA_D, "Les 7 Systèmes");
  text(M, 555, 44, "F4", TEXT, "ForceMaman");
  line(M, 520, M + 140, 520, "0.78 0.66 0.55", 1);
  paraIn(M, TEXT_W, "Des repères simples pour respirer avec un nouveau-né", {
    size: 14, leading: 20, color: TEXT_SOFT, font: "F3",
  });
  y = 455;
  rrect(M, y - 70, TEXT_W, 70, 14, WHITE);
  text(M + 18, y - 26, 12, "F2", TERRACOTTA_D, "Guide gratuit offert par ForceMaman");
  text(M + 18, y - 48, 10.5, "F1", TEXT_SOFT, "Écrit par une ancienne sage-femme, maman de son côté.");
  y = 130;
  text(M, y, 11, "F3", TEXT_SOFT, "Maria Garcia · Sage-femme");

  /* ===== SOMMAIRE ===== */
  newPage();
  heading("Sommaire", { before: 8 });
  spacer(6);
  for (const [n, t, key] of TOC_ITEMS) {
    ensure(30);
    const pg = tocPages[key] ? `p. ${tocPages[key]}` : "";
    text(M, y, 11, "F2", TERRACOTTA, n);
    text(M + 34, y, 11.5, "F1", TEXT, t);
    text(PAGE_W - M - textW(pg, 10.5), y, 10.5, "F1", TEXT_SOFT, pg);
    y -= 30;
  }
  spacer(8);
  line(M, y, PAGE_W - M, y, "0.85 0.82 0.78", 0.8);
  spacer(10);
  para(
    "Ce guide est un outil d'accompagnement et d'information. Il ne remplace pas l'avis d'un professionnel de santé. En cas de doute ou de symptôme, consulte ta sage-femme, ton médecin ou un professionnel qualifié.",
    { size: 9.5, leading: 14, color: TEXT_SOFT },
  );

  /* ===== AVANT DE COMMENCER ===== */
  sectionPages.avant = totalPages + 1;
  newPage();
  label("Avant de commencer");
  heading("Tu viens de vivre l'un des plus grands bouleversements de ta vie", { before: 4 });
  para(
    "Personne ne t'a vraiment préparée à la suite : ce flux permanent de petites décisions, de choses à ne pas oublier, de gestes à répéter cent fois par jour. La fatigue s'ajoute à la charge, et chaque journée semble demander plus que ce que tu as à donner.",
  );
  para(
    "Ce guide ne te propose pas une routine parfaite de plus. Il te propose 7 systèmes simples, posés une seule fois, qui continuent de fonctionner même les jours où tu n'as dormi que trois heures.",
  );
  para(
    "Tu n'as pas besoin d'être une maman parfaite. Tu as besoin d'outils qui tiennent, même les jours difficiles.",
    { font: "F3", color: TERRACOTTA_D },
  );
  spacer(6);
  infoBox("Tes repères officiels", [
    "Un suivi à domicile par une sage-femme est proposé par l'Assurance Maladie jusqu'au 12e jour de ton bébé : profites-en pour poser toutes tes questions.",
    "Une consultation médicale post-natale est recommandée entre la 6e et la 8e semaine après l'accouchement (sage-femme, médecin ou gynécologue).",
    "Les 1000 premiers jours de bébé sont une période clé : s'informer auprès de sources officielles rassure et éclaire.",
  ]);

  newPage();
  heading("Ce que ce guide est, et ce qu'il n'est pas", { before: 8 });
  para(
    "Ce guide n'est pas une liste d'injonctions. Il ne te dira jamais que tu devrais faire mieux, dormir plus, ranger davantage. La culpabilité n'a jamais aidé une maman à avancer.",
  );
  para(
    "Ce guide est une boîte à outils douce. Chaque système répond à un problème très concret du quotidien avec un nouveau-né, et se pose en quelques minutes. Aucun ne demande de talent particulier, seulement une fois de mise en place.",
  );
  spacer(4);
  infoBox("Une règle d'or pour lire ce guide", [
    "Ne cherche pas à tout mettre en place d'un coup. Choisis UN système qui te parle, pose-le, et laisse-le faire son travail quelques jours.",
    "Quand il tient, passe au suivant. La simplicité gagne toujours sur la performance.",
  ]);

  /* ===== POURQUOI DES SYSTÈMES ===== */
  sectionPages.pourquoi = totalPages + 1;
  newPage();
  label("Pourquoi");
  heading("Des systèmes plutôt que des to-do lists", { before: 4 });
  para(
    "Une to-do list demande de l'énergie mentale chaque jour : il faut y penser, la mettre à jour, s'y tenir. Un système, lui, ne se pense qu'une fois. Il devient automatique.",
  );
  para(
    "C'est la différence entre décider chaque matin ce qu'on va manger, et avoir déjà trois repas de secours validés d'avance. C'est la différence entre chercher une couche propre à chaque change, et avoir un panier déjà équipé à portée de main.",
  );
  para(
    "Les 7 systèmes qui suivent ont un seul objectif : sortir les décisions répétitives de ta tête pour de bon. Ta tête n'est pas un placard, c'est ta meilleure alliée.",
    { font: "F3", color: TERRACOTTA_D },
  );

  /* ===== LES 7 SYSTÈMES ===== */
  sectionPages.systems = totalPages + 1;
  systems.forEach((sys, idx) => {
    newPage();
    label(`Système ${idx + 1}`, TERRACOTTA);
    heading(sys.name, { before: 4, size: 21 });
    spacer(2);
    para("Le problème", { size: 9, leading: 12, color: SAGE, font: "F2" });
    para(sys.problem);
    spacer(4);
    para("Le système", { size: 9, leading: 12, color: SAGE, font: "F2" });
    para(sys.system);
    spacer(4);
    para("Comment le mettre en place", { size: 9, leading: 12, color: SAGE, font: "F2" });
    steps(sys.how);
    spacer(6);
    infoBox("Le conseil de Maria", [sys.tip]);
    newPage();
    para("Le système en un clin d'œil", { size: 9, leading: 12, color: SAGE, font: "F2" });
    spacer(2);
    bullet("Pourquoi ça marche : une décision en moins, un geste automatique en plus.", TERRACOTTA);
    bullet("Le temps de mise en place : 5 à 15 minutes, une seule fois.", TERRACOTTA);
    bullet("Le temps gagné chaque jour : de précieuses minutes et beaucoup de calme.", TERRACOTTA);
    spacer(6);
    infoBox("À retenir", [
      "Un système n'est pas figé : adapte-le à ta maison, à ton rythme, à tes nuits.",
      "S'il ne tient pas une semaine, ce n'est pas toi le problème, c'est le système : simplifie-le.",
      "Tu as le droit de n'en garder que deux ou trois. Mieux vaut trois systèmes qui tiennent que sept qui s'effondrent.",
    ]);
  });

  /* ===== PLAN DES 7 JOURS ===== */
  sectionPages.plan = totalPages + 1;
  newPage();
  label("Ton plan des 7 jours");
  heading("Un système par jour, pour ne rien précipiter", { before: 4 });
  para(
    "Pose un système par jour, dans l'ordre que tu veux. Environ 10 à 15 minutes par jour suffisent. Et si un jour est raté, on reprend le lendemain, sans drame.",
  );
  spacer(6);
  const plan = [
    "Jour 1 : Le Cahier Unique. Choisis ton support et pose-le près de toi.",
    "Jour 2 : La Boîte à 3. Étiquette tes trois bacs et fais un premier tri.",
    "Jour 3 : Les Repas de Secours. Choisis tes 3 recettes et note la liste de courses.",
    "Jour 4 : Le Panier Nomade. Remplis-le et promène-le avec toi toute la journée.",
    "Jour 5 : La Trousse Départ Éclair. Prépare le sac de sortie, sans le vider.",
    "Jour 6 : La Règle du Suffisant. Choisis ce matin une seule priorité pour la journée.",
    "Jour 7 : Le Sas du Soir. Pose tes 5 gestes et observe ton lendemain matin.",
  ];
  for (const p of plan) checkRow(p);
  spacer(6);
  infoBox("Et après ?", [
    "Les systèmes deviennent des réflexes. Ils tournent tout seuls, et tu retrouves de l'espace dans ta tête.",
    "Rends visite aux pages de suivi à la fin du guide pour ajuster ce qui ne te convient pas.",
  ]);

  /* ===== MON SUIVI PERSONNEL ===== */
  sectionPages.suivi = totalPages + 1;
  const suiviNotes = [
    ["Le Cahier Unique", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["La Boîte à 3", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["Les Repas de Secours", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["Le Panier Nomade", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["La Trousse Départ Éclair", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["La Règle du Suffisant", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
    ["Le Sas du Soir", "Ce que je mets en place, ce qui fonctionne chez moi, ce que j'ajuste."],
  ];
  suiviNotes.forEach(([name, note], i) => {
    if (i % 2 === 0) newPage();
    blankSection(name, note);
  });

  newPage();
  blankSection("Mes questions pour la sage-femme", "Note tes questions au fil de l'eau pour le suivi à domicile et la consultation post-natale.");
  blankSection("Ma semaine idéale (à imaginer, pas à performer)", "Un exemple de journée qui me ferait du bien, sans la pression de tout faire.");
  newPage();
  blankSection("Mon équipe de secours", "Les personnes vers qui demander de l'aide, et ce que je peux leur demander précisément : des courses, un repas, tenir bébé une heure, trier le linge. Une aide concrète vaut mieux qu'une aide floue.");
  newPage();
  blankSection("Mes petites victoires à noter", "Chaque semaine, note une chose qui a bien tenu, un moment doux, un pas en avant. Même minuscule, ça compte. Relis ces pages les jours difficiles.");

  /* ===== UN MOT POUR FINIR ===== */
  sectionPages.fin = totalPages + 1;
  newPage();
  label("Un mot pour finir", MAUVE);
  heading("Merci d'avoir pris ce temps pour toi", { before: 4, color: MAUVE });
  para(
    "Tu n'as pas à tout gérer parfaitement, seulement à avancer un jour à la fois. Ces 7 systèmes sont là pour t'y aider, pas pour s'ajouter à ta charge.",
  );
  para(
    "Certains jours, le seul vrai succès, c'est d'avoir tenu. Et ça, tu le fais déjà, chaque jour, depuis la naissance de ton bébé.",
  );
  para("Toute l'équipe ForceMaman t'accompagne.", { font: "F3", color: TERRACOTTA_D });
  spacer(8);
  rrect(M, y - 90, TEXT_W, 90, 14, "0.95 0.91 0.86");
  text(M + 18, y - 26, 11.5, "F2", TERRACOTTA_D, "Et maintenant ?");
  paraIn(M + 18, TEXT_W - 36, "Si ces systèmes te parlent, tu aimeras les guides complets ForceMaman, écrits par la même sage-femme : liste de naissance, corps après l'accouchement, charge mentale. Retrouve-les sur forcemaman.fr.", {
    size: 10, leading: 15, maxH: 56,
  });

  /* ===== RAPPEL IMPORTANT ===== */
  sectionPages.rappel = totalPages + 1;
  newPage();
  label("Rappel important", TERRACOTTA);
  heading("Ce guide ne remplace pas un avis professionnel", { before: 4 });
  para(
    "Les informations de ce guide sont des repères généraux d'organisation et de bien-être. Elles ne remplacent en aucun cas l'avis, le diagnostic ou le suivi d'un professionnel de santé.",
  );
  para(
    "En cas de doute, de douleur, de fièvre, de saignement inhabituel ou de tout symptôme qui t'inquiète, contacte sans attendre ta sage-femme, ton médecin, ta maternité ou le 15 en cas d'urgence. En France, le 15 et le 112 sont joignables 24h/24.",
  );
  spacer(6);
  infoBox("Si tu te sens dépassée", [
    "Le baby blues est fréquent et passager, autour du 2e au 5e jour après la naissance.",
    "Si la tristesse ou l'anxiété durent plus de deux semaines ou deviennent envahissantes, parles-en : une dépression du post-partum touche environ 10 à 20% des mères et se soigne très bien.",
    "En parler à un professionnel, c'est un acte de courage et de soin, pas une faiblesse.",
  ]);

  /* ===== SOURCES ===== */
  sectionPages.sources = totalPages + 1;
  newPage();
  label("Repères et sources officielles");
  heading("Pour aller plus loin en confiance", { before: 4 });
  para("Les repères de ce guide s'appuient sur des sources officielles françaises, consultables librement :");
  spacer(4);
  const sources = [
    "ameli.fr : Après l'accouchement, le retour à la maison. Suivi à domicile par une sage-femme jusqu'au 12e jour de bébé.",
    "HAS (Haute Autorité de Santé) : Grossesse, accouchement et suivi postnatal. Consultation post-natale recommandée entre la 6e et la 8e semaine.",
    "ameli.fr : Baby blues et dépression du post-partum. Signes, fréquence (10 à 20% des mères), et quand consulter.",
    "Santé publique France : Sommeil du nourrisson. Bébé couché sur le dos, dans son lit, sans objet, pour prévenir la mort inattendue du nourrisson.",
    "1000-premiers-jours.fr : La période des 1000 premiers jours et les ressources pour les parents.",
  ];
  for (const s of sources) bullet(s, SAGE);
  spacer(8);
  line(M, y, PAGE_W - M, y, "0.85 0.82 0.78", 0.8);
  spacer(10);
  para(
    "ForceMaman est une marque de SAFAA Beauty. Les guides ForceMaman sont écrits par Maria Garcia, ancienne sage-femme pendant 8 ans et maman, avec ce qu'elle sait en tant que professionnelle et ce qu'elle a vécu en tant que maman.",
    { size: 9.5, leading: 14, color: TEXT_SOFT },
  );
  para("© ForceMaman · Tous droits réservés · forcemaman.fr", { size: 9.5, leading: 14, color: TEXT_SOFT });

  return sectionPages;
}

// ---------- Assemblage PDF ----------
const FONTS = [
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Times-BoldItalic >>",
];

function assemble() {
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
}

// ---------- Deux passes : numéros de pages réels dans le sommaire ----------
const firstPass = build({});
const secondPass = build(firstPass);
const pdf = assemble();
mkdirSync("public/ebooks", { recursive: true });
writeFileSync("public/ebooks/guide-gratuit-7-systemes.pdf", pdf, "latin1");
console.log("PDF écrit : public/ebooks/guide-gratuit-7-systemes.pdf");
console.log("Pages :", doc.pages.length);
console.log("Sections :", JSON.stringify(secondPass));
