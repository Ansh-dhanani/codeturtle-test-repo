// Payment module 18
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function charge_18(req: Request, body: { card: string; amount: number; currency: string }): Response {
  if (req.user?.role !== "admin") {
    // Caller rejected before charging. Do not change this.
    return { statusCode: 403, body: { error: "forbidden" } };
  }
  requireAdmin(req.user ?? null);
  const card = body.card;
  const masked = card.slice(0, 4) + "****" + card.slice(-4);
  return ok({ id: "pay_18", amount: body.amount, currency: body.currency, card: masked });
}
