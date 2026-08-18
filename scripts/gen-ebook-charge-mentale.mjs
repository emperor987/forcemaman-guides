/**
 * Ebook 3 : « Charge Mentale & 40 Premiers Jours » (mauve #A78BA3, ~40 pages).
 *
 * Usage : node scripts/gen-ebook-charge-mentale.mjs
 */
import { createBook, COLORS } from "./lib/pdfbook.mjs";

const book = createBook({
  title: "Charge Mentale & 40 Premiers Jours",
  tagline:
    "Traverse les 40 premiers jours avec bébé sans t'épuiser : comprendre la charge mentale, la réduire, et retrouver de la place pour toi.",
  coverMeta: "Le guide pour alléger ta charge mentale pendant les 40 premiers jours",
  coverSub:
    "Ce qui se joue dans ta tête, comment le repérer, comment le partager : des outils concrets pour respirer avec un nouveau-né.",
  footerLabel: "Charge Mentale & 40 Premiers Jours · ForceMaman",
  accent: COLORS.mauve,
  accentDark: COLORS.mauveDark,
  accentSoft: COLORS.mauveSoft,
  content(b) {
    const Mv = COLORS.mauve;
    const MD = COLORS.mauveDark;

    /* ================= COUVERTURE ================= */
    b.cover();

    /* ================= UN MOT DE MARIA ================= */
    b.chapterPage("maria");
    b.label("Un mot de Maria", Mv);
    b.heading("Avant d'ouvrir ce guide", { before: 4, size: 20 });
    b.para(
      "Quand ma fille est née, je pensais être préparée. J'étais sage-femme, j'avais accompagné des centaines de mamans, je connaissais la théorie par cœur. Et pourtant, je me suis retrouvée, comme tant d'autres, submergée : par les nuits morcelées, les décisions à la chaîne, les injonctions silencieuses, et cette sensation étrange de ne plus jamais être seule, même quand je l'étais.",
    );
    b.spacer(2);
    b.para(
      "Ce guide est né de cette expérience. Les 40 premiers jours, c'est la période la plus intense de la vie de parent : celle où l'on apprend tout, où tout est nouveau, et où la charge mentale explose silencieusement. Ce guide ne te demandera pas de faire plus, mais de faire moins, et de mieux répartir.",
    );
    b.spacer(2);
    b.para(
      "Tu y trouveras des explications claires sur ce qui se joue dans ta tête, des outils concrets pour alléger ta charge, des repères pour communiquer avec ton/ta partenaire, et beaucoup, beaucoup de douceur. Parce que les 40 premiers jours ne se « traversent » pas en performance : ils se vivent, un jour à la fois, accompagnée.",
    );
    b.spacer(4);
    b.quoteBox(
      "La charge mentale, ce n'est pas la fatigue d'en faire trop. C'est la fatigue de devoir tout penser, tout décider, tout anticiper, même quand on ne fait rien.",
      { color: MD },
    );
    b.spacer(6);
    b.infoBox("Rappel important", [
      "Ce guide est un outil d'accompagnement et d'information. Il ne remplace pas l'avis d'un professionnel de santé.",
      "Si la tristesse, l'anxiété ou l'épuisement deviennent envahissants ou durent, parles-en à ta sage-femme, ton médecin ou un professionnel de santé. En cas d'urgence, le 15 ou le 112.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= SOMMAIRE ================= */
    b.tocPage([
      ["01", "Un mot de Maria", "maria"],
      ["02", "Les 40 premiers jours, c'est quoi ?", "ch1"],
      ["03", "La charge mentale expliquée simplement", "ch2"],
      ["04", "Repérer ta propre charge", "ch3"],
      ["05", "Les 7 systèmes pour respirer", "ch4"],
      ["06", "Communiquer en couple", "ch5"],
      ["07", "Accepter l'aide et dire non", "ch6"],
      ["08", "Le sommeil en équipe", "ch7"],
      ["09", "Les autosoins en 5 minutes", "ch8"],
      ["10", "Les émotions du post-partum", "ch9"],
      ["11", "Tes proches et ton cercle social", "ch10"],
      ["12", "Se projeter sans pression", "ch11"],
      ["13", "Mon suivi personnel", "suivi"],
      ["14", "Rappel important et sources", "rappel"],
    ]);

    /* ================= CHAPITRE 1 ================= */
    b.chapterPage("ch1");
    b.label("Chapitre 1", Mv);
    b.heading("Les 40 premiers jours, c'est quoi ?", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("calendar", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Les 40 premiers jours : c'est le temps que prend, dans beaucoup de cultures, le grand apprentissage de la vie avec un nouveau-né. En France, on parle du « 4e trimestre » : un trimestre de plus après la naissance, celui où l'on ne s'occupe plus de faire naître, mais d'apprendre à vivre.",
    );
    b.subhead("Pourquoi 40 jours ?");
    b.para(
      "Cette durée n'est pas magique, mais elle correspond à une réalité : les premières semaines, bébé découvre le monde, la maman découvre son nouveau rôle, et le corps récupère d'un événement immense. C'est une période où les nuits sont courtes, où les repères volent en éclats, et où l'on traverse des émotions très fortes. La considérer comme une « période à part » aide à poser des attentes réalistes et à accepter de vivre au ralenti.",
    );
    b.subhead("Ce qui se joue pendant cette période");
    b.bullet("Le corps : suites de couches, récupération, sommeil morcelé, allaitement ou biberons à rythme soutenu", Mv);
    b.bullet("Bébé : pleurs, tétées fréquentes, siestes courtes, besoin constant de contact et de réconfort", Mv);
    b.bullet("La tête : mille décisions par jour, une attention en alerte permanente, une charge mentale qui explose", Mv);
    b.bullet("Le couple : la répartition des tâches, la fatigue, les incompréhensions, mais aussi une intimité nouvelle", Mv);
    b.bullet("Le cercle social : les visites, les conseils, la pression parfois, l'isolement souvent", Mv);
    b.spacer(2);
    b.subhead("Un objectif réaliste pour ces 40 jours");
    b.para(
      "L'objectif n'est pas de « bien faire », ni de « tout gérer », ni de « retrouver la forme ». L'objectif est simple : que bébé soit nourri, propre, en sécurité et aimé, et que toi tu tiennes, avec le moins de culpabilité possible. Tout le reste est bonus. Ce guide est construit autour de cet objectif.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Écris quelque part, en gros : « Les 40 premiers jours : je ne juge pas ma performance, je prends soin de nous. » C'est le mantra de cette période, et il se relit chaque soir.",
      "Chaque famille vit ces 40 jours différemment : il n'y a pas de norme, il y a ton rythme.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list des 40 jours");
    b.checkRow("Poser des attentes réalistes : le ralenti est la norme, pas l'exception");
    b.checkRow("Se concentrer sur l'essentiel : nourrir, changer, aimer, dormir");
    b.checkRow("Dire non aux injonctions extérieures et à la comparaison");
    b.checkRow("S'entourer : sage-femme, proches, professionnels, sans attendre d'être au bout du rouleau");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Les 40 premiers jours sont une période à part : on n'y est pas « en retard », on y est, tout simplement.",
      "L'objectif est la survie douce, pas la performance.",
      "C'est la période où la charge mentale explose : la comprendre, c'est déjà commencer à la réduire.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 2 ================= */
    b.chapterPage("ch2");
    b.label("Chapitre 2", Mv);
    b.heading("La charge mentale expliquée simplement", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("cloud", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "La charge mentale, c'est le travail invisible de celui ou celle qui pense à tout : anticiper, planifier, se souvenir, organiser, vérifier. C'est la liste qui tourne en boucle dans la tête, même quand les mains ne font rien. Avec un nouveau-né, cette charge explose : les décisions se multiplient, la fatigue brouille les repères, et la vigilance envers bébé ne s'éteint jamais vraiment.",
    );
    b.subhead("Pourquoi elle explose avec un bébé");
    b.bullet("Tout est nouveau : chaque situation demande une décision (pourquoi pleure-t-il ? que faire ? où est quoi ?)", Mv);
    b.bullet("La mémoire est en berne : le manque de sommeil affecte la mémoire de travail, il faut donc « penser deux fois »", Mv);
    b.bullet("La vigilance est permanente : le cerveau d'un parent est en alerte, même la nuit, même en dormant d'un œil", Mv);
    b.bullet("Les injonctions sont partout : conseils, comparaisons, messages sur les réseaux, « il faut que tu »", Mv);
    b.bullet("Les tâches se multiplient : tétées, changes, lessives, rendez-vous, courses, et le reste de la vie qui ne s'arrête pas", Mv);
    b.spacer(2);
    b.subhead("Les signes que ta charge mentale déborde");
    b.checkRow("Tu te sens débordée même quand tu ne « fais » rien : c'est la liste qui tourne", MD);
    b.checkRow("Tu oublies des choses simples, tu perds tes affaires, tu relis trois fois le même message", MD);
    b.checkRow("Tu t'énerves pour des détails, ou tu pleures sans raison apparente", MD);
    b.checkRow("Tu as du mal à te concentrer sur une conversation ou sur une tâche", MD);
    b.checkRow("Tu es la seule à savoir où sont les choses, à penser aux rendez-vous, à anticiper les imprévus", MD);
    b.spacer(2);
    b.para(
      "Si tu te reconnais dans plusieurs de ces signes, tu n'es pas « nulle », tu es en surcharge : ton cerveau traite trop d'informations pour une seule personne. La suite du guide est exactement faite pour ça.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "La charge mentale n'est pas une fatalité féminine ni une faiblesse : c'est une charge, comme une charge physique, qui se mesure, se répartit, et se délègue.",
      "Le premier pas pour la réduire, c'est de la rendre visible : ce que l'on nomme devient partageable.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list anti-surcharge");
    b.checkRow("Identifier les 3 tâches mentales les plus lourdes de ta semaine");
    b.checkRow("En déléguer au moins une (à ton/ta partenaire, un proche, un service)");
    b.checkRow("Noter les informations importantes au lieu de les garder en tête");
    b.checkRow("Te répéter : « je ne suis pas débordée, je porte une charge, et elle se partage »");
    b.spacer(4);
    b.infoBox("À retenir", [
      "La charge mentale, c'est le travail invisible de penser à tout. Avec un bébé, elle triple.",
      "Oublis, irritabilité, saturation : ce sont des signaux de surcharge, pas des défauts.",
      "Une charge se mesure, se nomme, se répartit : tout le reste du guide y travaille.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 3 ================= */
    b.chapterPage("ch3");
    b.label("Chapitre 3", Mv);
    b.heading("Repérer ta propre charge", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("list", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "On ne réduit pas ce qu'on ne voit pas. Avant de te donner des outils, ce chapitre t'invite à observer ta propre charge mentale pendant quelques jours, sans jugement, comme une scientifique qui étudierait son quotidien. L'objectif n'est pas de culpabiliser, mais de cartographier.",
    );
    b.subhead("L'exercice des 3 jours");
    b.para(
      "Pendant 3 jours, note au fil de l'eau tout ce qui occupe ta tête : les choses à faire, les choses à ne pas oublier, les décisions prises, les inquiétudes, les messages à répondre, les rendez-vous à prendre. Pas besoin d'un carnet spécial : un fil dans ton téléphone ou un post-it sur le frigo suffisent. Le soir, fais le tri : ce qui était indispensable, ce qui pouvait attendre, ce qui pouvait être délégué, ce qui n'était pas nécessaire.",
    );
    b.subhead("Les 4 cases pour trier ta liste");
    b.table([
      ["À faire par moi", "Ce qui dépend de toi et ne peut pas attendre : soins de bébé, rendez-vous médicaux, ton propre repos."],
      ["À déléguer", "Ce que quelqu'un d'autre peut faire, même moins bien : courses, ménage, repas, lessives, réponses aux messages."],
      ["À attendre", "Ce qui peut attendre une semaine ou un mois sans conséquence : tri des photos, projets, rangements."],
      ["À abandonner", "Ce qui ne sert à rien, sauf à culpabiliser : la maison parfaite, les comparaisons, les « il faudrait que »."],
    ], { colW: 115, headerColor: MD });
    b.spacer(2);
    b.para(
      "Le soir de chaque journée, essaie de remplir ces 4 cases avec ce que tu as noté. Tu verras rapidement un motif apparaître : la plupart des tâches mentales lourdes appartiennent aux cases « à déléguer » et « à abandonner », pas à la case « à faire par moi ».",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Fais cet exercice avec ton/ta partenaire si tu le peux : chacun note sa propre charge, puis vous comparez. C'est souvent une révélation pour les deux, et la base de la communication du chapitre 5.",
      "Ne note pas « pour bien faire » : note pour voir. Un mot suffit, la régularité compte plus que la beauté du carnet.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list de repérage");
    b.checkRow("3 jours d'observation, en notant au fil de l'eau, sans trier pendant la journée");
    b.checkRow("Trier chaque soir dans les 4 cases : moi, déléguer, attendre, abandonner");
    b.checkRow("Repérer les 3 tâches les plus lourdes et les plus répétitives");
    b.checkRow("Noter le moment de la journée où la charge pèse le plus (et planifier une pause à ce moment)");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Observer sa charge, c'est déjà la réduire : ce qui est nommé devient gérable.",
      "La plupart des tâches lourdes sont déléguables ou abandonnables.",
      "C'est un exercice de douceur, pas un audit : on regarde, on apprend, on ne se juge pas.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 4 ================= */
    b.chapterPage("ch4");
    b.label("Chapitre 4", Mv);
    b.heading("Les 7 systèmes pour respirer", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("heart", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Une to-do list demande de l'énergie chaque jour : il faut y penser, la mettre à jour, s'y tenir. Un système, lui, se pense une seule fois et devient automatique. Voici les 7 systèmes ForceMaman, conçus pour sortir les décisions répétitives de ta tête. Pose-les un par un, à ton rythme, et garde seulement ceux qui te font du bien.",
    );
    b.subhead("Système 1 : Le Cahier Unique");
    b.para(
      "Un seul cahier (ou une seule note sur ton téléphone) où tout est centralisé : rendez-vous médicaux, questions pour la sage-femme, horaires de tétées si tu les suis, idées, numéros utiles. Une seule règle : si ça te traverse l'esprit et que tu risques de l'oublier, ça va dans le cahier, immédiatement. Ta tête n'est plus un placard, elle devient un lieu de vie.",
    );
    b.subhead("Système 2 : La Boîte à 3");
    b.para(
      "Trois bacs pour les vêtements de bébé : Actuel, Taille suivante, À laver. Chaque vêtement propre va dans le bon bac, jamais ailleurs, et un tri hebdomadaire de 5 minutes suffit. Fini la chasse au trésor au moment d'habiller bébé, fini les « il est où le pyjama ? ».",
    );
    b.subhead("Système 3 : Les Repas de Secours");
    b.para(
      "Trois recettes simples, validées à l'avance, dont les ingrédients sont toujours en stock. Une double quantité préparée une fois par semaine, le surplus congelé. Les jours sans énergie, le repas se décide tout seul, sans débat interne ni livraison coûteuse.",
    );
    b.subhead("Système 4 : Le Panier Nomade");
    b.para(
      "Un panier avec une poignée qui contient l'essentiel du change (couches, lingettes, change complet, mouchoirs, tétine de secours) et qui te suit de pièce en pièce. Tu ne cherches plus, tu attrapes. Pour le sommeil, bébé est toujours couché sur le dos, dans son lit, sans objet : le panier sert au quotidien, jamais au lit.",
    );
    b.subhead("Système 5 : La Trousse Départ Éclair");
    b.para(
      "Un sac de sortie toujours équipé, jamais vidé complètement, prêt en moins de 5 minutes : couches, lingettes, change complet, doudou, de quoi nourrir bébé. Après chaque sortie, on reremplit immédiatement. Les sorties redeviennent possibles, même les jours où l'énergie est basse.",
    );
    b.subhead("Système 6 : La Règle du Suffisant");
    b.para(
      "Chaque matin, une seule priorité réelle pour la journée. Tout le reste peut attendre, être délégué, ou ne pas être fait. Une maison « suffisante » pendant quelques mois n'a jamais fait de mal à personne, et la culpabilité n'a jamais aidé une maman à avancer.",
    );
    b.subhead("Système 7 : Le Sas du Soir");
    b.para(
      "Cinq gestes simples le soir pour un lendemain plus doux : préparer les vêtements de bébé, vérifier la trousse départ éclair, remplir le panier nomade, sortir de quoi faire le repas du lendemain, et un dernier tour du salon. Dix minutes le soir valent mieux qu'une heure le matin.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Ne pose pas les 7 systèmes en même temps : un par jour, sur une semaine, c'est le rythme idéal. Et si un système ne te convient pas, abandonne-le sans remords : mieux vaut 3 systèmes qui tiennent que 7 qui s'effondrent.",
      "Ces systèmes sont aussi dans le guide gratuit « Les 7 Systèmes ForceMaman », avec un plan des 7 jours et des pages de suivi : télécharge-le, il complète parfaitement ce chapitre.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ton plan des 7 jours");
    b.checkRow("Jour 1 : Le Cahier Unique (choisis ton support, pose-le près de toi)");
    b.checkRow("Jour 2 : La Boîte à 3 (étiquette tes bacs, fais un premier tri)");
    b.checkRow("Jour 3 : Les Repas de Secours (choisis 3 recettes, note la liste de courses)");
    b.checkRow("Jour 4 : Le Panier Nomade (remplis-le, promène-le toute la journée)");
    b.checkRow("Jour 5 : La Trousse Départ Éclair (prépare le sac de sortie)");
    b.checkRow("Jour 6 : La Règle du Suffisant (une seule priorité aujourd'hui)");
    b.checkRow("Jour 7 : Le Sas du Soir (pose tes 5 gestes, observe ton lendemain matin)");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Un système se pense une fois et tourne tout seul : c'est la différence avec la to-do list.",
      "Un système par jour, dans l'ordre que tu veux, et on ne précipite rien.",
      "Un système qui ne tient pas n'est pas un échec : c'est un système à simplifier.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 5 ================= */
    b.chapterPage("ch5");
    b.label("Chapitre 5", Mv);
    b.heading("Communiquer en couple", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("bubbles", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "La naissance d'un enfant est l'un des plus grands bouleversements d'un couple, et la charge mentale est souvent au cœur des tensions : l'un pense à tout, l'autre ne voit pas, et personne n'est content. Bonne nouvelle : cela se travaille, avec des outils simples et de la bienveillance.",
    );
    b.subhead("Les 3 listes qui changent tout");
    b.para(
      "Asseyez-vous ensemble et faites trois listes : 1) les tâches à faire (les courses, les lessives, les rendez-vous, les changes, les repas) ; 2) les tâches à penser (anticiper, planifier, se souvenir, vérifier) ; 3) les tâches à décider (qui fait quoi, quand, comment). La plupart des couples découvrent que l'un porte presque toute la liste 2 : c'est la charge mentale, et c'est elle qu'il faut rééquilibrer, pas seulement les gestes.",
    );
    b.subhead("La règle des responsabilités pleines");
    b.para(
      "Pour chaque tâche, une seule personne est responsable de bout en bout : la penser, la planifier, la faire, la vérifier. Si bébé a rendez-vous chez le médecin, c'est la même personne qui prend le rendez-vous, prépare la trousse et y emmène bébé, ou qui délègue consciemment. Une tâche « partagée » où l'un pense et l'autre exécute est une tâche qui continue de peser sur le cerveau du premier : c'est ce qu'on veut éviter.",
    );
    b.subhead("Le rendez-vous hebdomadaire de 15 minutes");
    b.para(
      "Une fois par semaine, 15 minutes, téléphones éteints : on fait le point sur la semaine passée (ce qui a marché, ce qui a été dur) et sur la semaine à venir (rendez-vous, courses, moments pour chacun). C'est le moment de rééquilibrer les listes, sans reproche : on répartit, on ajuste, on décide ensemble. C'est court, c'est régulier, et ça évite que les frustrations s'accumulent pendant des semaines.",
    );
    b.subhead("Les phrases qui aident, les phrases qui blessent");
    b.bullet("« Je n'en peux plus de tout penser » plutôt que « Tu ne fais jamais rien »", Mv);
    b.bullet("« J'ai besoin de 2 heures pour moi cette semaine » plutôt que « Tu ne me laisses jamais souffler »", Mv);
    b.bullet("« Peux-tu t'occuper de ça de A à Z ? » plutôt que « Aide-moi » (qui garde la charge mentale chez toi)", Mv);
    b.bullet("« Qu'est-ce qui te pèse le plus en ce moment ? » plutôt que « Tu devrais te détendre »", Mv);
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "La fatigue rend les mots plus tranchants : si une conversation s'échauffe, posez une trêve de 20 minutes et reprenez calmement. Les décisions importantes ne se prennent jamais à 3 heures du matin avec un bébé qui pleure.",
      "Le couple traverse un tsunami, lui aussi. Se parler, c'est se protéger mutuellement, pas se disputer.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list couple");
    b.checkRow("Faire les 3 listes ensemble : faire, penser, décider");
    b.checkRow("Répartir les responsabilités pleines, de A à Z, sans micro-management");
    b.checkRow("Fixer le rendez-vous hebdomadaire de 15 minutes (jour + heure)");
    b.checkRow("Chacun identifie un moment de ressource personnel dans la semaine");
    b.spacer(4);
    b.infoBox("À retenir", [
      "La charge mentale se rééquilibre en pensant ensemble, pas en se disputant sur les gestes.",
      "Une responsabilité pleine par tâche : celui qui la porte la pense et la fait.",
      "15 minutes par semaine suffisent à désamorcer l'essentiel, si elles sont régulières.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 6 ================= */
    b.chapterPage("ch6");
    b.label("Chapitre 6", Mv);
    b.heading("Accepter l'aide et dire non", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("hand", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Accepter l'aide, c'est un des gestes les plus difficiles et les plus puissants du post-partum. Beaucoup de mamans pensent qu'elles doivent tout faire, tout gérer, tout contrôler. Pourtant, accepter l'aide, ce n'est pas abandonner : c'est faire le choix conscient de protéger son énergie pour l'essentiel.",
    );
    b.subhead("Pourquoi c'est si difficile");
    b.para(
      "Refuser l'aide vient souvent de croyances bien ancrées : « personne ne le fera comme moi », « je ne veux pas déranger », « je dois prouver que j'y arrive », « si je délègue, je perds le contrôle ». Ces croyances sont compréhensibles, mais elles ont un coût : celui de ta santé, de ton sommeil, de ton moral. Et un bébé n'a pas besoin d'une maman qui fait tout parfaitement : il a besoin d'une maman qui tient.",
    );
    b.subhead("La mission précise, l'outil magique");
    b.para(
      "Les proches veulent aider, mais ne savent pas comment, et finissent par proposer des choses floues (« dis-moi si tu as besoin de quelque chose »). À toi de transformer cela en missions précises : « Peux-tu venir lundi de 14h à 17h tenir bébé pendant que je dors ? », « Peux-tu nous cuisiner un plat pour mercredi ? », « Peux-tu faire les courses avec cette liste ? ». Une aide concrète vaut mieux qu'une aide floue, et les proches sont souvent ravis d'avoir une mission claire.",
    );
    b.subhead("Dire non, sans culpabilité");
    b.para(
      "Dire non aux visites quand tu es épuisée, aux conseils non demandés, aux invitations qui te stressent, aux comparaisons : c'est un droit, pas un affront. Tu peux dire : « Merci de penser à nous, mais nous avons besoin de calme cette semaine », ou « Bébé et moi, on a besoin de repos, on se voit dans quelques semaines ». Les proches comprennent, et ceux qui ne comprennent pas révèlent surtout leur propre besoin, pas le tien.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Prépare ta « carte des missions » : une liste de ce dont tu auras besoin (repas, courses, tenir bébé, ménage, sorties) que tu peux montrer à tes proches. Ils choisissent leur mission, tu choisis ton énergie.",
      "Accepter l'aide, c'est aussi accepter que ce soit fait autrement que toi : la vaisselle mal rangée vaut mieux que pas de vaisselle du tout.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list aide et limites");
    b.checkRow("Préparer une liste de missions précises à proposer aux proches");
    b.checkRow("Accepter au moins une offre d'aide cette semaine, sans la transformer en tâche à superviser");
    b.checkRow("Refuser poliment une chose qui te stresse (visite, invitation, conseil)");
    b.checkRow("Te rappeler : accepter l'aide, c'est protéger bébé en te protégeant");
    b.spacer(4);
    b.infoBox("À retenir", [
      "L'aide ne se « mérite » pas et ne se « rend » pas : elle se reçoit, tout simplement.",
      "Une mission précise vaut mieux qu'une aide floue, pour toi et pour tes proches.",
      "Dire non, c'est un acte d'amour envers toi et envers bébé.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 7 ================= */
    b.chapterPage("ch7");
    b.label("Chapitre 7", Mv);
    b.heading("Le sommeil en équipe", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("moon", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Le sommeil est le premier levier de la charge mentale : un parent reposé pense plus clairement, s'énerve moins, décide mieux. Mais avec un nouveau-né, le sommeil se négocie en équipe. Voici comment organiser des nuits qui laissent à chacun des plages de repos réel.",
    );
    b.subhead("Le fonctionnement par gardes");
    b.para(
      "La méthode la plus efficace : découper la nuit en deux gardes. Par exemple, l'un est de garde jusqu'à 2h (il s'occupe de bébé, l'autre dort vraiment, ailleurs ou avec des bouchons d'oreilles), l'autre prend le relais à partir de 2h. Chacun dort ainsi une vraie plage de 4 à 5 heures, ce qui change tout par rapport à des nuits entières hachées. Si tu allaites, la garde du partenaire peut inclure : changer bébé, le calmer, le porter, et te l'amener pour la tétée, puis le rendormir pendant que tu retournes te coucher.",
    );
    b.subhead("La sieste, cet outil sous-estimé");
    b.para(
      "« Dors quand bébé dort » n'est pas toujours possible, mais c'est un objectif, pas une injonction : une sieste de 20 à 30 minutes par jour suffit à recharger le cerveau. Si tu ne peux pas dormir, au moins allonge-toi, ferme les yeux, coupe les stimulations : le repos sans sommeil compte aussi. Et délègue ce qui peut l'être pour libérer une plage de sieste : c'est une mission comme une autre sur la liste du chapitre 6.",
    );
    b.subhead("Le sommeil de bébé, cadre sûr et repères doux");
    b.para(
      "Un rappel important : bébé dort sur le dos, dans son lit, dans une gigoteuse, sans objet ni couverture (recommandation officielle de prévention de la mort inattendue du nourrisson). Les premières semaines, son sommeil est très morcelé et c'est physiologique : les siestes courtes, les réveils fréquents et les pleurs de fin de journée (souvent autour de 18h à 22h) sont classiques. Un bébé qui dort par cycles courts n'est pas un bébé « difficile » : c'est un bébé, tout simplement.",
    );
    b.subhead("Et si personne ne dort ?");
    b.para(
      "Quand la fatigue devient écrasante, plusieurs jours de suite, avec un moral qui s'effondre : il faut agiter le signal d'alarme. La fatigue extrême aggrave tout, y compris le risque d'accident (endormissement avec bébé dans les bras, sur le canapé). Demande de l'aide, même en pleine nuit : un proche peut prendre le relais, et les professionnels (sage-femme, PMI, 15 en cas de doute) sont là pour t'écouter.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "La règle de sécurité absolue : si tu sens que tu vas t'endormir avec bébé dans les bras ou sur le canapé, pose bébé dans son lit, sur le dos, et allonge-toi. Même 20 minutes dans son lit valent mieux qu'un endormissement dangereux ensemble.",
      "Le sommeil en équipe, c'est aussi le sommeil qui se planifie : chaque semaine, au rendez-vous de 15 minutes, on décide des gardes de la semaine.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list sommeil");
    b.checkRow("Mettre en place les gardes de nuit (une vraie plage de sommeil pour chacun)");
    b.checkRow("Planifier une sieste quotidienne, même courte, même sans sommeil réel");
    b.checkRow("Rappeler le cadre sûr : bébé sur le dos, dans son lit, en gigoteuse, sans objet");
    b.checkRow("Ne jamais s'endormir avec bébé sur le canapé ou dans les bras");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Des gardes de nuit bien découpées offrent à chacun 4 à 5 heures de sommeil réel : c'est énorme.",
      "La sieste quotidienne est un soin, pas un luxe.",
      "Fatigue extrême et moral en berne : on demande de l'aide, sans attendre.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 8 ================= */
    b.chapterPage("ch8");
    b.label("Chapitre 8", Mv);
    b.heading("Les autosoins en 5 minutes", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("flower", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Prendre soin de soi avec un nouveau-né ressemble souvent à une mission impossible : pas le temps, pas l'énergie, pas la disponibilité. Pourtant, les micro-moments de ressource, répétés chaque jour, font une vraie différence. Voici des autosoins qui tiennent dans 5 minutes, une main libre, et sans quitter la maison.",
    );
    b.subhead("5 autosoins de 5 minutes");
    b.checkRow("Une boisson chaude, bue lentement, sans écran, les deux mains autour de la tasse", MD);
    b.checkRow("Une douche seule, même courte, eau chaude sur les épaules, sans bébé dans les bras", MD);
    b.checkRow("3 respirations profondes, ventre qui se gonfle, souffle qui sort lentement (répétées plusieurs fois par jour)", MD);
    b.checkRow("Une courte marche dehors, même 10 minutes, avec ou sans bébé en poussette", MD);
    b.checkRow("Un message à une amie, une photo à envoyer, un appel de 5 minutes à quelqu'un qui te fait du bien", MD);
    b.spacer(2);
    b.subhead("La règle des 3 fois par jour");
    b.para(
      "Choisis 3 moments dans la journée où tu t'accordes une micro-pause : par exemple au réveil, après le déjeuner, et avant la garde de nuit. Ces moments ne demandent ni organisation ni matériel : juste une décision, et 5 minutes. Ce qui compte, ce n'est pas la durée, c'est la régularité : 3 fois 5 minutes par jour, c'est 15 minutes de ressource qui t'appartiennent.",
    );
    b.subhead("Se reconnecter à soi, un geste à la fois");
    b.para(
      "Après une naissance, on a souvent l'impression de n'exister que pour bébé. Les autosoins sont une façon de se rappeler qu'on existe aussi pour soi : une crème appliquée lentement, un parfum, une tenue confortable mais choisie, une chanson, un carnet où écrire 3 lignes. Ce ne sont pas des détails : ce sont des points d'ancrage qui aident à ne pas disparaître dans le rôle.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "L'autosoin n'est pas égoïste : il est contagieux. Une maman qui se ressource transmet du calme à bébé, qui ressent tout.",
      "Si « prendre soin de moi » te semble inaccessible, commence par une seule chose : une tasse de thé bue chaude, jusqu'au bout. C'est déjà un début, et c'est déjà toi.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list autosoins");
    b.checkRow("Choisir 3 micro-pauses dans ta journée et les noter quelque part");
    b.checkRow("Préparer une « station ressource » : thé, eau, crème, livre, à portée de main");
    b.checkRow("Accepter que 5 minutes suffisent : la régularité bat la durée");
    b.checkRow("Te rappeler chaque soir une chose que tu as faite pour toi aujourd'hui");
    b.spacer(4);
    b.infoBox("À retenir", [
      "5 minutes, 3 fois par jour : c'est l'objectif réaliste de l'autosoin en post-partum.",
      "La régularité compte plus que la durée, et le geste plus que le résultat.",
      "Se ressourcer, ce n'est pas s'éloigner de bébé : c'est revenir plus présente.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 9 ================= */
    b.chapterPage("ch9");
    b.label("Chapitre 9", Mv);
    b.heading("Les émotions du post-partum", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("bubbles", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Les 40 premiers jours sont un grand huit émotionnel : joie intense, angoisse, tendresse, épuisement, parfois colère, parfois vide. Tout cela est humain. Mais il existe une ligne entre les émotions « normales » de cette période et des signes qui méritent un accompagnement. Ce chapitre t'aide à la tracer, avec les repères des professionnels.",
    );
    b.subhead("Le baby blues : une vague qui passe");
    b.para(
      "Autour du 2e au 5e jour après la naissance, la majorité des mamans traversent le baby blues : émotivité à fleur de peau, pleurs faciles, grande fatigue, sensibilité aux remarques, parfois une petite tristesse sans raison claire. Ce n'est pas une maladie : c'est une tempête hormonale et émotionnelle qui se calme en quelques jours. On l'accueille, on en parle, on se repose, et elle passe.",
    );
    b.subhead("Quand les émotions s'installent : la dépression du post-partum");
    b.para(
      "La dépression du post-partum touche environ 10 à 20 % des mères, et aussi des pères. Ses signes, qui durent au-delà de 2 semaines : tristesse profonde, perte de plaisir et d'intérêt, fatigue qui ne cède pas au repos, troubles du sommeil (même quand bébé dort), anxiété envahissante, irritabilité, sentiment d'inutilité ou de culpabilité, difficulté à créer du lien avec bébé, pensées inquiétantes. Elle se soigne très bien, d'autant mieux qu'elle est repérée tôt : parles-en à ta sage-femme, ton médecin, la PMI. Des outils de repérage simples existent (comme le questionnaire EPDS), et les prises en charge sont variées : thérapies, groupes de parole, parfois traitements, le plus souvent compatibles avec l'allaitement.",
    );
    b.subhead("L'anxiété et les pensées qui tournent");
    b.para(
      "L'anxiété post-partum est fréquente : inquiétudes excessives pour bébé, vérifications répétées, peur qu'il arrive quelque chose, difficulté à se détendre même quand tout va bien. Si l'anxiété t'empêche de vivre, de dormir, ou de profiter de bébé, elle mérite d'être partagée : des accompagnements existent, et tu n'as pas à traverser cela seule.",
    );
    b.subhead("Les pensées inquiétantes, on en parle toujours");
    b.para(
      "Certaines mamans ont des pensées effrayantes : l'image d'un danger pour bébé, la peur de lui faire du mal, ou l'envie de fuir. Ces pensées sont terrifiantes, et c'est justement parce qu'elles sont terrifiantes que la plupart des mamans ne les avouent pas. Pourtant, elles sont plus fréquentes qu'on ne le croit, elles ne font pas de toi une mauvaise personne, et un professionnel saura les accueillir et t'aider. Les garder pour soi, en revanche, les fait grossir. Parles-en, toujours, sans attendre.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Baby blues qui passe en quelques jours : on respire. Signes qui durent plus de 2 semaines ou qui envahissent : on en parle à un professionnel. C'est la ligne simple, elle protège.",
      "Montre ce chapitre à ton/ta partenaire : parfois, ce sont les proches qui repèrent les signes avant nous, et qui nous aident à consulter.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list émotions");
    b.checkRow("Connaître la différence entre baby blues (passager) et dépression (qui dure)");
    b.checkRow("Parler de tes émotions, même difficiles, à au moins une personne de confiance");
    b.checkRow("Consulter si les signes durent plus de 2 semaines ou deviennent envahissants");
    b.checkRow("Ne jamais garder pour soi des pensées inquiétantes : on les partage toujours");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Le baby blues touche la majorité des mamans et passe en quelques jours.",
      "Tristesse, anxiété, épuisement qui durent : c'est peut-être une dépression du post-partum, et elle se soigne très bien.",
      "Les pensées inquiétantes se partagent toujours : elles sont un signal, pas un jugement sur toi.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 10 ================= */
    b.chapterPage("ch10");
    b.label("Chapitre 10", Mv);
    b.heading("Tes proches et ton cercle social", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("bubbles", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Les 40 premiers jours oscillent souvent entre deux extrêmes : trop de monde autour de toi (les visites, les conseils, les regards), ou personne du tout (l'isolement, la solitude, le sentiment d'être seule au monde avec bébé). Ce chapitre t'aide à trouver ton équilibre social, à toi.",
    );
    b.subhead("Gérer les visites et les conseils");
    b.para(
      "Les visites sont un plaisir, mais elles coûtent de l'énergie : il faut recevoir, répondre, montrer bébé, sourire. Les premières semaines, fixe tes propres règles : des visites courtes (30 à 60 minutes), planifiées, à des moments où tu te sens bien, et une consigne claire (se laver les mains, ne pas réveiller bébé, ne pas fumer près de lui). Les conseils non demandés se reçoivent avec un sourire et se rangent : « Merci, on note, on verra ce qui nous convient » est une phrase complète. Ton bébé, ta maison, tes règles.",
    );
    b.subhead("L'isolement, l'autre piège");
    b.para(
      "À l'inverse, beaucoup de mamans se retrouvent seules : les amis sans enfants ne savent plus quoi proposer, les journées défilent entre les tétées, et sortir semble insurmontable. L'isolement est un vrai facteur de risque pour le moral : il faut le contrer dès les premières semaines. Des pistes simples : un message par jour à une amie (même un emoji), une sortie quotidienne de 20 minutes, et surtout, rejoindre d'autres parents (groupe de mamans, ateliers de portage, café des parents, PMI) : rien ne rassure autant que de se voir dans les yeux d'une autre maman qui vit la même chose.",
    );
    b.subhead("Les proches qui jugent, les proches qui soutiennent");
    b.para(
      "Tu découvriras vite qui te fait du bien et qui t'épuise : la belle-sœur qui compare, le grand-père qui critique le choix du biberon, l'amie qui raconte sa naissance « parfaite ». Tu as le droit de prendre de la distance avec ceux qui jugent, et de t'appuyer davantage sur ceux qui soutiennent, sans explication ni culpabilité. Les premières semaines, ton énergie est un capital précieux : tu choisis où elle va.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Prépare à l'avance deux réponses toutes faites : une pour refuser une visite (« cette semaine, on a besoin de calme, on se voit la semaine prochaine ») et une pour les conseils non demandés (« merci, on va voir ce qui nous convient »). Elles te sauveront la vie, mot pour mot.",
      "Le groupe de parents est l'un des meilleurs « médicaments » du post-partum : on y vient pour bébé, et on y reste pour soi.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list social");
    b.checkRow("Fixer tes règles de visites : durée, horaires, consignes, et les faire connaître");
    b.checkRow("Préparer 2 réponses toutes faites : refuser une visite, accueillir un conseil");
    b.checkRow("Un contact par jour avec une personne qui te fait du bien");
    b.checkRow("Chercher un groupe de parents ou un atelier près de chez toi (PMI, associations, réseaux)");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Les visites se gèrent avec des règles simples, pas avec de la culpabilité.",
      "L'isolement se combat dès les premières semaines : un contact par jour, une sortie par jour.",
      "Ton énergie est un capital : tu choisis qui l'enrichit et qui la dépense.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= CHAPITRE 11 ================= */
    b.chapterPage("ch11");
    b.label("Chapitre 11", Mv);
    b.heading("Se projeter sans pression", { before: 4, size: 21 });
    b.spacer(4);
    b.illustration("sun", 297, 700, 2.2, Mv);
    b.spacer(14);
    b.para(
      "Quand on est au cœur des 40 premiers jours, l'avenir semble lointain, et pourtant il arrive vite : la reprise du travail, la garde de bébé, les projets, le couple. Ce chapitre t'aide à te projeter en douceur, sans te mettre la pression, en sachant que chaque étape se prépare à son rythme.",
    );
    b.subhead("La reprise du travail, sans précipitation");
    b.para(
      "Le congé maternité, puis le congé parental, sont des droits : informe-toi auprès de ton employeur et de la CAF pour connaître tes options, sans décider trop tôt. La reprise se prépare progressivement : tester la garde de bébé quelques heures avant la reprise, prévoir une « semaine blanche » d'organisation, et anticiper les émotions (la culpabilité, la peur de manquer, parfois le soulagement : tout est légitime). Si la reprise te semble insurmontable, parles-en : aménagements, temps partiel, solutions existent.",
    );
    b.subhead("La garde de bébé, un choix d'équipe");
    b.para(
      "Crèche, assistante maternelle, garde à domicile, grands-parents, ou une combinaison : chaque option a ses avantages et ses contraintes (délais d'inscription, coûts, organisation). Le bon moment pour s'y prendre : dès la grossesse ou les premières semaines pour les crèches (les listes d'attente sont longues), et en visite de terrain pour les assistantes maternelles. Fais tes visites avec une liste de questions, et choisis en confiance : la relation de confiance avec la personne qui garde bébé vaut tous les critères techniques.",
    );
    b.subhead("Le couple, après la tempête");
    b.para(
      "Les 40 premiers jours mettent le couple à rude épreuve, et c'est universel : fatigue, manque d'intimité, rôles qui changent, inégalités qui se révèlent. Quelques repères : garder le rendez-vous hebdomadaire du chapitre 5, se réserver des moments à deux même courts (un café, une marche pendant que bébé dort), reparler de la vie intime sans pression ni date butoir, et accepter que la relation se transforme : elle ne reviendra pas « comme avant », elle devient autre chose, et c'est un chemin.",
    );
    b.subhead("Se projeter, c'est aussi rêver un peu");
    b.para(
      "Entre deux tétées, il est permis de rêver : la première sortie en famille, les vacances, les projets professionnels, les voyages avec un enfant plus grand. Ces rêves sont des carburants, pas des injonctions. Note-les quelque part, relis-les les jours difficiles, et rappelle-toi : chaque âge de bébé ouvre de nouvelles possibilités, et rien ne t'oblige à tout décider maintenant.",
    );
    b.spacer(4);
    b.infoBox("Le conseil de Maria", [
      "Les grandes décisions (travail, garde, projets) se prennent mieux après la période la plus intense : pendant les 40 premiers jours, on collecte les informations, on en parle, et on décide ensuite, calmement.",
      "La culpabilité de la reprise est un classique, et elle ne signifie pas que ton choix est mauvais : elle signifie que tu aimes ton bébé.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });
    b.spacer(4);
    b.subhead("Ta check-list projection");
    b.checkRow("Se renseigner sur le congé et les options d'aménagement, sans décider trop tôt");
    b.checkRow("S'inscrire sur les listes d'attente des modes de garde (crèche, relais petite enfance)");
    b.checkRow("Garder le rendez-vous hebdomadaire en couple, même court");
    b.checkRow("Noter 3 rêves ou projets, même lointains, quelque part pour les jours difficiles");
    b.spacer(4);
    b.infoBox("À retenir", [
      "Les grandes décisions attendent la fin de la tempête : on s'informe, on ne décide pas sous la fatigue.",
      "Le couple se transforme, il ne disparaît pas : il se construit autrement, avec des outils simples.",
      "Rêver est un carburant, pas une pression : chaque âge de bébé ouvre de nouvelles portes.",
    ], { color: Mv, colorDark: MD, boxColor: COLORS.mauveSoft });

    /* ================= SUIVI PERSONNEL ================= */
    b.chapterPage("suivi");
    b.label("Mon suivi personnel", Mv);
    b.heading("Pages à remplir, sans pression", { before: 4, size: 20 });
    b.para(
      "Ces pages sont à toi : notes, listes, émotions, petites victoires. Remplis-les au fil de l'eau : c'est ta boussole personnelle des 40 premiers jours.",
    );
    b.spacer(4);
    b.blankSection("Ma liste mentale des 3 jours (exercice du chapitre 3)", "Note tout ce qui occupe ta tête, puis trie dans les 4 cases : à faire par moi, à déléguer, à attendre, à abandonner.", 7);
    b.chapterPage("suivi2");
    b.blankSection("Mes 3 listes en couple (chapitre 5)", "Les tâches à faire, les tâches à penser, les tâches à décider : remplis-les ensemble, puis répartissez les responsabilités pleines.", 7);
    b.blankSection("Mes missions d'aide à proposer aux proches", "Repas, courses, tenir bébé, ménage, sorties : des missions précises que tu peux montrer à ceux qui veulent aider.", 6);
    b.chapterPage("suivi3");
    b.blankSection("Mes 3 autosoins de 5 minutes", "Trois micro-pauses par jour : note lesquelles, à quels moments, et coche chaque jour où elles ont tenu.", 6);
    b.blankSection("Mes petites victoires à noter", "Chaque jour ou chaque semaine, note une chose qui a bien tenu, un moment doux, un pas en avant. Relis ces pages les jours difficiles.", 7);

    /* ================= RAPPEL + SOURCES ================= */
    b.chapterPage("rappel");
    b.closing([
      "ameli.fr : Baby blues et dépression du post-partum. Signes, fréquence (10 à 20 % des mères), quand consulter, prise en charge.",
      "HAS (Haute Autorité de Santé) : Suivi de la mère et de l'enfant après la naissance, repérage et prise en charge de la dépression du post-partum.",
      "Santé publique France : Sommeil du nourrisson et prévention de la mort inattendue du nourrisson (bébé sur le dos, dans son lit, en gigoteuse).",
      "1000-premiers-jours.fr : La période des 1000 premiers jours, le rôle des parents, les ressources officielles.",
      "Enfance et parentalité : réseaux de soutien aux jeunes parents, groupes de parole, ateliers (PMI, associations).",
      "Collège National des Gynécologues et Obstétriciens Français (CNGOF) : Recommandations sur le post-partum et la santé mentale maternelle.",
    ]);

    /* ================= DERNIÈRE PAGE ================= */
    b.lastPage(
      "Les 40 premiers jours sont une saison de la vie de parent, pas une épreuve à réussir. Tu n'as pas à tout gérer parfaitement, seulement à avancer un jour à la fois, accompagnée, en allégeant ta charge au lieu de l'accumuler. Tu es exactement la maman dont ton bébé a besoin.",
      "Maria, ancienne sage-femme et maman · ForceMaman",
    );
  },
});

// ---------- Deux passes : numéros de pages réels dans le sommaire ----------
book.render();
const sectionPages = { ...book.sectionPages };
book.render();
console.log("Sections (1re passe) :", JSON.stringify(sectionPages, null, 0));
book.write("public/ebooks/charge-mentale.pdf");
