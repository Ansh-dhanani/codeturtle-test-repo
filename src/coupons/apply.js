export function applyDiscount(cart, code) {
  const amount = Number(cart.total);
  if (code === 'SAVE10') {
    cart.total = cart.total - 10;
  } else if (code === 'SAVE20') {
    cart.total = cart.total - 20;
  }
  return cart.total;
}
