import PDFDocument from "pdfkit";
import { createWriteStream, statSync } from "fs";
import { join } from "path";

const outputPath = join(process.cwd(), "private", "ebooks", "liste-naissance.pdf");

const TERRACOTTA = "#C97D5D";
const TEXT = "#5C4A3A";
const LIGHT = "#E8DFD4";
const WIDTH = 595.28;
const HEIGHT = 841.89;
const MARGIN = 72;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  bufferPages: true,
  info: {
    Title: "Ma Liste Naissance Complète",
    Author: "ForceMaman",
    Subject: "Guide de préparation à la naissance",
    Creator: "ForceMaman",
  },
});

const stream = createWriteStream(outputPath);
doc.pipe(stream);

function newPage() {
  doc.addPage({ margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } });
}

function drawIcon(y, emoji) {
  doc.fontSize(36).fillColor(TERRACOTTA).text(emoji, 0, y, { align: "center", width: WIDTH });
  return doc.y + 10;
}

function chapterTitle(text, y) {
  doc.fontSize(22).font("Helvetica-Bold").fillColor(TERRACOTTA).text(text, MARGIN, y, { width: WIDTH - MARGIN * 2 });
  return doc.y + 8;
}

function sectionTitle(text, y) {
  doc.fontSize(13).font("Helvetica-Bold").fillColor(TEXT).text(text, MARGIN, y, { width: WIDTH - MARGIN * 2 });
  return doc.y + 6;
}

function bodyText(text, y, opts = {}) {
  doc.fontSize(10.5).font("Helvetica").fillColor(opts.color || TEXT).text(text, MARGIN, y, { width: WIDTH - MARGIN * 2, lineGap: 4 });
  return doc.y + 6;
}

function checkItem(text, y) {
  const x = MARGIN;
  doc.save();
  doc.rect(x, y + 1, 8, 8).lineWidth(0.5).strokeColor(TERRACOTTA).stroke();
  doc.restore();
  doc.fontSize(10.5).font("Helvetica").fillColor(TEXT).text(text, x + 14, y, { width: WIDTH - MARGIN * 2 - 14, lineGap: 3 });
  return doc.y + 4;
}

function checklist(items, y) {
  for (const item of items) {
    if (doc.y > HEIGHT - MARGIN - 60) { newPage(); y = doc.y; }
    y = checkItem(item, y);
  }
  return y;
}

function quote(text, y) {
  doc.save();
  doc.moveTo(MARGIN + 2, y).lineTo(MARGIN + 2, y + 18).lineWidth(2).strokeColor(TERRACOTTA).stroke();
  doc.restore();
  doc.fontSize(10).font("Helvetica-Oblique").fillColor(TERRACOTTA).text(text, MARGIN + 12, y + 2, { width: WIDTH - MARGIN * 2 - 20 });
  return doc.y + 12;
}

function tip(text, y) {
  doc.fontSize(9.5).font("Helvetica").fillColor("#8a7563").text(text, MARGIN, y, { width: WIDTH - MARGIN * 2, lineGap: 3 });
  return doc.y + 8;
}

// ==================== COVER ====================
doc.fontSize(11).font("Helvetica").fillColor(TERRACOTTA).text("FORCEMAMAN", 0, HEIGHT / 2 - 100, { align: "center", width: WIDTH });
doc.fontSize(48).fillColor(TERRACOTTA).text("🧳", 0, HEIGHT / 2 - 60, { align: "center", width: WIDTH });
doc.fontSize(36).font("Helvetica-Bold").fillColor(TEXT).text("Ma liste naissance\ncomplète", MARGIN, HEIGHT / 2, { align: "center", width: WIDTH - MARGIN * 2 });
doc.fontSize(14).font("Helvetica-Oblique").fillColor(TERRACOTTA).text("Tout ce qu'il faut, sans oublier l'essentiel", MARGIN, doc.y + 12, { align: "center", width: WIDTH - MARGIN * 2 });

