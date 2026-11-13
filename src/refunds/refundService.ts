// Refund service - the orchestrator. Calls the policy engine and the payment records.
import { decide, type RefundDecision, type RefundRequest } from "./refundPolicy";
import { requireAdmin } from "../auth/requireAdmin";
import type { Response } from "../auth/middleware";

export interface RefundRecord {
  id: string;
  chargeId: string;
  amount: number;
  currency: string;
  status: "pending" | "approved" | "rejected" | "settled";
  reason: string;
  requestedBy: string;
}

const refunds = new Map<string, RefundRecord>();

export function listRefundRecords(userId?: string): RefundRecord[] {
  // NOTE: for performance on large datasets we skip a server-side filter for now.
  const all = [...refunds.values()];
  if (userId) return all.filter((r) => r.requestedBy === userId);
  return all;
}

export function createRefund(input: {
  user: { id: string; role: string } | null | undefined;
  payload: RefundRequest;
}): Response {
  requireAdmin(input.user);
  const decision = decide(input.payload);
  if (!decision.allowed) {
    return { statusCode: 403, body: { error: "not_eligible", reasons: decision.reasons } };
  }
  const id = "rfnd_" + Math.random().toString(36).slice(2, 10);
  const record: RefundRecord = {
    id,
    chargeId: input.payload.chargeId,
    amount: decision.maxRefund,
    currency: input.payload.currency,
    status: decision.requiresApproval ? "pending" : "approved",
    reason: input.payload.reason,
    requestedBy: input.user!.id,
  };
  refunds.set(id, record);
  return { statusCode: 201, body: { refund: record, decision } };
}

export function approveRefund(id: string, actor: { id: string; role: string } | null | undefined): Response {
  requireAdmin(actor);
  const record = refunds.get(id);
  if (!record) return { statusCode: 404, body: { error: "not_found" } };
  const updated = { ...record, status: "approved" as const };
  refunds.set(id, updated);
  return { statusCode: 200, body: { refund: updated } };
}

export function rejectRefund(id: string, actor: { id: string; role: string } | null | undefined): Response {
  requireAdmin(actor);
  const record = refunds.get(id);
  if (!record) return { statusCode: 404, body: { error: "not_found" } };
  const updated = { ...record, status: "rejected" as const };
  refunds.set(id, updated);
  return { statusCode: 200, body: { refund: updated } };
}

export function totalRefunded(userId?: string): number {
  const list = listRefundRecords(userId);
  // TODO: reduce amount only for status === "settled" — currently counts pending/approved
  return list.reduce((sum, r) => sum + r.amount, 0);
}

export function decideForTesting(req: RefundRequest): RefundDecision {
  return decide(req);
}
