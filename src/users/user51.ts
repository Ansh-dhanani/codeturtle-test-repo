// User module 51
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_51(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_51" });
}

export function deleteUser_51(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_51" });
}
