import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/bundle.svg";
import preview1 from "@/assets/previews/bundle-1.svg";
import preview2 from "@/assets/previews/bundle-2.svg";
import preview3 from "@/assets/previews/bundle-3.svg";

export default function Bundle() {
  return (
    <ProductPage
      title="Pack Complet ForceMaman"
      subtitle="Les 6 guides pour un accompagnement global du post-partum"
      price="42,90€"
      originalPrice="61,40€"
      discount="-30%"
      accent="bg-brand-card"
      accentText="text-brand-text"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/bundle"
      description={[
        "Le Pack Complet ForceMaman réunit les six guides essentiels pour traverser la période post-partum avec bienveillance et confiance. C'est la boîte à outils complète que j'aurais aimé avoir entre les mains après la naissance de ma fille.",
        "En tant que sage-femme, j'ai accompagné des centaines de mamans. En tant que maman, j'ai vécu ce que tu vis maintenant. Ce pack combine expertise professionnelle et vécu personnel pour t'offrir un accompagnement global : de la préparation de la naissance à la récupération physique, en passant par la gestion émotionnelle, les recettes et les soins à bébé.",
        "Chaque guide peut se suffire à lui-même, mais ensemble, ils forment un parcours cohérent et complet. Tu peux les lire dans l'ordre qui te convient, et les garder précieusement pour les moments de doute. Et avec 30% de réduction, c'est l'offre la plus complète au meilleur prix.",
      ]}
      chapters={[
        "Guide 1 : Ma Liste Naissance Complète",
        "Guide 2 : Mon Corps Après l'Accouchement",
        "Guide 3 : Charge Mentale & 40 Premiers Jours",
        "Guide 4 : Recettes Post-Partum",
        "Guide 5 : Guide Complet Post-Partum",
        "Guide 6 : Soin Bébé après l'Accouchement",
      ]}
      previewPages={[
        "Liste Naissance - Introduction",
        "Corps Après - Introduction",
        "Charge Mentale - Introduction",
      ]}
      type="bundle"
    />
  );
}
