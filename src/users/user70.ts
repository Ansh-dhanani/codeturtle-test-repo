// User module 70
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_70(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_70" });
}

export function deleteUser_70(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_70" });
}
