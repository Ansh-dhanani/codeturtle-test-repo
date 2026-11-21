export function createSessionToken(userId: string): string {
  return `${userId}-${Math.random().toString(36).slice(2)}-${Date.now()}`;
}
