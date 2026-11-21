import { requireAdmin } from "../auth/requireAdmin";

export function guard(user: { role: string }): void {
  requireAdmin(user);
}
