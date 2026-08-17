import ProductPage from "@/components/ProductPage";

export default function Bundle() {
  return (
    <ProductPage
      title="Pack Complet ForceMaman"
      subtitle="Les 3 guides pour un accompagnement global du post-partum"
      price="22,90€"
      originalPrice="29,70€"
      discount="-23%"
      accent="bg-brand-card"
      accentText="text-brand-text"
      coverTextColor="text-brand-text"
      buttonAccent="bg-brand-terracotta"
      description={[
        "Le Pack Complet ForceMaman réunit les trois guides essentiels pour traverser la période post-partum avec bienveillance et confiance. C'est la boîte à outils complète que j'aurais aimé avoir entre les mains après la naissance de ma fille.",
        "En tant que sage-femme, j'ai accompagné des centaines de mamans. En tant que maman, j'ai vécu ce que tu vis maintenant. Ce pack combine expertise professionnelle et vécu personnel pour t'offrir un accompagnement global : de la préparation de la naissance à la récupération physique, en passant par la gestion émotionnelle des premières semaines.",
        "Chaque guide peut se suffire à lui-même, mais ensemble, ils forment un parcours cohérent et complet. Tu peux les lire dans l'ordre qui te convient, revenir à celui dont tu as besoin à un moment donné, et les garder précieusement pour les moments de doute.",
      ]}
      chapters={[
        "Guide 1 : Ma Liste Naissance Complète",
        "Guide 2 : Mon Corps Après l'Accouchement",
        "Guide 3 : Charge Mentale & 40 Premiers Jours",
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
