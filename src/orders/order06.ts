// Order module 06
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_06(req: Request): Response {
  return ok({ id: "ord_06", total: formatCurrency(626.86), currency: "USD" });
}

export function createOrder_06(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_06", createdAt: new Date().toISOString() });
}
