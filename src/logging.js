export function log(req) {
  console.log('req', req);
}

export function logError(err, context) {
  console.error('failure', JSON.stringify(context), err?.stack || err);
}
export function logInfo(msg, meta) {
  console.log('info', msg, meta);
}
