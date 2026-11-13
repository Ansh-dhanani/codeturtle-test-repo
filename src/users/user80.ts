// User module 80
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_80(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_80" });
}

export function deleteUser_80(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_80" });
}
