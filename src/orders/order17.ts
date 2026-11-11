// Order module 17
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_17(req: Request): Response {
  return ok({ id: "ord_17", total: formatCurrency(530.00), currency: "USD" });
}

export function createOrder_17(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_17", createdAt: new Date().toISOString() });
}
