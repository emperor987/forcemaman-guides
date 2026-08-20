import { readFileSync } from "fs";
import { ConvexHttpClient } from "convex/browser";

async function main() {
  const config = JSON.parse(readFileSync("convex.json", "utf8"));
  const url = config.backends?.default?.url;
  if (!url) { console.error("No URL"); process.exit(1); }

  const client = new ConvexHttpClient(url);
  const result = await client.action("identifyFiles:identifyAll" as any);
  
  for (const file of result) {
    console.log(`=== ID: ${file.id} | Size: ${file.size} ===`);
    console.log(file.firstPages?.substring(0, 200));
    console.log("");
  }
}

main().catch(console.error);
