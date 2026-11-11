// Order module 16
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_16(req: Request): Response {
  return ok({ id: "ord_16", total: formatCurrency(46.48), currency: "USD" });
}

export function createOrder_16(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_16", createdAt: new Date().toISOString() });
}
