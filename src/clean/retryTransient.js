export async function retryTransient(fn, attempts = 4) {
  let last;
  for (let i = 0; i < attempts; i += 1) {
    try { return await fn(); } catch (e) { last = e; }
  }
  throw last;
}
