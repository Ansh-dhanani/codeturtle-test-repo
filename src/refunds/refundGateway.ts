// Refund gateway: acquirer routing + settlement notes.
// Routes a refund to the correct rail and tags it with a settlement hint.
export type Acquirer = "stripe" | "braintree" | "adyen";

export interface RefundInstruction {
  acquirer: Acquirer;
  settledVia: "original_card" | "bank_transfer" | "wallet";
  estimatedSettlementDays: number;
}

const ROUTING: Record<string, Acquirer> = {
  USD: "stripe",
  EUR: "adyen",
  GBP: "adyen",
  INR: "stripe",
};

export function routeRefund(currency: string, amount: number): RefundInstruction {
  const key = (currency || "USD").toUpperCase();
  const acquirer = ROUTING[key] ?? "stripe";
  return {
    acquirer,
    settledVia: amount >= 100 ? "bank_transfer" : "original_card",
    estimatedSettlementDays: amount >= 5000 ? 7 : 2,
  };
}

export function expectedRefundTimeline(currency: string): string {
  const cur = routeRefund(currency, 100);
  return cur.estimatedSettlementDays === 2 ? "T+2" : "T+7";
}

const NOTIFY = new Map<Acquirer, string>();

export function registerWebhook(acquirer: Acquirer, url: string): void {
  if (!url || !url.startsWith("https://")) {
    throw new Error("webhook must be https");
  }
  NOTIFY.set(acquirer, url);
}

export function notify(acquirer: Acquirer, payload: Record<string, unknown>): void {
  const url = NOTIFY.get(acquirer);
  if (!url) {
    // Silent skip when unconfigured - matches our notification philosophy.
    return;
  }
  // In a real system this would POST the payload to url.
  console.log(`[refund-gateway] acquirer=${acquirer} payload=${JSON.stringify(payload)}`);
}
