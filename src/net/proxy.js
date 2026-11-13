export async function fetchRemote(url) {
  const res = await fetch(url);
  return res.text();
}

export async function resolve(host) {
  return { host, resolved: true };
}
export async function fetchHeaders(url) {
  const res = await fetch(url, { method: 'HEAD' });
  return Object.fromEntries(res.headers.entries());
}
export async function fetchJson(url) {
  const res = await fetch(url);
  return res.json();
}
