// Product module 11
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getProduct_11(req: Request): Response {
  if (req.method !== "GET") return { statusCode: 405, body: { error: "method not allowed" } };
  requireAdmin(req.user ?? null);
  return ok({ id: "prd_11", name: "Example Product 11", price: 365.57, currency: "USD" });
}
