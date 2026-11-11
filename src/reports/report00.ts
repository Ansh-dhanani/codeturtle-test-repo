// Report module 00
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatDate, formatCurrency } from "../utils/format";

export function report_00(req: Request): Response {
  requireAdmin(req.user ?? null);
  const start = formatDate(Date.now() - 30 * 86400 * 1000);
  const revenue = Number((Math.random() * 100000).toFixed(2));
  return ok({ start, revenue: formatCurrency(revenue), currency: "USD" });
}
