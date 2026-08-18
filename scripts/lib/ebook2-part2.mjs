/**
 * Ebook 2 « Mon Corps Après l'Accouchement » : chapitres 7 à 12 + pages de fin.
 * Appelé depuis scripts/gen-corps-apres.mjs.
 */
import { COLORS } from "./pdfbook.mjs";

export function part2(b) {
  const S = COLORS.sage;
  const SD = COLORS.sageDark;

  /* ===== CHAPITRE 7 ===== */
  b.chapterPage("ch7");
  b.label("Chapitre 7", S);
  b.heading("Le retour de couches et la contraception", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("calendar", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Le retour de couches, c'est la première vraie menstruation après l'accouchement. Sa date varie d'une femme à l'autre, et elle dépend beaucoup de l'allaitement. Ce chapitre t'explique à quoi t'attendre et comment reprendre en main ta contraception, sans pression et avec les bonnes informations.",
  );
  b.subhead("Quand reviennent les règles ?");
  b.para(
    "Si tu n'allaites pas, le retour de couches survient en général entre la 6e et la 12e semaine après la naissance. Si tu allaites exclusivement, il peut être retardé de plusieurs mois : l'allaitement freine l'ovulation, mais pas de façon fiable à 100 %. L'ovulation peut précéder le premier retour de couches : il est donc tout à fait possible de retomber enceinte avant d'avoir revu ses règles. Ne compte pas sur l'allaitement seul comme contraception.",
  );
  b.subhead("Les premières règles après la naissance");
  b.para(
    "Les premières règles post-partum sont souvent différentes des tiennes d'avant : plus abondantes, plus douloureuses ou au contraire plus légères, irrégulières pendant quelques cycles. C'est normal : ton cycle se réorganise. Attention à ne pas confondre le retour de couches avec des saignements anormaux : un saignement très abondant (protection saturée en une heure), des caillots volumineux répétés, ou une odeur inhabituelle méritent un avis.",
  );
  b.subhead("Savoir distinguer les saignements");
  b.para(
    "Trois types de saignements se succèdent sans toujours être faciles à distinguer : les lochies (les pertes des suites de couches, qui diminuent et s'éclaircissent sur 3 à 6 semaines), le retour de couches (les premières vraies règles, souvent plus abondantes), et les saignements anormaux qui méritent un avis. La règle simple : un saignement qui augmente de nouveau après avoir diminué, qui devient très abondant, qui sent mauvais, ou qui s'accompagne de douleurs ou de fièvre, se signale toujours. Et un saignement qui ne diminue pas du tout au fil des semaines se discute aussi avec la sage-femme ou le médecin.",
  );
  b.subhead("Quand le retour de couches n'arrive pas");
  b.para(
    "Si tu n'allaîtes pas et que tes règles ne reviennent pas après 3 à 4 mois, ou si tu allaites et qu'elles ne reviennent pas après le sevrage, une consultation permet de vérifier que tout va bien : elle est simple et rassurante. À l'inverse, un saignement qui survient très tôt après la naissance et s'arrête, puis reprend des semaines plus tard, est en général le retour de couches, mais en cas de doute, on pose la question à un professionnel.",
  );
  b.subhead("La contraception, à aborder sereinement");
  b.subhead("La contraception, à aborder sereinement");
  b.para(
    "La contraception se réfléchit avec un professionnel, idéalement lors de la consultation post-natale (6e à 8e semaine), ou avant si tu le souhaites. Les options sont nombreuses : pilule progestative ou œstroprogestative (l'œstroprogestative n'est pas recommandée pendant l'allaitement exclusif), implant, dispositif intra-utérin (DIU, au cuivre ou hormonal), préservatifs, méthode naturelle (avec ses limites). Chaque méthode a ses avantages et ses contre-indications : c'est une conversation, pas un examen, et c'est toi qui décides.",
  );
  b.subhead("Les questions à poser à ton professionnel");
  b.bullet("Quelle méthode est compatible avec l'allaitement, si tu allaites ?", S);
  b.bullet("Quand commencer la méthode choisie pour être protégée dès la reprise des rapports ?", S);
  b.bullet("Le DIU se pose quand, et est-ce douloureux en post-partum ?", S);
  b.bullet("Quels signes (saignements, douleurs) doivent me faire appeler ?", S);
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Beaucoup de mamans ne pensent pas à la contraception parce qu'elles sont débordées ou épuisées. Pose la question dès la maternité ou à la visite à domicile : noter la question suffit, la réponse viendra au bon moment.",
    "L'ovulation peut revenir avant les règles : si tu ne veux pas retomber enceinte tout de suite, protège-toi dès la reprise des rapports.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list contraception");
  b.checkRow("Noter la question de la contraception pour la consultation post-natale");
  b.checkRow("Connaître la règle : l'ovulation peut précéder le retour de couches");
  b.checkRow("Choisir une méthode avec un professionnel, adaptée à l'allaitement et à ta vie");
  b.checkRow("Signaler tout saignement anormal (très abondant, caillots, odeur)");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Retour de couches : 6 à 12 semaines sans allaitement, plus tardif avec allaitement exclusif.",
    "L'allaitement ne protège pas de façon fiable : on se protège dès la reprise des rapports.",
    "La contraception se choisit avec un professionnel, sans jugement et sans pression.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 8 ===== */
  b.chapterPage("ch8");
  b.label("Chapitre 8", S);
  b.heading("Bouger en douceur", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("scale", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Bouger après l'accouchement fait du bien au corps et à la tête : cela améliore l'humeur, le sommeil, la récupération musculaire et la confiance en soi. Mais la reprise de l'activité physique suit des règles simples, pour ne pas brusquer un corps qui se répare. La règle générale : en douceur, progressivement, et avec l'accord de ton professionnel de santé.",
  );
  b.subhead("La marche, ta meilleure alliée");
  b.para(
    "Dès que tu te sens bien, la marche est l'activité idéale : douce, progressive, adaptable à ton énergie du jour. Quelques minutes autour de la maison les premiers jours, puis des sorties plus longues au fil des semaines. La marche sollicite le périnée sans le brusquer, oxygène, et fait du bien au moral. Avec bébé en poussette ou en porte-bébé (portage physiologique), c'est aussi un moment partagé.",
  );
  b.subhead("La rééducation, la clé avant de reprendre le sport");
  b.para(
    "Avant de reprendre un sport d'impact (course, fitness, tennis, saut), il est recommandé d'avoir terminé sa rééducation périnéale (et éventuellement abdominale). Le sport repris trop tôt peut aggraver les fuites urinaires, les descentes d'organes et les douleurs pelviennes. La natation, le vélo doux et le yoga postnatal peuvent souvent se reprendre après l'accord du professionnel, autour de la 6e à la 8e semaine, en écoutant son corps.",
  );
  b.subhead("Le ventre et la diastase");
  b.para(
    "Pendant la grossesse, les grands droits de l'abdomen s'écartent pour laisser de la place à bébé : c'est la diastase des grands droits, fréquente et le plus souvent réversible. Les abdominaux « classiques » (relevés de buste) sont déconseillés tant qu'elle n'est pas prise en charge : ils peuvent l'aggraver. La rééducation abdominale, encadrée par un professionnel formé, travaille en profondeur et en douceur. Le ventre peut mettre des mois à retrouver une apparence qui te convient, ou changer durablement : les deux sont normaux, et aucune injonction ne doit peser sur toi.",
  );
  b.subhead("Les signes qui doivent ralentir");
  b.checkRow("Une douleur qui augmente pendant ou après l'effort", SD);
  b.checkRow("Des fuites urinaires, une pesanteur dans le bassin ou un sentiment d'« organes qui descendent »", SD);
  b.checkRow("Un saignement qui se réactive ou augmente", SD);
  b.checkRow("Une fatigue inhabituelle ou une sensation de malaise", SD);
  b.subhead("Un plan de reprise en douceur");
  b.table([
    ["Semaines 1 à 2", "Marche courte autour de la maison, mouvements doux dans le lit, exercices de respiration et de contraction périnéale légers (si la sage-femme les valide)."],
    ["Semaines 3 à 4", "Marche plus longue, étirements doux, portage de bébé en position physiologique, repos dès la fatigue."],
    ["Semaines 5 à 8", "Après la consultation post-natale et l'accord du professionnel : rééducation périnéale, natation ou vélo doux, yoga postnatal."],
    ["Au-delà", "Reprise progressive des sports d'impact (course, fitness) après validation de la rééducation, en écoutant son corps et ses signaux."],
  ], { colW: 118, headerColor: SD });
  b.spacer(2);
  b.para(
    "Ce plan est un repère, pas une consigne : chaque corps avance à son rythme, et l'important est de ressentir ce qui fait du bien sans jamais forcer. Si un effort déclenche une douleur, un saignement ou une gêne, on recule d'un cran et on en parle.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La reprise du sport n'est pas une course contre ta silhouette d'avant : c'est une reconnexion avec ton corps, à son rythme.",
    "Chaque corps est différent : deux mamans qui accouchent le même jour peuvent reprendre à des dates très différentes, et c'est parfaitement normal.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list mouvement");
  b.checkRow("Marcher dès que possible, en augmentant progressivement la durée");
  b.checkRow("Terminer la rééducation périnéale avant de reprendre un sport d'impact");
  b.checkRow("Éviter les abdominaux classiques tant que la diastase n'est pas évaluée");
  b.checkRow("S'arrêter et consulter en cas de douleur, de fuites ou de pesanteur");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La marche est l'activité de référence des premières semaines : simple, douce, efficace.",
    "Rééducation d'abord, sport d'impact ensuite : c'est l'ordre qui protège.",
    "Ton ventre et ton périnée se réparent à leur rythme : écoute-les, ne les brusque pas.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 9 ===== */
  b.chapterPage("ch9");
  b.label("Chapitre 9", S);
  b.heading("Manger, boire, dormir", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("leaf", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Le post-partum épuise, et l'épuisement se combat à trois niveaux : manger, boire, dormir. Pas de régime, pas de performance : simplement nourrir un corps qui travaille énormément, et lui donner les bases de la récupération.",
  );
  b.subhead("Manger : l'essentiel, sans pression");
  b.para(
    "Ton corps a besoin de repères simples : des repas réguliers quand c'est possible, des protéines (œufs, poisson, viande, légumineuses, produits laitiers), des féculents (l'énergie), des fruits et légumes, et du fer si tu es fatiguée (viande rouge, lentilles, légumes verts : la sage-femme ou le médecin peuvent prescrire un bilan en cas de fatigue persistante). Si tu allaites, tes besoins en énergie augmentent et l'hydratation est essentielle : garde une bouteille d'eau à portée de main, à chaque tétée. Et les repas congelés préparés avant la naissance, ou les plats simples des proches, sont de vrais soins : accepte-les sans culpabilité.",
  );
  b.subhead("La constipation, ce compagnon du post-partum");
  b.para(
    "Entre les hormones, les points de suture et les antalgiques, la constipation est très fréquente. Elle se prévient et se soulage : boire beaucoup, des fibres (fruits, légumes, céréales complètes, pruneaux), du mouvement doux, et ne pas se retenir. Si elle persiste malgré tout, demande conseil à la pharmacie ou à la sage-femme : des solutions simples et sûres existent, y compris en allaitement.",
  );
  b.subhead("Boire : ton corps le réclame");
  b.para(
    "L'hydratation est primordiale, que tu allaites ou non : l'eau, les tisanes, les soupes. La déshydratation aggrave la fatigue, les maux de tête et la constipation. Une astuce simple : une bouteille d'eau dans chaque pièce où tu passes du temps, et un verre à chaque tétée ou biberon.",
  );
  b.subhead("Dormir : la priorité numéro un");
  b.para(
    "Le sommeil est le premier médicament du post-partum. « Dors quand bébé dort » n'est pas toujours possible, mais c'est un objectif : même 20 minutes de sieste changent la journée. Délègue tout ce qui peut l'être (courses, repas, ménage) pour libérer des plages de repos, et organise les gardes de nuit avec ton/ta partenaire pour que chacun ait une vraie plage de sommeil. Si la fatigue ne cède jamais au repos, si elle s'accompagne de tristesse, d'anxiété ou d'épuisement moral, parles-en : une fatigue qui s'installe mérite un bilan (anémie, thyroïde, moral).",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "En post-partum, un « bon repas » est un repas qui se mange. Les plats simples, les restes, les repas congelés : tout est bon, tant que ça nourrit.",
    "La bouteille d'eau à portée de main et la sieste programmée sont deux outils de survie que les professionnelles utilisent elles-mêmes.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list nourrir-récupérer");
  b.checkRow("Garder une bouteille d'eau à portée de main, boire à chaque tétée ou biberon");
  b.checkRow("Manger simple et régulier : protéines, féculents, fruits, légumes, sans pression");
  b.checkRow("Prévenir la constipation : eau, fibres, mouvement doux");
  b.checkRow("Planifier une sieste quotidienne et des gardes de nuit partagées");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Manger, boire, dormir : ce sont les trois piliers de la récupération, et ils passent avant le reste.",
    "La constipation se prévient et se soigne : on n'attend pas des jours en souffrant.",
    "Une fatigue qui s'installe malgré le repos mérite un bilan, pas un « c'est normal ».",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 10 ===== */
  b.chapterPage("ch10");
  b.label("Chapitre 10", S);
  b.heading("La vie intime et le couple", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("heart", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "La sexualité après l'accouchement est un sujet dont on parle peu, et qui pourtant occupe l'esprit de beaucoup de couples : quand reprendre, avec quelles douleurs, quel désir, quelle communication ? Ce chapitre aborde ces questions sans tabou, avec des repères simples et beaucoup de douceur, parce que chaque couple chemine à son rythme.",
  );
  b.subhead("Quand reprendre les rapports ?");
  b.para(
    "Il n'y a pas de date butoir : le corps doit cicatriser (au minimum après l'arrêt des saignements et la fermeture des plaies, souvent autour de 4 à 6 semaines, mais cela varie), et le désir doit avoir le droit de revenir à son propre rythme. Beaucoup de couples reprennent progressivement, d'autres attendent des mois, et c'est légitime. La reprise se discute, ne se négocie pas sous pression : les deux partenaires doivent se sentir prêts et en confiance.",
  );
  b.subhead("Les douleurs : on ne les subit pas");
  b.para(
    "Des douleurs pendant les rapports après l'accouchement sont fréquentes, surtout après une épisiotomie ou une déchirure : cicatrice sensible, sécheresse liée aux hormones (surtout en allaitement), périnée encore tonique. Les solutions existent : des positions qui laissent le contrôle à la maman, un temps d'adaptation, un lubrifiant à base d'eau, et de la communication. Si la douleur persiste, parles-en : un professionnel (sage-femme, kinésithérapeute spécialisé en périnée, médecin) peut évaluer la cicatrice et proposer des soins adaptés. La douleur ne se « serre pas les dents ».",
  );
  b.subhead("Le désir, ce grand absent temporaire");
  b.para(
    "Fatigue, hormones, allaitement, corps transformé, attention entièrement tournée vers bébé : il est très fréquent que le désir diminue ou disparaisse temporairement après la naissance. Ce n'est ni un échec, ni un désamour : c'est une période, et elle passe. En parler à son/sa partenaire, sans se juger, et accepter d'autres formes d'intimité (tendresse, câlins, présence) pendant cette phase protège le couple de l'incompréhension.",
  );
  b.subhead("Le couple, à préserver à deux");
  b.para(
    "Le post-partum est un test pour le couple : fatigue, nuits hachées, répartition des tâches, rôles qui changent. Quelques repères : se parler chaque jour (même 5 minutes, même épuisés), se réserver des moments à deux sans bébé (une marche, un café), accepter que l'intimité change de forme temporairement, et demander de l'aide (proches, professionnels, conseil conjugal) si les tensions s'installent. Un couple qui traverse bien les premiers mois, c'est un couple qui s'organise : charge mentale partagée, gardes de nuit équitables, et parole libérée.",
  );
  b.subhead("Les questions que l'on n'ose pas poser");
  b.para(
    "« J'ai mal mais je ne veux pas décevoir mon/ma partenaire » : la douleur se dit toujours, et un partenaire aimant préfère attendre que blesser. « Je n'ai aucune envie, est-ce que je suis normale ? » Oui : la baisse de désir touche la grande majorité des mamans dans les premiers mois, c'est une période, pas une identité. « Est-ce que ça redeviendra comme avant ? » La vie intime change de forme, puis retrouve sa place : avec de la communication, de la tendresse et du temps, la plupart des couples retrouvent une sexualité épanouie, souvent différente, parfois meilleure. Et si une question te bloque vraiment, la sage-femme, le médecin ou un sexologue peuvent y répondre sans tabou : c'est leur quotidien.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La reprise de la vie intime n'est pas un examen à réussir : c'est une conversation à deux, qui évolue au fil des semaines et des envies.",
    "Si une question sur le sexe après l'accouchement te gêne, pose-la quand même à ta sage-femme ou ton médecin : ils entendent ces questions tous les jours, et les réponses soulagent.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list intimité");
  b.checkRow("Discuter de la reprise à deux, sans pression ni date butoir");
  b.checkRow("Utiliser un lubrifiant à base d'eau si besoin, et des positions qui laissent le contrôle");
  b.checkRow("Ne pas subir la douleur : consulter si elle persiste");
  b.checkRow("Se réserver des moments d'intimité non sexuelle (tendresse, présence, câlins)");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La reprise se vit à deux, au rythme du corps et du désir, sans date butoir.",
    "Les douleurs se soignent : on n'accepte pas la douleur comme une fatalité.",
    "La baisse de désir est fréquente et temporaire : elle se parle, elle ne se subit pas.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 11 ===== */
  b.chapterPage("ch11");
  b.label("Chapitre 11", S);
  b.heading("Les signes d'alerte à connaître", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("sun", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Ce chapitre est le plus important du guide. La grande majorité des post-partum se déroulent sans complication, mais certaines situations méritent une réaction rapide. Les connaître, ce n'est pas être inquiète : c'est être sereine, parce qu'on sait quoi faire, quand. Rappel : en cas de doute, appelle. La maternité, ta sage-femme, ton médecin, le 15 : aucun appel n'est superflu.",
  );
  b.subhead("Les situations qui appellent sans tarder");
  b.table([
    ["Hémorragie", "Saignement qui redevient très abondant (protection saturée en moins d'une heure), caillots volumineux répétés, vertiges, pâleur, malaise. On appelle le 15."],
    ["Fièvre", "Température supérieure à 38 degrés, avec ou sans signes : infection possible (utérus, cicatrice, seins, voies urinaires). On contacte un professionnel le jour même."],
    ["Douleur thoracique, essoufflement", "Douleur dans la poitrine, difficulté à respirer, cœur qui s'emballe, toux : cela peut être une embolie ou une complication cardiaque. On appelle le 15."],
    ["Douleur d'un mollet", "Douleur, chaleur, gonflement ou rougeur sur un seul mollet : possible phlébite. On consulte en urgence."],
    ["Mal de tête intense + troubles visuels", "Céphalée brutale, vision floue, « mouches » devant les yeux, douleur à l'estomac, œdèmes : possible prééclampsie, même après l'accouchement. On appelle le 15."],
    ["Plaie ou cicatrice infectée", "Rougeur qui s'étend, écoulement, chaleur, odeur, douleur qui augmente sur une cicatrice (épisio, déchirure, césarienne) : on consulte rapidement."],
  ], { colW: 128, headerColor: SD });
  b.spacer(2);
  b.subhead("Les signes qui méritent un avis rapide");
  b.checkRow("Pertes malodorantes, brûlures en urinant, envies fréquentes et douloureuses (infection urinaire)", SD);
  b.checkRow("Sein rouge, chaud, douloureux, avec ou sans fièvre (mastite)", SD);
  b.checkRow("Douleur abdominale intense ou qui augmente, ventre dur, malaise", SD);
  b.checkRow("Impossibilité d'uriner ou de retenir ses urines, difficulté à aller à la selle", SD);
  b.checkRow("Tristesse profonde, anxiété envahissante, pensées inquiétantes, impression de ne pas s'en sortir", SD);
  b.spacer(2);
  b.subhead("Les numéros à avoir en tête");
  b.para(
    "Ta sage-femme (son numéro direct), ton médecin, la maternité (ils répondent souvent 24h/24 les premières semaines), la PMI, et en cas d'urgence : le 15 (SAMU) ou le 112. Note-les dès maintenant, affiche-les sur le frigo, et enregistre-les dans ton téléphone. Avoir les numéros sous la main, c'est la moitié de la sérénité.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Quand je demande aux mamans pourquoi elles n'ont pas appelé plus tôt, la réponse est presque toujours la même : « je ne voulais pas déranger ». Appeler ne dérange jamais : c'est le travail des professionnels de répondre, et ils préfèrent cent appels de trop à un appel manqué.",
    "La nuit, si tu hésites : la maternité ou le 15 répondent. L'hésitation n'est pas un motif pour ne pas appeler, c'est un motif pour appeler.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list alerte");
  b.checkRow("Afficher les numéros : sage-femme, médecin, maternité, PMI, 15, 112");
  b.checkRow("Relire ce chapitre une fois, calmement, avant la naissance");
  b.checkRow("En cas de doute, appeler : aucune question n'est superflue");
  b.checkRow("Signaler vite les signes d'infection, les douleurs inhabituelles, les maux de tête inhabituels");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Saignement très abondant, fièvre, douleur thoracique, mollet douloureux, mal de tête avec troubles visuels : on appelle le 15 ou on consulte en urgence.",
    "Les signes d'infection (odeur, brûlures, rougeurs) se signalent le jour même.",
    "Appeler n'est jamais déranger : c'est le réflexe juste, et il te protège.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 12 ===== */
  b.chapterPage("ch12");
  b.label("Chapitre 12", S);
  b.heading("Prendre soin de sa santé mentale", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("cloud", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Le post-partum est aussi une affaire de tête. Entre l'émotion de la naissance, les hormones, la fatigue et le bouleversement des repères, le moral peut vaciller : c'est humain, c'est fréquent, et cela se prend en charge. Ce chapitre te donne les repères officiels pour distinguer ce qui passe de ce qui mérite un accompagnement, et comment te faire aider sans honte.",
  );
  b.subhead("Le baby blues, une vague qui passe");
  b.para(
    "Autour du 2e au 5e jour après la naissance, la majorité des mamans traversent le baby blues : émotivité à fleur de peau, pleurs faciles, irritabilité, grande sensibilité, parfois tristesse sans raison claire. Ce n'est pas une maladie : c'est une tempête hormonale et émotionnelle qui se calme en quelques jours. On l'accueille, on en parle, on se repose, et elle passe. En parler à la sage-femme qui passe à domicile, c'est normal et utile.",
  );
  b.subhead("La dépression du post-partum : quand consulter");
  b.para(
    "La dépression du post-partum touche environ 10 à 20 % des mères, et aussi des pères. Ses signes : tristesse profonde qui dure, perte de plaisir, fatigue qui ne cède pas au repos, troubles du sommeil (même quand bébé dort), anxiété envahissante, irritabilité, sentiment d'inutilité ou de culpabilité, difficulté à créer du lien avec bébé, pensées inquiétantes. Elle se soigne très bien, d'autant mieux qu'elle est repérée tôt. Si ces signes durent plus de deux semaines ou deviennent envahissants, parles-en à ta sage-femme, ton médecin ou la PMI : des questionnaires simples (comme l'EPDS) permettent de faire le point, et des accompagnements existent (thérapies, groupes de parole, traitements le plus souvent compatibles avec l'allaitement).",
  );
  b.subhead("Les pensées inquiétantes : on en parle toujours");
  b.para(
    "Certaines mamans ont des pensées effrayantes : l'image d'un danger pour bébé, la peur de lui faire du mal, l'envie de fuir. Ces pensées sont terrifiantes, et c'est justement parce qu'elles sont terrifiantes qu'on n'ose pas les dire. Elles sont plus fréquentes qu'on ne le croit, elles ne font pas de toi une mauvaise personne, et un professionnel saura les accueillir et t'aider. Les garder pour soi, en revanche, les fait grossir. Parles-en, toujours, sans attendre.",
  );
  b.subhead("Les ressources qui t'entourent");
  b.bullet("Ta sage-femme ou ton médecin : le premier interlocuteur, formé au repérage", S);
  b.bullet("La PMI (Protection Maternelle et Infantile) : consultations, soutien, groupes de parents, gratuits", S);
  b.bullet("Les psychologues et psychiatres spécialisés en périnatalité (certains remboursés dans le cadre de dispositifs comme MonParcoursPsy ou les séances remboursées)", S);
  b.bullet("Les lignes d'écoute et associations de parents : parler à un inconnu bienveillant, c'est parfois plus facile", S);
  b.bullet("Ton/ta partenaire et tes proches : les informer des signes à surveiller, c'est leur donner les moyens de t'aider", S);
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La santé mentale est une partie de la santé, tout simplement. Demander de l'aide pour son moral, c'est exactement le même geste que demander de l'aide pour une cicatrice : un geste de soin, pas une faiblesse.",
    "Si ton/ta partenaire semble sombrer, toi aussi tu peux l'encourager à en parler : la dépression du post-partum touche aussi les pères.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list santé mentale");
  b.checkRow("Connaître le baby blues (passager) et ses différences avec une dépression qui s'installe");
  b.checkRow("En parler à au moins une personne de confiance, dès les premiers jours");
  b.checkRow("Consulter si les signes durent plus de 2 semaines ou deviennent envahissants");
  b.checkRow("Ne jamais garder pour soi des pensées inquiétantes : on les partage toujours");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Le baby blues touche la majorité des mamans et passe en quelques jours.",
    "Tristesse, anxiété, épuisement qui durent : cela peut être une dépression du post-partum, et elle se soigne très bien.",
    "Les pensées inquiétantes se partagent toujours : elles sont un signal, pas un jugement sur toi.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 13 ===== */
  b.chapterPage("ch13");
  b.label("Chapitre 13", S);
  b.heading("Les transformations qui surprennent", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("flower", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "On te prépare à la naissance, rarement à la mue qui suit : la peau, les cheveux, les jambes, les pieds, le ventre, le poids. Tout cela change, souvent de façon surprenante, et presque toujours de façon temporaire. Ce chapitre passe en revue ces transformations pour que tu les accueilles sans inquiétude, et sache quand en parler.",
  );
  b.subhead("La peau : vergetures, taches, sécheresse");
  b.para(
    "Les vergetures, apparues pendant la grossesse, s'estompent avec le temps : elles deviennent plus claires et moins visibles au fil des mois, même si elles ne disparaissent pas toujours complètement. Les taches brunes du visage (le « masque de grossesse ») s'atténuent généralement après la naissance, surtout en évitant l'exposition solaire sans protection. La peau peut aussi devenir plus sèche ou au contraire plus grasse, le temps que les hormones se réorganisent. Une hydratation simple et régulière suffit ; les crèmes « anti-vergetures » n'effacent pas, mais le massage quotidien fait du bien à la peau et à la tête.",
  );
  b.subhead("Les cheveux : la chute qui inquiète");
  b.para(
    "Vers le 3e au 4e mois après la naissance, beaucoup de mamans constatent une chute de cheveux plus importante que d'habitude. C'est un phénomène physiologique : pendant la grossesse, les hormones ont « gelé » la chute naturelle, et tout se rattrape après. Cette chute est temporaire : les cheveux repoussent en quelques mois. Si la chute est très abondante, dure, ou s'accompagne de zones dégarnies, on peut en parler à son médecin (un bilan fer ou thyroïde peut être proposé).",
  );
  b.subhead("Les jambes, les pieds et les mains");
  b.para(
    "Les chevilles peuvent rester gonflées quelques semaines, les jambes lourdes (surtout en fin de journée), et certaines femmes constatent que leur pointure change légèrement après la grossesse, en lien avec l'affaissement de la voûte plantaire. Le canal carpien (fourmillements, engourdissements dans les doigts et la main) est aussi fréquent en post-partum, aggravé par le portage de bébé et les œdèmes. Soulagement : surélever les jambes, éviter la station debout prolongée, porter une attelle de poignet la nuit pour le canal carpien. À signaler sans attendre : un gonflement douloureux d'une seule jambe ou d'un seul mollet, une rougeur, une chaleur locale (possible phlébite), ou des jambes très gonflées qui ne se dégonflent pas.",
  );
  b.subhead("Le ventre et le poids");
  b.para(
    "Le ventre reste souvent arrondi plusieurs semaines (l'utérus met environ 6 semaines à revenir à sa taille), et la peau garde sa souplesse : c'est normal. La perte de poids se fait à des rythmes très variables selon les femmes, l'allaitement et l'activité : il n'y a ni norme ni calendrier. On ne fait pas de régime restrictif en post-partum (surtout en allaitement) : on mange équilibré, on bouge doucement, et on laisse le corps faire son travail. Si la prise de poids ou la difficulté à perdre t'inquiètent, on en parle à un professionnel, sans en faire un sujet de honte.",
  );
  b.subhead("Quand en parler à un professionnel");
  b.checkRow("Un gonflement douloureux d'une seule jambe ou d'un seul mollet, avec rougeur ou chaleur", SD);
  b.checkRow("Une chute de cheveux très abondante, durable, avec zones dégarnies", SD);
  b.checkRow("Des fourmillements ou douleurs de main qui gênent la vie quotidienne", SD);
  b.checkRow("Une gêne ou une douleur qui t'empêche de t'occuper de bébé", SD);
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Ton corps n'a pas fini de te surprendre, et c'est normal : la mue du post-partum dure des mois. Ce qui t'étonne aujourd'hui sera souvent résorbé ou apaisé dans quelques semaines.",
    "La comparaison avec d'autres mamans (sur les réseaux ou dans la vraie vie) ne t'apprend rien sur ton corps : chaque récupération est unique.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list transformations");
  b.checkRow("Accueillir les changements de peau et de cheveux comme temporaires, sans panique");
  b.checkRow("Surélever les jambes, porter une attelle de poignet si fourmillements la nuit");
  b.checkRow("Signaler tout gonflement douloureux d'un seul côté : c'est un signe à ne pas laisser passer");
  b.checkRow("Manger équilibré, bouger doucement, sans régime ni injonction de poids");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Peau, cheveux, pieds, ventre : la plupart des transformations du post-partum sont temporaires.",
    "La chute de cheveux vers 3-4 mois est physiologique : elle se rattrape toute seule.",
    "Un gonflement douloureux d'un seul côté, on le signale : c'est une règle de sécurité simple.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== CHAPITRE 14 ===== */
  b.chapterPage("ch14");
  b.label("Chapitre 14", S);
  b.heading("Ton calendrier de suivi médical", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("calendar", 297, 700, 2.2, S);
  b.spacer(14);
  b.para(
    "Après la naissance, un parcours de suivi s'organise, pris en charge et conçu pour toi : visites à domicile, examens de bébé, consultation de bilan, rééducation. Le connaître à l'avance, c'est ne rater aucun rendez-vous et arriver à chacun avec tes questions préparées.",
  );
  b.subhead("Les visites à domicile de la sage-femme");
  b.para(
    "Après le retour à la maison, une sage-femme peut venir te rendre visite à domicile, dans le cadre du suivi pris en charge jusqu'au 12e jour de bébé. C'est LE moment pour tout : surveiller les suites de couches, vérifier les cicatrices, peser bébé, répondre à tes questions sur les tétées, le sommeil, ton moral. Prépare ta liste de questions à l'avance, et n'hésite pas à noter celles qui arrivent la nuit pour ne pas les oublier le jour de la visite.",
  );
  b.subhead("L'examen de bébé au 8e jour");
  b.para(
    "L'examen obligatoire du 8e jour est réalisé par un médecin ou une sage-femme, souvent à la maternité, en cabinet ou à la PMI : il vérifie la santé de bébé, son poids, son développement, et permet de dépister certaines anomalies. C'est aussi un moment pour poser tes questions sur le quotidien avec bébé. N'oublie pas son carnet de santé : il se remplit à chaque rendez-vous.",
  );
  b.subhead("La consultation post-natale, ton bilan à toi");
  b.para(
    "Entre la 6e et la 8e semaine, la consultation post-natale est recommandée avec ta sage-femme, ton médecin traitant ou ton gynécologue. Au programme : bilan des suites de couches, prescription de la rééducation périnéale (et abdominale si besoin), contraception, dépistage de la dépression du post-partum, et toutes tes questions (douleurs, moral, vie intime, allaitement). C'est ton rendez-vous à toi, pas celui de bébé : il est essentiel, et il se prend.",
  );
  b.subhead("La rééducation et le suivi qui suit");
  b.para(
    "La rééducation périnéale (et éventuellement abdominale) se déroule ensuite avec une sage-femme ou un kinésithérapeute, en général sur quelques semaines. Selon ton histoire, le suivi peut se poursuivre : contrôle gynécologique (dont le frottis si tu y as droit), suivi de la cicatrice, bilan sanguin en cas de fatigue persistante, accompagnement psychologique si besoin. Et pour les rendez-vous de bébé, le carnet de santé et la PMI te guident : examens obligatoires, vaccinations selon le calendrier vaccinal.",
  );
  b.subhead("Ton calendrier en un regard");
  b.table([
    ["Jours 1 à 12", "Visites à domicile de la sage-femme (suivi pris en charge), surveillance des suites de couches et de bébé."],
    ["Jour 8", "Examen obligatoire de bébé (poids, développement, dépistages) avec son carnet de santé."],
    ["6e à 8e semaine", "Consultation post-natale pour toi : bilan, rééducation, contraception, moral."],
    ["Semaines 8 à 12", "Rééducation périnéale (et abdominale si besoin), reprise progressive des activités."],
    ["Au fil des mois", "Suivi gynécologique, vaccination de bébé selon le calendrier, et consultation dès que tu as un doute."],
  ], { colW: 118, headerColor: SD });
  b.spacer(2);
  b.infoBox("Le conseil de Maria", [
    "Note les rendez-vous dès la maternité dans un seul endroit (le cahier unique de tes guides, ou ton téléphone), et mets un rappel pour la consultation post-natale : c'est le rendez-vous le plus oublié, et le plus important pour toi.",
    "Chaque rendez-vous est une occasion : viens avec tes questions écrites, même celles qui te semblent « bêtes ». Les professionnels préfèrent répondre que deviner.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });
  b.spacer(4);
  b.subhead("Ta check-list suivi");
  b.checkRow("Organiser les visites à domicile de la sage-femme dès le retour de la maternité");
  b.checkRow("Réserver l'examen du 8e jour de bébé et prendre son carnet de santé");
  b.checkRow("Prendre rendez-vous pour la consultation post-natale (6e à 8e semaine), avec tes questions écrites");
  b.checkRow("Programmer la rééducation périnéale dès la prescription obtenue");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Le suivi post-partum est organisé, pris en charge, et pensé pour toi : il ne se saute pas.",
    "La consultation post-natale est ton rendez-vous clé : bilan, rééducation, contraception, moral.",
    "Les questions s'écrivent, se posent, et les réponses se notent : tu repars toujours plus sereine.",
  ], { color: S, colorDark: SD, boxColor: COLORS.sageSoft });

  /* ===== PAGES DE FIN ===== */
  b.finalPages({
    suiviTitle: "Mon suivi personnel",
    suiviNote:
      "Ces pages sont à toi : observations, questions, ressentis. Remplis-les au fil de l'eau, sans chercher à bien faire : c'est ta boussole pour suivre ta récupération et préparer tes rendez-vous.",
    suivi: [
      [[
        "Mes observations des suites de couches",
        "Note l'évolution des saignements, les douleurs, les sensations : c'est l'outil parfait pour la visite de la sage-femme.",
        7,
      ]],
      [
        [
          "Mes questions pour la consultation post-natale",
          "Rééducation, contraception, douleurs, moral, vie intime : note tout, tu n'oublieras rien le jour du rendez-vous.",
          8,
        ],
        [
          "Mes repères de récupération",
          "Semaine après semaine : ce qui va mieux, ce qui reste difficile, ce qui m'étonne. Les progrès se voient mieux par écrit.",
          5,
        ],
      ],
      [
        [
          "Mon journal des douleurs",
          "Où, quand, depuis quand, ce qui soulage : décris tes douleurs comme tu les raconterais à un professionnel.",
          7,
        ],
        [
          "Mes ressources et numéros utiles",
          "Sage-femme, médecin, maternité, PMI, 15, 112, et les personnes qui peuvent aider : tout au même endroit.",
          6,
        ],
      ],
      [
        [
          "Mes petites victoires à noter",
          "Chaque semaine, note une chose qui a bien tenu, un moment doux, un pas en avant. Relis ces pages les jours difficiles.",
          7,
        ],
        [
          "Mes intentions pour la semaine",
          "Une intention par semaine suffit : une marche, un appel, un repos, un massage de cicatrice. Coche-la quand elle est tenue.",
          6,
        ],
      ],
      [[
        "Mes questions pour les professionnels",
        "Rédigées la nuit, posées le jour : note tout ce qui te passe par la tête, de la rééducation à la contraception, en passant par le moral et le sommeil.",
        7,
      ]],
      [[
        "Ma check-list des signes d'alerte (à relire)",
        "Saignement très abondant, fièvre, douleur thoracique, mollet douloureux, mal de tête inhabituel, cicatrice infectée : les numéros sont à côté, et aucun appel n'est superflu.",
        8,
      ]],
    ],
    sources: [
      "ameli.fr : Après l'accouchement, le retour à la maison. Suivi à domicile par une sage-femme jusqu'au 12e jour de bébé, suites de couches, rééducation périnéale.",
      "HAS (Haute Autorité de Santé) : Consultation post-natale recommandée entre la 6e et la 8e semaine après l'accouchement, rééducation périnéale et abdominale après chaque naissance.",
      "ameli.fr : Baby blues et dépression du post-partum. Signes, fréquence (10 à 20 % des mères), quand consulter, prise en charge.",
      "Collège National des Gynécologues et Obstétriciens Français (CNGOF) : Recommandations sur les suites de couches, le retour de couches et la contraception en post-partum.",
      "Santé publique France : Sommeil du nourrisson et prévention de la mort inattendue du nourrisson (bébé sur le dos, dans son lit, en gigoteuse).",
      "1000-premiers-jours.fr : La période des 1000 premiers jours et les ressources officielles pour les parents.",
    ],
    lastText:
      "Ton corps vient d'accomplir l'un des plus grands voyages de ta vie. Il n'a pas à « revenir », il a à être accompagné : avec les bons repères, les bons professionnels, et beaucoup de douceur. Chaque semaine, tu en sauras un peu plus sur lui, et cette connaissance, c'est déjà ta force.",
    lastSub: "Maria, ancienne sage-femme et maman · ForceMaman",
  });
}
