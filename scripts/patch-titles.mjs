// One-off patch script. Run from the project root.
// Wraps every `title: <group|page>.metaTitle` (and the same inside openGraph/twitter)
// in `{ absolute: ... }` so the root layout title template doesn't double-append
// the brand for SEO pages whose `metaTitle` already includes it.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../src/app", import.meta.url).pathname.replace(/^\//, "");

let changedFiles = 0;
let totalReplacements = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) walk(full);
    else if (s.isFile() && full.endsWith("page.tsx")) patch(full);
  }
}

function patch(file) {
  const original = readFileSync(file, "utf8");
  let updated = original;

  // Replace `title: <var>.metaTitle,` (top-level or nested) with absolute form.
  // We match `<ident>.metaTitle` where ident is "group" or "page".
  const patterns = [
    // title: group.metaTitle, OR title: page.metaTitle,
    /(\b)title:\s+(group|page)\.metaTitle,/g,
  ];

  for (const re of patterns) {
    updated = updated.replace(re, (match, ws, ident) => {
      return `${ws}title: { absolute: ${ident}.metaTitle },`;
    });
  }

  if (updated !== original) {
    writeFileSync(file, updated, "utf8");
    changedFiles++;
    totalReplacements += (original.match(/\b(title:\s+(group|page)\.metaTitle)/g) || []).length;
    console.log("patched:", file.replace(process.cwd() + "\\", ""));
  }
}

walk(ROOT);
console.log("");
console.log(`Files patched: ${changedFiles}`);
console.log(`Total replacements: ${totalReplacements}`);
