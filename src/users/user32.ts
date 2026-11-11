// User module 32
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_32(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_32" });
}

export function deleteUser_32(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_32" });
}
