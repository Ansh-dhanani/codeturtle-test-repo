// User module 87
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_87(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_87" });
}

export function deleteUser_87(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_87" });
}
