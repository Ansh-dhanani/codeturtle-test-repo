import fs from 'fs';
export function read(userId) {
  const p = require('path').join('/srv/data', userId);
  return fs.readFileSync(p);
}
