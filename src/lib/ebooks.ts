import {
  BookOpen,
  Boxes,
  Briefcase,
  Heart,
  Moon,
  ShoppingBasket,
  UtensilsCrossed,
  ChefHat,
  Baby,
  BookMarked,
} from "lucide-react";

export interface Ebook {
  id: string;
  title: string;
  tagline: string;
  price: string;
  href: string;
  accent: string;
  accentText: string;
  features: string[];
  datePublished: string;
  dateModified: string;
}

export const ebooks: Ebook[] = [
  {
    id: "liste-naissance",
    title: "Ma Liste Naissance Complète",
    tagline: "Prépare l'arrivée de bébé sans stress, avec une liste claire et complète.",
    price: "7,90 €",
    href: "/guides/liste-naissance",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    features: [
      "Les essentiels absolus, rien de superflu",
      "Organisée par âge gestationnel",
      "Des conseils de sage-femme à chaque étape",
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  },
  {
    id: "corps-apres",
    title: "Mon Corps Après l'Accouchement",
    tagline: "Comprends et accompagne les changements de ton corps, sans panique.",
    price: "9,90 €",
    href: "/guides/corps-apres",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    features: [
      "Ce qui est normal, ce qui mérite un avis",
      "Séquences douces de récupération",
      "Les signaux d'alerte à connaître",
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  },
  {
    id: "charge-mentale",
    title: "Charge Mentale & 40 Premiers Jours",
    tagline: "Traverse le tsunami émotionnel des premières semaines, accompagnée.",
    price: "11,90 €",
    href: "/guides/charge-mentale",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    features: [
      "Des outils concrets contre la charge mentale",
      "Communiquer avec ton/ta partenaire",
      "Des rituels d'autosoins en 5 minutes",
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  },
  {
    id: "recettes-postpartum",
    title: "Recettes Post-Partum",
    tagline: "Des repas simples et nourrissants pour les premières semaines.",
    price: "8,90 €",
    href: "/guides/recettes-postpartum",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    features: [
      "Recettes rapides et nourrissantes",
      "Adaptées à l'allaitement",
      "Liste de courses et planification",
    ],
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
  },
  {
    id: "guide-complet-postpartum",
    title: "Guide Complet Post-Partum",
    tagline: "Tout ce qu'il faut savoir pour les premiers mois après l'accouchement.",
    price: "12,90 €",
    href: "/guides/guide-complet-postpartum",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    features: [
      "Un guide de A à Z du post-partum",
      "Récupération physique et émotionnelle",
      "Quand consulter et quoi attendre",
    ],
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
  },
  {
    id: "soin-bebe",
    title: "Soin Bébé après l'Accouchement",
    tagline: "Les gestes essentiels pour prendre soin de ton nouveau-né.",
    price: "9,90 €",
    href: "/guides/soin-bebe",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    features: [
      "Bains, changes, sommeil en toute sérénité",
      "Les signaux de bébé décodés",
      "Des routines simples et adaptables",
    ],
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
  },
];

export const bundle = {
  title: "Pack Complet ForceMaman",
  tagline: "Les 6 guides réunis pour un accompagnement global du post-partum.",
  price: "42,90 €",
  originalPrice: "61,40 €",
  discount: "-30%",
  href: "/guides/bundle",
};

export type LibraryBadge = "populaire" | "essentiel" | "temps";

export interface LibraryItem {
  id: string;
  title: string;
  benefit: string;
  price: string;
  href: string;
  accent: string;
  accentText: string;
  badge: LibraryBadge;
  badgeLabel: string;
  category: string;
  featured: boolean;
}

export const badgeStyles: Record<LibraryBadge, string> = {
  populaire: "bg-brand-terracotta text-[#fff8f2]",
  essentiel: "bg-brand-sage text-white",
  temps: "bg-brand-mauve text-white",
};

export const libraryCategories = [
  {
    id: "preparer",
    title: "Préparer l'arrivée",
    description: "Listes, checklists et repères pour aborder la naissance sans stress.",
    dot: "bg-brand-terracotta",
  },
  {
    id: "soigner",
    title: "Prendre soin de toi",
    description: "Comprendre ton corps et alléger ta charge mentale après l'accouchement.",
    dot: "bg-brand-sage",
  },
  {
    id: "tout-en-un",
    title: "Le Pack Complet",
    description: "Les 6 guides réunis pour un accompagnement global du post-partum.",
    dot: "bg-brand-mauve",
  },
];

export const libraryItems: LibraryItem[] = [
  {
    id: "liste-naissance",
    title: "Ma Liste Naissance Complète",
    benefit: "Prépare l'arrivée de bébé sans stress : une liste claire, complète et pensée par une sage-femme.",
    price: "7,90 €",
    href: "/guides/liste-naissance",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    badge: "populaire",
    badgeLabel: "Le plus téléchargé",
    category: "preparer",
    featured: true,
  },
  {
    id: "corps-apres",
    title: "Mon Corps Après l'Accouchement",
    benefit: "Comprends ce qui arrive à ton corps et sache quoi faire, sans t'inquiéter à tort.",
    price: "9,90 €",
    href: "/guides/corps-apres",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    badge: "essentiel",
    badgeLabel: "Essentiel",
    category: "soigner",
    featured: true,
  },
  {
    id: "charge-mentale",
    title: "Charge Mentale & 40 Premiers Jours",
    benefit: "Traverse le tsunami émotionnel des premières semaines avec des outils concrets.",
    price: "11,90 €",
    href: "/guides/charge-mentale",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    badge: "populaire",
    badgeLabel: "Le plus téléchargé",
    category: "soigner",
    featured: true,
  },
  {
    id: "recettes-postpartum",
    title: "Recettes Post-Partum",
    benefit: "Des repas simples et nourrissants pour les premières semaines, pensés par une sage-femme.",
    price: "8,90 €",
    href: "/guides/recettes-postpartum",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    badge: "essentiel",
    badgeLabel: "Nouveau",
    category: "preparer",
    featured: false,
  },
  {
    id: "guide-complet-postpartum",
    title: "Guide Complet Post-Partum",
    benefit: "Tout ce qu'il faut savoir pour les premiers mois : récupération, émotions, bébé.",
    price: "12,90 €",
    href: "/guides/guide-complet-postpartum",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    badge: "essentiel",
    badgeLabel: "Nouveau",
    category: "soigner",
    featured: false,
  },
  {
    id: "soin-bebe",
    title: "Soin Bébé après l'Accouchement",
    benefit: "Les gestes essentiels pour prendre soin de ton nouveau-né en toute sérénité.",
    price: "9,90 €",
    href: "/guides/soin-bebe",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    badge: "essentiel",
    badgeLabel: "Nouveau",
    category: "preparer",
    featured: false,
  },
  {
    id: "bundle",
    title: "Pack Complet ForceMaman",
    benefit: "Les six guides réunis pour un accompagnement global du post-partum.",
    price: "42,90 €",
    href: "/guides/bundle",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    badge: "temps",
    badgeLabel: "Gain de temps",
    category: "tout-en-un",
    featured: true,
  },
];

export interface FreeGuideSystem {
  number: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const freeGuide = {
  title: "Les 7 Systèmes ForceMaman",
  subtitle:
    "Des repères simples pour respirer avec un nouveau-né, offerts par Maria.",
  href: "/guide-gratuit",
};

export const freeGuideSystems: FreeGuideSystem[] = [
  {
    number: "01",
    title: "Le Cahier Unique",
    text: "Un seul endroit pour tout noter : rendez-vous, questions, idées. Ta tête respire enfin.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "La Boîte à 3",
    text: "Trois bacs : Actuel, Taille suivante, À laver. Cinq minutes de tri par semaine suffisent.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Les Repas de Secours",
    text: "Trois recettes validées d'avance, ingrédients toujours en stock. Zéro décision les jours difficiles.",
    icon: UtensilsCrossed,
  },
  {
    number: "04",
    title: "Le Panier Nomade",
    text: "Un panier avec l'essentiel qui te suit de pièce en pièce : couches, lingettes, change complet.",
    icon: ShoppingBasket,
  },
  {
    number: "05",
    title: "La Trousse Départ Éclair",
    text: "Un sac toujours prêt, jamais vidé complètement : tu sors en moins de 5 minutes.",
    icon: Briefcase,
  },
  {
    number: "06",
    title: "La Règle du Suffisant",
    text: "Une seule priorité par jour. Le reste est suffisant, sans culpabilité.",
    icon: Heart,
  },
  {
    number: "07",
    title: "Le Sas du Soir",
    text: "Cinq gestes simples le soir pour un lendemain nettement plus doux.",
    icon: Moon,
  },
];

export const freeGuideChecklist = [
  "Moins de décisions répétitives.",
  "Moins de choses à retenir dans ta tête.",
  "Un quotidien qui tient même sans énergie.",
  "Plus de sérénité pour profiter de bébé.",
];
