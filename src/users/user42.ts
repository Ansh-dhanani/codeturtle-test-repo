// User module 42
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_42(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_42" });
}

export function deleteUser_42(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_42" });
}
