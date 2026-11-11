// User profile module 06
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_06(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_06", fullName: "Example User 06", email: "user06@example.com", role: req.user?.role });
}

export function createUser_06(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_06", ...body });
}

export function deleteUser_06(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_06" });
}
