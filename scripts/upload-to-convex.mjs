/**
 * Upload PDFs to Convex File Storage via direct HTTP API.
 * Usage: node scripts/upload-to-convex.mjs
 */
import { readFileSync } from "fs";

const CONVEX_URL = "https://glorious-grasshopper-168.convex.cloud";

// Get auth token by calling any public query first
async function getAuthToken() {
  // Convex HTTP API needs an auth token for mutations/actions
  // We'll use the deploy key from env or the convex dev auth
  const res = await fetch(`${CONVEX_URL}/api/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: "payments:syncProducts",
      args: {},
    }),
  });
  return null; // Convex public APIs don't need auth for queries
}

const files = [
  { name: "Ma_Liste_Naissance_Complete.pdf", path: "/tmp/Ma_Liste_Naissance_Complete.pdf" },
  { name: "Mon_Corps_Apres_Accouchement.pdf", path: "/tmp/Mon_Corps_Apres_Accouchement.pdf" },
  { name: "Charge_Mentale_40_Premiers_Jours.pdf", path: "/tmp/Charge_Mentale_40_Premiers_Jours.pdf" },
];

async function uploadFile(file) {
  const buffer = readFileSync(file.path);
  const blob = new Blob([buffer], { type: "application/pdf" });
  
  // Use Convex HTTP API for file upload
  const formData = new FormData();
  formData.append("file", blob, file.name);
  
  const res = await fetch(`${CONVEX_URL}/api/storage/upload`, {
    method: "POST",
    body: formData,
  });
  
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed: ${res.status} ${text}`);
  }
  
  const data = await res.json();
  return data.storageId;
}

async function main() {
  for (const file of files) {
    console.log(`Uploading ${file.name} (${(readFileSync(file.path).length / 1024).toFixed(0)} KB)...`);
    try {
      const storageId = await uploadFile(file);
      console.log(`  ✅ ${storageId}`);
    } catch (err) {
      console.error(`  ❌ ${err.message}`);
    }
  }
}

main().catch(console.error);
