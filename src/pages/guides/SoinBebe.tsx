import ProductPage from "@/components/ProductPage";
import cover from "@/assets/covers/soin-bebe.svg";
import preview1 from "@/assets/previews/soin-bebe-1.svg";
import preview2 from "@/assets/previews/soin-bebe-2.svg";
import preview3 from "@/assets/previews/soin-bebe-3.svg";

export default function SoinBebe() {
  return (
    <ProductPage
      title="Soin Bébé après l'Accouchement"
      subtitle="Les gestes essentiels, en toute sérénité"
      price="9,90€"
      accent="bg-brand-mauve"
      accentText="text-brand-mauve"
      cover={cover}
      previewImages={[preview1, preview2, preview3]}
      path="/guides/soin-bebe"
      description={[
        "Accueillir un nouveau-né est un bonheur immense, mais aussi une source de questions infinies. Quand faire le premier bain ? Comment bien l'habiller ? Pourquoi pleure-t-il si souvent ? Ce guide te donne des réponses claires, sans alarmisme, basées sur les recommandations des professionnels de santé.",
        "Chaque geste du quotidien est expliqué simplement : le change, le bain, le coucher, l'habillage, l'alimentation, les soins du cordon, le portage. Tu trouveras des illustrations claires, des check-lists à imprimer et des conseils pour chaque situation (pleurs, coliques, sommeil, température).",
        "Ce guide n'est pas un mode d'emploi rigide. C'est un compagnon bienveillant qui te donne confiance pour prendre soin de ton bébé à ta manière, en respectant ton rythme et celui de ton enfant. Et surtout, il te rappelle qu'il n'y a pas de maman parfaite, il y a une maman qui fait de son mieux, et c'est déjà énorme.",
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
        "Les signaux de bébé décodés",
        "Les soins du cordon et des yeux",
      ]}
      previewPages={[
        "Page de garde",
        "Le change",
        "Les premiers jours",
      ]}
    />
  );
}
