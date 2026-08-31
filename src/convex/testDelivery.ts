import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";

const PRODUCT_FILES: Record<string, { name: string; storageId: string }[]> = {
  "liste-naissance": [
    { name: "Ma_Liste_Naissance_Complete.pdf", storageId: "kg22qb5p54mgtamss1dcf6mw258cv77v" },
  ],
  "corps-apres": [
    { name: "Mon_Corps_Apres_Accouchement.pdf", storageId: "kg2fx1w1p8srng3tev3cyga1wh8cvqcf" },
  ],
  "charge-mentale": [
    { name: "Charge_Mentale_40_Premiers_Jours.pdf", storageId: "kg25k0vh48q44en77c3xdhjzsh8cv1nt" },
  ],
  "recettes-postpartum": [
    { name: "ForceMaman_Recettes_PostPartum.pdf", storageId: "kg286fq6zqfdwrakqjv95c1ern8cty2c" },
  ],
  "guide-complet-postpartum": [
    { name: "ForceMaman_Guide_Complet_PostPartum.pdf", storageId: "kg28mnf2kpqb5ma0zry9fhktqx8ctq7j" },
  ],
  "soin-bebe": [
    { name: "ForceMaman_Soin_Bebe_Apres_Accouchement.pdf", storageId: "kg27h9a6j3n90y5vpyffd2ygeh8ctxw4" },
  ],
  bundle: [
    { name: "Ma_Liste_Naissance_Complete.pdf", storageId: "kg22qb5p54mgtamss1dcf6mw258cv77v" },
    { name: "Mon_Corps_Apres_Accouchement.pdf", storageId: "kg2fx1w1p8srng3tev3cyga1wh8cvqcf" },
    { name: "Charge_Mentale_40_Premiers_Jours.pdf", storageId: "kg25k0vh48q44en77c3xdhjzsh8cv1nt" },
    { name: "ForceMaman_Recettes_PostPartum.pdf", storageId: "kg286fq6zqfdwrakqjv95c1ern8cty2c" },
    { name: "ForceMaman_Guide_Complet_PostPartum.pdf", storageId: "kg28mnf2kpqb5ma0zry9fhktqx8ctq7j" },
    { name: "ForceMaman_Soin_Bebe_Apres_Accouchement.pdf", storageId: "kg27h9a6j3n90y5vpyffd2ygeh8ctxw4" },
  ],
};

export const testCheckout = action({
  args: { productId: v.string() },
  handler: async (ctx, args) => {
    const results: string[] = [];

    try {
      const session = await ctx.runAction(api.payments.createCheckoutSession, {
        productId: args.productId,
        mode: "hosted",
      });
      if (session.url) {
        results.push(`✅ Step 1: Stripe checkout session created for "${args.productId}"`);
        results.push(`   URL: ${session.url.substring(0, 80)}...`);
      } else {
        results.push(`❌ Step 1: Failed to create checkout session`);
      }
    } catch (e: any) {
      results.push(`❌ Step 1: Error - ${e.message}`);
    }

    try {
      await ctx.runAction(api.downloads.createDownloadToken, {
        sessionId: "fake_test_session",
        productId: args.productId,
      });
      results.push(`❌ Step 2: Should have failed with fake session`);
    } catch (e: any) {
      if (e.message.includes("non confirmé") || e.message.includes("Stripe error")) {
        results.push(`✅ Step 2: Fake session correctly rejected`);
      } else {
        results.push(`⚠️ Step 2: ${e.message}`);
      }
    }

    return results;
  },
});

export const testAllProducts = action({
  args: {},
  handler: async (ctx, _args) => {
    const products = [
      "liste-naissance", "corps-apres", "charge-mentale",
      "recettes-postpartum", "guide-complet-postpartum", "soin-bebe", "bundle"
    ];
    const results: string[] = [];

    for (const productId of products) {
      try {
        const session = await ctx.runAction(api.payments.createCheckoutSession, {
          productId,
          mode: "hosted",
        });
        if (session.url) {
          results.push(`✅ ${productId}: checkout OK`);
        } else {
          results.push(`❌ ${productId}: no URL`);
        }
      } catch (e: any) {
        results.push(`❌ ${productId}: ${e.message.substring(0, 80)}`);
      }
    }

    return results;
  },
});

export const testStorageUrls = action({
  args: {},
  handler: async (ctx, _args) => {
    const results: string[] = [];

    for (const [productId, files] of Object.entries(PRODUCT_FILES)) {
      for (const file of files) {
        try {
          const url = await ctx.storage.getUrl(file.storageId);
          if (url) {
            results.push(`✅ ${productId}: ${file.name} → URL accessible`);
          } else {
            results.push(`❌ ${productId}: ${file.name} → URL null (storage missing)`);
          }
        } catch (e: any) {
          results.push(`❌ ${productId}: ${file.name} → Error: ${e.message}`);
        }
      }
    }

    return results;
  },
});
