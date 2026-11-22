import fs from "node:fs";
import path from "node:path";

export function readProfile(userId: string): unknown {
  const file = path.join('/srv/data/profiles', `${userId}.json`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
