import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/recettes-postpartum.svg";
import preview1 from "@/assets/previews/recettes-postpartum-1.svg";
import preview2 from "@/assets/previews/recettes-postpartum-2.svg";
import preview3 from "@/assets/previews/recettes-postpartum-3.svg";

export default function RecettesPostPartum() {
  return (
    <ProductPage
      title="Recettes Post-Partum"
      subtitle="Manger sainement, simplement, sans culpabilité"
      price="8,90€"
      accent="bg-brand-terracotta"
      accentText="text-brand-terracotta"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/recettes-postpartum"
      description={[
        "Les premières semaines après l'accouchement, cuisiner devient un défi. Tu manques de temps, d'énergie, parfois d'idées. Et pourtant, bien manger reste essentiel pour ta récupération et, si tu allaites, pour ton lait. Ce guide a été pensé pour t'accompagner concrètement : des recettes rapides, des plats que tu peux préparer à l'avance, et une liste de courses qui t'évite de stresser au supermarché avec un bébé dans les bras.",
        "Chaque recette a été choisie pour ses bienfaits sur la récupération post-partum : aliments riches en fer, en calcium, en oméga-3, en protéines. Pas de régime, pas d'injonction, juste des repas simples et nourrissants qui te font du bien. Tu trouveras des idées pour le petit-déjeuner, le déjeuner, le dîner, et surtout des collations rapides pour les creux entre les tétées.",
        "En tant que sage-femme, je vois chaque jour des mamans qui n'ont pas le temps de manger correctement. Ce guide est là pour te rappeler que te nourrir, c'est aussi prendre soin de bébé. Et avec des recettes à 15 minutes maximum, même les jours les plus difficiles, tu peux te préparer un repas qui te remet sur pied.",
      ]}
      chapters={[
        "Pourquoi bien manger en post-partum compte",
        "Les recettes express à 15 minutes",
        "Les smoothies et collations riches en nutriments",
        "Les plats à préparer à l'avance et congeler",
        "Les repas adaptés à l'allaitement",
        "Les recettes réconfortantes du soir",
        "La liste de courses de la semaine",
        "Manger quand on a un nouveau-né : les astuces",
        "Les erreurs à éviter et les aliments à privilégier",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Les repas express",
      ]}
    />
  );
}
