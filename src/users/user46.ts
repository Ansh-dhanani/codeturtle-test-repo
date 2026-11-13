// User module 46
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_46(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_46" });
}

export function deleteUser_46(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_46" });
}
