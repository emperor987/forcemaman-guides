/**
 * Prerendering script for ForceMaman
 *
 * Starts a Vite preview server on a dynamic port, renders each public page
 * with Puppeteer, writes the resulting HTML to dist/, then shuts down the
 * server cleanly. No process is left running afterward.
 *
 * Usage:
 *   bun run build          # builds dist/
 *   node scripts/prerender.mjs  # prerenders pages into dist/
 *
 * Or combined via the "build:prerender" script in package.json.
 */

import { createServer } from "vite";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");

// All public, indexable routes
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
  "/guide-gratuit",
  "/a-propos",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
  "/remboursement",
];

async function prerender() {
  console.log("🔍 Starting prerendering...\n");

  if (!existsSync(DIST)) {
    console.error("❌ dist/ directory not found. Run 'bun run build' first.");
    process.exit(1);
  }

  // ── 1. Start Vite preview server on a dynamic port ──
  const server = await createServer({
    root: ROOT,
    configFile: resolve(ROOT, "vite.config.ts"),
    preview: {
      port: 0, // dynamic: OS picks a free port
      strictPort: false,
    },
    server: false, // no HMR dev server
  });

  await server.listen();
  const info = server.resolvedUrls;
  const previewUrl = info?.local?.[0] ?? info?.network?.[0];
  if (!previewUrl) {
    console.error("❌ Could not determine preview server URL.");
    await server.close();
    process.exit(1);
  }

  const base = previewUrl.replace(/\/$/, "");
  console.log(`📦 Preview server running at ${base}`);

  // ── 2. Launch Puppeteer ──
  const executablePath = await chromium.executablePath();
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  );

  let success = 0;
  let failed = 0;

  // ── 3. Prerender each route ──
  for (const route of PUBLIC_ROUTES) {
    const url = `${base}${route}`;
    const filePath = route === "/" ? "/index.html" : `${route}/index.html`;
    const fullPath = resolve(DIST, filePath.slice(1));

    try {
      console.log(`⏳ ${route}`);
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      await page.waitForSelector("#root > *", { timeout: 10000 });
      // Extra wait for lazy components + SEO metadata injection
      await new Promise((r) => setTimeout(r, 2000));

      const html = await page.content();

      const dir = dirname(fullPath);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

      writeFileSync(fullPath, html, "utf-8");
      console.log(`  ✅ → ${filePath}`);
      success++;
    } catch (err) {
      console.error(`  ❌ ${route}: ${err.message}`);
      failed++;
    }
  }

  // ── 4. Cleanup: close browser + server ──
  await browser.close();
  await server.close();

  console.log(`\n📊 Done: ${success} success, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
