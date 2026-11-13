import crypto from 'crypto';
export function passwordHash(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}
