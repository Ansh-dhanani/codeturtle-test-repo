// User module 76
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_76(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_76" });
}

export function deleteUser_76(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_76" });
}
