export function invoicesFor(accountId: string): string {
  return "SELECT * FROM invoices WHERE account_id = '" + accountId + "'";
}