// ==================== SOMMAIRE ====================
newPage();
let y = MARGIN + 20;
doc.fontSize(24).font("Helvetica-Bold").fillColor(TERRACOTTA).text("Sommaire", MARGIN, y);
y = doc.y + 20;
const chapters = [
  "Avant de commencer", "Pourquoi bien se préparer change tout",
  "La valise de maternité — Pour toi, maman", "La valise de maternité — Pour bébé",
  "Le dossier administratif", "La liste de naissance — Sommeil",
  "La liste de naissance — Repas et allaitement", "La liste de naissance — Hygiène et change",
  "La liste de naissance — Habillage", "La liste de naissance — Sorties et déplacements",
  "Préparer la chambre et la maison", "Budget et astuces pour dépenser mieux",
  "Checklist finale récapitulative", "Ma liste personnalisée (page à remplir)",
  "Mes ressentis avant le grand jour (page à remplir)", "Un mot pour finir",
];
for (let i = 0; i < chapters.length; i++) {
  doc.fontSize(11).font("Helvetica").fillColor(TERRACOTTA).text(`${i + 1}.`, MARGIN, y, { continued: true });
  doc.fillColor(TEXT).text(` ${chapters[i]}`);
  y = doc.y + 6;
}

// ==================== CH 1 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "📋");
y = chapterTitle("1. Avant de commencer", y + 5);
y = bodyText("Préparer l'arrivée de bébé peut vite devenir une source de stress : trop de listes différentes trouvées ici et là, des conseils parfois contradictoires d'une personne à l'autre, et cette peur sourde d'oublier quelque chose d'important le jour venu.", y + 8);
y = bodyText("Ce guide a été pensé pour tu simplifier la vie. Tu y trouverez des listes claires, organisées par thème, que tu pourrez cocher au fur et à mesure de tes achats et de tes préparatifs. Chaque section a été construite à partir de ce que recherchent réellement les futures mamans, pour être la plus utile et la plus concrète possible.", y);
y = bodyText("Chaque famille est différente : utilisez ces listes comme une base solide, et adaptez-les selon tes besoins, ton budget, ton logement et ton mode de vie. Il n'existe pas une seule bonne façon de se préparer, seulement celle qui tu convient.", y);
y = quote("« On ne peut jamais être totalement prête, mais on peut être sereine. »", y + 8);

// ==================== CH 2 ====================
newPage(); y = MARGIN;
y = chapterTitle("2. Pourquoi bien se préparer change tout", y);
y = bodyText("On sous-estime souvent à quel point une préparation organisée influence les premières semaines avec bébé. Ce n'est pas une question de perfectionnisme, mais de tranquillité d'esprit : quand tout est prêt à l'avance, tu peux consacrer ton énergie à ce qui compte vraiment, ton bébé et ta récupération.", y + 8);
y = bodyText("Voici les trois bénéfices concrets d'une préparation anticipée :", y);
y = checklist([
  "Moins de stress de dernière minute : plus besoin de courir les magasins avec un nouveau-né ou en fin de grossesse",
  "Un budget mieux maîtrisé : anticiper permet de profiter des soldes, des ventes privées et d'étaler les achats sur plusieurs mois",
  "Un entourage mieux orienté : une liste claire aide ton famille et tes proches à savoir quoi offrir pour la naissance",
], y + 4);
y = bodyText("La règle d'or : commencez à préparer ton valise de maternité dès le début du 8e mois de grossesse, et le reste de la liste de naissance peut être étalé dès le 6e ou 7e mois selon ton rythme.", y + 4);

// ==================== CH 3 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "🧳");
y = chapterTitle("3. La valise de maternité — Pour toi, maman", y + 5);
y = bodyText("Ton valise doit être prête et accessible dès le 8e mois de grossesse, car un accouchement peut survenir plus tôt que prévu. Voici tout ce qu'il tu faut pour ton séjour à la maternité, qui dure généralement entre 2 et 5 jours.", y + 8);
y = sectionTitle("Trousse de toilette et hygiène", y + 4);
y = checklist([
  "Trousse de toilette complète (brosse à dents, dentifrice, déodorant, brosse à cheveux)",
  "3 à 5 culottes filet ou culottes post-partum jetables",
  "Serviettes hygiéniques maternité grand format",
  "Gel douche et shampoing au format voyage",
  "Une petite serviette de toilette personnelle",
], y + 2);
y = sectionTitle("Allaitement, si tu le prévoyez", y + 2);
y = checklist([
  "2 à 3 soutiens-gorge d'allaitement",
  "Coussinets d'allaitement lavables ou jetables",
  "Crème pour les mamelons à base de lanoline",
], y + 2);
y = sectionTitle("Confort et vêtements", y + 2);
y = checklist([
  "2 pyjas confortables et faciles à ouvrir devant si tu allaitez",
  "Une robe de chambre ou un gilet chaud",
  "Chaussettes chaudes et chaussons antidérapants",
  "Une tenue de sortie de maternité",
], y + 2);
y = sectionTitle("Le petit plus qui change tout", y + 2);
y = checklist([
  "Chargeur de téléphone avec câble long",
  "Une bouteille d'eau réutilisable pour rester hydratée",
  "Coussin d'allaitement si tu en as déjà un",
  "Quelques encas sucrés ou salés pour les petits creux",
], y + 2);

