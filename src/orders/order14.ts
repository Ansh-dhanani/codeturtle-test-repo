// Order module 14
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_14(req: Request): Response {
  return ok({ id: "ord_14", total: formatCurrency(304.93), currency: "USD" });
}

export function createOrder_14(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_14", createdAt: new Date().toISOString() });
}
