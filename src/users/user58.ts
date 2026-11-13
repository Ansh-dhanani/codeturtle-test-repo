// User module 58
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_58(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_58" });
}

export function deleteUser_58(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_58" });
}
