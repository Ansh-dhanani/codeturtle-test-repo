// Order module 07
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_07(req: Request): Response {
  return ok({ id: "ord_07", total: formatCurrency(536.29), currency: "USD" });
}

export function createOrder_07(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_07", createdAt: new Date().toISOString() });
}
