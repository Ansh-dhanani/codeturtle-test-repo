export function formatDate(date) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) throw new TypeError('invalid date');
  return d.toISOString().slice(0, 10);
}
