import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/liste-naissance.svg";
import preview1 from "@/assets/previews/liste-naissance-1.svg";
import preview2 from "@/assets/previews/liste-naissance-2.svg";
import preview3 from "@/assets/previews/liste-naissance-3.svg";

export default function ListeNaissance() {
  return (
    <ProductPage
      title="Ma Liste Naissance Complète"
      subtitle="Tout ce qu'il faut préparer sereinement l'arrivée de bébé"
      price="7,90€"
      accent="bg-brand-terracotta"
      accentText="text-brand-terracotta"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/liste-naissance"
      description={[
        "Tu es enceinte et tu te demandes vraiment de quoi tu auras besoin ? La liste de naissance peut sembler interminable, et il est facile de s'y perdre entre les conseils bien intentionnés et les listes complètes qui finissent par te stresser plus qu'autre chose.",
        "Ce guide a été pensé pour t'accompagner sereinement dans cette préparation. En tant que sage-femme, j'ai vu des centaines de mamans préparer l'arrivée de leur bébé. J'ai identifié ce qui est vraiment essentiel, ce qui est utile mais pas prioritaire, et ce qu'on peut laisser de côté sans regret.",
        "Tu trouveras une liste complète organisée par âge gestationnel, des conseils pratiques pour ne pas te laisser submerger, et des suggestions pour impliquer ton/ta partenaire dans cette préparation. Parce que préparer l'arrivée de bébé, c'est déjà un premier pas vers la parentalité.",
      ]}
      chapters={[
        "Les essentiels absolus pour les premiers jours",
        "Le coin couchage : tout ce qu'il faut savoir",
        "Les tétées et l'alimentation",
        "Les couches et l'hygiène",
        "Les vêtements : combien, lesquels, pour quand ?",
        "Le matériel de transport",
        "Les accessoires utiles (mais pas indispensables)",
        "La checklist complète par semaine",
        "Conseils pour une liste de naissance sereine",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Les essentiels absolus",
      ]}
    />
  );
}
