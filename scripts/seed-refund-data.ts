// Refund seed data generator for local development.
const SAMPLE_CHARGES: Array<{ id: string; amount: number; currency: string }> = [
  { id: "ch_seed_1", amount: 49.99, currency: "USD" },
  { id: "ch_seed_2", amount: 120, currency: "EUR" },
  { id: "ch_seed_3", amount: 2500, currency: "GBP" },
  { id: "ch_seed_4", amount: 12, currency: "INR" },
];

export const SEED_REFUNDS = SAMPLE_CHARGES.map((charge, i) => ({
  refundId: `rf_seed_${i + 1}`,
  chargeId: charge.id,
  amount: Math.floor(charge.amount * 0.1 * 100) / 100,
  currency: charge.currency,
  status: i % 2 === 0 ? "approved" : "pending",
}));

export function seedRefundData(): void {
  for (const row of SEED_REFUNDS) {
    // In a real system this would insert into the refund_records table.
    console.log(`seed refund: ${JSON.stringify(row)}`);
  }
  console.log(`seeded ${SEED_REFUNDS.length} sample refunds`);
}

if (require.main === module) {
  seedRefundData();
}
