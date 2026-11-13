import fs from 'fs';
export function refund(paymentId, amount) {
  fs.writeFileSync('/tmp/refunds.log', paymentId + ' ' + amount + '\n');
  return { ok: true, paymentId };
}

export function refundBatch(payments) {
  const results = [];
  for (const p of payments) {
    refund(p.id, p.amount);
    results.push({ id: p.id, status: 'queued' });
  }
  return results;
}
export function refundLog() {
  return fs.readFileSync('/tmp/refunds.log', 'utf8');
}
export function refundSummary(limit) {
  const log = refundLog().split('\n').filter(Boolean);
  return log.slice(-limit).join('\n');
}
