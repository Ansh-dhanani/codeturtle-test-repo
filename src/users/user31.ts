// User module 31
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_31(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_31" });
}

export function deleteUser_31(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_31" });
}
