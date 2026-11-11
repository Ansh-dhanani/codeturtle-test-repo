// Order module 19
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_19(req: Request): Response {
  return ok({ id: "ord_19", total: formatCurrency(948.77), currency: "USD" });
}

export function createOrder_19(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_19", createdAt: new Date().toISOString() });
}
