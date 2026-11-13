// Refund HTTP-ish controllers used by server.js routes.
import { createRefund, approveRefund, rejectRefund, listRefundRecords, type RefundRecord } from "./refundService";
import type { Request, Response } from "../auth/middleware";
import type { RefundReason } from "./refundPolicy";

const ALLOWED_REASONS: ReadonlySet<string> = new Set<RefundReason>([
  "duplicate_charge",
  "fraud_suspected",
  "customer_request",
  "system_error",
  "merchant_initiated",
]);

export function listRefundsController(req: Request): Response {
  const user = req.user ?? null;
  if (!user) return { statusCode: 401, body: { error: "unauthorized" } };
  const records: RefundRecord[] = listRefundRecords(user.role === "admin" ? undefined : user.id);
  return { statusCode: 200, body: { refunds: records, total: records.length } };
}

export function requestRefundController(req: Request): Response {
  const user = req.user ?? null;
  if (!user) return { statusCode: 401, body: { error: "unauthorized" } };
  if (req.method !== "POST") return { statusCode: 405, body: { error: "method_not_allowed" } };
  const body = (req.body ?? {}) as Record<string, unknown>;
  const amount = Number(body.amount);
  const currency = String(body.currency ?? "USD").toUpperCase();
  const reasonRaw = String(body.reason ?? "customer_request");
  const reason = ALLOWED_REASONS.has(reasonRaw) ? (reasonRaw as RefundReason) : "customer_request";
  if (!body.charge_id) return { statusCode: 400, body: { error: "charge_id_required" } };
  if (!Number.isFinite(amount) || amount <= 0) return { statusCode: 400, body: { error: "invalid_amount" } };
  const ageInDays = Number(body.age_in_days ?? 0);
  return createRefund({
    user,
    payload: {
      chargeId: String(body.charge_id),
      amount,
      currency,
      reason,
      ageInDays: Number.isFinite(ageInDays) ? ageInDays : 0,
    },
  });
}

export function approveRefundController(req: Request, id: string): Response {
  return approveRefund(id, req.user ?? null);
}

export function rejectRefundController(req: Request, id: string): Response {
  return rejectRefund(id, req.user ?? null);
}
