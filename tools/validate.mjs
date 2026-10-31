// Pre-deploy check: every local file the site refers to must exist. Exit 1 on a missing file.
// Generated icons (images/icons/*) are fetched at deploy time, so a gap there is only a warning.
// src/data/projects.js keeps legacy image fields; images are mapped in sections.js (IMG), so that file is skipped.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";

const skip = new Set([".git", ".github", "node_modules", "tools"]);
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (skip.has(e.name) ? [] : e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
const files = walk(".").filter((f) => /\.(html|js|css)$/.test(f) && !f.endsWith("src/data/projects.js"));
const OPTIONAL = new Set(["images/migration-dashboard.webp"]); // legacy slot in extras.js, removed at runtime by sections.js
const bad = [], warn = [];
const isLocal = (u) => u && !/^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/.test(u) && !u.includes("${");
const check = (from, ref) => {
  const clean = decodeURIComponent(ref.split("#")[0].split("?")[0]);
  if (!clean || !isLocal(clean)) return;
  const path = clean.startsWith("/") ? clean.slice(1) : join(dirname(from), clean);
  if (existsSync(path) || OPTIONAL.has(path)) return;
  (path.startsWith("images/icons/") ? warn : bad).push(`${from} -> ${clean}`);
};
for (const f of files) {
  const t = readFileSync(f, "utf8");
  if (f.endsWith(".html")) for (const m of t.matchAll(/(?:src|href)="([^"]+)"/g)) check(f, m[1]);
  if (f.endsWith(".css")) for (const m of t.matchAll(/url\(["']?([^"')]+)["']?\)/g)) check(f, m[1]);
  if (f.endsWith(".js")) {
    for (const m of t.matchAll(/(?:from|import\()\s*["'](\.[^"']+)["']/g)) check(f, m[1]);
    for (const m of t.matchAll(/["'`]((?:public|images|src)\/[^"'`]+\.(?:png|jpe?g|svg|webp|gif|js))["'`]/g)) check("index.html", m[1]);
  }
}
warn.forEach((w) => console.warn("WARN (generated icon)", w));
if (bad.length) { console.error("MISSING FILES:\n" + bad.join("\n")); process.exit(1); }
console.log(`validate: ${files.length} files checked, all references resolve`);
