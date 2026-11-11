// User profile module 18
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_18(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_18", fullName: "Example User 18", email: "user18@example.com", role: req.user?.role });
}

export function createUser_18(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_18", ...body });
}

export function deleteUser_18(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_18" });
}
