// User profile module 07
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_07(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_07", fullName: "Example User 07", email: "user07@example.com", role: req.user?.role });
}

export function createUser_07(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_07", ...body });
}

export function deleteUser_07(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_07" });
}
