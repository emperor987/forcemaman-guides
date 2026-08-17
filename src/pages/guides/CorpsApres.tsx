import ProductPage from "@/components/ProductPage";

export default function CorpsApres() {
  return (
    <ProductPage
      title="Mon Corps Après l'Accouchement"
      subtitle="Comprendre et accompagner les changements de ton corps"
      price="9,90€"
      accent="bg-brand-sage"
      accentText="text-brand-sage"
      description={[
        "Ton corps vient de vivre quelque chose d'extraordinaire. Et maintenant, tu te demandes : est-ce que tout reviendra comme avant ? Cette question, je l'ai entendue des centaines de fois en tant que sage-femme, et je me la suis posée moi-même après la naissance de ma fille.",
        "Ce guide n'est pas un programme de remise en forme. C'est un guide bienveillant pour comprendre ce qui se passe dans ton corps, savoir ce qui est normal, et apprendre à l'écouter. Tu y trouveras des informations sur la récupération physique, des séquences douces pour retrouver ton périnée, et surtout, des réassurances sur ce qui est temporaire et ce qui nécessite un avis professionnel.",
        "Parce que ton corps mérite d'être traité avec respect et douceur après ce qu'il a accompli. Pas d'injonction à la reprise du sport. Juste de l'écoute et de la patience.",
      ]}
      chapters={[
        "Les changements du post-partum : ce qui est normal",
        "La récupération physique : les premières semaines",
        "Le périnée : séquences de rééducation douces",
        "Les douleurs : quand s'inquiéter ?",
        "L'alimentation et l'hydratation",
        "Le sommeil (oui, c'est possible)",
        "La reprise de l'activité physique",
        "Les signaux d'alerte à connaître",
        "Ressources et professionnels de santé",
      ]}
      previewPages={[
        "Page de garde",
        "Introduction",
        "Les changements du post-partum",
      ]}
    />
  );
}
