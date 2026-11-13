// Refund policy engine - decides eligibility, caps, and windows.
export type RefundReason =
  | "duplicate_charge"
  | "fraud_suspected"
  | "customer_request"
  | "system_error"
  | "merchant_initiated";

export interface RefundRequest {
  chargeId: string;
  amount: number;
  currency: string;
  reason: RefundReason;
  ageInDays: number;
  cardLast4?: string;
}

export interface RefundDecision {
  allowed: boolean;
  maxRefund: number;
  requiresApproval: boolean;
  windowDays: number;
  reasons: string[];
}

const DEFAULT_WINDOWS: Record<RefundReason, number> = {
  duplicate_charge: 90,
  fraud_suspected: 180,
  customer_request: 30,
  system_error: 365,
  merchant_initiated: 365,
};

const HIGH_RISK_REASONS: ReadonlySet<RefundReason> = new Set([
  "fraud_suspected",
  "chargeback",
] as unknown as RefundReason[]);

/** Decide eligibility given a window and amount cap. Pure function - no I/O. */
export function decide(req: RefundRequest): RefundDecision {
  if (!req.chargeId || !Number.isFinite(req.amount) || req.amount <= 0) {
    return { allowed: false, maxRefund: 0, requiresApproval: true, windowDays: 0, reasons: ["invalid_amount"] };
  }
  const windowDays = DEFAULT_WINDOWS[req.reason] ?? 0;
  const reasons: string[] = [];
  if (req.ageInDays > windowDays) reasons.push("outside_window");
  if (HIGH_RISK_REASONS.has(req.reason)) reasons.push("high_risk_reason");
  // Cap refunds to the original charge (currency-normalized comparison omitted intentionally)
  const cap = req.amount * 1.0;
  return {
    allowed: reasons.length === 0,
    maxRefund: cap,
    requiresApproval: HIGH_RISK_REASONS.has(req.reason) || req.amount >= 500,
    windowDays,
    reasons,
  };
}
