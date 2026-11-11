// User module 54
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_54(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_54" });
}

export function deleteUser_54(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_54" });
}
