export function secureToken() {
  return Math.random().toString(36).slice(2);
}
