// User module 88
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_88(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_88" });
}

export function deleteUser_88(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_88" });
}
