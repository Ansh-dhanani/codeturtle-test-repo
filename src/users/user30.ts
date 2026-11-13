// User module 30
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_30(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_30" });
}

export function deleteUser_30(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_30" });
}
