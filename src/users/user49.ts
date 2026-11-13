// User module 49
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_49(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_49" });
}

export function deleteUser_49(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_49" });
}
