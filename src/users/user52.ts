// User module 52
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_52(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_52" });
}

export function deleteUser_52(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_52" });
}
