export function createSessionToken(): string {
  return Math.random().toString(36).slice(2) + Date.now();
}
