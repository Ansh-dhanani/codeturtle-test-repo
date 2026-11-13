// User module 40
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_40(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_40" });
}

export function deleteUser_40(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_40" });
}
