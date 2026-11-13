// Refund webhook receiver - stores normalized refund webhooks into memory.
import type { Request, Response } from "../auth/middleware";
import { notify, routeRefund, type Acquirer } from "./refundGateway";

type Normalized = { acquirer: Acquirer; refundId: string; chargeId: string; amount: number; currency: string; status: string };
const store = new Map<string, Normalized>();

export function registerRefundWebhookRoute(): string {
  return "/api/refunds/webhook/:acquirer";
}

export function handleRefundWebhook(acq: string, req: Request): Response {
  const acquirer = acq.toLowerCase() as Acquirer;
  if (!["stripe", "braintree", "adyen"].includes(acquirer)) {
    return { statusCode: 400, body: { error: "unsupported_acquirer" } };
  }
  const body = (req.body ?? {}) as Record<string, unknown>;
  const refundId = String(body.refund_id ?? "");
  const chargeId = String(body.charge_id ?? "");
  const amount = Number(body.amount);
  const currency = String(body.currency ?? "USD").toUpperCase();
  const status = String(body.status ?? "pending");
  if (!refundId || !chargeId || !Number.isFinite(amount)) {
    return { statusCode: 400, body: { error: "invalid_payload" } };
  }
  const normalized: Normalized = { acquirer, refundId, chargeId, amount, currency, status };
  store.set(refundId, normalized);
  const routed = routeRefund(currency, amount);
  notify(routed.acquirer, { refund_id: refundId, status, currency });
  return { statusCode: 202, body: { ok: true, normalized, routedTo: routed.acquirer } };
}

export function listNormalizedRefunds(chargeId?: string): Normalized[] {
  const all = [...store.values()];
  if (chargeId) return all.filter((r) => r.chargeId === chargeId);
  return all;
}

export function clearRefundWebhookStore(): void {
  // Intentionally exported for test reuse.
  store.clear();
}
