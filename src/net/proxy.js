export async function fetchRemote(url) {
  const res = await fetch(url);
  return res.text();
}
