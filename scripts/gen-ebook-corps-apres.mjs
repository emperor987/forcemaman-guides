/**
 * Ebook 2 : « Mon Corps Après l'Accouchement » (vert sauge #8A9A7E, ~40 pages).
 *
 * Usage : node scripts/gen-ebook-corps-apres.mjs
 */
import { createBook, COLORS } from "./lib/pdfbook.mjs";

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
      ["11", "Les signes d'alerte à connaître", "ch10"],
      ["12", "Prendre soin de sa santé mentale", "ch11"],
      ["13", "Mon suivi personnel", "suivi"],
      ["14", "Rappel important et sources", "rappel"],
    ]);

    /* ================= CHAPITRE 1 ================= */
    b.chapterPage("ch1");
    b.label("Chapitre 1", S);
    b.heading("Le post-partum, ce grand inconnu", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("body", 297, 700, 2.0, S);
    b.spacer(14);
    b.para(
      "Le post-partum désigne la période qui suit l'accouchement, en général les 6 à 8 premières semaines, même si le corps continue de se transformer bien au-delà. On l'appelle aussi le « 4e trimestre » : un trimestre de plus, celui où l'on apprend à vivre avec bébé et avec son nouveau corps.",
    );
    b.subhead("Ce qui se passe, en bref");
    b.para(
      "Dès la naissance, ton corps entame un immense travail de retour à la normale : l'utérus se contracte et retrouve sa taille (c'est l'involution utérine), les saignements (lochies) diminuent au fil des semaines, les hormones se réorganisent, et les tissus étirés, dont le périnée, commencent leur récupération. Ce travail est invisible, mais il est réel et il demande du temps.",
    );
    b.subhead("Le calendrier des repères officiels");
    b.table([
      ["Première semaine", "Suivi à domicile par une sage-femme jusqu'au 12e jour de bébé (pris en charge). Les lochies diminuent, les contractions de l'utérus sont normales."],
      ["2e à 6e semaine", "Le col se referme, le retour de couches peut survenir (ou plus tard si tu allaites). Les cicatrices se referment, la fatigue reste importante."],
      ["6e à 8e semaine", "Consultation post-natale recommandée : bilan global avec ta sage-femme, ton médecin ou ton gynécologue, prescription de la rééducation périnéale."],
      ["Au-delà", "Rééducation périnéale (et abdominale si besoin), reprise progressive de l'activité physique, suivi de la contraception."],
    ], { colW: 120, headerColor: SD });
    b.spacer(2);
    b.infoBox("Le conseil de Maria", [
      "Le post-partum n'est pas une course. Chaque corps récupère à son rythme, et « reprendre » est un mot piège : tu ne reviens pas en arrière, tu avances avec ce que tu es devenue.",
      "Les professionnels sont formés à ces questions : aucune question n'est « bête » en post-partum, pose-les toutes.",
    ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
    b.spacer(4);
    b.subhead("Les 3 grands principes de ce guide");
    b.checkRow("Savoir ce qui est normal, pour ne pas t'inquiéter à tort");
    b.checkRow("Connaître les signes d'alerte, pour réagir vite quand il le faut");
    b.checkRow("Te faire accompagner : sage-femme, médecin, kinésithérapeute, à chaque étape");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Le post-partum dure des semaines, et ses effets se font sentir des mois. Donne-toi ce temps.",
      "Le suivi à domicile par la sage-femme et la consultation post-natale sont tes meilleurs outils.",
      "Écoute ton corps : il t'envoie des signaux, ce guide t'apprend à les lire.",
    ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  },
});

book.render();
book.write("public/ebooks/corps-apres.pdf");
