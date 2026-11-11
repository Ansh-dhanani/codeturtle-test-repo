// Product module 04
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getProduct_04(req: Request): Response {
  if (req.method !== "GET") return { statusCode: 405, body: { error: "method not allowed" } };
  requireAdmin(req.user ?? null);
  return ok({ id: "prd_04", name: "Example Product 04", price: 396.45, currency: "USD" });
}
