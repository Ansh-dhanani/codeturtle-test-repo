import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const exts = new Set([".ts", ".tsx", ".js", ".mjs"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (exts.has(entry.name.match(/\.[^.]+$/)?.[0]?.toLowerCase() ?? "")) yield full;
  }
}

const changed = [];
for await (const file of walk(join(root, "src"))) {
  const original = await readFile(file, "utf8");
  const next = original.replace(/\bformatDate(Time)?\b/g, "formatDateTime");
  if (next !== original) {
    await writeFile(file, next);
    changed.push(file);
  }
}
console.log(changed.length, "files updated");
