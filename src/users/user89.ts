// User module 89
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_89(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_89" });
}

export function deleteUser_89(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_89" });
}
