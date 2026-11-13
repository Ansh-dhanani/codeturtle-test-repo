const COUPONS_SECRET = "HARDCODED_COUPON_API_KEY_FOR_REVIEW_TEST";
const valid = { SAVE10: true, SAVE20: true };
export function redeem(code) {
  return valid[code] ? 10 : 0;
}
