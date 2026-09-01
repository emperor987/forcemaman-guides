import { images, src, type ImageSrc } from "@/lib/assets";

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  excerpt: string;
  image: ImageSrc;
  body: string[];
  featured?: boolean;
  relatedGuide?: string;
  relatedArticles?: string[];
}

export const journalCategories = [
  "Tous",
  "Organisation du quotidien",
  "Systèmes postpartum",
  "Charge mentale",
  "Organisation bébé",
  "Repas postpartum",
  "Routines réalistes",
];

export const journalArticles: JournalArticle[] = [
  {
    id: "charge-mentale-7-gestes",
    title: "Comment alléger la charge mentale en sept gestes simples",
    category: "Charge mentale",
    date: "Juin 2026",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    readTime: "8 min",
    excerpt:
      "Un protocole doux pour reposer le cerveau maternel sans ajouter une seule tâche à votre journée.",
    image: images.blogFeatured,
    featured: true,
    relatedGuide: "/guides/charge-mentale",
    relatedArticles: ["journal-decharge", "rituel-matin"],
    body: [
      "La charge mentale, ce n'est pas le nombre de tâches : c'est le nombre de choses que tu portes en permanence dans ta tête. Rendez-vous, lessive, carnet de santé, rappel de la crèche… Tout y passe, même la nuit.",
      "La bonne nouvelle : ces sept gestes prennent moins de dix minutes par jour et déplacent le problème de ta tête vers des systèmes simples. Un carnet, trois bacs, une zone départ près de la porte, et le reste peut attendre.",
      "Le premier système est le plus simple : un seul cahier (ou une seule note dans ton téléphone) où tout est centralisé. Les rendez-vous médicaux, les questions à poser au pédiatre, les idées de cadeaux à noter pour plus tard. Plus besoin de chercher dans cinq applications différentes.",
      "Le deuxième système concerne le rangement des vêtements de bébé. Trois bacs clairement identifiés, Actuel, Taille suivante, À laver. Un tri hebdomadaire de cinq minutes suffit à garder tout en ordre. C'est un gain de temps considérable quand on sait combien de temps on passe normalement à fouiller dans les tiroirs.",
      "Les trois systèmes suivants concernent la nourriture, le rangement nomade et la préparation des sorties. Trois recettes de secours toujours en stock, un panier qui te suit de pièce en pièce avec l'essentiel, et un sac de sortie toujours prêt. Zéro décision répétitive, zéro stress de dernière minute.",
      "Les deux derniers systèmes sont peut-être les plus importants : la règle du suffisant (une seule priorité par jour, le reste peut attendre) et le sas du soir (cinq gestes simples pour rendre le lendemain plus doux). Ce sont des gestes de douceur envers toi-même, pas de nouvelles obligations.",
      "Ces sept systèmes ne demandent pas d'énergie particulière. Ils se posent une fois et fonctionnent même les jours où tu n'as dormi que trois heures. Tu n'as pas besoin d'être une maman parfaite. Tu as besoin d'outils qui tiennent.",
    ],
  },
  {
    id: "5-produits",
    title: "5 produits qui simplifient vraiment la vie avec un bébé",
    category: "Organisation du quotidien",
    date: "Juin 2026",
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    readTime: "8 min",
    excerpt:
      "Cinq objets simples qui réduisent la charge mentale postpartum et transforment le quotidien avec un bébé.",
    image: images.blog5Produits,
    relatedGuide: "/guides/guide-complet-postpartum",
    relatedArticles: ["chambre-bebe", "linge"],
    body: [
      "Quand on devient maman, on réalise vite qu'il ne manque pas forcément plus de temps. Il manque surtout des systèmes. Les bons objets ne remplacent pas l'énergie qu'on n'a pas, mais ils suppriment des décisions répétitives qui épuisent le cerveau.",
      "Au fil des mois, j'ai découvert que quelques produits bien choisis pouvaient réellement simplifier le quotidien, réduire les allers-retours inutiles et alléger la charge mentale. Pas besoin d'acheter tout le catalogue baby : cinq objets bien pensés suffisent.",
      "Le premier est un panier nomade avec une poignée. Couches, lingettes, change complet, mouchoir, tétine de secours. Il te suit de pièce en pièce dans la maison. Fini de courir d'une chambre à l'autre pour un coin couchage oublié. Le panier est toujours là où tu es.",
      "Le deuxième est un sac de sortie toujours équipé, jamais vidé complètement. Après chaque sortie, tu reremplis ce qui a été utilisé et tu le remets à sa place. Tu sors en moins de cinq minutes, sans le stress de la dernière minute.",
      "Le troisième est un cahier unique (papier ou numérique) où tout est centralisé. Rendez-vous médicaux, questions pour le pédiatre, numéros utiles. Une seule source de vérité, pas de post-it éparpillés dans toute la maison.",
      "Le quatrième est un système de rangement simplifié pour les vêtements de bébé : trois bacs (actuel, taille suivante, à laver) avec un tri hebdomadaire de cinq minutes. C'est un gain de temps énorme quand on sait combien de temps on passe normalement à chercher la bonne taille.",
      "Le cinquième est un ensemble de recettes de secours. Trois plats simples dont les ingrédients sont toujours en stock, et que tu sais faire les yeux fermés. Les jours sans énergie, zéro décision à prendre : tu sais déjà quoi cuisiner.",
      "Ces cinq objets ne coûtent pas cher et ne demandent aucune installation compliquée. Ils se mettent en place en une après-midi et fonctionnent pendant des mois. C'est exactement le type d'investissement qui change le quotidien.",
    ],
  },
  {
    id: "rituel-matin",
    title: "Un rituel du matin réaliste, même avec un nouveau-né",
    category: "Routines réalistes",
    date: "Mai 2026",
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
    readTime: "6 min",
    excerpt:
      "Trois minutes, une fenêtre ouverte, une intention. La version honnête du matin lent.",
    image: images.blog4,
    relatedGuide: "/guides/charge-mentale",
    relatedArticles: ["premier-mois", "charge-mentale-7-gestes"],
    body: [
      "Le matin lent des magazines suppose une maison calme et un bébé qui dort. Dans la vraie vie, il faut une version courte, tenable, et sans culpabilité. On ne te demande pas de mediter vingt minutes en buvant un thé chaud. On te propose trois minutes.",
      "Trois minutes suffisent : ouvrir la fenêtre, boire un verre d'eau, poser une intention pour la journée. Pas une to-do list. Pas un planning. Juste une pensée douce envers toi-même. Le reste de la journée peut commencer, tu as déjà pris soin de toi.",
      "L'idée n'est pas d'ajouter une obligation de plus à ta journée. C'est de créer un petit espace de transition entre la nuit (souvent hachée) et le jour. Un signal pour ton cerveau que la journée commence, même si bébé a awaken trois fois.",
      "Si trois minutes te semblent encore trop, commence par une seule : ouvrir les rideaux. C'est déjà un acte de douceur envers toi-même. Et si certaines matinées c'est simplement impossible, ce n'est pas grave. Le rituel est là pour t'aider, pas pour devenir une source de culpabilité supplémentaire.",
      "Ce qui compte, c'est de retrouver un tout petit moment qui t'appartient. Avant les biberons, avant les changes, avant les pleurs. Même si ce moment ne dure qu'une respiration. C'est ton signal que tu existes en dehors du rôle de maman. Et ça, c'est essentiel.",
    ],
  },
  {
    id: "batch-cooking",
    title: "Le batch cooking postpartum, sans culpabilité",
    category: "Repas postpartum",
    date: "Mai 2026",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    readTime: "10 min",
    excerpt:
      "Trois bases, sept repas, zéro plan compliqué. La méthode qui tient debout avec un bébé dans les bras.",
    image: images.blog3,
    relatedGuide: "/guides/recettes-postpartum",
    relatedArticles: ["5-produits", "charge-mentale-7-gestes"],
    body: [
      "Le batch cooking ne doit pas devenir une performance de plus. Il doit tenir avec un bébé dans les bras, une nuit hachée et une énergie aléatoire. L'objectif n'est pas de remplir un congélateur parfaitement organisé. C'est de ne pas avoir à réfléchir à quoi cuisiner les jours les plus difficiles.",
      "Trois bases neutres suffisent : une céréale (riz, pâtes, quinoa), une légumineuse (lentilles, pois chiches), un plat mijoté (daube, soupe, ragout). Chaque base se transforme en deux ou trois repas différents avec de simples ajustements. Quarante minutes le dimanche, et la semaine respire.",
      "La clé, c'est la simplicité. Pas de recettes compliquées, pas d'ingrédients exotiques. Des choses que tu sais déjà faire, avec des produits que tu trouves partout. Si tu as un bébé de trois semaines et que tu n'as dormi que trois heures, tu dois pouvoir préparer un repas sans te poser vingt questions.",
      "L'autre astuce, c'est de congeler par portions. Tu ne décongles que ce dont tu as besoin, sans gaspiller. Et si certains jours tu n'as vraiment pas la force de cuisiner, c'est OK. Le batch cooking est un filet de sécurité, pas un impératif. Il est là pour réduire la pression, pas pour en ajouter.",
      "N'oublie pas : bien manger en post-partum, c'est aussi prendre soin de ton corps et, si tu allaites, de ton lait. Les repas riches en fer, en calcium et en protéines aident à la récupération. Ce n'est pas de la vanité, c'est de la survie.",
    ],
  },
  {
    id: "linge",
    title: "Le système du linge qui ne déborde plus jamais",
    category: "Organisation du quotidien",
    date: "Avril 2026",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    readTime: "5 min",
    excerpt:
      "Un panier, un jour, une règle. Pourquoi les familles organisées ne trient plus.",
    image: images.blog2,
    relatedGuide: "/guides/guide-complet-postpartum",
    relatedArticles: ["5-produits", "chambre-bebe"],
    body: [
      "Le linge déborde quand chaque étape demande une décision. Quand mettre la machine ? Quand plier ? Où ranger ? Chaque question est une petite fatigue mentale de plus. Avec un bébé, ces fatigues s'additionnent vite.",
      "La solution n'est pas de plier mieux ou d'avoir plus de temps. C'est de supprimer les décisions. Un panier par personne, un jour fixe par cycle, et une règle simple : ce qui ne rentre plus dans le panier part dans le don. La maison ne déborde plus.",
      "Le principe est le même que pour le système des trois bacs des vêtements de bébé : un tri automatisé qui ne demande pas de réflexion. Tu laves le lundi, tu plies le mardi, tu ranges le mercredi. Chaque étape a son moment, et tu ne reverses jamais sur le lendemain.",
      "Si tu as du mal à tenir, commence par un seul panier et un seul jour. L'important n'est pas la perfection du système, c'est de réduire le nombre de décisions que ton cerveau doit prendre chaque jour. Chaque décision supprimée est une victoire.",
      "Et si certaines semaines le système craque, ce n'est pas grave. La lessive n'est pas une compétition. Elle est là pour te servir, pas pour te culpabiliser. Reprends le fil la semaine suivante, et tout ira bien.",
    ],
  },
  {
    id: "premier-mois",
    title: "Le premier mois postpartum : ce dont personne ne parle",
    category: "Systèmes postpartum",
    date: "Avril 2026",
    datePublished: "2026-04-15",
    dateModified: "2026-04-15",
    readTime: "12 min",
    excerpt:
      "Hormones, identité, silence. Une lettre honnête à la femme que vous étiez avant.",
    image: images.blog5,
    relatedGuide: "/guides/charge-mentale",
    relatedArticles: ["rituel-matin", "charge-mentale-7-gestes"],
    body: [
      "On prépare le jour de l'accouchement. Personne ne prépare le mois qui suit : les nuits hachées, le corps qui se cherche, l'identité qui vacille. Tu rentres à la maison avec un bébé dans les bras et tu découvres que le plus dur commence souvent là.",
      "Ce premier mois n'est pas une course. C'est une traversée. Les hormones retombent, le corps se remet, le couple se réinvente, l'identité se reconstruit. Tout ça en même temps, sans mode d'emploi, sans sommeil, et souvent sans filet.",
      "Il y a des moments de joie immense, des moments de peur paralysante, des pleurs inexplicables. Le tout peut coexister en l'espace de quelques heures. C'est normal. C'est même humain. Ne cherche pas à tout comprendre ou à tout maîtriser. Laisse le temps faire son travail.",
      "La seule organisation qui tient dans cette période est celle qui accepte d'être imparfaite. Un cahier pour noter les questions au pédiatre, un panier nomade pour ne pas courir partout, un sac de sortie toujours prêt. Le reste peut attendre.",
      "Et surtout, n'oublie pas : demander de l'aide n'est pas un signe de faiblesse. C'est un signe de sagesse. Que ce soit ton/ta partenaire, ta mère, une amie, une sage-femme, ou une ligne d'écoute. Tu n'as pas à traverser ça seule.",
      "Si les sentiments de tristesse persistent au-delà de deux semaines, ou si tu ressens une détresse importante, parle-en à un professionnel de santé. Le baby blues est normal, mais la dépression post-partum nécessite un accompagnement. N'hésite jamais.",
    ],
  },
  {
    id: "chambre-bebe",
    title: "Aménager la chambre de bébé sans surconsommer",
    category: "Organisation bébé",
    date: "Mars 2026",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    readTime: "7 min",
    excerpt:
      "Huit éléments suffisent. Le reste est du marketing déguisé en nécessité.",
    image: images.blog6,
    relatedGuide: "/guides/liste-naissance",
    relatedArticles: ["5-produits", "linge"],
    body: [
      "La chambre de bébé est devenue un terrain de marketing. Catalogues, influenceuses, listes de naissance interminables : on nous vend l'illusion qu'il faut tout achete pour être une bonne maman. Pourtant, huit éléments bien choisis suffisent pour dormir, changer et ranger.",
      "Le coin couchage : un lit (berceau ou lit parapluie) et un matelas ferme. Le coin change : une table de change ou un tapis posé sur un meuble bas, avec couches, lingettes et vêtements de rechange à portée de main. Le coin rangement : un meuble ou des bacs pour trier les vêtements par taille.",
      "Avant chaque achat, pose-toi une question simple : est-ce que cet objet supprime une décision ou en ajoute une ? Un panier de rangement supprime des décisions. Un troisième décoratif en ajoute. La réponse change tout.",
      "Le confort de bébé ne dépend pas du nombre d'objets dans sa chambre. Il dépend de la température (18-20°C), de la luminosité (obscurité la nuit), et de la proximité avec toi. Un berceau simple à côté de ton lit fait très bien l'affaire les premiers mois.",
      "N'oublie pas que la chambre de bébé évolue avec lui. Ce qui est indispensable à la naissance ne le sera pas à 6 mois, et inversement. Commence avec le strict nécessaire, et complète au fur et à mesure de ses vrais besoins. C'est plus sage et plus économique.",
    ],
  },
  {
    id: "journal-decharge",
    title: "Tenir un journal de décharge, cinq minutes le soir",
    category: "Charge mentale",
    date: "Mars 2026",
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
    readTime: "6 min",
    excerpt:
      "Vider la tête sur le papier, cinq minutes le soir, et la nuit s'allège déjà.",
    image: images.blog1,
    relatedGuide: "/guides/charge-mentale",
    relatedArticles: ["charge-mentale-7-gestes", "rituel-matin"],
    body: [
      "Le cerveau maternel ne s'éteint pas la nuit. Il rejoue les listes, les oublis, les choses à ne pas manquer. Demain il faut appeler la crèche, préparer le carnet de santé, acheter des couches, rappeler le pédiatre… La liste ne finit jamais, et le sommeil n'arrive pas.",
      "Le journal de décharge interrompt cette boucle. Cinq minutes avant de dormir : tu prends un stylo et un papier (ou ton téléphone), et tu notes tout ce qui tourne en boucle dans ta tête. Pas besoin de rédiger, pas besoin d'être organisé. Juste vider le contenu mental sur le papier.",
      "Le principe est simple : quand une pensée est posée sur le papier, ton cerveau cesse de la rejouer en boucle. C'est comme si tu lui disais : c'est noté, tu peux lâcher. Le sommeil n'est pas magique, mais il s'allège considérablement.",
      "Tu peux y mettre tout ce qui te pèse : les courses, les rendez-vous, les questions, les inquiétudes, même les émotions. Parfois, écrire je suis fatiguée suffit à rendre la fatigue un peu plus supportable. Mettre des mots sur ce qu'on ressent, c'est déjà un premier pas vers l'apaisement.",
      "Ce rituel ne demande aucun outil spécial, aucune formation, aucune énergie particulière. Juste cinq minutes et un peu de courage pour regarder ce qu'on porte. Et si certains soirs tu n'y arrives pas, ce n'est pas grave. Le cahier sera là demain.",
    ],
  },
  {
    id: "perinee-reeducation-douce",
    title: "Rééducation périnéale douce après l'accouchement : par où commencer ?",
    category: "Récupération",
    date: "Juillet 2026",
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    readTime: "10 min",
    excerpt:
      "Les premiers gestes de rééducation périnéale, expliqués simplement, sans pression ni culpabilité.",
    image: images.blogFeatured,
    relatedGuide: "/guides/corps-apres",
    relatedArticles: ["premier-mois", "rituel-matin"],
    body: [
      "Après l'accouchement, le périnée a besoin de temps pour se remettre. C'est normal, et c'est un processus qui se fait en douceur, pas en performance. Pas de pression, pas de deadline : juste des gestes simples qui aident ton corps à se reconstruire.",
      "Les premières semaines, concentre-toi sur la respiration et le relâchement. Pas sur l'effort. Le périnée a été étiré, parfois blessé, et il a besoin d'être réapprivoisé en douceur. Commence par des respirations profondes, en laissant le ventre se gonfler et se vider lentement.",
      "La rééducation périnéale n'est pas une course. Certaines femmes commencent tôt, d'autres plus tard. Les deux sont corrects. L'essentiel est de ne pas attendre que les symptômes empirent avant de s'en préoccuper. Si tu ressens une gêne, une pesanteur, ou une fuite, parle-en à ta sage-femme. Elle pourra t'orienter.",
      "Quelques gestes simples à mettre en place : des contractions douces du périnée (5 secondes, puis relâchement), 3 fois par jour, en position allongée. Pas besoin de pousser, pas besoin de forcer. Juste sentir le muscle se contracter et se relâcher.",
      "La marche, la natation douce, et les étirements légers sont aussi des alliés. Pas besoin de reprendre le sport intensément : ton corps te dira quand il sera prêt. Et si tu as des doutes, un bilan périnéal avec une sage-femme ou un kinésithérapeute spécialisé fait toute la différence.",
      "Ce qui compte, c'est de traiter ton corps avec respect et patience. Il a accompli quelque chose d'extraordinaire. Donne-lui le temps qu'il mérite.",
    ],
  },
  {
    id: "comprendre-pleurs-bebe",
    title: "Pourquoi bébé pleure ? Comprendre les pleurs sans culpabiliser",
    category: "Soins bébé",
    date: "Juillet 2026",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTime: "9 min",
    excerpt:
      "Les pleurs de bébé sont un langage, pas un échec. Voici comment les comprendre sans culpabiliser.",
    image: images.blog6,
    relatedGuide: "/guides/soin-bebe",
    relatedArticles: ["premier-mois", "rituel-matin"],
    body: [
      "Les pleurs de bébé sont le premier langage de ton enfant. Ce n'est pas un signe que tu fais mal les choses. C'est un signal que bébé a besoin de toi, et c'est exactement pour ça que tu es là.",
      "Les principales causes des pleurs chez un nouveau-né sont simples : faim, fatigue, couche sale, besoin de chaleur, besoin de contact. En quelques jours, tu apprendras à distinguer les不同sons. Un cri de faim est généralement rhythmé et insistant. Un cri de fatigue est plus nasillard et s'accentue.",
      "Il y a aussi les pleurs d'épuisement ou de surstimulation. Quand tout va bien et que bébé pleure quand même, c'est souvent parce qu'il est fatigué mais ne sait pas encore s'endormir tout seul. Un bercement doux, un lieu calme, une lumière tamisée suffisent souvent.",
      "Ce qui compte, c'est de ne pas chercher à tout prix d'arrêter les pleurs. Parfois, le plus utile est de porter bébé contre toi, de le bercer doucement, et d'attendre que la tempête passe. Tu ne gâches rien. Tu apprends à connaître ton enfant.",
      "Si les pleurs semblent inhabituels (très aigus, accompagnés de fièvre, de vomissements, ou de tout autre symptôme inquiétant), n'hésite pas à appeler ton pédiatre ou le 15. Mieux vaut un appel pour rien qu'un retard.",
      "Et surtout, si tu te sens débordée, c'est OK de poser bébé dans son lit, dans un endroit sûr, et de prendre trois minutes pour toi. Ce n'est pas de l'abandon. C'est de la préservation. Et bébé ira bien pendant ces trois minutes.",
    ],
  },
  {
    id: "couple-postpartum",
    title: "Le couple après la naissance : communiquer sans culpabiliser",
    category: "Charge mentale",
    date: "Août 2026",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    readTime: "11 min",
    excerpt:
      "La naissance change tout dans le couple. Voici comment garder la connexion sans culpabilité ni pression.",
    image: images.blog5,
    relatedGuide: "/guides/charge-mentale",
    relatedArticles: ["premier-mois", "charge-mentale-7-gestes"],
    body: [
      "La naissance d'un enfain transforme le couple. Ce n'est pas un échec, c'est une réalité. Les rôles changent, les priorités changent, l'énergie change. Et souvent, on n'a pas les mots pour exprimer ce qu'on ressent.",
      "Le premier réflexe à avoir, c'est de parler. Pas dans l'urgence, pas quand l'un des deux est épuisé. Trouve un moment calme, même cinq minutes, pour dire ce dont tu as besoin. Pas en reproche, pas en injonction. En partage.",
      "La charge mentale est souvent le sujet le plus difficile à aborder. Tu portes des choses que ton/ta partenaire ne voit pas : les rendez-vous, les courses, les vêtements qui ne vont plus, les émotions de bébé. Mettre des mots dessus, c'est le premier pas pour que la charge soit partagée.",
      "N'attends pas que ton/ta partenaire devine. Les partenaires ne sont pas devins. Ils ont besoin qu'on leur dise clairement ce dont on a besoin. J'ai besoin que tu prennes le bain de bébé ce soir est plus efficace que tu ne fais jamais rien.",
      "Accepte aussi que la connexion ne soit pas toujours romantique. Parfois, un câlin de cinq secondes dans la cuisine, un regard entendu, un message doux dans la journée suffisent à maintenir le lien. L'amour ne disparaît pas avec l'arrivée de bébé. Il change de forme.",
      "Si la communication devient vraiment difficile, n'hésite pas à en parler à un professionnel. Un couple qui travaille sur sa communication n'est pas un couple en crise. C'est un couple qui s'investit.",
      "Et rappelle-toi : vous êtes dans la même équipe. Vous avez le même objectif : que votre famille soit heureuse. Pas parfaite. Heureuse.",
    ],
  },
];

/** Helper: returns the WebP src for simple <img> usage */
export function articleSrc(article: JournalArticle): string {
  return src(article.image);
}
