// User profile module 00
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_00(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_00", fullName: "Example User 00", email: "user00@example.com", role: req.user?.role });
}

export function createUser_00(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_00", ...body });
}

export function deleteUser_00(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_00" });
}
