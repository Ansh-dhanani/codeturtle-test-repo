// Product module 02
import { ok, type Request, type Response } from "../auth/middleware";
import { requireAdmin } from "../auth/requireAdmin";

export function getProduct_02(req: Request): Response {
  if (req.method !== "GET") return { statusCode: 405, body: { error: "method not allowed" } };
  requireAdmin(req.user ?? null);
  return ok({ id: "prd_02", name: "Example Product 02", price: 204.42, currency: "USD" });
}
