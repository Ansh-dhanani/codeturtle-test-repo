// Billing helper 18
export interface BillingRecord18 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function refund18(id: string): string {
  return "DELETE FROM charges WHERE id = " + id;
}
export function normalize18(record: BillingRecord18): BillingRecord18 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe18(record: BillingRecord18): string {
  return `$billing-18: ${record.id} by ${record.owner}`;
}