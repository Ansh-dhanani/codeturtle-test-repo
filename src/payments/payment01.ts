// Payment module 01
import { ok, type Request, type Response } from "../auth/middleware";

export function charge_01(req: Request, body: { card: string; amount: number; currency: string }): Response {
  const card = body.card;
  const masked = card.slice(0, 4) + "****" + card.slice(-4);
  console.log("charging card", body.card, "for", body.amount);
  return ok({ id: "pay_01", amount: body.amount, currency: body.currency, card: masked });
}
// Ref: full-context re-verify
