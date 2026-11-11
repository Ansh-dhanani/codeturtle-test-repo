// User module 85
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_85(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_85" });
}

export function deleteUser_85(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_85" });
}
