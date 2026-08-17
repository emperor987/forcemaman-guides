/**
 * Génère des PDF de démonstration valides dans public/ebooks/.
 * Ce sont de simples placeholders : remplace-les par les vrais ebooks
 * (mêmes noms de fichiers) une fois les fichiers PDF reçus.
 *
 * Usage : node scripts/gen-placeholder-pdfs.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function makePdf(title, message) {
  const content = `BT /F1 24 Tf 60 760 Td (${escapePdfText(title)}) Tj ET
BT /F1 13 Tf 60 720 Td (${escapePdfText(message)}) Tj ET
BT /F1 11 Tf 60 690 Td (ForceMaman - guide de demonstration a remplacer par le vrai ebook.) Tj ET`;
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objs.forEach((body, i) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xrefPos = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;
  return pdf;
}

mkdirSync("public/ebooks", { recursive: true });

const guides = [
  {
    file: "public/ebooks/liste-naissance.pdf",
    title: "Ma Liste Naissance Complete",
    message: "Ce PDF est un placeholder. Remplace-le par le vrai ebook.",
  },
  {
    file: "public/ebooks/corps-apres.pdf",
    title: "Mon Corps Apres l'Accouchement",
    message: "Ce PDF est un placeholder. Remplace-le par le vrai ebook.",
  },
  {
    file: "public/ebooks/charge-mentale.pdf",
    title: "Charge Mentale & 40 Premiers Jours",
    message: "Ce PDF est un placeholder. Remplace-le par le vrai ebook.",
  },
];

for (const g of guides) {
  writeFileSync(g.file, makePdf(g.title, g.message), "latin1");
  console.log("écrit", g.file);
}

writeFileSync(
  "public/ebooks/LISEZ-MOI.txt",
  [
    "Emplacements des ebooks ForceMaman (livraison apres paiement Stripe).",
    "",
    "Remplace ces PDF de demonstration par les vrais ebooks, en gardant",
    "exactement ces noms de fichiers :",
    "",
    "  liste-naissance.pdf",
    "  corps-apres.pdf",
    "  charge-mentale.pdf",
    "",
    "Le Pack Complet sert les trois fichiers.",
    "",
  ].join("\n"),
  "utf8",
);
console.log("écrit public/ebooks/LISEZ-MOI.txt");
