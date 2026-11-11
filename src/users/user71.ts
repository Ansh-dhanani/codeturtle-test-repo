// User module 71
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_71(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_71" });
}

export function deleteUser_71(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_71" });
}
