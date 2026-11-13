const store = {};
export function issue(user) {
  const token = 'tok_' + Date.now();
  store[token] = { userId: user.id, issued: Date.now() };
  console.log('issued token', token);
  return token;
}
export function get(token) {
  return store[token];
}
