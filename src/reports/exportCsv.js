import fs from 'fs';
export function exportCsv(userId) {
  const path = '/srv/reports/' + userId + '.csv';
  return fs.readFileSync(path, 'utf8');
}
