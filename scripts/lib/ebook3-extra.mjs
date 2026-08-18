/**
 * Ebook 3 « Charge Mentale & 40 Premiers Jours » : chapitres 12 à 14.
 * Appelé depuis scripts/gen-ebook-charge-mentale.mjs.
 */
import { COLORS } from "./pdfbook.mjs";

export function extraChapters(b) {
  const Mv = COLORS.mauve;
  const MD = COLORS.mauveDark;

  /* ===== CHAPITRE 12 ===== */
  b.chapterPage("ch12");
  b.label("Chapitre 12", Mv);
  b.heading("Ta semaine type des 40 jours", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("calendar", 297, 700, 2.2, Mv);
  b.spacer(14);
  b.para(
    "Les 40 premiers jours paraissent sans forme ni repères, et pourtant une trame se dessine, semaine après semaine. Ce chapitre te propose une semaine type, non pas comme un programme à suivre, mais comme un paysage à reconnaître : chaque semaine a son rythme, ses défis, et ses victoires.",
  );
  b.subhead("Les 6 semaines en un regard");
  b.table([
    ["Semaine 1", "L'installation : tu apprends à t'occuper de bébé, la maison est en mode « survie », les visites se limitent à l'essentiel. Objectif : nourrir, changer, dormir, et rien d'autre."],
    ["Semaines 2 à 3", "Le rythme s'installe : les premières vraies nuits hachées, le baby blues qui peut pointer, la visite de la sage-femme. Objectif : poser les 7 systèmes un par un, en douceur."],
    ["Semaines 4 à 5", "Les sorties redeviennent possibles : première promenade longue, premières visites choisies. Objectif : commencer à sortir, et accepter l'aide des proches."],
    ["Semaine 6 et au-delà", "Le cap des 40 jours : la consultation post-natale approche, la rééducation se programme, et tu commences à te projeter sans panique."],
  ], { colW: 118, headerColor: MD });
  b.spacer(2);
  b.subhead("La journée type, un repère pas une prison");
  b.para(
    "Une journée des premiers jours ressemble souvent à ceci : des tétées ou biberons toutes les 2 à 3 heures, des siestes courtes, des changes fréquents, et des moments de présence pure. Autour de cela, trois piliers : une vraie sieste pour toi dans la journée, un repas simple mais réel, et une sortie courte (même 10 minutes) dès que possible. Le soir, le sas du chapitre 4 (préparer bébé, vérifier le sac, ranger le salon) prépare un matin plus doux.",
  );
  b.subhead("Le piège des journées sans structure");
  b.para(
    "Sans aucune trame, les journées se ressemblent, s'étirent, et la fatigue morale grandit. Trois repères suffisent à structurer la journée : un moment fixe dans la matinée (la toilette, même rapide, la tienne et celle de bébé), un moment fixe l'après-midi (la sortie ou la sieste), un moment fixe le soir (le sas du soir, en équipe si possible). Le reste peut fluctuer sans problème.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La semaine type n'est pas un test : c'est un filet. Les jours où tout déborde, tu retombes dessus, et tu reprends juste après. Aucun jour « raté » ne défait les 40 jours.",
    "Note ta semaine à toi dans les pages de suivi à la fin du guide : les repères qui marchent pour toi, à tes horaires, avec ton bébé.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
  b.spacer(4);
  b.subhead("Ta check-list semaine type");
  b.checkRow("Un moment fixe le matin : toilette de bébé et la tienne, même express");
  b.checkRow("Une vraie sieste pour toi chaque jour, et un repas simple mais réel");
  b.checkRow("Une sortie quotidienne courte dès que possible, même autour de la maison");
  b.checkRow("Le sas du soir en équipe : bébé préparé, sac vérifié, salon rangé en 10 minutes");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Chaque semaine des 40 jours a son propre rythme : on ne compare pas, on traverse.",
    "Trois repères fixes (matin, après-midi, soir) suffisent à structurer la journée.",
    "Une journée débordée n'est pas un échec : c'est une journée, et demain est une page neuve.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

  /* ===== CHAPITRE 13 ===== */
  b.chapterPage("ch13");
  b.label("Chapitre 13", Mv);
  b.heading("Organiser la maison pour alléger ta tête", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("bag", 297, 700, 2.2, Mv);
  b.spacer(14);
  b.para(
    "Une maison organisée, c'est une tête allégée : moins de décisions à prendre, moins de recherches, moins de « où est-ce que j'ai mis ? ». Pas besoin d'une maison parfaite : besoin de zones simples, pensées une fois, qui fonctionnent toute seules. Voici les quatre zones qui changent tout.",
  );
  b.subhead("Les 4 zones à installer en 1 heure");
  b.bullet("La zone change : le matelas à langer avec tout à portée de main (couches, coton, liniment, change de rechange), et le panier nomade qui suit dans la maison", Mv);
  b.bullet("La zone sommeil : le lit de bébé prêt (sur le dos, gigoteuse, rien d'autre), la gigoteuse du soir sortie, la veilleuse en place", Mv);
  b.bullet("La zone tétée : un coussin, une bouteille d'eau, un en-cas, le téléphone et le chargeur, à portée de main de ton fauteuil", Mv);
  b.bullet("La zone cuisine : le stock des 3 repas de secours (chapitre 4), la machine à café ou la théière prête, les plats congelés visibles", Mv);
  b.spacer(2);
  b.subhead("Les courses et le stock, sans y penser");
  b.para(
    "Prépare une liste de courses « de base » (lait, couches, produits d'entretien, eau, en-cas) et une liste « repas de secours », et commande en ligne quand c'est possible : les courses avec un nouveau-né sont un sport de combat, la livraison est un soin. Garde un stock de 2 semaines de l'essentiel, et accepte les courses des proches : une liste précise leur donne une mission claire.",
  );
  b.subhead("Les lessives, le rythme qui convient");
  b.para(
    "Avec un nouveau-né, la lessive tourne en continu : c'est un fait, pas un problème. La méthode des 3 bacs (Actuel, Taille suivante, À laver) évite les triages interminables, et un créneau fixe par jour (le matin, pendant la première sieste) évite que le linge s'accumule. Si quelqu'un propose de t'aider : la lessive et le pliage sont les missions les plus précieuses, et les moins fatigantes pour la personne qui aide.",
  );
  b.subhead("Le ménage : le minimum vital, et le reste");
  b.para(
    "Les 40 premiers jours, le ménage se réduit au minimum vital : la cuisine (pour manger), la salle de bain (pour l'hygiène), la zone change et la zone sommeil. Le reste attend, se délègue, ou se fait au rythme de ton énergie. La règle du suffisant du chapitre 4 s'applique ici aussi : une maison « suffisante » pendant quelques mois n'a jamais fait de mal à personne, et les proches qui proposent du ménage ne se font jamais refuser.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Installe les 4 zones AVANT la naissance si tu peux, ou le premier jour à la maison : une heure d'organisation vaut des semaines de « où est-ce que j'ai mis ? ».",
    "Chaque fois qu'une chose est rangée au même endroit, tu libères une décision. C'est ça, alléger sa charge : décider une fois, pour ne plus décider cent fois.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
  b.spacer(4);
  b.subhead("Ta check-list maison");
  b.checkRow("Installer les 4 zones : change, sommeil, tétée, cuisine");
  b.checkRow("Préparer 2 listes de courses (base + repas de secours) et tester la commande en ligne");
  b.checkRow("Mettre en place les 3 bacs de vêtements et un créneau lessive quotidien");
  b.checkRow("Réduire le ménage au minimum vital et accepter l'aide des proches");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Quatre zones simples valent mieux qu'une maison parfaite : elles allègent la tête, pas seulement la maison.",
    "La livraison de courses est un soin, pas un luxe : elle te fait gagner de l'énergie, pas de l'argent perdu.",
    "Une maison « suffisante » est une maison qui te laisse de l'énergie pour l'essentiel : toi et bébé.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

  /* ===== CHAPITRE 14 ===== */
  b.chapterPage("ch14");
  b.label("Chapitre 14", Mv);
  b.heading("Tes ressources et les professionnels qui t'entourent", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("sun", 297, 700, 2.2, Mv);
  b.spacer(14);
  b.para(
    "La charge mentale s'allège aussi quand on sait à qui s'adresser : les 40 premiers jours sont faits pour être traversés accompagnée, et les ressources existent, gratuites pour la plupart. Ce chapitre est ta carte des soutiens.",
  );
  b.subhead("La sage-femme, ton premier soutien");
  b.para(
    "Après le retour à la maison, la sage-femme propose un suivi à domicile pris en charge jusqu'au 12e jour de bébé : visites, surveillance, réponses à toutes tes questions, y compris sur ton moral. Plus tard, la consultation post-natale (6e à 8e semaine) fait le bilan complet et prescrit la rééducation. La sage-femme est formée au repérage de l'épuisement et de la dépression du post-partum : tu peux tout lui dire, sans filtre.",
  );
  b.subhead("La PMI, ce service public méconnu");
  b.para(
    "La Protection Maternelle et Infantile propose des consultations gratuites, des pesées de bébé, des conseils (allaitement, sommeil, alimentation), et un soutien aux parents, sans rendez-vous médical préalable. On y trouve aussi des ateliers (portage, éveil, groupes de parents) et des professionnels formés à écouter : c'est une ressource précieuse, faite pour toi, et elle ne coûte rien.",
  );
  b.subhead("Le médecin traitant et le pédiatre");
  b.para(
    "Ton médecin traitant suit bébé avec le carnet de santé (examens obligatoires, vaccinations) et peut te suivre toi aussi : fatigue, moral, contraception, douleurs. Le pédiatre, quand on en a un, est un interlocuteur de choix pour tout ce qui concerne bébé. N'attends pas le « vrai problème » pour appeler : une question simple, posée tôt, évite une inquiétude qui grossit.",
  );
  b.subhead("Les lignes d'écoute et les associations de parents");
  b.para(
    "Parler à un inconnu bienveillant, c'est parfois plus facile qu'en parler à ses proches. Des associations et des lignes d'écoute existent pour les parents : écoute, information, orientation, souvent anonymes et gratuites. Et les groupes de parents (dans les maternités, les PMI, les associations) offrent ce que rien ne remplace : se voir dans les yeux d'autres mamans et papas qui vivent la même période, et se dire « je ne suis pas seul(e) ».",
  );
  b.subhead("La santé mentale : où trouver de l'aide");
  b.para(
    "Si tu sens que le moral vacille durablement, plusieurs portes s'ouvrent : ta sage-femme ou ton médecin (formés au repérage, ils peuvent te proposer un questionnaire simple comme l'EPDS), la PMI, un psychologue ou psychiatre spécialisé en périnatalité, et des dispositifs qui remboursent des séances de psychologue (comme MonParcoursPsy ou les séances d'accompagnement psychologique). En cas d'urgence, le 15 ou le 112. Demander de l'aide, c'est un acte de soin, pas une faiblesse.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Note dès maintenant, au même endroit : ta sage-femme, ton médecin, la PMI de ton secteur, la maternité, et les numéros d'urgence. Quand la nuit est dure, chercher un numéro est le dernier effort à ne pas avoir à faire.",
    "Les ressources existent pour toi, que tu les utilises un jour ou jamais : les connaître, c'est déjà te rassurer.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
  b.spacer(4);
  b.subhead("Ta check-list ressources");
  b.checkRow("Compiler tes numéros : sage-femme, médecin, PMI, maternité, 15, 112");
  b.checkRow("Connaître ta PMI et ses horaires, et noter un atelier ou groupe de parents près de chez toi");
  b.checkRow("Savoir qu'une consultation est possible dès que le moral vacille (sage-femme, médecin, psy)");
  b.checkRow("Te rappeler : appeler n'est jamais déranger, et aucune question n'est superflue");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La sage-femme, la PMI, le médecin : trois soutiens disponibles, gratuits ou pris en charge, pensés pour toi.",
    "Les lignes d'écoute et les groupes de parents existent : parler, c'est déjà se soulager.",
    "Si le moral vacille durablement, on demande de l'aide : c'est un acte de soin, pas une faiblesse.",
  ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
}
