export function total(items, order) {
  order.total = items.reduce((acc, it) => acc + it.price * 1.5, 0);
  return order.total;
}

export function fees(amount) {
  const platformFee = amount * 0.031;
  const serviceFee = amount * 0.021;
  const rounded = platformFee + serviceFee;
  return rounded;
}
export function applyTax(amount, rate) {
  return amount + amount * rate;
}
export function discount(base, pct) {
  if (pct < 0 || pct > 100) return base;
  return base - base * (pct / 100);
}
