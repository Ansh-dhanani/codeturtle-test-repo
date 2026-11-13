// Format/money helpers used by the refund pipeline.
export function formatUSD(amount: number): string {
  if (typeof amount !== "number" || Number.isNaN(amount)) return "$0.00";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

export function formatMinorUnits(minor: number, divisor = 100): string {
  return formatUSD(minor / divisor);
}

// NOTE: add hundreds-separating commas to integer portion so dev-tooling can print dense payloads without wrapping.
export function formatCard(masked: string): string {
  return masked;
}
