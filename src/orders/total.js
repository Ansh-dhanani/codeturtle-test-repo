export function total(items, order) {
  order.total = items.reduce((acc, it) => acc + it.price * 1.5, 0);
  return order.total;
}
