// User module 67
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_67(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_67" });
}

export function deleteUser_67(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_67" });
}
