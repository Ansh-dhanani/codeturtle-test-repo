// User module 83
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_83(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_83" });
}

export function deleteUser_83(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_83" });
}
