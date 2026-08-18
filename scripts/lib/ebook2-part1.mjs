/**
 * Ebook 2 « Mon Corps Après l'Accouchement » : chapitres 1 à 6.
 * Appelé depuis scripts/gen-corps-apres.mjs.
 */
import { COLORS } from "./pdfbook.mjs";

export function part1(b) {
  const S = COLORS.sage;
  const SD = COLORS.sageDark;

  /* ===== CHAPITRE 1 ===== */
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

  /* ===== CHAPITRE 2 ===== */
  b.chapterPage("ch2");
  b.label("Chapitre 2", S);
  b.heading("Les suites de couches immédiates", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("droplets", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Les suites de couches, c'est la période qui commence juste après la naissance et qui dure environ 6 semaines. Ton corps y fait un travail considérable : l'utérus revient à sa taille, les saignements s'épuisent, les hormones se réorganisent. Comprendre ce qui est normal, c'est le meilleur moyen de ne pas s'inquiéter à tort, et de repérer ce qui mérite un avis.",
  );
  b.subhead("Les lochies, ces saignements qui évoluent");
  b.para(
    "Après l'accouchement, tu vas perdre du sang et des tissus : ce sont les lochies, comparables à des règles abondantes. Elles sont rouges vif les premiers jours, puis rosées, puis brunâtres, et enfin jaunâtres ou blanchâtres, sur 3 à 6 semaines en moyenne. Leur quantité diminue progressivement. Une réapparition de sang plus rouge pendant quelques heures est fréquente en cas d'effort ou d'allaitement, sans être inquiétante si cela reste modéré.",
  );
  b.subhead("Les contractions de l'utérus (tranchées)");
  b.para(
    "L'utérus se contracte pour revenir à sa taille : ces contractions, appelées tranchées, se font sentir comme des crampes, surtout les premiers jours et pendant l'allaitement (l'ocytocine les stimule). Elles sont normales et rassurantes : elles signent le travail de récupération. Elles s'atténuent en quelques jours. Une bouillotte sur le ventre, hors période d'allaitement, peut soulager.",
  );
  b.subhead("Les soins du quotidien les premiers jours");
  b.para(
    "Les gestes simples font beaucoup : changer de protection régulièrement (toutes les 2 à 4 heures au début), se laver à l'eau claire en avant-arrière (jamais en arrière-avant), sécher en tamponnant sans frotter, porter des sous-vêtements confortables en coton, et éviter les produits parfumés ou les douches vaginales qui perturbent la flore. Pour les positions, un coussin sous les fesses peut soulager si la zone est sensible, et s'asseoir sur une surface dure en appui sur les cuisses plutôt que sur le périnée est plus confortable les premiers jours.",
  );
  b.subhead("Ce qui est normal, ce qui mérite un avis");
  b.table([
    ["Normal", "Saignements qui diminuent progressivement, crampes de l'utérus, fatigue intense, sueurs nocturnes (les hormones se réorganisent), petites douleurs de cicatrices."],
    ["À signaler vite", "Saignements qui augmentent à nouveau, gros caillots répétés, fièvre, douleurs abdominales intenses qui persistent, pertes malodorantes, brûlures en urinant."],
    ["Urgence (15)", "Saignement très abondant (une protection saturée en moins d'une heure), vertiges, malaise, douleur brutale et intense. C'est rare, mais il faut réagir sans attendre."],
  ], { colW: 118, headerColor: SD });
  b.spacer(2);
  b.infoBox("Le conseil de Maria", [
    "Prépare à l'avance des protections adaptées aux suites de couches (grandes, confortables) : à la maternité on t'en donnera, mais tu en auras besoin à la maison aussi.",
    "Le suivi à domicile par la sage-femme jusqu'au 12e jour de bébé est le bon moment pour montrer tes lochies et poser tes questions : rien ne se juge, tout se surveille avec toi.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list des suites de couches");
  b.checkRow("Surveiller l'évolution des lochies : moins abondantes et plus claires au fil des jours");
  b.checkRow("Changer de protection régulièrement, se laver à l'eau claire, sans produits parfumés");
  b.checkRow("Repérer les signes à signaler : fièvre, caillots répétés, odeur, douleurs intenses");
  b.checkRow("Noter tes questions pour la visite à domicile de la sage-femme");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Les lochies évoluent sur 3 à 6 semaines : rouge, puis rosé, puis brun, puis jaunâtre.",
    "Les contractions de l'utérus sont normales, surtout pendant l'allaitement.",
    "Tout doute se pose à la sage-femme : c'est exactement pour cela qu'elle vient te voir.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 3 ===== */
  b.chapterPage("ch3");
  b.label("Chapitre 3", S);
  b.heading("Le périnée : ton allié à rééduquer", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("leaf", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Le périnée, c'est l'ensemble des muscles qui ferment le bas du bassin et soutiennent la vessie, l'utérus et le rectum. Pendant la grossesse et l'accouchement, il est étiré, parfois distendu, parfois lésé (déchirure, épisiotomie). Sa rééducation est l'une des grandes clés du post-partum : elle prévient les fuites urinaires, les descentes d'organes et les douleurs, et elle se pratique avec un professionnel, en douceur.",
  );
  b.subhead("Pourquoi la rééducation est recommandée");
  b.para(
    "La Haute Autorité de Santé recommande une rééducation périnéale après chaque accouchement, que la naissance ait été par voie basse ou par césarienne (la grossesse seule a déjà étiré le périnée). Elle se prescrit en général à la consultation post-natale, autour de la 6e à la 8e semaine, et se pratique avec une sage-femme ou un kinésithérapeute, en cabinet ou parfois à domicile. Le nombre de séances est adapté à tes besoins (souvent une dizaine, prises en charge dans le cadre du parcours de soins).",
  );
  b.subhead("Comment se déroule une séance");
  b.para(
    "Pas de mystère ni de douleur : la rééducation commence par un temps d'observation (on te montre comment contracter et relâcher ces muscles, souvent avec l'aide d'une sonde ou de biofeedback), puis des exercices de contraction, de relâchement et de coordination avec la respiration. On t'apprend aussi à intégrer ces muscles dans les gestes du quotidien : se relever, porter bébé, tousser, éternuer. Entre les séances, de petits exercices à la maison suffisent, quelques minutes par jour.",
  );
  b.subhead("Ce que tu peux faire dès maintenant");
  b.bullet("Se reposer et éviter les efforts violents les premières semaines : porter des charges lourdes, monter des escaliers en courant, se pencher brusquement", S);
  b.bullet("Respecter la consigne de la maternité sur le port de charges, souvent limité les premières semaines", S);
  b.bullet("S'hydrater et éviter la constipation (elle fait peser tout l'effort sur le périnée)", S);
  b.bullet("Ne pas commencer des exercices « de Kegel » intenses sans l'avis d'un professionnel : un périnée douloureux ou hypertonique se traite d'abord en relâchement", S);
  b.subhead("Les questions qu'on se pose toutes");
  b.para(
    "« Je ne sens pas mes muscles, est-ce normal ? » Oui, au début : le périnée étiré perd sa sensibilité, et c'est justement pour cela que le professionnel t'accompagne avec des repères concrets. « Combien de temps ça dure ? » Chaque séance dure environ 30 à 45 minutes, et la rééducation s'étale souvent sur quelques semaines, à raison d'une à deux séances par semaine. « Est-ce que je peux refuser la rééducation ? » C'est ton corps et ton choix, mais sache que la rééducation prévient des problèmes qui peuvent durer des années (fuites, descentes d'organes) : les professionnels la recommandent pour cette raison, pas par formalisme.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La rééducation périnéale n'est pas une performance : chaque muscle se rééduque à son rythme, et l'objectif est ton confort, pas une norme.",
    "Des fuites urinaires, une sensation de pesanteur, des douleurs pendant les rapports : tout cela se soigne, souvent très bien. N'attends pas des mois pour en parler, plus tôt on s'y met, plus c'est simple.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list périnée");
  b.checkRow("Prendre rendez-vous pour la consultation post-natale (6e à 8e semaine)");
  b.checkRow("Demander la prescription de rééducation périnéale et choisir un professionnel");
  b.checkRow("Noter tes questions (fuites, pesanteur, douleurs, rapports) pour en parler franchement");
  b.checkRow("Éviter les efforts violents et la constipation les premières semaines");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La rééducation périnéale est recommandée après chaque naissance, même par césarienne.",
    "Elle se fait avec un professionnel, en douceur, sans douleur ni jugement.",
    "Fuites, pesanteur, douleurs : tout cela se soigne, et plus tôt c'est mieux.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 4 ===== */
  b.chapterPage("ch4");
  b.label("Chapitre 4", S);
  b.heading("Les cicatrices : épisio et césarienne", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("hand", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Que tu aies eu une épisiotomie, une déchirure, ou une césarienne, une cicatrice va se refermer pendant les premières semaines. Bien en prendre soin, c'est la rendre confortable plus vite et prévenir les complications. Ce chapitre te donne les repères simples, dans les deux cas.",
  );
  b.subhead("L'épisiotomie et les déchirures");
  b.para(
    "L'épisiotomie est une petite incision du périnée, pratiquée dans certaines situations pour faciliter la naissance ; les déchirures, elles, sont des lésions spontanées, plus ou moins profondes. Dans les deux cas, des points sont posés et la cicatrisation prend 2 à 4 semaines. Pendant cette période : laver la zone à l'eau claire (ou au gant), sécher en tamponnant sans frotter, changer régulièrement les protections, et éviter les bains prolongés et les rapports tant que la cicatrisation n'est pas complète.",
  );
  b.subhead("La cicatrice de césarienne");
  b.para(
    "Après une césarienne, la cicatrice se situe sur le bas-ventre, le plus souvent dans un pli. Les premiers jours, elle est recouverte d'un pansement que l'équipe soignante gère avec toi. La cicatrisation est en général rapide, mais la zone peut rester sensible, engourdie ou tiraillée pendant plusieurs semaines ou mois : c'est normal. Les signes à signaler : rougeur qui s'étend, écoulement, chaleur, douleur qui augmente, fièvre. Et n'hésite pas à demander des conseils sur la reprise des efforts : soulever bébé (dans les bras, sans poids supplémentaire), monter les escaliers, conduire.",
  );
  b.subhead("Conduire, soulever, vivre après une césarienne");
  b.para(
    "Après une césarienne, la conduite est déconseillée tant que la reprise des muscles abdominaux ne permet pas d'appuyer sur une pédale de frein sans douleur, souvent 4 à 6 semaines : demande l'avis de ton professionnel de santé, et privilégie l'accompagnement pour les premiers trajets. Soulever bébé dans les bras est possible (son poids est léger), mais sans gestes brusques : plie les genoux, serre le ventre, et évite de porter en plus des charges (poussette dans les escaliers, courses). Pour tousser, éternuer ou rire, tu peux soutenir la cicatrice avec un petit coussin : cela protège et soulage.",
  );
  b.subhead("Prendre soin de sa cicatrice, même plus tard");
  b.para(
    "Quand la cicatrisation est complète (après quelques semaines), tu peux, avec l'accord de ton professionnel de santé, masser doucement la cicatrice avec une huile neutre pour assouplir les tissus et réduire les adhérences. C'est un geste simple, à faire quotidiennement, qui améliore le confort à long terme. Si la cicatrice reste douloureuse, tiraillée ou sensible des mois après, parles-en : des professionnels (kinésithérapeutes spécialisés, sage-femmes formées) savent prendre en charge ces douleurs.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Une cicatrice se regarde, se touche, se connaît : chaque jour, prends une minute pour l'observer et noter son évolution. C'est le meilleur radar.",
    "La douleur ne se « gagne » pas : si tu souffres, dis-le. Des solutions existent (positions, antalgiques adaptés, accompagnement), et tu as droit à toutes les questions.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list cicatrices");
  b.checkRow("Soigner l'hygiène : eau claire, séchage en tamponnant, protections changées souvent");
  b.checkRow("Surveiller les signes d'infection : rougeur qui s'étend, écoulement, fièvre, douleur qui augmente");
  b.checkRow("Respecter les consignes d'efforts (port de charges, escaliers) données par l'équipe soignante");
  b.checkRow("Demander conseil pour les massages de cicatrice une fois la cicatrisation faite");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Épisio, déchirure ou césarienne : la cicatrisation prend 2 à 4 semaines, et la sensibilité peut durer plus longtemps.",
    "Rougeur qui s'étend, écoulement, fièvre : on signale, sans attendre.",
    "Une cicatrice qui reste douloureuse des mois après se prend en charge : parles-en.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 5 ===== */
  b.chapterPage("ch5");
  b.label("Chapitre 5", S);
  b.heading("Les douleurs fréquentes", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("flower", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Les douleurs du post-partum sont fréquentes, variées, et presque toujours transitoires. Ce chapitre passe en revue les plus courantes, ce qui les soulage, et le moment où il faut demander un avis. Rappel important : ce guide est informatif et ne remplace pas l'avis d'un professionnel, surtout si une douleur est intense, inhabituelle ou persistante.",
  );
  b.subhead("Les douleurs du dos et du bassin");
  b.para(
    "La grossesse a mobilisé la colonne et le bassin, et les gestes du quotidien avec un nouveau-né (porter, se pencher, allaiter en mauvaise posture) entretiennent les tensions. Les douleurs lombaires et les douleurs au niveau du coccyx sont classiques. Ce qui soulage : des positions d'allaitement confortables et soutenues, un coussin sous les bras, plier les genoux pour ramasser (jamais le dos rond), la marche douce, la chaleur sur la zone. Si une douleur est vive, irradie, ou s'aggrave, on en parle à la sage-femme ou au médecin.",
  );
  b.subhead("Les hémorroïdes et la constipation");
  b.para(
    "Très fréquentes après l'accouchement, les hémorroïdes (veines gonflées autour de l'anus) peuvent être douloureuses, surtout en cas de constipation. Ce qui aide : boire beaucoup, manger des fibres, ne pas se retenir, utiliser un coussin ou une bouée pour s'asseoir, appliquer du froid (poche de glace enveloppée) par courtes périodes, et demander conseil à la pharmacie ou à la sage-femme pour des soins locaux adaptés. Si elles saignent abondamment ou deviennent très douloureuses, on consulte.",
  );
  b.subhead("Les maux de tête, à ne pas négliger");
  b.para(
    "Les céphalées sont fréquentes en post-partum (fatigue, hormones, déshydratation). Mais attention : un mal de tête intense, brutal, accompagné de troubles visuels (vision floue, mouches), de nausées, de douleur à l'estomac ou d'œdèmes, peut être un signe de prééclampsie, même après l'accouchement. Dans ce cas, on appelle sans attendre : ta sage-femme, ton médecin, la maternité, ou le 15. La règle : mal de tête inhabituel, on ne le laisse pas passer.",
  );
  b.subhead("Les douleurs au bassin et aux hanches");
  b.para(
    "Relâchement des ligaments, position d'accouchement, portage de bébé : le bassin et les hanches peuvent rester sensibles plusieurs semaines. La marche douce, la natation (quand la sage-femme l'autorise), et les étirements légers aident. Si la douleur empêche de marcher ou de porter bébé, on consulte : une rééducation du bassin (kinésithérapie, ostéopathie avec l'accord du médecin) peut être proposée.",
  );
  b.subhead("Le canal carpien et les fourmillements");
  b.para(
    "Les fourmillements, engourdissements ou picotements dans les doigts et la main (souvent la nuit, au réveil) sont fréquents en post-partum : les œdèmes et le portage de bébé compriment le nerf médian au poignet, c'est le syndrome du canal carpien. Il est très souvent transitoire. Ce qui soulage : une attelle de poignet la nuit, surélever la main, masser doucement, varier les positions de portage. Si les symptômes persistent, s'étendent ou gênent la vie quotidienne, on en parle à son médecin : des solutions simples existent.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La douleur n'est pas une preuve de courage. Elle est une information : on l'écoute, on la nomme, on la soulage, et on la partage avec un professionnel si elle persiste ou s'aggrave.",
    "Note tes douleurs (où, quand, depuis quand, à quel moment) : cela aide énormément le professionnel que tu consultes, et cela t'aide toi à prendre du recul.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list douleurs");
  b.checkRow("Repérer les douleurs et noter leur évolution (intensité, moments, facteurs qui soulagent)");
  b.checkRow("Appliquer les bons réflexes : positions soutenues, froid sur les hémorroïdes, hydratation, fibres");
  b.checkRow("Ne jamais laisser passer un mal de tête inhabituel : on le signale, toujours");
  b.checkRow("Consulter si une douleur persiste, s'aggrave ou empêche de vivre normalement");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La plupart des douleurs du post-partum sont normales et transitoires : on les soulage, on ne les subit pas.",
    "Le mal de tête inhabituel, les troubles visuels, les douleurs intenses : on ne réfléchit pas, on appelle.",
    "Décrire précisément sa douleur, c'est déjà la moitié du traitement.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 6 ===== */
  b.chapterPage("ch6");
  b.label("Chapitre 6", S);
  b.heading("Tes seins, entre douceur et vigilance", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("droplets", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Que tu allaites ou non, tes seins vivent une vraie transformation après la naissance : la montée de lait survient autour du 2e au 4e jour, les seins gonflent, deviennent sensibles, parfois douloureux. La plupart de ces sensations sont normales et passagères. Ce chapitre t'aide à reconnaître ce qui relève du soin quotidien et ce qui mérite un avis, surtout si tu allaites.",
  );
  b.subhead("La montée de lait, une étape à connaître");
  b.para(
    "Vers le 2e au 4e jour, la production de lait se met en place : les seins deviennent pleins, chauds, tendus. C'est la montée de lait, normale que tu allaites ou non. Si tu n'allaites pas, elle se résorbe en quelques jours : un soutien-gorge adapté qui maintient sans comprimer, du froid (poches de glace enveloppées) par courtes périodes, et ne pas stimuler les seins (pas de douche brûlante prolongée sur la poitrine). Si la tension devient très douloureuse ou si des rougeurs apparaissent, on en parle.",
  );
  b.subhead("Si tu allaites : l'engorgement");
  b.para(
    "L'engorgement, c'est quand le lait s'accumule et que le sein devient dur, chaud, douloureux, parfois rouge sur une zone. Il se soulage par la mise au sein fréquente (ou le tire-lait), en commençant par le sein engorgé, et en massant doucement vers le mamelon pendant la tétée. Un petit conseil : mettre un peu de froid entre les tétées (sur le sein, pas sur le mamelon) pour calmer l'inflammation. Si l'engorgement ne passe pas, s'accompagne de rougeurs étendues, de fièvre ou de symptômes grippaux, cela peut être une mastite : il faut consulter rapidement (sage-femme, médecin), car un traitement peut être nécessaire.",
  );
  b.subhead("Les crevasses et les douleurs de tétée");
  b.para(
    "Une douleur au mamelon pendant la tétée n'est pas une fatalité : elle signale souvent une position ou une prise à ajuster. Les crevasses (petites fissures) se soignent en corrigeant la mise au sein, avec des soins locaux simples (lait maternel après la tétée, crème adaptée, coussinets) et en demandant de l'aide : une sage-femme ou une consultante en lactation peut observer une tétée et tout ajuster, souvent en une séance. Les douleurs de tétée ne se « serrent pas les dents » : on cherche la cause, et on se fait accompagner.",
  );
  b.subhead("Les seins qui ne t'allaitent pas");
  b.para(
    "Si tu n'allaites pas, les seins peuvent être sensibles, suinter un peu, ou libérer du colostrum les premiers jours : c'est normal. On évite de stimuler, on porte un soutien-gorge confortable, et la gêne s'estompe en quelques jours à quelques semaines. Si une zone devient rouge, chaude, douloureuse, avec ou sans fièvre, on consulte : cela peut être une inflammation ou une infection, même sans allaitement.",
  );
  b.subhead("Allaiter ou pas : un choix, pas un examen");
  b.para(
    "L'allaitement est recommandé par l'OMS pour ses bénéfices, et il est une expérience magnifique pour beaucoup. Mais il est aussi une expérience difficile, douloureuse ou impossible pour d'autres, et le biberon nourrit parfaitement un bébé. Le choix d'allaiter ou pas appartient à la maman, éclairée, accompagnée, et jamais jugée. Si tu hésites, parles-en à ta sage-femme, mais rappelle-toi : un bébé nourri avec amour, quelle que soit la méthode, est un bébé bien nourri. Et une maman qui se sent libre de son choix est une maman plus apaisée, ce qui compte énormément pour la tétée comme pour le reste.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Des seins sensibles, tendus, qui changent de taille : c'est la norme du post-partum, et cela se calme.",
    "La règle d'or si tu allaites : la douleur de tétée se corrige, jamais elle ne se subit. Demande de l'aide, une observation suffit souvent.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list seins");
  b.checkRow("Connaître la montée de lait et l'accueillir (froid, maintien, ne pas stimuler si tu n'allaites pas)");
  b.checkRow("Si tu allaites : tétées fréquentes, position confortable, massages doux, aide si douleur");
  b.checkRow("Surveiller les signes de mastite : rougeur étendue, fièvre, symptômes grippaux, consultez vite");
  b.checkRow("Avec ou sans allaitement, signaler toute zone rouge, chaude ou douloureuse");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Montée de lait, engorgement, crevasses : ce sont des étapes classiques, qui se gèrent et se soignent.",
    "Rougeur étendue + fièvre + symptômes grippaux : pensez mastite, consultez rapidement.",
    "La douleur de tétée se corrige avec de l'aide : tu n'as pas à la supporter.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
}
