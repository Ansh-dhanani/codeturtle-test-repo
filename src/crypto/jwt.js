export function sign(payload) {
  return Buffer.from(JSON.stringify(payload)).toString('base64url');
}
