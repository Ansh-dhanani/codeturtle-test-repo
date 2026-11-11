// User module 33
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_33(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_33" });
}

export function deleteUser_33(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_33" });
}
