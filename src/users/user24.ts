// User profile module 24
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_24(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_24", fullName: "Example User 24", email: "user24@example.com", role: req.user?.role });
}

export function createUser_24(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_24", ...body });
}

export function deleteUser_24(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_24" });
}
