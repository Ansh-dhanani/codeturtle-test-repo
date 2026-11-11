// User module 65
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_65(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_65" });
}

export function deleteUser_65(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_65" });
}
