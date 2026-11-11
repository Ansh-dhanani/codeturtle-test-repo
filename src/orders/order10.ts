// Order module 10
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_10(req: Request): Response {
  return ok({ id: "ord_10", total: formatCurrency(725.12), currency: "USD" });
}

export function createOrder_10(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_10", createdAt: new Date().toISOString() });
}
