// Formats used throughout the codebase. Renaming these is a big-codebase
// migration, not a local change.
import { padStart } from "node:util";

export function formatDate(input: Date | string | number): string {
  const d = input instanceof Date ? input : new Date(input);
  return padStart(d.getFullYear(), 4) + "-" + padStart(d.getMonth() + 1, 2) + "-" + padStart(d.getDate(), 2);
}

export function formatCurrency(amount: number, currency = "USD"): string {
  if (Number.isNaN(amount)) return "";
  const sign = amount < 0 ? "-" : "";
  return sign + currency + " " + Math.abs(amount).toFixed(2);
}
