const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = Number(process.env.PORT || 3000);

async function handleApiRefunds(req, res) {
  const parsed = url.parse(req.url, true);
  const parts = parsed.pathname.split('/').filter(Boolean);
  const method = req.method || 'GET';

  if (method === 'GET' && parts.length === 2) {
    // List all refunds (demo - returns stub data)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ refunds: [], total: 0 }));
    return;
  }

  if (method === 'POST' && parts.length === 2) {
    let body = '';
    for await (const chunk of req) body += chunk;
    try {
      const payload = JSON.parse(body || '{}');
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ accepted: true, refundId: 'rfnd_demo', payload }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'invalid_json' }));
    }
    return;
  }

  if (method === 'POST' && parts[2] === 'approve') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, id: parts[1] }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not_found' }));
}

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.url && req.url.startsWith('/api/refunds')) {
    handleApiRefunds(req, res).catch((err) => {
      console.error(err);
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'internal_error' }));
    });
    return;
  }

  const file = path.join(__dirname, 'index.html');
  if (!fs.existsSync(file)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(file));
}).listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
