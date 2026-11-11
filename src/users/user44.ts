// User module 44
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_44(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_44" });
}

export function deleteUser_44(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_44" });
}
