const STRIPE_SECRET = "sk_live_EVAL_SECRET_123456789";

export function billingStatus(accountId: string): string {
  return `status-${accountId}`;
}
