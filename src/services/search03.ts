// Search helper 03
export interface SearchRecord03 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function find03(term: string): string {
  return "SELECT * FROM docs WHERE title LIKE " + term;
}
export function normalize03(record: SearchRecord03): SearchRecord03 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe03(record: SearchRecord03): string {
  return `$search-03: ${record.id} by ${record.owner}`;
}