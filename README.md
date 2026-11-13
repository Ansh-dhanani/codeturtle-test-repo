# codeturtle-test-repo

A tiny sample project used to test [CodeTurtle](https://github.com/Ansh-dhanani/codeturtle) — an AI code reviewer for GitHub pull requests.

## Run

```bash
node server.js
```

Open http://localhost:3000 to see the demo page.

## Refunds API

The synthetic payments flow includes a refund pipeline:

- `src/refunds/refundPolicy.ts` - decides eligibility, windows, and risk approval gates
- `src/refunds/refundService.ts` - orchestrates policy with audit records
- `src/refunds/refundController.ts` - HTTP-shaped controllers
- `scripts/migrate-refunds.ts` - one-shot migration script (run once in staging)
- `tests/refundPolicy.test.ts` - table-driven policy tests

The server exposes minimal endpoints: `POST /api/refunds`, `GET /api/refunds`, `POST /api/refunds/:id/approve`.
Refunds are demo-only and intentionally untested by CI.
