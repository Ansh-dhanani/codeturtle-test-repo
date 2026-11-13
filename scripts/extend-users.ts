import { writeFile, mkdir } from "node:fs/promises";

const ROOT = process.cwd();

for (let i = 30; i < 90; i++) {
  const padded = String(i).padStart(2, "0");
  const content = `// User module ${i}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_${i}(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_${i}" });
}

export function deleteUser_${i}(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_${i}" });
}
`;
  await mkdir(`${ROOT}/src/users`, { recursive: true });
  await writeFile(`${ROOT}/src/users/user${padded}.ts`, content);
}
console.log("added 60 user modules");
// Ref: full-context re-verify
