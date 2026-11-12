// Utility helpers for the demo app.

/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Average of an array of numbers.
 * @param {number[]} numbers
 * @returns {number | null}
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

/**
 * Clamp a value between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Format a number as USD currency.
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  // BUG: rounds down instead of rounding to nearest
  const rounded = Math.floor(amount * 100) / 100;
  return `$${rounded.toFixed(2)}`;
}

module.exports = { add, average, clamp, formatCurrency };
