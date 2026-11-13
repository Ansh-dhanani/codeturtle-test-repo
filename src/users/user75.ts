// User module 75
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_75(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_75" });
}

export function deleteUser_75(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_75" });
}
