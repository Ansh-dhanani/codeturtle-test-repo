// Order module 02
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_02(req: Request): Response {
  return ok({ id: "ord_02", total: formatCurrency(607.67), currency: "USD" });
}

export function createOrder_02(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_02", createdAt: new Date().toISOString() });
}
