// User module 77
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_77(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_77" });
}

export function deleteUser_77(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_77" });
}
