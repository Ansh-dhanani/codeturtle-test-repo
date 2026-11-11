// Order module 00
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_00(req: Request): Response {
  return ok({ id: "ord_00", total: formatCurrency(317.87), currency: "USD" });
}

export function createOrder_00(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_00", createdAt: new Date().toISOString() });
}
