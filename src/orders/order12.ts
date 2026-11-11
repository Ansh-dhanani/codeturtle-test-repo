// Order module 12
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_12(req: Request): Response {
  return ok({ id: "ord_12", total: formatCurrency(648.39), currency: "USD" });
}

export function createOrder_12(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_12", createdAt: new Date().toISOString() });
}
