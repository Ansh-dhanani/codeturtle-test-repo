// User module 78
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_78(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_78" });
}

export function deleteUser_78(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_78" });
}
