import { copyFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const dist = join(__dirname, "..", "dist");
const index = join(dist, "index.html");
const notFound = join(dist, "404.html");
const rawSource = join(dist, "source");
const rawModels = join(dist, "models");

if (existsSync(index)) {
  copyFileSync(index, notFound);
  console.log("Wrote dist/404.html for GitHub Pages SPA fallback.");
} else {
  console.warn("dist/index.html missing; skip 404 copy.");
}

if (existsSync(rawSource)) {
  rmSync(rawSource, { recursive: true, force: true });
  console.log("Removed dist/source from deploy output.");
}

if (existsSync(rawModels)) {
  rmSync(rawModels, { recursive: true, force: true });
  console.log("Removed dist/models from deploy output.");
}
