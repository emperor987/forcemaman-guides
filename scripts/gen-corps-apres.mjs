/**
 * Ebook 2 : « Mon Corps Après l'Accouchement » (vert sauge #8A9A7E, ~40 pages).
 * Le contenu est découpé en deux modules (scripts/lib/ebook2-part1.mjs et
 * ebook2-part2.mjs) pour rester lisible et éditable.
 *
 * Usage : node scripts/gen-corps-apres.mjs
 */
import { createBook, COLORS } from "./lib/pdfbook.mjs";
import { part1 } from "./lib/ebook2-part1.mjs";
import { part2 } from "./lib/ebook2-part2.mjs";

const book = createBook({
  title: "Mon Corps Après l'Accouchement",
  tagline:
    "Comprends ce qui arrive à ton corps après la naissance, ce qui est normal, et ce qui mérite un avis. Sans panique, sans tabou.",
  coverMeta: "Le guide pour comprendre et accompagner ton corps, sans panique",
  coverSub:
    "Suites de couches, périnée, cicatrices, douleurs, retour de couches, reprise en douceur : tout ce que tu aurais aimé qu'on t'explique clairement.",
  footerLabel: "Mon Corps Après l'Accouchement · ForceMaman",
  accent: COLORS.sage,
  accentDark: COLORS.sageDark,
  accentSoft: COLORS.sageSoft,
  content(b) {
    const S = COLORS.sage;
    const SD = COLORS.sageDark;

    /* ================= COUVERTURE ================= */
    b.cover();

    /* ================= UN MOT DE MARIA ================= */
    b.chapterPage("maria");
    b.label("Un mot de Maria", S);
    b.heading("Avant d'ouvrir ce guide", { before: 4, size: 20 });
    b.para(
      "Pendant 8 ans, j'ai accompagné des mamans le jour de l'accouchement. Et puis un jour, c'est moi qui ai eu ma fille. J'ai découvert ce que personne ne m'avait vraiment expliqué : que le plus dur commence souvent après, une fois rentrée à la maison, avec un corps transformé et mille questions sans réponse.",
    );
    b.spacer(2);
    b.para(
      "Ce guide est né de ce constat : on prépare l'accouchement pendant des mois, et presque personne ne prépare le corps qui vient après. Les changements, les douleurs, les pertes, les cicatrices, le périnée, les seins : tout cela est normal, expliqué, et surtout, la plupart du temps, réversible et accompagnable.",
    );
    b.spacer(2);
    b.para(
      "Tu y trouveras des repères clairs (ce qui est normal, ce qui mérite un avis), des conseils concrets, et beaucoup de douceur. Parce que ton corps vient d'accomplir un exploit, et il mérite que tu apprennes à le connaître à nouveau, sans jugement et sans injonction.",
    );
    b.spacer(4);
    b.quoteBox(
      "Ton corps n'est pas « revenu », il est devenu autre chose : celui d'une maman. Ce guide t'aide à faire connaissance avec lui.",
      { color: SD },
    );
    b.spacer(6);
    b.infoBox("Rappel important", [
      "Ce guide est un outil d'accompagnement et d'information, écrit dans un langage accessible. Il ne remplace en aucun cas l'avis, le diagnostic ou le suivi d'un professionnel de santé.",
      "En cas de doute, de douleur, de fièvre, de saignement inhabituel ou de tout symptôme qui t'inquiète, contacte sans attendre ta sage-femme, ton médecin, ta maternité ou le 15 en cas d'urgence.",
    ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

    /* ================= SOMMAIRE ================= */
    b.tocPage([
      ["01", "Un mot de Maria", "maria"],
      ["02", "Le post-partum, ce grand inconnu", "ch1"],
      ["03", "Les suites de couches immédiates", "ch2"],
      ["04", "Le périnée : ton allié à rééduquer", "ch3"],
      ["05", "Les cicatrices : épisio et césarienne", "ch4"],
      ["06", "Les douleurs fréquentes", "ch5"],
      ["07", "Tes seins, entre douceur et vigilance", "ch6"],
      ["08", "Le retour de couches et la contraception", "ch7"],
      ["09", "Bouger en douceur", "ch8"],
      ["10", "Manger, boire, dormir", "ch9"],
      ["11", "La vie intime et le couple", "ch10"],
      ["12", "Les signes d'alerte à connaître", "ch11"],
      ["13", "Prendre soin de sa santé mentale", "ch12"],
      ["14", "Les transformations qui surprennent", "ch13"],
      ["15", "Ton calendrier de suivi médical", "ch14"],
      ["16", "Mon suivi personnel", "suivi"],
      ["17", "Rappel important et sources", "rappel"],
    ]);

    /* ================= CHAPITRES 1 à 6 ================= */
    part1(b);

    /* ================= CHAPITRES 7 à 12 + FIN ================= */
    part2(b);
  },
});

// ---------- Deux passes : numéros de pages réels dans le sommaire ----------
book.render();
const sectionPages = { ...book.sectionPages };
book.render(sectionPages); // ré-injecte les pages réelles pour paginer le sommaire
console.log("Sections (1re passe) :", JSON.stringify(sectionPages, null, 0));
book.write("public/ebooks/corps-apres.pdf");