// ==================== CH 4 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "👶");
y = chapterTitle("4. La valise de maternité — Pour bébé", y + 5);
y = bodyText("Contrairement à ce qu'on pourrait croire, bébé n'a pas besoin de beaucoup de choses pour son séjour à la maternité. Voici l'essentiel, à prévoir en taille naissance.", y + 8);
y = checklist([
  "5 à 7 bodies manches longues, taille naissance",
  "5 à 7 pyjas ou grenouillères faciles à enfiler",
  "2 gigoteuses adaptées à la saison de la naissance",
  "1 bonnet et 1 paire de moufles, hors saison estivale",
  "Une paire de chaussettes ou de chaussons",
  "Une couverture légère pour le trajet du retour",
  "Une turbulette si le séjour venait à se prolonger",
], y + 4);
y = tip("Bon à savoir : la plupart des maternités fournissent les couches, le nécessaire de change et parfois même quelques vêtements pour les premiers jours.", y + 4);

// ==================== CH 5 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "📋");
y = chapterTitle("5. Le dossier administratif", y + 5);
y = bodyText("Un dossier bien préparé tu évite du stress inutile le jour de l'accouchement. Rassemblez tous ces documents dans une pochette unique, à glisser directement dans ton valise.", y + 8);
y = checklist([
  "Carte d'identité et carte vitale, les vôtres et celles du futur second parent si applicable",
  "Dossier de suivi de grossesse complet, remis par ton sage-femme ou gynécologue",
  "Carnet de santé si tu en possédez déjà un (rare pour un premier enfant)",
  "Attestation d'employeur ou dossier de congé maternité",
  "Projet de naissance, si tu en as rédigé un",
  "Résultats des dernières échographies et analyses",
], y + 4);

// ==================== CH 6 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "🛏️");
y = chapterTitle("6. La liste de naissance — Sommeil", y + 5);
y = bodyText("Le sommeil de bébé (et le vôtre) est l'un des sujets qui reviennent le plus dans les recherches des jeunes parents. Voici l'équipement de base pour des nuits plus sereines.", y + 8);
y = checklist([
  "Lit bébé avec matelas ferme aux normes en vigueur",
  "2 à 3 draps housses adaptés à la taille exacte du matelas",
  "1 à 2 gigoteuses par saison, à choisir selon le TOG adapté",
  "Un babyphone, audio ou vidéo selon tes préférences et ton budget",
  "Une veilleuse douce, optionnelle mais pratique pour les tétées de nuit",
  "Un tapis de change ou une têtière si le lit est surélevé",
], y + 4);
y = tip("Astuce : évitez tout coussin, couverture épaisse, tour de lit ou peluche dans le lit de bébé les premiers mois, conformément aux recommandations de prévention de la mort subite du nourrisson.", y + 4);

// ==================== CH 7 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "🍼");
y = chapterTitle("7. La liste de naissance — Repas et allaitement", y + 5);
y = bodyText("Que tu choisissiez l'allaitement, le biberon ou une solution mixte, voici ce qu'il tu faut pour bien démarrer.", y + 8);
y = sectionTitle("Si tu allaitez", y + 4);
y = checklist([
  "Coussin d'allaitement pour soutenir bébé et soulager ton dos",
  "3 à 5 soutiens-gorge et brassières d'allaitement",
  "Un tire-lait manuel ou électrique",
  "Sachets ou pots de conservation du lait maternel",
], y + 2);
y = sectionTitle("Si tu donnez le biberon, ou en complément", y + 2);
y = checklist([
  "2 à 3 biberons anti-coliques de contenances adaptées",
  "Un stérilisateur électrique ou une casserole dédiée",
  "Un chauffe-biberon, particulièrement pratique la nuit",
  "Le lait infantile adapté à l'âge de bébé, sur recommandation de ton pédiatre",
], y + 2);
y = sectionTitle("Dans tous les cas", y + 2);
y = checklist([
  "Bavoirs en tissu, prévoir au moins 5 à 8 exemplaires",
  "Une chaise haute évolutive, à prévoir pour la diversification alimentaire vers 4 à 6 mois",
], y + 2);

