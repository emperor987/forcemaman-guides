/**
 * Ebook 1 : « Ma Liste Naissance Complète » (terracotta #C97D5D, ~40 pages).
 * Le contenu est découpé en deux modules (scripts/lib/ebook1-part1.mjs et
 * ebook1-part2.mjs) pour rester lisible et éditable.
 *
 * Usage : node scripts/gen-liste-naissance.mjs
 */
import { createBook, COLORS } from "./lib/pdfbook.mjs";
import { part1 } from "./lib/ebook1-part1.mjs";
import { part2 } from "./lib/ebook1-part2.mjs";

const book = createBook({
  title: "Ma Liste Naissance Complète",
  tagline:
    "Tout ce qu'il faut préparer sereinement l'arrivée de bébé, organisé par semaine et pensé par une sage-femme.",
  coverMeta: "Le guide pratique pour préparer l'arrivée de bébé sans stress",
  coverSub:
    "Une liste claire, complète et organisée : le coin couchage, les tétées, les couches, les vêtements, la valise maternité et la check-list semaine par semaine.",
  footerLabel: "Ma Liste Naissance Complète · ForceMaman",
  accent: COLORS.terracotta,
  accentDark: COLORS.terracottaDark,
  accentSoft: COLORS.terracottaSoft,
  content(b) {
    const T = COLORS.terracotta;
    const TD = COLORS.terracottaDark;

    /* ================= COUVERTURE ================= */
    b.cover();

    /* ================= UN MOT DE MARIA ================= */
    b.chapterPage("maria");
    b.label("Un mot de Maria", T);
    b.heading("Avant d'ouvrir ce guide", { before: 4, size: 20 });
    b.para(
      "Quand j'étais sage-femme, j'ai accompagné des centaines de familles dans la préparation de la naissance. Une question revenait sans cesse : « Mais de quoi avons-nous vraiment besoin ? » Les listes trouvées sur internet sont interminables, contradictoires, et finissent souvent par stresser plus qu'autre chose.",
    );
    b.spacer(2);
    b.para(
      "Ce guide est né de cette expérience. Il réunit ce qui est vraiment essentiel, ce qui est utile mais pas prioritaire, et ce qu'on peut laisser de côté sans aucun regret. Chaque conseil est simple, concret, et écrit pour te simplifier la vie, pas pour t'ajouter une charge de plus.",
    );
    b.spacer(2);
    b.para(
      "Et puis, un jour, c'est moi qui ai eu ma fille. J'ai découvert ce que personne ne m'avait dit : que la préparation continue après la naissance, à la maison. Cette liste t'aidera à arriver le jour J avec moins de questions en tête, pour pouvoir te concentrer sur l'essentiel : toi et ton bébé.",
    );
    b.spacer(4);
    b.quoteBox(
      "Une liste de naissance ne doit pas être parfaite. Elle doit te rassurer, t'organiser, et te laisser de l'espace pour l'imprévu, parce que l'imprévu fait partie de la naissance.",
      { color: TD },
    );
    b.spacer(6);
    b.infoBox("Comment utiliser ce guide", [
      "Commence par feuilleter l'ensemble une première fois, sans t'arrêter sur les détails.",
      "Ensuite, suis la check-list semaine par semaine : elle est conçue pour avancer à ton rythme.",
      "Coche ce qui est fait, note tes questions dans les pages de suivi à la fin du guide.",
      "Implique ton/ta partenaire : la préparation se fait à deux, ou avec la personne qui t'accompagne.",
    ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

    /* ================= SOMMAIRE ================= */
    b.tocPage([
      ["01", "Un mot de Maria", "maria"],
      ["02", "Avant de commencer : la méthode", "ch1"],
      ["03", "Les essentiels des premiers jours", "ch2"],
      ["04", "Le coin couchage", "ch3"],
      ["05", "Tétées et alimentation", "ch4"],
      ["06", "Couches et hygiène", "ch5"],
      ["07", "Les vêtements de bébé", "ch6"],
      ["08", "Le transport", "ch7"],
      ["09", "La salle de bain et la pharmacie", "ch8"],
      ["10", "Ta valise de maternité", "ch9"],
      ["11", "Tes questions pour la maternité", "ch10"],
      ["12", "Les documents et l'administratif", "ch11"],
      ["13", "La check-list semaine par semaine", "ch12"],
      ["14", "Utile mais pas indispensable", "ch13"],
      ["15", "Préparer la maison et ton équipe", "ch14"],
      ["16", "Le retour à la maison : les 48 premières heures", "ch15"],
      ["17", "Mon suivi personnel", "suivi"],
      ["18", "Rappel important et sources", "rappel"],
    ]);

    /* ================= CHAPITRES 1 à 8 ================= */
    part1(b);

    /* ================= CHAPITRES 9 à 15 + FIN ================= */
    part2(b);
  },
});

// ---------- Deux passes : numéros de pages réels dans le sommaire ----------
book.render();
const sectionPages = { ...book.sectionPages };
book.render();
console.log("Sections (1re passe) :", JSON.stringify(sectionPages, null, 0));
book.write("public/ebooks/liste-naissance.pdf");
