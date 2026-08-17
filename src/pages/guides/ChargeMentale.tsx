import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/charge-mentale.svg";
import preview1 from "@/assets/previews/charge-mentale-1.svg";
import preview2 from "@/assets/previews/charge-mentale-2.svg";
import preview3 from "@/assets/previews/charge-mentale-3.svg";

export default function ChargeMentale() {
  return (
    <ProductPage
      title="Charge Mentale & 40 Premiers Jours"
      subtitle="Gérer le tsunami émotionnel des premières semaines"
      price="11,90€"
      accent="bg-brand-mauve"
      accentText="text-brand-mauve"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/charge-mentale"
      description={[
        "Les premières semaines après l'arrivée de bébé sont un tourbillon d'émotions. Joie immense, fatigue extrême, doutes paralysants, pleurs inexpliqués... tout peut coexister en l'espace de quelques heures. C'est normal. C'est même humain.",
        "Ce guide est là pour t'accompagner dans cette période intense. Tu y trouveras des outils concrets pour gérer la charge mentale, des conseils pour communiquer avec ton/ta partenaire, et des rituels d'autosoins qui ne demandent pas 30 minutes de libre (parce qu'on sait que c'est impossible).",
        "J'ai écrit ce guide en me basant sur ce que j'ai vécu moi-même et ce que j'ai vu vivre à des centaines de mamans. Pas de solutions miracles, pas de culpabilisation si tu ne gères pas tout. Juste de l'accompagnement et des pistes pour traverser cette période avec un peu plus de sérénité.",
      ]}
      chapters={[
        "Le tourbillon émotionnel : comprendre ce qui t'arrive",
        "La charge mentale : cette charge invisible",
        "Communiquer avec son/ta partenaire",
        "Les émotions qui débordent : quand c'est trop",
        "L'isolement : briser la solitude",
        "Le retour à l'équilibre : les premiers rituels",
        "L'autosoins en 5 minutes maximum",
        "Les relations familiales : poser ses limites",
        "Quand consulter : les signaux d'alerte",
        "Ressources et lignes d'écoute",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Le tourbillon émotionnel",
      ]}
    />
  );
}
