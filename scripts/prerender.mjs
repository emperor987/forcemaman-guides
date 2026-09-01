/**
 * Prerendering script for ForceMaman
 * Generates static HTML files for all public pages so search engines
 * can crawl full content without executing JavaScript.
 *
 * Usage: node scripts/prerender.mjs
 * Run after: vite build
 *
 * Uses puppeteer-core + @sparticuz/chromium (already in devDeps)
 * to render each page and extract the final HTML.
 */

import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

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

// Routes that should NOT be prerendered (private/dynamic)
const NO_PRERENDER = ["/auth", "/dashboard", "/commande", "/api"];

const PORT = 4173;

async function prerender() {
  console.log("🔍 Starting prerendering...\n");

  // Check if dist exists
  if (!existsSync(DIST)) {
    console.error("❌ dist/ directory not found. Run 'vite build' first.");
    process.exit(1);
  }

  const executablePath = await chromium.executablePath();
  console.log(`📦 Chromium: ${executablePath}`);

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

  for (const route of PUBLIC_ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const filePath = route === "/" ? "/index.html" : `${route}/index.html`;
    const fullPath = resolve(DIST, filePath.slice(1));

    try {
      console.log(`⏳ Prerendering: ${route}`);
      await page.goto(url, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait for React to render
      await page.waitForSelector("#root > *", { timeout: 10000 });

      // Extra wait for lazy-loaded components and SEO metadata
      await new Promise((r) => setTimeout(r, 2000));

      // Extract the rendered HTML
      const html = await page.content();

      // Write to dist
      const dir = dirname(fullPath);
      if (!existsSync(dir)) {
        const { mkdirSync } = await import("fs");
        mkdirSync(dir, { recursive: true });
      }
      writeFileSync(fullPath, html, "utf-8");
      console.log(`  ✅ ${route} → ${filePath}`);
      success++;
    } catch (err) {
      console.error(`  ❌ ${route}: ${err.message}`);
      failed++;
    }
  }

  await browser.close();

  console.log(`\n📊 Prerendering complete: ${success} success, ${failed} failed`);

  if (failed > 0) {
    console.log("⚠️  Some pages failed but the build continues.");
  }
}

prerender().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
