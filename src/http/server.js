import fs from 'fs';
export function serve(path) {
  return fs.readFileSync(path);
}
