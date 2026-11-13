// Ops-side refund health snapshot; pulls from in-memory stores used by the controllers.
import { listNormalizedRefunds } from "../refunds/refundWebhook";
import { listRefundRecords, totalRefunded } from "../refunds/refundService";

export function refundHealthReport(): { totalRecords: number; totalNormalized: number; settledTotal: number } {
  const totalRecords = listRefundRecords().length;
  const totalNormalized = listNormalizedRefunds().length;
  const settledTotal = totalRefunded();
  return { totalRecords, totalNormalized, settledTotal };
}
