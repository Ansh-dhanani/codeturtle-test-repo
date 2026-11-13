// User module 64
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_64(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_64" });
}

export function deleteUser_64(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_64" });
}
