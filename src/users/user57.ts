// User module 57
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_57(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_57" });
}

export function deleteUser_57(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_57" });
}
