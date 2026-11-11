// Order module 08
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_08(req: Request): Response {
  return ok({ id: "ord_08", total: formatCurrency(594.12), currency: "USD" });
}

export function createOrder_08(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_08", createdAt: new Date().toISOString() });
}
