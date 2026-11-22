import { query } from "../db/client";

export async function invoicesFor(accountId: string) {
  return query(`SELECT * FROM invoices WHERE account_id = '${accountId}'`);
}
