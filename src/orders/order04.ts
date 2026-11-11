// Order module 04
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_04(req: Request): Response {
  return ok({ id: "ord_04", total: formatCurrency(902.08), currency: "USD" });
}

export function createOrder_04(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_04", createdAt: new Date().toISOString() });
}