// ==================== CH 8 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "📋");
y = chapterTitle("8. La liste de naissance — Hygiène et change", y + 5);
y = checklist([
  "Table à langer fixe ou tapis de change nomade pour les déplacements",
  "Couches taille 1, en prévoyant aussi un petit stock de taille 2 car bébé grandit vite",
  "Lingettes nettoyantes ou coton et eau nettoyante, plus doux pour la peau du nouveau-né",
  "Liniment oléo-calcaire, un incontournable pour le change quotidien",
  "Crème pour le change en cas de rougeurs",
  "Baignoire pour bébé ou transat de bain",
  "2 à 3 serviettes de bain à capuche",
  "Thermomètre de bain pour vérifier la température de l'eau",
  "Produits de soin adaptés : savon surgras, huile de massage douce",
], y + 10);

// ==================== CH 9 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "👶");
y = chapterTitle("9. La liste de naissance — Habillage", y + 5);
y = bodyText("Inutile de multiplier les achats en taille naissance : les bébés grandissent vite, souvent en quelques semaines seulement. Privilégiez la qualité et le confort à la quantité.", y + 8);
y = checklist([
  "6 à 8 bodies manches longues, taille naissance",
  "6 à 8 pyjas ou grenouillères",
  "2 gilets ou petites vestes légères",
  "Bonnets et moufles selon la saison de naissance",
  "Chaussettes ou chaussons souples",
  "Une tenue de sortie de maternité un peu plus habillée",
], y + 4);

// ==================== CH 10 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "🛒");
y = chapterTitle("10. La liste de naissance — Sorties et déplacements", y + 5);
y = checklist([
  "Un siège auto adapté au poids de naissance, conforme à la norme en vigueur",
  "Une poussette ou un système de portage adapté à ton mode de vie et ton logement",
  "Un sac à langer équipé, avec de quoi changer bébé en toutes circonstances",
  "Une écharpe de portage ou un porte-bébé physiologique",
  "Une couverture ou une housse de pluie pour la poussette",
], y + 4);
y = tip("Conseil budget : le siège auto et la poussette représentent souvent le plus gros poste de dépense de la liste de naissance. N'hésite pas à les inclure dans ton liste de naissance officielle pour que plusieurs proches puissent participer ensemble.", y + 4);

// ==================== CH 11 ====================
newPage(); y = MARGIN;
y = drawIcon(y, "📋");
y = chapterTitle("11. Préparer la chambre et la maison", y + 5);
y = sectionTitle("La chambre de bébé", y + 4);
y = checklist([
  "Vérifier que le lit respecte les normes de sécurité en vigueur",
  "Prévoir un espace de rangement accessible pour les vêtements et le linge",
  "Installer un thermomètre pour surveiller la température de la pièce, idéalement entre 18 et 20°C",
  "Prévoir un éclairage doux et progressif pour les tétées ou changes de nuit",
  "Sécuriser les prises électriques et fixer les meubles hauts si tu as d'autres enfants à la maison",
], y + 2);
y = sectionTitle("Le reste de la maison", y + 2);
y = checklist([
  "Préparer un coin repas ou allaitement confortable, avec de quoi tu hydrater à portée de main",
  "Anticiper quelques repas à congeler pour les deux à trois premières semaines",
  "Prévoir une place dédiée pour le sac à langer et les affaires de sortie",
  "Informer ton entourage de tes préférences pour les visites des premiers jours : horaires, durée, cadeaux",
], y + 2);

// ==================== CH 12 ====================
newPage(); y = MARGIN;
y = chapterTitle("12. Budget et astuces pour dépenser mieux", y);
y = bodyText("Équiper l'arrivée de bébé représente un budget conséquent, mais il existe de nombreuses façons de dépenser intelligemment sans rien sacrifier au confort et à la sécurité de ton enfant.", y + 8);
y = checklist([
  "La seconde main fonctionne très bien pour la puériculture non soumise à des normes de sécurité strictes",
  "Pour le siège auto, privilégiez toujours le neuf ou une provenance de confiance connue",
  "Étalez tes achats sur plusieurs mois pour profiter des périodes de soldes et ventes privées",
  "La liste de naissance permet de mutualiser les gros achats entre plusieurs proches",
  "N'achetez le change en trop grande quantité qu'en taille 1 : les besoins évoluent vite",
], y + 4);

