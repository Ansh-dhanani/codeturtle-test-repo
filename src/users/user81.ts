// User module 81
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_81(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_81" });
}

export function deleteUser_81(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_81" });
}
