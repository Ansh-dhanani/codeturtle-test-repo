// User module 59
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_59(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_59" });
}

export function deleteUser_59(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_59" });
}
