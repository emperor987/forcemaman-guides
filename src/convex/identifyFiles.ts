"use node";

import { action } from "./_generated/server";

const STORAGE_IDS = [
  "kg22qb5p54mgtamss1dcf6mw258cv77v",
  "kg25k0vh48q44en77c3xdhjzsh8cv1nt",
  "kg2fx1w1p8srng3tev3cyga1wh8cvqcf",
  "kg28mnf2kpqb5ma0zry9fhktqx8ctq7j",
  "kg286fq6zqfdwrakqjv95c1ern8cty2c",
  "kg27h9a6j3n90y5vpyffd2ygeh8ctxw4",
];

export const identifyAll = action({
  args: {},
  handler: async (ctx) => {
    const results: { id: string; size: number; url: string | null }[] = [];

    for (const id of STORAGE_IDS) {
      try {
        const url = await ctx.storage.getUrl(id);
        results.push({ id, size: 0, url });
      } catch (err) {
        results.push({ id, size: 0, url: null });
      }
    }

    return results;
  },
});
