// User module 45
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_45(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_45" });
}

export function deleteUser_45(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_45" });
}
