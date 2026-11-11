// Order module 15
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_15(req: Request): Response {
  return ok({ id: "ord_15", total: formatCurrency(544.03), currency: "USD" });
}

export function createOrder_15(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_15", createdAt: new Date().toISOString() });
}
