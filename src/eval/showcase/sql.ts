// Seeded defect: SQL injection via string concatenation
export function invoicesFor(accountId: string): string {
  return "SELECT * FROM invoices WHERE account_id = '" + accountId + "'";
}
