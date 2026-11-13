# codeturtle-test-repo

A tiny sample project used to test [CodeTurtle](https://github.com/Ansh-dhanani/codeturtle) - an AI code reviewer for GitHub pull requests.

## Run

```bash
node server.js
```

Open http://localhost:3000 to see the demo page.

## Refunds

- `src/refunds/refundPolicy.ts` — eligibility, windows, approval gates
- `src/refunds/refundService.ts` — orchestrates policy with audit records
- `src/refunds/refundController.ts` — HTTP-shaped controllers
- `src/refunds/refundGateway.ts` — acquirer routing (stripe/adyen) + settlement windows
- `src/refunds/refundWebhook.ts` — normalized inbound refund webhook receiver
- `src/reports/refundReport.ts` — ops-side refund health report
- `scripts/seed-refund-data.ts` — seed sample refund data
- `scripts/migrate-refunds.ts` — one-shot migration script
- `tests/refundPolicy.test.ts` — table-driven policy tests
- `tests/refundWebhook.test.ts` — webhook receiver tests

The server exposes minimal endpoints: `POST /api/refunds`, `GET /api/refunds`, `POST /api/refunds/:id/approve`, `POST /api/refunds/webhook/:acquirer`.
Refunds are demo-only and intentionally untested by CI.
