import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/corps-apres.svg";
import preview1 from "@/assets/previews/corps-apres-1.svg";
import preview2 from "@/assets/previews/corps-apres-2.svg";
import preview3 from "@/assets/previews/corps-apres-3.svg";

export default function GuideCompletPostPartum() {
  return (
    <ProductPage
      title="Guide Complet Post-Partum"
      subtitle="Tout ce qu'il faut savoir pour les premiers mois après l'accouchement"
      price="12,90€"
      accent="bg-brand-sage"
      accentText="text-brand-sage"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/guide-complet-postpartum"
      description={[
        "Le post-partum est la période la plus méconnue de la maternité. Ce guide complet te donne toutes les informations dont tu as besoin pour comprendre ce qui se passe dans ton corps et dans tes émotions, sans alarmisme ni minimisation.",
        "De la récupération physique aux montagnes russes émotionnelles, en passant par le sommeil de bébé et la relation de couple, chaque chapitre aborde un aspect du post-partum avec bienveillance et rigueur professionnelle.",
        "Écrit par une sage-femme qui a elle-même traversé un post-partum difficile, ce guide est le compagnon que tu aurais aimé avoir en rentrant à la maison avec ton bébé.",
      ]}
      chapters={[
        "Comprendre le post-partum : les bases",
        "La récupération physique jour par jour",
        "Les émotions :Baby Blues, exhaustion, joie",
        "L'allaitement et les premiers jours",
        "Le sommeil de bébé et le tien",
        "La relation de couple en post-partum",
        "Le retour au travail : préparer sereinement",
        "Les signaux d'alerte à ne pas ignorer",
        "L'autosoin : pas un luxe, un besoin",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "La récupération physique",
      ]}
    />
  );
}
