// User module 63
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_63(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_63" });
}

export function deleteUser_63(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_63" });
}
