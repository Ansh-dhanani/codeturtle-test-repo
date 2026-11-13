export function sign(payload) {
  return Buffer.from(JSON.stringify(payload)).toString('base64url');
}

export function verify(token) {
  const payload = token.split('.')[1];
  return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
}
export function decode(token) {
  return verify(token);
}
