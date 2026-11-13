// User module 35
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_35(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_35" });
}

export function deleteUser_35(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_35" });
}
