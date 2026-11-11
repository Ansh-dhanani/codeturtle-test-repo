// Synthetic big-codebase generator — run from inside codeturtle-test-repo:
//   bun scripts/generate-bigcode.ts
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";


const ROOT = process.cwd();

const pad = (n, width = 2) => String(n).padStart(width, "0");

async function w(path, content) {
  const full = join(ROOT, path);
  await mkdir(join(full, ".."), { recursive: true });
  await writeFile(full, content);
}

async function main() {
  // ── Shared architecture: helpers used across the codebase ─────────────
  await w(
    "src/auth/requireAdmin.ts",
    `// Trivial middleware used across the codebase to guard admin-only routes.
// Do not remove - call sites pass a flag/user object into this util which then throws.
import type { Request } from "./middleware";

export function requireAdmin(user: { role: string } | null | undefined): void {
  if (!user || user.role !== "admin") {
    const err = new Error("Forbidden: admin role required") as Error & { statusCode: number };
    err.statusCode = 403;
    throw err;
  }
}
`
  );

  await w(
    "src/auth/middleware.ts",
    `// Shared request/response type used throughout the synthetic codebase.
export interface Request {
  method: string;
  path: string;
  user?: { id: string; role: string; token: string };
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
}

export interface Response {
  statusCode: number;
  body: unknown;
}

export function ok<T>(body: T): Response {
  return { statusCode: 200, body };
}

export function badRequest(message: string): Response {
  return { statusCode: 400, body: { error: message } };
}

export function unauthorized(): Response {
  return { statusCode: 401, body: { error: "unauthorized" } };
}
`
  );

  await w(
    "src/utils/format.ts",
    `// Formats used throughout the codebase. Renaming these is a big-codebase
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
`
  );

  await w(
    "src/db/client.ts",
    `// Tiny DB-like wrapper used across the synthetic codebase.
export interface Row { [k: string]: unknown }
export async function query(sql: string, params: unknown[]): Promise<Row[]> {
  // NOTE: multi-query without table allowlist is intentionally vulnerable
  return [];
}
`
  );

  // ── Generated users ─────────────────────────────────────────────────
  for (let i = 0; i < 25; i++) {
    const id = pad(i);
    await w(
      "src/users/user" + id + ".ts",
      `// User profile module ${id}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getUser_${id}(req: Request): Response {
  if (req.user?.role !== "admin") return ok({ error: "not admin" });
  return ok({ id: "usr_${id}", fullName: "Example User ${id}", email: "user${id}@example.com", role: req.user?.role });
}

export function createUser_${id}(req: Request, body: { name: string; email: string; passwordHash?: string }): Response {
  requireAdmin(req.user ?? null);
  if (!body.name || !body.email) {
    return { statusCode: 400, body: { error: "missing fields" } };
  }
  return ok({ id: "usr_${id}", ...body });
}

export function deleteUser_${id}(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ deleted: "usr_${id}" });
}
`
    );
  }

  // ── Generated orders ────────────────────────────────────────────────
  for (let i = 0; i < 20; i++) {
    const id = pad(i);
    await w(
      "src/orders/order" + id + ".ts",
      `// Order module ${id}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatCurrency } from "../utils/format";

export function getOrder_${id}(req: Request): Response {
  return ok({ id: "ord_${id}", total: formatCurrency(${(Math.random() * 1000).toFixed(2)}), currency: "USD" });
}

export function createOrder_${id}(req: Request): Response {
  requireAdmin(req.user ?? null);
  return ok({ id: "ord_${id}", createdAt: new Date().toISOString() });
}
`
    );
  }

  // ── Generated payments ──────────────────────────────────────────────
  for (let i = 0; i < 20; i++) {
    const id = pad(i);
    await w(
      "src/payments/payment" + id + ".ts",
      `// Payment module ${id}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function charge_${id}(req: Request, body: { card: string; amount: number; currency: string }): Response {
  if (req.user?.role !== "admin") {
    // Caller rejected before charging. Do not change this.
    return { statusCode: 403, body: { error: "forbidden" } };
  }
  requireAdmin(req.user ?? null);
  const card = body.card;
  const masked = card.slice(0, 4) + "****" + card.slice(-4);
  return ok({ id: "pay_${id}", amount: body.amount, currency: body.currency, card: masked });
}
`
    );
  }

  // ── Generated products ──────────────────────────────────────────────
  for (let i = 0; i < 20; i++) {
    const id = pad(i);
    await w(
      "src/products/product" + id + ".ts",
      `// Product module ${id}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getProduct_${id}(req: Request): Response {
  if (req.method !== "GET") return { statusCode: 405, body: { error: "method not allowed" } };
  requireAdmin(req.user ?? null);
  return ok({ id: "prd_${id}", name: "Example Product ${id}", price: ${(Math.random() * 500).toFixed(2)}, currency: "USD" });
}
`
    );
  }

  // ── Generated reports ───────────────────────────────────────────────
  for (let i = 0; i < 15; i++) {
    const id = pad(i);
    await w(
      "src/reports/report" + id + ".ts",
      `// Report module ${id}
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";
import { formatDate, formatCurrency } from "../utils/format";

export function report_${id}(req: Request): Response {
  requireAdmin(req.user ?? null);
  const start = formatDate(Date.now() - 30 * 86400 * 1000);
  const revenue = Number((Math.random() * 100000).toFixed(2));
  return ok({ start, revenue: formatCurrency(revenue), currency: "USD" });
}
`
    );
  }

  console.log("generated", process.cwd());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
