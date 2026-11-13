// User module 69
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_69(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_69" });
}

export function deleteUser_69(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_69" });
}
