// User module 79
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_79(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_79" });
}

export function deleteUser_79(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_79" });
}
