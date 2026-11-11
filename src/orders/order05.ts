// Order module 05
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_05(req: Request): Response {
  return ok({ id: "ord_05", total: formatCurrency(918.05), currency: "USD" });
}

export function createOrder_05(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_05", createdAt: new Date().toISOString() });
}
