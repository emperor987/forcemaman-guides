/**
 * Ebook 1 « Ma Liste Naissance Complète » : chapitres 9 à 15 + pages de fin.
 * Appelé depuis scripts/gen-ebook-liste-naissance.mjs.
 */
import { COLORS } from "./pdfbook.mjs";

export function part2(b) {
  const T = COLORS.terracotta;
  const TD = COLORS.terracottaDark;

  /* ===== CHAPITRE 9 ===== */
  b.chapterPage("ch9");
  b.label("Chapitre 9", T);
  b.heading("Ta valise de maternité", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("calendar", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "La valise de maternité se prépare vers 36 semaines, et pas après : bébé peut décider d'arriver plus tôt que prévu. Elle se prépare en 30 minutes, calmement, en suivant la liste. Une astuce : prépare le contenu « bébé » et le contenu « maman » dans deux sacs différents, pour retrouver facilement ce dont tu as besoin à la maternité.",
  );
  b.subhead("Pour toi, l'essentiel");
  b.bullet("Des vêtements confortables pour le séjour : pyjamas ou tenues de nuit qui s'ouvrent devant, pour l'allaitement si tu allaiteras", T);
  b.bullet("Des sous-vêtements confortables et des protections adaptées aux suites de couches", T);
  b.bullet("Une trousse de toilette : brosse, produits, serviettes, et un baume à lèvres", T);
  b.bullet("De quoi occuper les premières heures : téléphone, chargeur, livre, musique", T);
  b.bullet("Tes documents : pièce d'identité, carte vitale, mutuelle, dossier de suivi de grossesse", T);
  b.bullet("Des chaussons ou chaussettes chaudes, un gilet ou un pull", T);
  b.spacer(2);
  b.subhead("Pour bébé");
  b.bullet("3 bodies, 3 pyjamas, 2 paires de chaussettes ou chaussons", T);
  b.bullet("1 gigoteuse ou nid d'ange pour la sortie de la maternité", T);
  b.bullet("1 bonnet selon la saison, 1 manteau ou nid d'ange, 1 couverture légère", T);
  b.bullet("1 paquet de couches taille naissance ou 1, 1 paquet de lingettes ou du coton", T);
  b.bullet("1 serviette douce, 1 gant, et son siège auto déjà installé dans la voiture", T);
  b.spacer(2);
  b.subhead("Ce qu'on oublie souvent");
  b.para(
    "Le chargeur de téléphone (avec une batterie externe), de la monnaie ou une carte pour la cafétéria, des en-cas pour la maman, un carnet et un stylo pour noter les conseils des soignantes, des écouteurs, et une tenue de retour pour toi : pas la tenue de grossesse d'avant, quelque chose de confortable et un peu ample.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Le séjour à la maternité est court (2 à 4 jours en moyenne) : pas besoin d'une valise de vacances. Le plus important, c'est d'avoir tes documents, ton téléphone chargé, et de quoi être confortable.",
    "Pendant le séjour, pose toutes tes questions : l'allaitement, le change, le bain, le sommeil. Les soignantes sont là pour ça, et c'est le meilleur moment pour apprendre, avec bébé sous les yeux.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list valise");
  b.checkRow("Documents : identité, carte vitale, mutuelle, dossier de suivi");
  b.checkRow("Tenues confortables, sous-vêtements, protections, trousse de toilette");
  b.checkRow("Téléphone, chargeur, batterie externe, en-cas, carnet");
  b.checkRow("Layette bébé : bodies, pyjamas, gigoteuse, couverture, bonnet");
  b.checkRow("Siège auto installé et vérifié avant le départ");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Valise prête à 36 semaines : c'est la règle, parce que bébé ne lit pas le calendrier.",
    "Deux sacs, un pour toi, un pour bébé : tu retrouveras tout en un regard.",
    "À la maternité, tu es là pour apprendre et te reposer : utilise chaque rencontre avec l'équipe pour poser tes questions.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 10 ===== */
  b.chapterPage("ch10");
  b.label("Chapitre 10", T);
  b.heading("Tes questions pour la maternité", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("bubbles", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "La maternité est l'endroit idéal pour poser toutes tes questions : les équipes sont là pour ça, et c'est le moment où tu as bébé sous les yeux. Encore faut-il savoir quoi demander. Ce chapitre te donne des questions concrètes, prêtes à l'emploi, par thème.",
  );
  b.subhead("Sur l'accouchement et le séjour");
  b.bullet("Quels sont les documents à avoir avec moi le jour J, et les papiers à remplir ?", T);
  b.bullet("Comment se passe le séjour : chambre seule ou partagée, visites, horaires ?", T);
  b.bullet("Qui peut m'aider à allaiter ou à donner le biberon pendant le séjour ?", T);
  b.bullet("Que dois-je surveiller sur mes lochies et ma cicatrice avant de rentrer chez moi ?", T);
  b.bullet("Quand et comment se fait l'examen obligatoire de bébé au 8e jour ?", T);
  b.spacer(2);
  b.subhead("Sur bébé et le retour à la maison");
  b.bullet("Comment savoir si bébé mange assez : nombre de couches, prise de poids, signes ?", T);
  b.bullet("Quand appeler la maternité après le retour : y a-t-il une ligne dédiée ?", T);
  b.bullet("Comment se passe le suivi à domicile par la sage-femme, et comment l'organiser ?", T);
  b.bullet("Le carnet de santé : qui le remplit, quels examens obligatoires, quels vaccins ?", T);
  b.bullet("Le bain, le cordon, le sommeil : y a-t-il des consignes particulières de la maternité ?", T);
  b.spacer(2);
  b.subhead("Sur toi");
  b.bullet("Quels signes d'alerte doivent m'amener à appeler (saignements, fièvre, douleurs) ?", T);
  b.bullet("Quand prendre rendez-vous pour la consultation post-natale (6e à 8e semaine) ?", T);
  b.bullet("La rééducation périnéale : comment ça se passe, et avec qui ?", T);
  b.bullet("Mon moral : à qui parler si je me sens débordée ou triste après la naissance ?", T);
  b.bullet("La contraception : quelles options sont compatibles avec l'allaitement ?", T);
  b.subhead("Et les questions qu'on n'ose pas poser ?");
  b.para(
    "Les questions « gênantes » existent : les selles de bébé, les pertes, l'odeur du cordon, la vie intime, le moral. Elles sont toutes légitimes, et les professionnels les entendent tous les jours, depuis toujours. Si une question te fait rougir, pose-la quand même : la réponse te fera du bien, et le silence te coûtera plus cher qu'un moment de gêne.",
  );
  b.bullet("Écris la question même si elle te semble « bête » : à la maternité, personne ne la trouvera telle", T);
  b.bullet("Si tu préfères, pose-la par téléphone après le retour à la maison : tu n'es pas obligée de la dire en face", T);
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Écris tes questions à l'avance, dans le cahier unique du chapitre 1 : à la maternité, la fatigue et l'émotion font tout oublier, et une liste écrite te sauvera.",
    "Il n'y a pas de questions bêtes. Les équipes préfèrent répondre cent fois à la même question plutôt que de te voir repartir avec un doute.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Les questions pour la PMI et les professionnels du secteur");
  b.para(
    "La PMI (Protection Maternelle et Infantile) propose des consultations gratuites, des pesées, et un suivi sans rendez-vous médical préalable. Elle répond aussi aux questions des jeunes parents : allaitement, sommeil, alimentation, développement de bébé, et soutien si le moral vacille. Note son numéro dès la maternité, et n'hésite pas à y faire appel : c'est un service public fait pour toi, sans jugement et sans facture.",
  );
  b.bullet("Demander le numéro et les horaires de la PMI de ton secteur avant de quitter la maternité", T);
  b.bullet("Demander aussi les coordonnées des associations de parents et des ateliers (portage, allaitement, groupes de mamans)", T);
  b.spacer(4);
  b.subhead("Ta check-list questions");
  b.checkRow("Préparer ma liste de questions avant la naissance (accouchement, bébé, moi)");
  b.checkRow("Demander les numéros utiles de la maternité (ligne 24h/24 si elle existe)");
  b.checkRow("Noter les réponses dans le carnet de suivi, sans m'inquiéter de tout retenir");
  b.checkRow("Planifier la consultation post-natale et la visite à domicile de la sage-femme");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Les questions s'écrivent avant, se posent pendant, et les réponses se notent après.",
    "Aucune question n'est superflue : c'est ta santé et celle de ton bébé.",
    "La maternité n'est pas un lieu de passage anonyme : c'est ton équipe, et elle reste disponible après le retour à la maison.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 11 ===== */
  b.chapterPage("ch11");
  b.label("Chapitre 11", T);
  b.heading("Les documents et l'administratif", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("list", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "L'administratif n'est pas la partie la plus glamour de la préparation, mais il est rassurant de s'en occuper avant la naissance : une fois bébé là, les journées sont déjà bien remplies. Voici les démarches essentielles, dans l'ordre, avec des repères simples.",
  );
  b.subhead("La déclaration de naissance");
  b.para(
    "La déclaration de naissance se fait dans les 5 jours suivant la naissance, en général directement à la maternité, qui transmet l'acte à l'état civil. C'est elle qui ouvre le droit à la plupart des démarches suivantes. Pense à te renseigner à la maternité sur leur organisation : certaines proposent de tout faire sur place, d'autres donnent la liste des pièces à préparer.",
  );
  b.subhead("Les congés : maternité, paternité, parental");
  b.para(
    "Le congé maternité dure 16 semaines en France pour une naissance (6 avant la date prévue, 10 après), le congé paternité et d'accueil de l'enfant dure 25 jours calendaires (32 en cas de naissance multiple), et le congé parental d'éducation permet de suspendre ou réduire ton activité jusqu'aux 3 ans de l'enfant, sous conditions. Ces droits se déclarent auprès de ton employeur et de la CAF : fais tes simulations avant la naissance pour savoir ce qui te convient, sans décider trop tôt.",
  );
  b.subhead("La CAF et les aides");
  b.para(
    "La naissance ouvre droit à des aides : la prime à la naissance (versée au 7e mois de grossesse sous conditions de ressources, ou après la naissance selon les cas), la Paje (allocation de base mensuelle), et le complément de libre choix du mode de garde. La démarche se fait en ligne sur caf.fr : ouvre ton dossier dès la grossesse, déclare la grossesse le plus tôt possible, et la naissance dans les jours qui suivent.",
  );
  b.subhead("La carte vitale, la mutuelle et le médecin");
  b.para(
    "Après la déclaration de naissance, bébé est rattaché à la sécurité sociale d'un des parents : la carte vitale de bébé arrive par courrier (tu peux aussi obtenir une attestation provisoire). Pense aussi à le rattacher à la mutuelle familiale, à choisir un médecin traitant (souvent le pédiatre, la sage-femme ou le généraliste de famille), et à ouvrir son dossier dans le carnet de santé, remis à la maternité.",
  );
  b.subhead("Le carnet de santé et la PMI");
  b.para(
    "Le carnet de santé est remis à la maternité : c'est le document central du suivi de bébé (courbes, vaccins, examens obligatoires). Les examens obligatoires du nouveau-né (notamment au 8e jour) sont réalisés par un médecin ou une sage-femme, souvent à la maternité ou à la PMI. La PMI (Protection Maternelle et Infantile) propose des consultations, des pesées, et des conseils gratuits : c'est une ressource précieuse, à connaître dès la naissance.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Crée une pochette « naissance » : pièce d'identité, carte vitale, mutuelle, déclaration de naissance, carnet de santé. Tout est au même endroit, et tu n'y penses plus.",
    "Les démarches administratives se font en ligne et par téléphone : tu peux les répartir dans la semaine, 15 minutes par jour, sans tout faire d'un coup.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list administrative");
  b.checkRow("Ouvrir le dossier CAF et déclarer la grossesse (avant ou pendant)");
  b.checkRow("Déclarer la naissance à la maternité dans les 5 jours");
  b.checkRow("Rattacher bébé à la sécurité sociale et à la mutuelle");
  b.checkRow("Choisir le médecin traitant de bébé et ouvrir le carnet de santé");
  b.checkRow("Rassembler tous les documents dans une pochette unique");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La déclaration de naissance ouvre toutes les autres démarches : elle se fait à la maternité, dans les 5 jours.",
    "Congés et aides se simulent et se déclarent en ligne, calmement, avant la naissance.",
    "La PMI est gratuite et faite pour ça : n'hésite jamais à y faire appel.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 12 ===== */
  b.chapterPage("ch12");
  b.label("Chapitre 12", T);
  b.heading("La check-list semaine par semaine", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("scale", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Voici le cœur du guide : la check-list organisée par semaine, de 32 à 40 semaines de grossesse. Avance à ton rythme, coche ce qui est fait, et ne t'inquiète pas si tu prends du retard : l'essentiel est de ne pas laisser la préparation te déborder. Chaque semaine a une mission simple.",
  );
  b.subhead("Semaine 32 : les fondations");
  b.checkRow("Relire le guide une première fois, sans t'arrêter sur les détails");
  b.checkRow("Choisir le coin couchage de bébé et commander le lit");
  b.checkRow("Commencer une liste des questions à poser à ta sage-femme");
  b.spacer(2);
  b.subhead("Semaine 33 : la layette");
  b.checkRow("Commander ou récupérer la layette : bodies, pyjamas, gigoteuses");
  b.checkRow("Laver les vêtements neufs avec une lessive douce");
  b.checkRow("Trier en 3 bacs : Actuel, Taille suivante, À laver");
  b.spacer(2);
  b.subhead("Semaine 34 : le coin change et la pharmacie");
  b.checkRow("Installer le matelas à langer et le panier nomade de l'essentiel");
  b.checkRow("Constituer la petite pharmacie et afficher les numéros utiles");
  b.spacer(2);
  b.subhead("Semaine 35 : la valise de maternité");
  b.checkRow("Préparer le sac maman et le sac bébé, et les poser près de la porte");
  b.checkRow("Vérifier le siège auto : installé, dos à la route, homologué");
  b.spacer(2);
  b.subhead("Semaine 36 : le transport et les sorties");
  b.checkRow("Tester la poussette et le pliage, installer le cosy sur la base");
  b.checkRow("Préparer le sac de sortie toujours prêt : change, body, gigoteuse");
  b.spacer(2);
  b.subhead("Semaine 37 : la maison");
  b.checkRow("Prévoir un stock de repas congelés et de courses de base");
  b.checkRow("Organiser l'aide : qui peut t'aider les premières semaines, et pour quoi ?");
  b.spacer(2);
  b.subhead("Semaine 38 : l'équipe et les documents");
  b.checkRow("Prévenir la sage-femme et le médecin, planifier les visites à domicile");
  b.checkRow("Rassembler les documents : identité, carte vitale, mutuelle, carnet de santé");
  b.spacer(2);
  b.subhead("Semaine 39 : le calme");
  b.checkRow("Finir la liste sans stress : l'essentiel est fait");
  b.checkRow("Prévoir des activités douces pour patienter : promenades, repos, lectures");
  b.spacer(2);
  b.subhead("Semaine 40 : et maintenant, on respire");
  b.checkRow("Relire la check-list une dernière fois, sans t'inquiéter de ce qui manque");
  b.checkRow("Rappeler à ton/ta partenaire où sont la valise et les numéros utiles");
  b.checkRow("Te reposer. Vraiment. La naissance est un marathon, pas un sprint.");
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Si tu accouches avant la fin de la check-list, aucun problème : le jour J, il ne te faudra que la valise, tes documents, et la personne qui t'accompagne. Tout le reste attendra à la maison.",
    "Les semaines 39 et 40 sont faites pour ralentir : ton corps se prépare, et toi tu as le droit de ne rien faire d'autre qu'attendre.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 13 ===== */
  b.chapterPage("ch13");
  b.label("Chapitre 13", T);
  b.heading("Utile mais pas indispensable", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("hand", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Cette liste est celle qu'on ne montre pas assez : tout ce qui est joli, pratique sur le papier, mais dont tu peux très bien te passer, ou que tu peux acheter après la naissance si le besoin se fait vraiment sentir. La garder en tête, c'est protéger ton budget et ta tranquillité.",
  );
  b.subhead("À acheter seulement si le besoin se confirme");
  b.checkRow("Le chauffe-biberon : un bol d'eau chaude fait le travail les premiers mois");
  b.checkRow("Le stérilisateur électrique : une casserole d'eau bouillante suffit au début");
  b.checkRow("Le babyphone avec caméra : un simple babyphone audio ou même une porte ouverte suffisent les premiers mois");
  b.checkRow("La balance de bain : le pédiatre ou la sage-femme pèsent bébé aux visites");
  b.checkRow("Le transat à vibrations : bébé sera aussi content sur un tapis d'éveil simple");
  b.checkRow("La table à langer avec baignoire intégrée : un matelas à langer suffit");
  b.spacer(2);
  b.subhead("À emprunter, acheter d'occasion ou refuser poliment");
  b.para(
    "Les cadeaux des proches sont formidables, mais ils arrivent souvent en double, en trop grande quantité, ou hors saison. Quelques astuces : dire aux proches ce qui te ferait vraiment plaisir (des repas congelés, des heures de ménage, un bon d'achat), garder les tickets pour échanger les vêtements, et accepter les cartons de layette d'occasion avec joie : laver et c'est parfait.",
  );
  b.subhead("Les achats à faire après la naissance");
  b.para(
    "Le matériel de diversification (chaise haute, petits pots, ustensiles) attendra 4 à 6 mois. La poussette « évolutive » peut attendre aussi : une bonne poussette de naissance te mènera au moins jusqu'au premier anniversaire. Et le lit « évolutif » grande taille : bébé sera très bien dans un petit lit jusqu'à 2 ans environ.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Chaque famille a son budget et ses priorités. La question qui protège : « Est-ce que j'en aurai besoin dans les 3 premiers mois ? » Si la réponse est non, ça peut attendre, sans culpabilité.",
    "Les magasins de puériculture sont ouverts après la naissance, et la livraison existe : tu n'es jamais à un achat près.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list anti-surconsommation");
  b.checkRow("Lister ce qui est vraiment essentiel (les 4 piliers du chapitre 2)");
  b.checkRow("Attendre la naissance pour les achats « si besoin »");
  b.checkRow("Accepter la seconde main pour la layette et les gros équipements");
  b.checkRow("Dire aux proches ce qui ferait vraiment plaisir");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Le matériel ne fait pas la parentalité : un lit sûr, de quoi nourrir, changer, porter et aimer, c'est déjà tout.",
    "Chaque achat reporté est un budget préservé pour les vraies dépenses (couches, lait, produits de soin).",
    "Tu as le droit de refuser des cadeaux, de les échanger, et de dire non poliment : c'est ta maison, ton budget, ton bébé.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 14 ===== */
  b.chapterPage("ch14");
  b.label("Chapitre 14", T);
  b.heading("Préparer la maison et ton équipe", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("sun", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "La maison se prépare, et surtout l'équipe autour de toi. Parce qu'une maison organisée, c'est moins de décisions à prendre les premiers jours, et une équipe prête, c'est moins de solitude. Voici comment préparer les deux.",
  );
  b.subhead("La maison, sans tout rénover");
  b.bullet("Stock de courses de base : conserves, pâtes, riz, produits d'entretien, couches, produits de bain pour 2 semaines", T);
  b.bullet("3 à 4 repas congelés préparés d'avance, et des en-cas faciles à attraper d'une main", T);
  b.bullet("Une zone « change » et une zone « sommeil » prêtes, un coin pour l'allaitement avec une bouteille d'eau et un coussin", T);
  b.bullet("Les lessives à jour, les draps changés, et le reste : ça peut attendre", T);
  b.spacer(2);
  b.subhead("L'équipe des premières semaines");
  b.para(
    "Dès la grossesse, identifie qui peut t'aider et comment : ton/ta partenaire, tes parents, tes amis, tes voisins. Le plus efficace est de préparer des missions précises : faire les courses, cuisiner un repas, tenir bébé une heure, promener le chien, trier le linge. Une aide concrète vaut mieux qu'une aide floue, et les proches sont souvent ravis qu'on leur donne une mission simple.",
  );
  b.subhead("Les professionnels qui t'entourent");
  b.para(
    "Après la naissance, tu n'es pas seule : la sage-femme propose un suivi à domicile jusqu'au 12e jour de bébé (visites prises en charge par l'Assurance Maladie), la consultation post-natale est recommandée entre la 6e et la 8e semaine après l'accouchement, et le médecin traitant suit bébé avec le carnet de santé. Note leurs numéros, planifie les visites avant la naissance si possible, et n'hésite pas à appeler dès que tu as une question.",
  );
  b.subhead("La déclaration de naissance et les papiers");
  b.para(
    "La déclaration de naissance se fait en général à la maternité, dans les 5 jours. Ensuite, quelques rendez-vous administratifs s'enchaînent : rattachement à la mutuelle, ouverture des droits, médecin traitant de bébé, et rendez-vous de vaccination selon le calendrier vaccinal (le carnet de santé et ton médecin ou ta PMI te guideront). Prépare une pochette pour garder tous les documents au même endroit.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Prépare ta « lettre de mission » d'aide : une liste de ce dont tu auras besoin (repas, courses, ménage, câlins à bébé) que tu pourras montrer à tes proches. Ils sauront quoi proposer, et toi tu n'auras pas à demander au moment où tu seras épuisée.",
    "Les proches veulent aider, mais ils ne savent pas toujours comment. Leur donner une mission précise, c'est leur rendre service à eux aussi.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list maison et équipe");
  b.checkRow("Stock de courses et repas congelés pour les 2 premières semaines");
  b.checkRow("Liste des missions d'aide à proposer aux proches");
  b.checkRow("Numéros des professionnels affichés : sage-femme, médecin, maternité, PMI");
  b.checkRow("Pochette de documents : carnet de santé, identité, mutuelle, déclaration de naissance");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Une maison « suffisante » vaut mieux qu'une maison parfaite : les premières semaines, l'objectif est de vivre simplement.",
    "Le suivi à domicile de la sage-femme jusqu'au 12e jour : c'est pris en charge, c'est rassurant, et c'est fait pour toi.",
    "Une aide précise vaut mieux qu'une aide floue : prépare tes missions à l'avance.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 15 ===== */
  b.chapterPage("ch15");
  b.label("Chapitre 15", T);
  b.heading("Le retour à la maison : les 48 premières heures", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("bag", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Le retour à la maison est un moment unique : on quitte la maternité avec son bébé, et tout commence. Ces 48 premières heures à la maison peuvent sembler intimidantes, mais elles sont faites pour être simples : bébé n'a besoin que de toi, d'un endroit sûr, de nourriture et de sommeil. Voici comment les vivre sereinement.",
  );
  b.subhead("Le trajet du retour");
  b.para(
    "Le siège auto est installé dos à la route, bébé y est installé sans manteau (le harnais doit être au plus près du corps, on le couvre après avec une couverture). Si le trajet est long, prévois une pause toutes les 1h30 : la position assise prolongée est déconseillée pour les nouveau-nés. Et surtout : garde les vitres ouvertes un peu, un adulte avec bébé à l'arrière, et roule doucement.",
  );
  b.subhead("À la maison : poser bébé, souffler");
  b.para(
    "En rentrant, pose bébé dans son lit (sur le dos, en gigoteuse), même s'il est éveillé, et prends un moment pour toi : boire, manger, te laver. Ce n'est pas de la négligence, c'est de l'organisation : un parent qui s'installe calmement installe bébé calmement. Les premières heures, bébé dort beaucoup : c'est le moment idéal pour les premières installations (coin change, coin tétée, pochette de documents).",
  );
  b.subhead("Le premier bain ou la première toilette");
  b.para(
    "Tant que le cordon n'est pas tombé, on fait une toilette au gant : eau claire, gant doux, séchage en tamponnant, et on laisse le cordon tranquille (propre et sec). Le premier bain viendra après, quand tu te sentiras prête, avec de l'eau à 37 degrés testée au coude. Si tu hésites, la sage-femme de la maternité ou celle qui vient à domicile peut te montrer : c'est aussi pour cela qu'elles existent.",
  );
  b.subhead("Les pleurs du soir, ce grand classique");
  b.para(
    "Beaucoup de bébés traversent une période de pleurs en fin de journée, souvent entre 18h et 22h, dès les premières semaines : c'est fréquent, généralement transitoire, et cela ne signifie pas que tu fais quelque chose de travers. Porter bébé, le bercer, lui parler doucement, vérifier qu'il n'a ni faim, ni couche pleine, ni fièvre : tu fais le tour de ce qu'il faut faire. Et rappelle-toi : si les pleurs te débordent, pose bébé dans son lit quelques minutes, respire, et reviens : c'est la bonne réaction, pas l'abandon.",
  );
  b.subhead("La visite de la sage-femme à domicile");
  b.para(
    "Après le retour à la maison, une sage-femme peut venir te rendre visite à domicile, dans le cadre du suivi pris en charge jusqu'au 12e jour de bébé. C'est LE moment pour poser toutes tes questions : tétées, sommeil, cordon, bain, ton moral, tes douleurs. Prépare ta liste à l'avance, et n'hésite pas à noter les questions qui arrivent la nuit pour ne pas les oublier le jour de la visite.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Les 48 premières heures à la maison sont souvent plus calmes qu'on ne l'imagine : bébé dort beaucoup, la fatigue accumulée se fait sentir, et c'est le moment de se reposer, pas de ranger la maison.",
    "En cas de doute, la maternité répond 24h/24 : appeler est toujours la bonne décision, pour une tétée qui semble difficile comme pour une inquiétude sur le sommeil.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list du retour");
  b.checkRow("Siège auto installé dos à la route, bébé sans manteau sous le harnais");
  b.checkRow("Pause toutes les 1h30 sur les longs trajets");
  b.checkRow("Bébé posé dans son lit, sur le dos, en gigoteuse, dès l'arrivée");
  b.checkRow("Numéros utiles affichés : sage-femme, maternité, médecin, 15");
  b.checkRow("Liste de questions prête pour la visite de la sage-femme à domicile");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Le retour à la maison se vit au ralenti : installer, souffler, et recommencer.",
    "Les pleurs du soir sont fréquents et transitoires : porter, bercer, et te faire relayer si besoin.",
    "La visite à domicile de la sage-femme est ton rendez-vous d'or : prépare tes questions.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== PAGES DE FIN ===== */
  b.finalPages({
    suiviTitle: "Mon suivi personnel",
    suiviNote:
      "Ces pages sont à toi : notes, questions, listes de courses, idées. Remplis-les au fil de l'eau, quand ça te traverse l'esprit. Un carnet n'est pas un examen, c'est un outil de liberté.",
    suivi: [
      [["Mes questions pour la sage-femme", "Note tout ce qui te passe par la tête : sommeil, tétées, douleurs, inquiétudes. Tu arriveras aux visites avec tout en tête, sans stress.", 7]],
      [
        ["Ma liste de courses bébé (avec budget)", "Une colonne pour l'essentiel, une pour les envies, une pour les cadeaux. Coche au fur et à mesure.", 8],
        ["Les personnes qui m'aident, et leurs missions", "Qui, pour quoi, quand. Une aide concrète vaut mieux qu'une aide floue.", 5],
      ],
      [
        ["Mes repas de secours", "3 repas simples dont les ingrédients sont toujours en stock : note-les ici, ils te sauveront des soirées difficiles.", 6],
        ["Mes petites victoires à noter", "Chaque semaine, note une chose qui a bien tenu, un moment doux, un pas en avant. Relis ces pages les jours difficiles.", 6],
      ],
      [
        ["Mes questions du soir", "Les questions qui arrivent la nuit, on les note ici, et on les pose le lendemain à la sage-femme, au médecin ou à la maternité. Ta tête peut lâcher prise.", 7],
        ["Mon budget bébé", "Une colonne pour l'essentiel, une pour les envies, une pour les cadeaux : note les prix au fur et à mesure, et reste à l'écoute de ton budget.", 6],
      ],
      [
        ["Mes intentions pour la semaine", "Une intention par semaine suffit : une sortie, un appel à une amie, un repas préparé d'avance, un moment rien que pour moi. Note-la ici, et coche-la quand elle est tenue.", 7],
        ["Ma check-list des 4 essentiels (à revoir chaque semaine)", "Un lit sûr et prêt, de quoi nourrir bébé, de quoi le changer, de quoi l'habiller : cette base couvre 90 % des besoins, semaine après semaine.", 6],
      ],
    ],
    sources: [
      "ameli.fr : Après l'accouchement, le retour à la maison. Suivi à domicile par une sage-femme jusqu'au 12e jour de bébé, consultations prises en charge.",
      "HAS (Haute Autorité de Santé) : Grossesse, accouchement et suivi postnatal. Consultation post-natale recommandée entre la 6e et la 8e semaine après l'accouchement.",
      "Santé publique France : Sommeil du nourrisson. Bébé couché sur le dos, dans son lit, dans une gigoteuse, pour prévenir la mort inattendue du nourrisson.",
      "OMS : Recommandations sur l'allaitement maternel exclusif jusqu'à 6 mois, et la poursuite avec diversification jusqu'à 2 ans ou plus.",
      "ameli.fr : Sécurité en voiture, siège auto dos à la route jusqu'à 13 kg, installation du siège, précautions lors des trajets.",
      "1000-premiers-jours.fr : La période des 1000 premiers jours et les ressources officielles pour les parents.",
    ],
    lastText:
      "Ta liste est prête, ta valise aussi. Maintenant, le plus important : prends soin de toi, repose-toi, et fais confiance à ton corps et à l'équipe qui t'accompagnera. Tu es prête, plus que tu ne le crois.",
    lastSub: "Maria, ancienne sage-femme et maman · ForceMaman",
  });
}
