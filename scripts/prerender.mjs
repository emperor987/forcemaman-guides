/**
 * Prerender public ForceMaman routes into dist/.
 * Run after `vite build`; requires a Chromium-compatible browser runtime.
 */
import { createServer } from "vite";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");
const PRODUCTION_ORIGIN = "https://forcemaman.store";

const PUBLIC_ROUTES = [
  "/",
  "/guides",
  "/guides/liste-naissance",
  "/guides/corps-apres",
  "/guides/charge-mentale",
  "/guides/recettes-postpartum",
  "/guides/guide-complet-postpartum",
  "/guides/soin-bebe",
  "/guides/bundle",
  "/journal",
  "/journal/charge-mentale-7-gestes",
  "/journal/5-produits",
  "/journal/rituel-matin",
  "/journal/batch-cooking",
  "/journal/linge",
  "/journal/premier-mois",
  "/journal/chambre-bebe",
  "/journal/journal-decharge",
  "/journal/perinee-reeducation-douce",
  "/journal/comprendre-pleurs-bebe",
  "/journal/couple-postpartum",
  "/guide-gratuit",
  "/a-propos",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
  "/remboursement",
];

function outputPath(route) {
  return resolve(DIST, route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
}

function ensureProductionCanonical(html, route) {
  const productionUrl = `${PRODUCTION_ORIGIN}${route === "/" ? "/" : route}`;
  return html
    .replace(/(<link\s+rel=["']canonical["']\s+href=["'])[^"']*(["'])/i, `$1${productionUrl}$2`)
    .replace(/(<meta\s+property=["']og:url["']\s+content=["'])[^"']*(["'])/i, `$1${productionUrl}$2`)
    .replace(/(<meta\s+property=["']og:image["']\s+content=["'])[^"']*\/og-image\.png(["'])/i, `$1${PRODUCTION_ORIGIN}/og-image.png$2`)
    .replace(/(<meta\s+name=["']twitter:image["']\s+content=["'])[^"']*\/og-image\.png(["'])/i, `$1${PRODUCTION_ORIGIN}/og-image.png$2`);
}

async function prerender() {
  if (!existsSync(DIST)) throw new Error("dist/ directory not found. Run `bun run build` first.");

  let server;
  let browser;
  try {
    server = await createServer({
      root: ROOT,
      configFile: resolve(ROOT, "vite.config.ts"),
      server: { middlewareMode: false, host: "127.0.0.1", port: 5173, strictPort: false },
      preview: { host: "127.0.0.1", port: 5173, strictPort: false },
    });
    await server.listen();
    const base = server.resolvedUrls?.local?.[0]?.replace(/\/$/, "");
    if (!base) throw new Error("Could not determine preview server URL.");
    console.log(`Preview server: ${base}`);

    const executablePath = await chromium.executablePath();
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: true,
    });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");

    let success = 0;
    for (const route of PUBLIC_ROUTES) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
      if (!response || !response.ok()) throw new Error(`${route}: HTTP ${response?.status() ?? "unknown"}`);
      await page.waitForSelector("#root > *", { timeout: 10000 });
      const html = ensureProductionCanonical(await page.content(), route);
      const target = outputPath(route);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, html, "utf8");
      console.log(`✓ ${route} -> ${target.replace(`${DIST}/`, "")}`);
      success++;
    }
    console.log(`Prerendered ${success}/${PUBLIC_ROUTES.length} routes.`);
  } finally {
    if (browser) await browser.close().catch(() => undefined);
    if (server) await server.close().catch(() => undefined);
  }
}

prerender().catch((error) => {
  console.error(`Prerender failed: ${error.message}`);
  process.exitCode = 1;
});
