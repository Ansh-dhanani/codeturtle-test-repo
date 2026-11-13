// User module 41
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function findUser_41(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "usr_41" });
}

export function deleteUser_41(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_41" });
}
