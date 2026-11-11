// User module 72
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_72(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_72" });
}

export function deleteUser_72(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_72" });
}
