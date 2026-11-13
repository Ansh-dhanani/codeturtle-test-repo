// User module 56
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_56(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_56" });
}

export function deleteUser_56(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_56" });
}
