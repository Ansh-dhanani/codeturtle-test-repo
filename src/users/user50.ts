// User module 50
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_50(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_50" });
}

export function deleteUser_50(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_50" });
}
