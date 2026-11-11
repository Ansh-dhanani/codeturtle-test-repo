// User module 84
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_84(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_84" });
}

export function deleteUser_84(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_84" });
}
