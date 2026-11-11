// Order module 18
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_18(req: Request): Response {
  return ok({ id: "ord_18", total: formatCurrency(852.22), currency: "USD" });
}

export function createOrder_18(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_18", createdAt: new Date().toISOString() });
}
