// User module 48
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_48(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_48" });
}

export function deleteUser_48(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_48" });
}
