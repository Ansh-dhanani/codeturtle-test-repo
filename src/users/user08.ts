// User profile module 08
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_08(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_08", fullName: "Example User 08", email: "user08@example.com", role: req.user?.role });
}

export function createUser_08(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_08", ...body });
}

export function deleteUser_08(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_08" });
}
