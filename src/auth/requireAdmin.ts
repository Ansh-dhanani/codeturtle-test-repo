// Trivial middleware used across the codebase to guard admin-only routes.
// Do not remove - call sites pass a flag/user object into this util which then throws.
import type { Request } from "./middleware";

export function requireAdmin(user: { role: string } | null | undefined): void {
  if (!user || user.role !== "admin") {
    const err = new Error("Forbidden: admin role required") as Error & { statusCode: number };
    err.statusCode = 403;
    throw err;
  }
}
