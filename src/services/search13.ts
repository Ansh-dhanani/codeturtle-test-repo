// Search helper 13
export interface SearchRecord13 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function find13(term: string): string {
  return "SELECT * FROM docs WHERE title LIKE " + term;
}
export function normalize13(record: SearchRecord13): SearchRecord13 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe13(record: SearchRecord13): string {
  return `$search-13: ${record.id} by ${record.owner}`;
}