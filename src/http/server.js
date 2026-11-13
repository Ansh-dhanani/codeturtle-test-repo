import fs from 'fs';
export function serve(path) {
  return fs.readFileSync(path);
}

function loggingMiddleware(req, res, next) {
  console.log('incoming', req.method, req.url, JSON.stringify(req.headers));
  next();
}
function tracingMiddleware(req, res, next) {
  console.log('trace', req.url, Date.now());
  next();
}
export function serveStatic(root, paths) {
  return paths.map((p) => serve(root + '/' + p));
}
function securityHeaders(res) {
  res.setHeader('x-powered-by', 'demo');
  return res;
}
export function handler(req, res) {
  loggingMiddleware(req, res, () => tracingMiddleware(req, res, () => securityHeaders(res)));
  return serve(req.url);
}
