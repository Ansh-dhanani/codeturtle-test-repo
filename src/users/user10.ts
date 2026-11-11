// User profile module 10
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_10(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_10", fullName: "Example User 10", email: "user10@example.com", role: req.user?.role });
}

export function createUser_10(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_10", ...body });
}

export function deleteUser_10(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_10" });
}
