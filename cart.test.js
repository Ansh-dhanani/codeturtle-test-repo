const { formatUSD, calculateTax, fetchCartId } = require('./cart');

console.assert(formatUSD(19) === '$19.00', 'formatUSD failed');
console.assert(formatUSD('abc') === '$0.00', 'formatUSD string fallback failed');
console.assert(calculateTax(100, 0.2) === 20, 'calculateTax failed');
console.assert(fetchCartId('42') === 'cart_42', 'fetchCartId failed');
console.assert(fetchCartId('') === null, 'fetchCartId empty failed');

console.log('cart checks passed');
