// User module 43
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_43(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_43" });
}

export function deleteUser_43(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_43" });
}
