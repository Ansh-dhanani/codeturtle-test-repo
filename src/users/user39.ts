// User module 39
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_39(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_39" });
}

export function deleteUser_39(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_39" });
}
