export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: "charge-mentale-7-gestes",
    title: "Comment alléger la charge mentale en sept gestes simples",
    category: "Charge mentale",
    date: "12 août 2026",
    readTime: "4 min",
    excerpt:
      "Le cerveau n'est pas fait pour tout retenir. Sept micro-gestes pour poser les choses hors de ta tête — et respirer.",
    body: [
      "La charge mentale, ce n'est pas le nombre de tâches : c'est le nombre de choses que tu portes en permanence dans ta tête. Rendez-vous, lessive, carnet de santé, rappel de la crèche… Tout y passe, même la nuit.",
      "La bonne nouvelle : ces sept gestes prennent moins de dix minutes par jour et déplacent le problème de ta tête vers des systèmes simples. Un carnet, trois bacs, une zone départ près de la porte — et le reste peut attendre.",
    ],
  },
  {
    id: "systeme-3-bacs",
    title: "Le Système des 3 Bacs, expliqué en cinq minutes",
    category: "Organisation",
    date: "5 août 2026",
    readTime: "3 min",
    excerpt:
      "Trois bacs, zéro tri, une maison qui se range presque toute seule. Voici comment ça marche concrètement.",
    body: [
      "Le principe est d'une simplicité déconcertante : trois bacs étiquetés, une règle unique, et plus jamais de décision de rangement à prendre. Ce qui traîne va dans un bac, point final.",
      "Ce système tient parce qu'il ne demande aucune énergie : les jours où tu n'as dormi que trois heures, il fonctionne encore. C'est exactement l'esprit de ForceMaman — des repères doux, pensés pour la vraie vie.",
    ],
  },
  {
    id: "checklist-sac-a-langer",
    title: "La checklist du sac à langer, enfin complète",
    category: "Sorties",
    date: "29 juillet 2026",
    readTime: "5 min",
    excerpt:
      "Plus jamais de départ stressé : la liste définitive, testée dans la vraie vie, pour ne rien oublier en sortant avec bébé.",
    body: [
      "On connaît toutes ce moment : la porte est ouverte, bébé est dans la poussette, et il manque toujours quelque chose. La solution n'est pas de mieux mémoriser — c'est d'avoir une checklist permanente, collée sur le sac.",
      "Dans le guide gratuit, tu retrouves la version complète à imprimer : l'essentiel, le confort, les urgences. Une fois posée, elle supprime des dizaines de micro-décisions à chaque sortie.",
    ],
  },
];
