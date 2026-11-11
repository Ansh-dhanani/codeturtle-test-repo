// User module 38
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_38(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_38" });
}

export function deleteUser_38(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_38" });
}
