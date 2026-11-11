// User profile module 04
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_04(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_04", fullName: "Example User 04", email: "user04@example.com", role: req.user?.role });
}

export function createUser_04(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_04", ...body });
}

export function deleteUser_04(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_04" });
}
