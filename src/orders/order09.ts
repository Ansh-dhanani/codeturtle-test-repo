// Order module 09
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_09(req: Request): Response {
  return ok({ id: "ord_09", total: formatCurrency(287.28), currency: "USD" });
}

export function createOrder_09(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_09", createdAt: new Date().toISOString() });
}
