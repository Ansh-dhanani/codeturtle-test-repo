// User module 61
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_61(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_61" });
}

export function deleteUser_61(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_61" });
}
