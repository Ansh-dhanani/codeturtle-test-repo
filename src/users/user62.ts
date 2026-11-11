// User module 62
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_62(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_62" });
}

export function deleteUser_62(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_62" });
}
