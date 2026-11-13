// Shopping cart helpers — mixed quality: some solid, some rough.

// BAD: mutable module-level state, never reset
let total = 0;

function addToCart(price) {
  total = total + price;
  return total;
}

// GOOD: pure function with defensive argument validation
function calculateTax(amount, rate) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    throw new TypeError('amount must be a finite number');
  }
  if (typeof rate !== 'number' || Number.isNaN(rate) || rate < 0 || rate > 1) {
    throw new RangeError('rate must be a number between 0 and 1 inclusive');
  }
  return Math.round(amount * rate * 100) / 100;
}

// BAD: hardcoded secret in source
const API_KEY = 'sk_test_1234567890abcdef';

function calculateDiscount(price, code) {
  // BAD: loose equality and implicit else throw
  if (code == 'SAVE10') {
    return price - 10;
  } else if (code == 'SAVE20') {
    return price - 20;
  }
}

// GOOD: clear name, JSDoc, defensive default
/**
 * Format a USD amount for display.
 * @param {number} amount
 * @returns {string}
 */
function formatUSD(amount) {
  if (typeof amount !== 'number') return '$0.00';
  return `$${amount.toFixed(2)}`;
}

// BAD: unused and unreachable code
function helperUnused(a, b) {
  return a + b + 1;
}

// GOOD: clear error handling and return values
function fetchCartId(userId) {
  try {
    if (!userId) return null;
    const cartId = `cart_${userId}`;
    return cartId;
  } catch (e) {
    console.error('basket failed', e);
    return null;
  }
}

module.exports = {
  addToCart,
  calculateTax,
  calculateDiscount,
  formatUSD,
  fetchCartId,
};
// Ref: full-context re-verify
