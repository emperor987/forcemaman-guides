import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/liste-naissance.svg";
import preview1 from "@/assets/previews/liste-naissance-1.svg";
import preview2 from "@/assets/previews/liste-naissance-2.svg";
import preview3 from "@/assets/previews/liste-naissance-3.svg";

export default function RecettesPostPartum() {
  return (
    <ProductPage
      title="Recettes Post-Partum"
      subtitle="Des repas simples et nourrissants pour les premières semaines"
      price="8,90€"
      accent="bg-brand-terracotta"
      accentText="text-brand-terracotta"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/recettes-postpartum"
      description={[
        "Les premières semaines après l'accouchement sont intenses. Manger sainement devient un défi quand on manque de temps, d'énergie et d'idées. Ce guide te propose des recettes pensées pour les mamans en post-partum : simples, rapides et nourrissantes.",
        "Chaque recette a été choisie pour ses bienfaits sur la récupération et l'allaitement. Tu trouveras des idées de repas pour chaque moment de la journée, avec une liste de courses prête à l'emploi et des conseils pour anticiper les repas les jours difficiles.",
        "En tant que sage-femme, je sais que bien manger n'est pas un luxe, c'est un besoin. Ce guide est là pour t'aider à te nourrir simplement, sans culpabilité, même les jours où tu n'as pas la force de cuisiner.",
      ]}
      chapters={[
        "Pourquoi bien manger en post-partum compte",
        "Les repas express pour les jours sans énergie",
        "Les smoothies et collations riches en nutriments",
        "Les recettes à préparer à l'avance",
        "Les plats pour l'allaitement",
        "Les recettes réconfortantes du soir",
        "La liste de courses de la semaine",
        "Les conseils pour manger quand on a un nouveau-né",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Les repas express",
      ]}
    />
  );
}
