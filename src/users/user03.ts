// User profile module 03
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_03(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_03", fullName: "Example User 03", email: "user03@example.com", role: req.user?.role });
}

export function createUser_03(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_03", ...body });
}

export function deleteUser_03(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_03" });
}
