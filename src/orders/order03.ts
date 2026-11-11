// Order module 03
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_03(req: Request): Response {
  return ok({ id: "ord_03", total: formatCurrency(773.73), currency: "USD" });
}

export function createOrder_03(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_03", createdAt: new Date().toISOString() });
}
