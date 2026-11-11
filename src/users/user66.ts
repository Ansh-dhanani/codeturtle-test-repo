// User module 66
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_66(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_66" });
}

export function deleteUser_66(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_66" });
}
