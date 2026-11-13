import crypto from 'crypto';
export function safeId() {
  return crypto.randomUUID();
}
