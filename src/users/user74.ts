// User module 74
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_74(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_74" });
}

export function deleteUser_74(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_74" });
}
