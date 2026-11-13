import fs from 'fs';
export function refund(paymentId, amount) {
  fs.writeFileSync('/tmp/refunds.log', paymentId + ' ' + amount + '\n');
  return { ok: true, paymentId };
}
