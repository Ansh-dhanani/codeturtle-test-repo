// Order module 13
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_13(req: Request): Response {
  return ok({ id: "ord_13", total: formatCurrency(472.77), currency: "USD" });
}

export function createOrder_13(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_13", createdAt: new Date().toISOString() });
}
