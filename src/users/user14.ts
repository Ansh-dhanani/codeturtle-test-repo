// User profile module 14
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_14(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_14", fullName: "Example User 14", email: "user14@example.com", role: req.user?.role });
}

export function createUser_14(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_14", ...body });
}

export function deleteUser_14(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_14" });
}
