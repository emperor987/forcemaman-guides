import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/guide-complet-postpartum.svg";
import preview1 from "@/assets/previews/guide-complet-postpartum-1.svg";
import preview2 from "@/assets/previews/guide-complet-postpartum-2.svg";
import preview3 from "@/assets/previews/guide-complet-postpartum-3.svg";

export default function GuideCompletPostPartum() {
  return (
    <ProductPage
      title="Guide Complet Post-Partum"
      subtitle="Comprendre ce qui change, un jour à la fois"
      price="12,90€"
      accent="bg-brand-sage"
      accentText="text-brand-sage"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/guide-complet-postpartum"
      description={[
        "Le post-partum est la période la plus méconnue de la maternité. On te prépare à l'accouchement, mais personne ne te dit vraiment ce qui t'attend une fois rentrée à la maison. Ce guide complet t'accompagne dans les premières semaines avec la rigueur d'une sage-femme et la douceur de quelqu'un qui l'a vécu.",
        "Tu apprendras à comprendre les changements de ton corps (ce qui est normal, ce qui mérite un avis médical), à naviguer dans le labyrinthe émotionnel des premières semaines (baby blues, anxiété, joie intense, épuisement), et à trouver des repères simples pour le sommeil de bébé, l'alimentation, la relation de couple et l'organisation du quotidien.",
        "Ce n'est pas un mode d'emploi rigide. C'est un compagnon de route bienveillant, rempli de conseils pratiques, de listes à cocher et de rappels que tu es exactement la maman dont ton bébé a besoin. Garde-le sous la main, reviens-y les jours de doute, et n'oublie jamais : le post-partum n'est pas une compétition, c'est une saison de vie.",
      ]}
      chapters={[
        "Comprendre le post-partum : les bases",
        "La récupération physique jour par jour",
        "Les émotions : baby blues, épuisement, joie",
        "L'allaitement et les premiers jours",
        "Le sommeil de bébé et le tien",
        "La relation de couple en post-partum",
        "Le retour au travail : préparer sereinement",
        "Les signaux d'alerte à ne pas ignorer",
        "L'autosoin : pas un luxe, un besoin",
        "Le réseau d'aide : qui contacter et quand",
      ]}
      previewPages={[
        "Page de garde",
        "La récupération physique",
        "Le tourbillon émotionnel",
      ]}
    />
  );
}
