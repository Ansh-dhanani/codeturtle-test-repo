// User module 86
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_86(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_86" });
}

export function deleteUser_86(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_86" });
}
