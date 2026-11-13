// User module 60
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_60(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_60" });
}

export function deleteUser_60(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_60" });
}
