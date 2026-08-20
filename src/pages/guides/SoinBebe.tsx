import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/charge-mentale.svg";
import preview1 from "@/assets/previews/charge-mentale-1.svg";
import preview2 from "@/assets/previews/charge-mentale-2.svg";
import preview3 from "@/assets/previews/charge-mentale-3.svg";

export default function SoinBebe() {
  return (
    <ProductPage
      title="Soin Bébé après l'Accouchement"
      subtitle="Les gestes essentiels pour prendre soin de ton nouveau-né"
      price="9,90€"
      accent="bg-brand-mauve"
      accentText="text-brand-mauve"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/soin-bebe"
      description={[
        "Accueillir un nouveau-né est un bonheur immense, mais aussi une source de questions infinies. Ce guide t'accompagne dans les gestes essentiels du quotidien avec bébé, sans te submerger d'informations contradictoires.",
        "Tu apprendras les bases du change, du bain, du coucher, de l'habillage et de la communication avec ton bébé. Chaque geste est expliqué simplement, avec des illustrations claires et des conseils de sage-femme.",
        "Ce guide n'est pas un mode d'emploi rigide. C'est un accompagnement bienveillant qui te donne confiance pour prendre soin de ton bébé à ta manière, en respectant ton rythme et celui de ton enfant.",
      ]}
      chapters={[
        "Les premiers jours avec bébé",
        "Le change : gestes et routine",
        "Le bain : le premier bain et les suivants",
        "L'habillage et la température",
        "Le sommeil de bébé : repères et astuces",
        "Les pleurs : comprendre et apaiser",
        "L'alimentation : au biberon ou au sein",
        "Le portage et les déplacements",
        "Les soins du cordon et des yeux",
        "Les signaux de bébé décodés",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Les premiers jours",
      ]}
    />
  );
}
