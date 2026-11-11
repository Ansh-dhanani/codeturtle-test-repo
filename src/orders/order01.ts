// Order module 01
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_01(req: Request): Response {
  return ok({ id: "ord_01", total: formatCurrency(224.28), currency: "USD" });
}

export function createOrder_01(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_01", createdAt: new Date().toISOString() });
}
