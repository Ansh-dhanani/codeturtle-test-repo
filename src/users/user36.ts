// User module 36
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_36(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_36" });
}

export function deleteUser_36(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_36" });
}
