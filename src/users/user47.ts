// User module 47
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_47(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_47" });
}

export function deleteUser_47(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_47" });
}
