// User module 53
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_53(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_53" });
}

export function deleteUser_53(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_53" });
}
