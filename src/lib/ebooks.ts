import {
  Baby,
  Backpack,
  BedDouble,
  Heart,
  ListChecks,
  Moon,
  Package,
  Shirt,
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
    description: "Les 3 guides réunis pour un accompagnement global du post-partum.",
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
];

export interface FreeGuideSystem {
  number: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const freeGuide = {
  title: "Ma Liste de Naissance Essentielle",
  subtitle: "Les 7 essentiels pour préparer l'arrivée de bébé, offerts par Maria.",
  href: "/guide-gratuit",
};

export const freeGuideSystems: FreeGuideSystem[] = [
  {
    number: "01",
    title: "Les bodies et pyjamas",
    text: "Six bodies et six pyjamas suffisent les premiers jours. Le reste, c'est du superflu.",
    icon: Shirt,
  },
  {
    number: "02",
    title: "Le coin sommeil",
    text: "Un berceau ou cododo, une gigoteuse adaptée : le sommeil se prépare sans matériel inutile.",
    icon: BedDouble,
  },
  {
    number: "03",
    title: "Le nécessaire de change",
    text: "Une trentaine de langes, un tapis à langer et de quoi nettoyer : le change devient un geste simple.",
    icon: Baby,
  },
  {
    number: "04",
    title: "La trousse de premiers soins",
    text: "Savon doux, sérum physiologique, coupe-ongles : le minimum pour les premiers soins.",
    icon: Package,
  },
  {
    number: "05",
    title: "La tenue de sortie",
    text: "Combinaison, bonnet, couverture : sortir avec bébé sans stress ni oubli.",
    icon: Heart,
  },
  {
    number: "06",
    title: "Le sac de maternité",
    text: "Une valise à la fois complète et légère, prête deux semaines avant le terme.",
    icon: Backpack,
  },
  {
    number: "07",
    title: "Ce qu'on peut laisser de côté",
    text: "La liste de ce que le marketing te vend et dont tu n'auras finalement pas besoin.",
    icon: Moon,
  },
];

export const freeGuideChecklist = [
  "Moins de stress dans la préparation.",
  "Moins d'achats inutiles.",
  "Moins d'oubli le jour J.",
  "Plus de sérénité pour accueillir bébé.",
];
