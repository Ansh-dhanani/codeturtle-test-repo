// User module 34
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_34(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_34" });
}

export function deleteUser_34(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_34" });
}
