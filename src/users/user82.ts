// User module 82
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_82(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_82" });
}

export function deleteUser_82(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_82" });
}
