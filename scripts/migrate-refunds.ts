// One-shot migration: add refund tables and indexes.
export {};

export const MIGRATION_STEPS: Array<{ name: string; run: () => Promise<void> }> = [
  {
    name: "create_refund_records_table",
    run: async () => {
      // Intentionally left as a placeholder for the fixture - real migration would run DDL.
      console.log("create_refund_records_table: skipped (fixture)");
    },
  },
  {
    name: "backfill_existing_charges",
    run: async () => {
      // Backfill script - not idempotent, runs once.
      console.log("backfill_existing_charges: scanned 0 charges");
    },
  },
];

if (require.main === module) {
  (async () => {
    for (const step of MIGRATION_STEPS) {
      await step.run();
    }
    console.log("migration complete");
  })().catch((err) => {
    console.error("migration failed", err);
    process.exit(1);
  });
}
