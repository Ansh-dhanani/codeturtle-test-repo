// User module 68
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_68(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_68" });
}

export function deleteUser_68(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_68" });
}
