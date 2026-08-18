/**
 * Ebook 1 « Ma Liste Naissance Complète » : chapitres 1 à 8.
 * Appelé depuis scripts/gen-ebook-liste-naissance.mjs.
 */
import { COLORS } from "./pdfbook.mjs";

export function part1(b) {
  const T = COLORS.terracotta;
  const TD = COLORS.terracottaDark;

  /* ===== CHAPITRE 1 ===== */
  b.chapterPage("ch1");
  b.label("Chapitre 1", T);
  b.heading("Avant de commencer : la méthode", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("list", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Une liste de naissance, ce n'est pas une course. C'est un outil qui doit te faire gagner du temps et de la sérénité, pas devenir une source de stress supplémentaire. Voici les trois règles qui guident tout ce guide.",
  );
  b.subhead("Règle 1 : commence tôt, avance doucement");
  b.para(
    "Il n'est jamais trop tôt pour noter une idée, et jamais trop tard pour commencer. Autour du 5e mois de grossesse, la liste devient concrète : c'est le bon moment pour la première lecture. Ensuite, tu avances à ton rythme, une catégorie à la fois, sans tout faire d'un coup.",
  );
  b.subhead("Règle 2 : implique la personne qui t'accompagne");
  b.para(
    "La préparation de l'arrivée de bébé est une affaire d'équipe. Ton/ta partenaire connaît aussi la maison, les placards, le budget. Partage la liste, répartissez-vous les catégories, et posez ensemble les questions importantes : où dort bébé, qui fait les courses, quel budget pour la poussette.",
  );
  b.subhead("Règle 3 : garde la liste à portée de main");
  b.para(
    "Une liste que tu ne regardes pas ne sert à rien. Imprime-la, colle-la sur le frigo, ou garde-la dans ton téléphone. Chaque fois qu'une idée te traverse l'esprit, tu l'ajoutes immédiatement. C'est ton cerveau externe pendant les prochaines semaines.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "N'achète rien dans la précipitation. Une liste bien faite se construit en plusieurs semaines, et les meilleurs achats se font souvent sur la durée, au fil des occasions.",
    "Le jour J, tu n'auras besoin que d'une petite partie de la liste. Le reste attendra sereinement à la maison, c'est très bien comme ça.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Les 4 questions à te poser avant chaque achat");
  b.checkRow("Est-ce vraiment utile les trois premiers mois, ou juste joli ?");
  b.checkRow("Est-ce que ça s'achète facilement après la naissance, si besoin ?");
  b.checkRow("Est-ce que je peux l'emprunter, l'acheter d'occasion ou le recevoir en cadeau ?");
  b.checkRow("Est-ce que ça va me simplifier la vie, ou m'encombrer ?");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Une liste de naissance réussie est une liste qui se termine par : « et après, je respire. »",
    "Le plus important n'est pas d'avoir tout, c'est d'avoir l'essentiel et de connaître tes repères.",
    "Chaque famille est différente : ce guide te donne des repères, pas des injonctions.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 2 ===== */
  b.chapterPage("ch2");
  b.label("Chapitre 2", T);
  b.heading("Les essentiels des premiers jours", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("crib", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Le retour à la maison est une période intense : bébé découvre son environnement, et toi tu découvres ton nouveau rôle. Les premiers jours, il te faut très peu de choses, mais elles doivent être prêtes. Voici les quatre piliers à installer avant la naissance.",
  );
  b.subhead("1. Un endroit pour dormir");
  b.para(
    "Bébé dort dans son lit, dans la chambre de ses parents au moins les 6 premiers mois : c'est la recommandation officielle pour réduire le risque de mort inattendue du nourrisson. Un berceau, un lit à barreaux ou un cododo, avec un matelas ferme, aux dimensions exactes du lit, recouvert d'une housse tendue. Aucun coussin, aucune couverture, aucun tour de lit, aucune peluche dans le lit.",
  );
  b.subhead("2. De quoi se nourrir");
  b.para(
    "Que tu choisisses l'allaitement maternel, le biberon, ou les deux, il te faut un minimum : un tire-lait si tu allaites (souvent prêté par la maternité ou remboursé sur prescription), ou des biberons et stérilisateur si tu donnes le biberon. Les premiers jours, la quantité est minuscule : le colostrum suffit à nourrir bébé, et la montée de lait arrive autour du 3e jour.",
  );
  b.subhead("3. De quoi changer bébé");
  b.para(
    "Un matelas à langer, une vingtaine de couches pour commencer, du coton ou des lingettes, de l'eau claire ou un liniment, et un change de rechange à chaque étage. Simple, pratique, pas besoin de plus.",
  );
  b.subhead("4. De quoi habiller bébé");
  b.para(
    "Les premiers jours, bébé vit en body et en pyjama. Prépare 5 à 6 bodies, 5 à 6 pyjamas, 2 ou 3 paires de chaussettes ou chaussons, et 2 ou 3 gigoteuses adaptées à la saison. Les jolis vêtements attendront les visites et les photos.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Installe une petite station de change à chaque endroit où tu passes du temps : chambre et salon suffisent. Un panier avec l'essentiel qui suit la maman de pièce en pièce, c'est le système qui change tout les premiers jours.",
    "Prépare aussi un sac de sortie avec un change complet, une gigoteuse, un body de rechange et un doudou : il sera prêt à partir en moins de 5 minutes.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("La check-list des 4 essentiels");
  b.checkRow("Un lit sûr : matelas ferme aux bonnes dimensions, housse tendue, lit vide");
  b.checkRow("Un tire-lait (allaitement) ou biberons + stérilisateur (biberon)");
  b.checkRow("Matelas à langer, couches, coton, liniment ou eau claire");
  b.checkRow("6 bodies, 6 pyjamas, 3 gigoteuses, chaussettes et chaussons");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Les premiers jours, bébé a besoin de toi, de chaleur, de nourriture et de sommeil sécurisé. Tout le reste peut attendre.",
    "En cas de doute sur le sommeil, la tétée ou le change, appelle ta sage-femme ou la maternité : personne ne te jugera, c'est leur métier de répondre.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 3 ===== */
  b.chapterPage("ch3");
  b.label("Chapitre 3", T);
  b.heading("Le coin couchage", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("moon", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Le sommeil de bébé est la préoccupation numéro un des jeunes parents, et c'est légitime : tout le monde dort mieux quand bébé dort bien. Le coin couchage est la première chose à préparer, parce que les règles de sécurité y sont strictes et claires.",
  );
  b.subhead("Où bébé dort-il ?");
  b.para(
    "Les recommandations officielles (Santé publique France) sont simples : bébé dort sur le dos, dans un lit séparé, installé dans la chambre de ses parents au moins jusqu'à ses 6 mois. Le lit peut être un berceau, un lit à barreaux, ou un cododo fixé au lit des parents, à condition que le matelas soit ferme et aux dimensions exactes du couchage.",
  );
  b.subhead("Le lit parfait en 5 points");
  b.checkRow("Matelas ferme, aux dimensions exactes du lit, sans espace entre matelas et bord");
  b.checkRow("Housse de matelas tendue et propre, rien d'autre dans le lit");
  b.checkRow("Pas de couverture, pas d'édredon, pas de tour de lit, pas de peluche");
  b.checkRow("Bébé couché sur le dos, dans une gigoteuse adaptée à sa taille et à la saison");
  b.checkRow("Température de la chambre autour de 18 à 19 degrés, bébé ni trop couvert ni trop découvert");
  b.spacer(4);
  b.subhead("La gigoteuse, l'alliée des parents");
  b.para(
    "La gigoteuse remplace la couverture : bébé y est emmitouflé sans risque de se couvrir le visage. Choisis la bonne taille (pas trop grande, pour éviter qu'il glisse dedans), la bonne épaisseur selon la saison, et une fermeture adaptée. Deux ou trois gigoteuses suffisent, pour faire la rotation pendant les lessives.",
  );
  b.subhead("Et si bébé s'endort ailleurs ?");
  b.para(
    "Il arrivera que bébé s'endorme dans tes bras, dans l'écharpe, ou dans le cosy après une promenade. C'est normal et c'est doux. Dès que tu le poses pour la nuit ou une sieste, il rejoint son lit, sur le dos. Bébé ne dort jamais sur le canapé, dans un fauteuil, ni avec un adulte dans un lit adulte : ce sont les situations les plus à risque.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Le « 5e trimestre » est une période où le sommeil de bébé est très morcelé : des siestes courtes, des réveils fréquents. Ce n'est pas un problème, c'est physiologique. Ton rôle n'est pas de « faire dormir bébé », mais de lui offrir un cadre sûr et des repères doux.",
    "Si le sommeil de bébé t'inquiète (pleurs inhabituels, difficultés à le réveiller, respiration bizarre), n'hésite jamais : appelle un professionnel.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list coin couchage");
  b.checkRow("Lit (berceau, cododo ou lit à barreaux) + matelas ferme aux bonnes dimensions");
  b.checkRow("2 à 3 gigoteuses adaptées à la saison et à la taille");
  b.checkRow("2 à 3 housses de matelas + alèses");
  b.checkRow("Thermomètre de chambre (ou une pièce aérée à 18-19 degrés)");
  b.checkRow("Une veilleuse douce pour les réveils nocturnes");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La règle d'or : bébé dort sur le dos, dans son lit, dans une gigoteuse, dans une pièce à 18-19 degrés.",
    "La chambre des parents au moins 6 mois : c'est la recommandation, et c'est aussi très pratique pour les tétées de nuit.",
    "Les tours de lit et peluches sont à éviter : ils sont jolis, mais ils présentent un risque inutile.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 4 ===== */
  b.chapterPage("ch4");
  b.label("Chapitre 4", T);
  b.heading("Tétées et alimentation", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("bottle", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Nourrir bébé est l'une des grandes préoccupations de la préparation. Allaitement maternel, biberon, ou les deux : chaque choix est légitime, et chaque choix mérite d'être préparé sans pression. L'important, c'est que bébé mange bien et que toi, tu te sentes bien.",
  );
  b.subhead("Allaitement maternel : ce qu'il faut savoir");
  b.para(
    "L'OMS recommande un allaitement maternel exclusif pendant les 6 premiers mois de vie, puis une poursuite avec diversification jusqu'à 2 ans ou plus. Les bénéfices pour bébé et pour la maman sont bien documentés. Mais l'allaitement s'apprend, comme tout : il faut du temps, du soutien, et souvent l'aide d'une sage-femme ou d'une consultante en lactation dans les premiers jours.",
  );
  b.para(
    "Concrètement, prévois : des coussinets d'allaitement, une crème ou un baume pour les mamelons, un tire-lait (souvent disponible en location sur prescription), et quelques biberons au cas où. Sache que la montée de lait arrive vers le 3e jour, que les tétées sont fréquentes les premières semaines (8 à 12 par 24h, c'est normal), et qu'une tétée qui dure peut être un moment de calme partagé, pas une corvée.",
  );
  b.subhead("Le biberon : ce qu'il faut savoir");
  b.para(
    "Si tu choisis le biberon, prévois 4 à 6 biberons, un stérilisateur (ou une casserole pour faire bouillir), une brosse à biberon, et le lait infantile adapté, en poudre de préférence, en respectant strictement les dosages indiqués sur la boîte. Le lait infantile est le seul lait adapté à bébé : ni lait de vache, ni lait végétal avant 1 an, sans avis médical.",
  );
  b.subhead("Les accessoires vraiment utiles");
  b.bullet("Un coussin d'allaitement ou de positionnement, confortable pour les longues tétées", T);
  b.bullet("Des coussinets d'allaitement jetables ou lavables, et un baume pour mamelons", T);
  b.bullet("Des biberons, une tétine à débit lent, un stérilisateur, une brosse", T);
  b.bullet("Un chauffe-biberon (optionnel, un bol d'eau chaude fait le travail)", T);
  b.bullet("Des bavoirs en coton et des linges pour roter bébé", T);
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Les premiers jours, la question n'est pas « combien de temps allaiter » mais « comment bien démarrer ». Fais-toi accompagner à la maternité, pose toutes tes questions, et demande une consultation à domicile avec ta sage-femme après le retour à la maison : c'est le moment où les difficultés apparaissent, et où l'aide fait toute la différence.",
    "Un bébé qui mouille régulièrement ses couches et reprend du poids est un bébé bien nourri, quelle que soit la méthode.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list alimentation");
  b.checkRow("Coussin d'allaitement / de positionnement");
  b.checkRow("Coussinets d'allaitement + baume pour mamelons (allaitement)");
  b.checkRow("Tire-lait (location sur prescription ou achat)");
  b.checkRow("4 à 6 biberons + tétines à débit lent + stérilisateur + brosse (biberon)");
  b.checkRow("Bavoirs en coton et linges à roter");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Il n'y a pas de bonne ou de mauvaise façon de nourrir bébé : il y a la façon qui te convient, à toi et à lui.",
    "En cas de douleur, de difficulté de prise du sein ou de doute sur les quantités, demande de l'aide vite : plus tôt on accompagne, plus simple c'est.",
    "Les 8 à 12 tétées des premières semaines sont normales. La fréquence ne veut pas dire que bébé a faim en permanence : il tète aussi pour le contact, le réconfort, la chaleur.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 5 ===== */
  b.chapterPage("ch5");
  b.label("Chapitre 5", T);
  b.heading("Couches et hygiène", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("droplets", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Le change est le geste le plus répété avec un nouveau-né : environ 6 à 8 couches par jour, parfois plus. Autant le rendre simple, rapide et agréable. Voici comment équiper ton coin change sans te compliquer la vie.",
  );
  b.subhead("Le coin change idéal");
  b.para(
    "Un matelas à langer (avec protection imperméable), placé à hauteur confortable, avec tout à portée de main : couches, coton, eau claire ou liniment, change de rechange, et un petit jouet ou mobile pour distraire bébé pendant les changes. Si tu as de la place, un deuxième coin dans le salon avec juste un panier nomade suffit.",
  );
  b.subhead("Combien de couches prévoir ?");
  b.para(
    "Pour la naissance, prévois un paquet de couches taille 1 (2,5 à 5 kg) et un paquet de taille 2 (3 à 6 kg), parce que bébé grandit vite. Les premiers jours, les couches taille naissance sont parfois utiles pour les bébés de petit poids. N'achète pas des stocks énormes d'avance : tu découvriras très vite la taille qui convient, et les magasins ne ferment jamais.",
  );
  b.subhead("Couches jetables ou lavables ?");
  b.para(
    "Les couches jetables sont simples, efficaces, et parfaitement adaptées aux premières semaines. Les couches lavables sont une option écologique et économique sur la durée, mais elles demandent de l'organisation (machine plus fréquente, séchage). Beaucoup de familles font un mix : jetables la nuit ou en sortie, lavables à la maison. Il n'y a pas de bonne réponse universelle, seulement celle qui te convient.",
  );
  b.subhead("Le bain et les soins");
  b.para(
    "Avant la chute du cordon, on donne à bébé une toilette au gant, sans le plonger dans l'eau. Ensuite, le bain peut devenir un moment de plaisir : une baignoire bébé, une eau à 37 degrés (testée au coude), un produit de bain doux adapté, et un gant de toilette. Bébé n'a pas besoin de bain tous les jours : 2 à 3 bains par semaine suffisent, le reste se fait à la toilette quotidienne.",
  );
  b.para(
    "Pour les fesses, pas besoin de produits sophistiqués : eau claire ou liniment, sécher en tamponnant, et une crème de change en cas de rougeurs. Si les rougeurs persistent ou s'étendent malgré les soins, parles-en à ta sage-femme ou ton médecin.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Le change, c'est aussi un moment de contact : parle à bébé, chante, fais-lui un petit massage des jambes. Ces gestes quotidiens sont les premiers échanges, et ils comptent autant que le soin lui-même.",
    "Un change qui « déborde » la nuit : pas de panique, c'est un classique. Le liniment et les couches taille au-dessus règlent 90 % des situations.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list hygiène");
  b.checkRow("Matelas à langer + alèse ou protection imperméable");
  b.checkRow("Couches : un paquet taille 1 + un paquet taille 2 pour commencer");
  b.checkRow("Coton, eau claire ou liniment, crème de change");
  b.checkRow("Baignoire bébé, gant, produit de bain doux, serviette avec capuche");
  b.checkRow("Ciseaux à bouts ronds pour les ongles, brosse douce");
  b.spacer(4);
  b.infoBox("À retenir", [
    "6 à 8 couches par jour : c'est le bon rythme. Un bébé qui mouille bien ses couches est un bébé bien hydraté.",
    "Les soins quotidiens sont simples : eau claire ou liniment, sécher en tamponnant, crème seulement si besoin.",
    "Bain 2 à 3 fois par semaine suffit ; le reste se fait à la toilette au gant.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 6 ===== */
  b.chapterPage("ch6");
  b.label("Chapitre 6", T);
  b.heading("Les vêtements de bébé", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("bag", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "La layette est la partie la plus tentante de la préparation : les petits bodies, les pyjamas à motifs, les chaussons minuscules. On a envie de tout acheter. Voici des repères simples pour acheter juste, sans te priver du plaisir.",
  );
  b.subhead("Les quantités qui fonctionnent");
  b.para(
    "Pour la naissance, prévois 6 bodies, 6 pyjamas, 2 ou 3 gigoteuses, 3 à 5 paires de chaussettes ou chaussons, 2 bonnets si c'est l'hiver, et 2 ou 3 manteaux ou nids d'ange selon la saison. C'est la base : suffisante pour les lessives, sans remplir les placards de vêtements que bébé ne portera jamais.",
  );
  b.subhead("Les tailles, le vrai casse-tête");
  b.para(
    "Les tailles annoncent des âges, mais chaque bébé est différent : un body taille naissance peut convenir 2 semaines ou 2 mois. Le bon réflexe : avoir un peu de taille naissance (2 ou 3 bodies, 2 pyjamas) et surtout de la taille 1 mois, qui convient souvent dès la naissance pour les bébés de poids moyen. N'hésite pas à acheter la taille au-dessus : un body légèrement grand se porte très bien, un body trop petit ne se porte pas du tout.",
  );
  b.subhead("Le laver avant de le porter");
  b.para(
    "Tous les vêtements neufs se lavent avant la première utilisation, avec une lessive douce, sans adoucissant pour les peaux fragiles. Les vêtements de seconde main sont les bienvenus : lavés à 30 ou 40 degrés, ils sont parfaits, et beaucoup de familles échangent des cartons entiers de layette.",
  );
  b.subhead("La méthode des 3 bacs");
  b.para(
    "Dès les premières semaines, organise les vêtements de bébé en 3 bacs : « Actuel », « Taille suivante », « À laver ». Chaque vêtement propre va dans le bon bac, jamais ailleurs. Un tri hebdomadaire de 5 minutes suffit à garder tout en ordre, sans chasse au trésor au moment de l'habiller.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Bébé se refroidit plus vite qu'un adulte, mais il se réchauffe très vite aussi : la règle simple, c'est une couche de plus que toi, et un contrôle régulier de sa nuque (elle doit être chaude et sèche, pas moite).",
    "Les vêtements à boutons pression sont pratiques, les bodies « enveloppants » qui se mettent par le haut évitent de passer par-dessus la tête : choisis ce qui te facilite les changes de nuit.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list layette");
  b.checkRow("6 bodies (dont 2 en taille naissance) + 6 pyjamas");
  b.checkRow("2 à 3 gigoteuses adaptées à la saison");
  b.checkRow("3 à 5 paires de chaussettes ou chaussons, 2 bonnets (hiver)");
  b.checkRow("2 manteaux ou nids d'ange selon la saison");
  b.checkRow("Lessive douce, sans adoucissant pour les premières semaines");
  b.spacer(4);
  b.infoBox("À retenir", [
    "La layette idéale est fonctionnelle avant d'être jolie : bodies et pyjamas d'abord, tenues de visite ensuite.",
    "Achète un peu de taille naissance, surtout de la taille 1 mois, et garde les tickets : bébé grandit vite.",
    "La seconde main et les cadeaux : bébé n'a pas besoin de 20 bodies, il a besoin de 6 bodies portés souvent.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 7 ===== */
  b.chapterPage("ch7");
  b.label("Chapitre 7", T);
  b.heading("Le transport", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("stroller", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "Sortir avec un nouveau-né fait peur à beaucoup de jeunes parents, et pourtant c'est l'un des meilleurs remèdes contre l'isolement et la fatigue morale. Avec un bon équipement, une sortie devient simple : voici l'essentiel.",
  );
  b.subhead("En voiture : le cosy ou la coque");
  b.para(
    "Le siège auto est obligatoire dès la naissance et jusqu'à 10 kg environ. Le cosy (ou coque) se fixe sur une base dans la voiture et peut se porter à la main ou se clipper sur la poussette : c'est le système le plus pratique pour les premiers mois. Le siège s'installe dos à la route (obligatoire jusqu'à 13 kg), et bébé y reste le moins longtemps possible : la position assise prolongée est déconseillée pour les tout-petits.",
  );
  b.subhead("À pied : la poussette");
  b.para(
    "Pour un nouveau-né, la poussette doit s'allonger à plat ou presque (landau ou nacelle), avec un harnais adapté. Les poussettes « 3 en 1 » (nacelle + cosy + assise) sont chères mais pratiques. Pense aussi à la légèreté, au pliage facile (tu vas la plier et la déplier des dizaines de fois), et aux roues adaptées à ton terrain.",
  );
  b.subhead("Les bras et le portage");
  b.para(
    "L'écharpe de portage et le porte-bébé physiologique sont de merveilleux outils : bébé est contre toi, rassuré par ta chaleur et ton rythme, les mains restent libres. Choisis un portage physiologique (bébé face à toi, jambes en grenouille, dos soutenu), et fais-toi montrer la bonne position par une professionnelle (sage-femme, monitrice de portage) si tu en as l'occasion.",
  );
  b.subhead("Les sorties en pratique");
  b.para(
    "Les premiers temps, les sorties sont courtes : 20 à 30 minutes, dans le quartier, au moment où bébé est calme. Protège-le du soleil avec des vêtements légers et de l'ombre (pas de crème solaire avant 6 mois), couvre-le selon la météo, et emporte le sac de sortie toujours prêt : un change complet, un body de rechange, un linge, et de quoi le nourrir.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "La première sortie est un petit Everest. Commence par un tour du pâté de maisons, en semaine, au calme. Si ça se passe bien, tant mieux. Si ça se passe mal, tant pis, le sac est prêt pour la prochaine fois : les sorties s'apprennent comme le reste, en douceur.",
    "En voiture, prévois des pauses régulières sur les longs trajets, et ne laisse jamais bébé seul dans la voiture, même quelques minutes, même à l'ombre.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list transport");
  b.checkRow("Siège auto (cosy ou coque) installé dos à la route, vérifié par un professionnel si possible");
  b.checkRow("Poussette avec nacelle ou position allongée pour bébé");
  b.checkRow("Écharpe ou porte-bébé physiologique + protection de pluie si besoin");
  b.checkRow("Sac de sortie toujours prêt : change, body, gigoteuse, linge, tétée");
  b.checkRow("Protection soleil : ombre, vêtements légers, chapeau");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Dos à la route jusqu'à 13 kg, et jamais de manteau sous le harnais (le harnais doit être au plus près du corps de bébé).",
    "Le portage physiologique est un super outil, à condition d'être bien positionné.",
    "Une sortie de 20 minutes au grand air compte vraiment, pour toi et pour bébé.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });

  /* ===== CHAPITRE 8 ===== */
  b.chapterPage("ch8");
  b.label("Chapitre 8", T);
  b.heading("La salle de bain et la pharmacie", { before: 4, size: 21 });
  b.spacer(4);
  b.illustration("flower", 297, 700, 2.2, T);
  b.spacer(14);
  b.para(
    "La pharmacie de bébé est petite, mais elle doit être prête avant la naissance : les premiers mois, les petits soucis arrivent souvent le soir ou le week-end, et il est rassurant d'avoir l'essentiel sous la main. Rappel important : ce guide est informatif et ne remplace pas l'avis d'un professionnel de santé. En cas de doute, de fièvre, de pleurs inhabituels ou de tout symptôme, appelle un professionnel.",
  );
  b.subhead("L'essentiel pour les soins");
  b.bullet("Un thermomètre (auriculaire ou rectal, le plus fiable chez bébé)", T);
  b.bullet("Du sérum physiologique en unidoses pour le nez et les yeux", T);
  b.bullet("Une crème de change, un baume pour les rougeurs", T);
  b.bullet("Une lime à ongles douce ou des ciseaux à bouts ronds", T);
  b.bullet("Un mouche-bébé et un aspirateur nasal, très utiles en cas de nez encombré", T);
  b.bullet("Du paracétamol pédiatrique en sirop, dosé au poids, uniquement après avis médical", T);
  b.spacer(4);
  b.subhead("La température et la fièvre");
  b.para(
    "La température normale d'un bébé se situe entre 36,5 et 37,5 degrés. On parle de fièvre à partir de 38 degrés. Chez un nouveau-né de moins de 3 mois, toute fièvre (38 degrés ou plus) doit être signalée rapidement à un professionnel de santé : ne cherche pas à traiter seul. Avant 3 mois, on ne donne pas de médicament sans avis médical.",
  );
  b.subhead("Les numéros à avoir sous la main");
  b.para(
    "Note, dès la naissance, les numéros utiles : ta sage-femme, ton médecin traitant, le pédiatre si tu en as un, la maternité (ils répondent 24h/24 pendant les premières semaines), le 15 (SAMU) et le 112 en cas d'urgence. Affiche-les sur le frigo ou enregistre-les dans ton téléphone.",
  );
  b.subhead("Le cordon et la cicatrice");
  b.para(
    "Le soin du cordon est simple : le garder propre et sec, le laisser tomber tout seul (en général entre 1 et 3 semaines). Pas de produit particulier, pas de pansement : on le nettoie à l'eau claire ou au sérum physiologique et on le sèche bien. Si tu observes une rougeur autour du cordon, un écoulement, une odeur ou une fièvre, parles-en à un professionnel.",
  );
  b.spacer(4);
  b.infoBox("Le conseil de Maria", [
    "Prépare la pharmacie AVANT la naissance : les premiers jours à la maison, tu auras autre chose en tête que de courir à la pharmacie.",
    "Ne stocke pas de médicaments « au cas où » : le paracétamol pédiatrique se dose au poids et uniquement sur conseil médical avant 3 mois. Un thermomètre et le 15, c'est la base.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
  b.spacer(4);
  b.subhead("Ta check-list pharmacie");
  b.checkRow("Thermomètre, sérum physiologique, mouche-bébé");
  b.checkRow("Crème de change, baume hydratant, lime à ongles");
  b.checkRow("Paracétamol pédiatrique (dosé au poids, sur avis médical)");
  b.checkRow("Numéros utiles affichés : sage-femme, médecin, maternité, 15");
  b.checkRow("Carnet de santé et carnet de vaccination à portée de main");
  b.spacer(4);
  b.infoBox("À retenir", [
    "Moins de 3 mois et de la fièvre ? Tu appelles un professionnel. C'est la règle, elle protège.",
    "Le cordon se laisse tranquille : propre, sec, et il tombe tout seul.",
    "La pharmacie de bébé est petite : un thermomètre, du sérum, une crème de change, et des numéros utiles.",
  ], { color: T, colorDark: TD, boxColor: COLORS.terracottaSoft });
}
