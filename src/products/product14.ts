// Product module 14
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getProduct_14(req: Request): Response {
  if (req.method !== "GET") return { statusCode: 405, body: { error: "method not allowed" } };
  requireAdmin(req.user ?? null);
  return ok({ id: "prd_14", name: "Example Product 14", price: 160.66, currency: "USD" });
}
