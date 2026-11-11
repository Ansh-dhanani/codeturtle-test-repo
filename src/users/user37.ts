// User module 37
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_37(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_37" });
}

export function deleteUser_37(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_37" });
}
