// User module 73
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_73(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_73" });
}

export function deleteUser_73(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_73" });
}
