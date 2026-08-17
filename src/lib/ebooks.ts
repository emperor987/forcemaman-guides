import {
  Backpack,
  Boxes,
  Brain,
  CookingPot,
  DoorOpen,
  ListChecks,
  ShoppingBasket,
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
  },
];

export const bundle = {
  title: "Pack Complet ForceMaman",
  tagline: "Les 3 guides réunis pour un accompagnement global du post-partum.",
  price: "22,90 €",
  originalPrice: "29,70 €",
  discount: "-23%",
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
  free?: boolean;
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
    title: "Packs & Gratuits",
    description: "Tout en un, ou commencer gratuitement par l'essentiel.",
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
    id: "bundle",
    title: "Pack Complet ForceMaman",
    benefit: "Les trois guides réunis pour un accompagnement global du post-partum.",
    price: "22,90 €",
    href: "/guides/bundle",
    accent: "bg-brand-terracotta",
    accentText: "text-brand-terracotta",
    badge: "temps",
    badgeLabel: "Gain de temps",
    category: "tout-en-un",
    featured: true,
  },
  {
    id: "guide-gratuit",
    title: "Le Guide Gratuit · 7 Systèmes",
    benefit: "Sept systèmes concrets pour alléger ta charge mentale, offerts.",
    price: "Gratuit",
    href: "/guide-gratuit",
    accent: "bg-brand-sage",
    accentText: "text-brand-sage",
    badge: "essentiel",
    badgeLabel: "Essentiel",
    category: "tout-en-un",
    featured: true,
    free: true,
  },
  {
    id: "checklist-sac",
    title: "La Checklist du Sac à Langer",
    benefit: "La liste permanente pour ne plus jamais rien oublier en sortant avec bébé.",
    price: "Gratuit",
    href: "/guide-gratuit",
    accent: "bg-brand-mauve",
    accentText: "text-brand-mauve",
    badge: "temps",
    badgeLabel: "Gain de temps",
    category: "preparer",
    featured: true,
    free: true,
  },
];

export interface FreeGuideSystem {
  number: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const freeGuide = {
  title: "Le Guide Gratuit",
  subtitle: "Les 7 systèmes qui simplifient vraiment la vie avec un bébé.",
  href: "/guide-gratuit",
};

export const freeGuideSystems: FreeGuideSystem[] = [
  {
    number: "01",
    title: "Le Cerveau Externe",
    text: "Un seul endroit fiable pour poser toutes tes tâches et vider ta tête.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Le Système des 3 Bacs",
    text: "Une maison qui se range presque toute seule, sans tri ni décision.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Les Repas Secours",
    text: "Trois options validées d'avance, prêtes pour les jours sans énergie.",
    icon: CookingPot,
  },
  {
    number: "04",
    title: "Le Panier Tétée",
    text: "Tout ce qu'il te faut à portée de main pendant les tétées.",
    icon: ShoppingBasket,
  },
  {
    number: "05",
    title: "La Zone Départ",
    text: "Sortir avec bébé en cinq minutes, sans rien oublier ni stresser.",
    icon: DoorOpen,
  },
  {
    number: "06",
    title: "Les 3 Priorités du Jour",
    text: "Trois priorités par jour, et le reste peut attendre demain.",
    icon: ListChecks,
  },
  {
    number: "07",
    title: "La Checklist du Sac à Langer",
    text: "La liste permanente pour ne plus jamais rien oublier en sortant.",
    icon: Backpack,
  },
];
