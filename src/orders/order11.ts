// Order module 11
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_11(req: Request): Response {
  return ok({ id: "ord_11", total: formatCurrency(538.03), currency: "USD" });
}

export function createOrder_11(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_11", createdAt: new Date().toISOString() });
}