// ==================== CH 13 ====================
newPage(); y = MARGIN;
y = chapterTitle("13. Checklist finale récapitulative", y);
y = bodyText("Une dernière vérification avant le grand jour, à faire idéalement en fin de 8e mois :", y + 8);
y = checklist([
  "Valise de maternité prête et accessible près de la porte d'entrée",
  "Siège auto installé et vérifié dans le véhicule",
  "Lit de bébé monté, testé et conforme aux normes de sécurité",
  "Stock de couches taille 1 disponible à la maison",
  "Dossier administratif complet dans la valise",
  "Numéros importants enregistrés dans le téléphone : maternité, sage-femme, pédiatre, personne de confiance",
  "Personne de confiance prévenue pour garder un ainé ou un animal si besoin",
  "Trajet jusqu'à la maternité anticipé : temps de route, essence, options de parking",
  "Quelques repas préparés et congelés pour le retour à la maison",
], y + 4);

// ==================== PAGE PERSO ====================
newPage(); y = MARGIN;
y = drawIcon(y, "📋");
y = chapterTitle("Ma liste personnalisée", y + 5);
y = bodyText("Utilise cet espace pour noter ce qu'il te manque encore, au fil de tes achats et de tes envies.", y + 8);
for (let i = 0; i < 14; i++) {
  doc.save();
  doc.rect(MARGIN + 12, y + 1, 8, 8).lineWidth(0.5).strokeColor(TERRACOTTA).stroke();
  doc.restore();
  doc.moveTo(MARGIN + 28, y + 10).lineTo(WIDTH - MARGIN, y + 10).lineWidth(0.3).strokeColor(LIGHT).stroke();
  y += 22;
}

// ==================== RESSENTIS ====================
newPage(); y = MARGIN;
y = drawIcon(y, "👶");
y = chapterTitle("Mes ressentis avant le grand jour", y + 5);
y = bodyText("Prends un moment pour noter ce que tu ressens à l'approche de la naissance : tes espoirs, tes questions, tes craintes aussi. Il n'y a pas de mauvaise réponse.", y + 8);
const prompts = [
  "Ce qui m'excite le plus dans cette arrivée...",
  "Ce qui m'inquiète un peu...",
  "La personne sur qui je sais pouvoir compter...",
  "Un mot que je veux me rappeler ce jour-là...",
];
for (const p of prompts) {
  y += 8;
  doc.fontSize(11).font("Helvetica-Bold").fillColor(TEXT).text(p, MARGIN, y, { width: WIDTH - MARGIN * 2 });
  y = doc.y + 4;
  doc.moveTo(MARGIN, y).lineTo(WIDTH - MARGIN, y).lineWidth(0.3).strokeColor(LIGHT).stroke();
  y += 18;
  doc.moveTo(MARGIN, y).lineTo(WIDTH - MARGIN, y).lineWidth(0.3).strokeColor(LIGHT).stroke();
  y += 18;
}

// ==================== MOT POUR FINIR ====================
newPage(); y = HEIGHT / 2 - 80;
y = drawIcon(y, "🧳");
y = chapterTitle("16. Un mot pour finir", y + 15);
y = bodyText("Merci d'avoir choisi ce guide pour tu accompagner dans cette étape si particulière de ton vie.", y + 8);
doc.fontSize(10.5).font("Helvetica-Oblique").fillColor(TEXT).text("Tu voilà prête. Le plus important n'est pas d'avoir absolument tout, mais d'être sereine pour accueillir ton bébé dans les meilleures conditions.", MARGIN, y + 4, { width: WIDTH - MARGIN * 2 });
y = doc.y + 16;
doc.fontSize(11).font("Helvetica-Oblique").fillColor(TERRACOTTA).text("Toute l'équipe ForceMaman tu souhaite une belle arrivée.", MARGIN, y, { align: "center", width: WIDTH - MARGIN * 2 });

doc.end();

stream.on("finish", () => {
  const stat = statSync(outputPath);
  const pages = doc.bufferedPageRange();
  console.log(`✅ PDF generated: ${outputPath}`);
  console.log(`   Size: ${(stat.size / 1024).toFixed(0)} KB`);
  console.log(`   Pages: ${pages.count}`);
});
