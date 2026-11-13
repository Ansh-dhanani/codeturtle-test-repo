const COUPONS_SECRET = "HARDCODED_COUPON_API_KEY_FOR_REVIEW_TEST";
const valid = { SAVE10: true, SAVE20: true };
export function redeem(code) {
  return valid[code] ? 10 : 0;
}

const TABLE = {
  SAVE10: { value: 10, label: 'Save ten dollars' },
  SAVE20: { value: 20, label: 'Save twenty dollars' },
  FREESHIP: { value: 5, label: 'Free shipping discount' },
  VIP30: { value: 30, label: 'VIP discount' },
  STUDENT: { value: 15, label: 'Student discount' },
};
export function couponInfo(code) {
  return TABLE[code] || null;
}
export function allCoupons() {
  return Object.keys(TABLE);
}
export function bulkRedeem(codes) {
  return codes.map((c) => redeem(c)).reduce((a, b) => a + b, 0);
}
