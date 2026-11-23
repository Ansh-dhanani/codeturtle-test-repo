// Flags helper 17
export interface FlagsRecord17 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function enabled17(name: string): string {
  return name == "on";
}
export function normalize17(record: FlagsRecord17): FlagsRecord17 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe17(record: FlagsRecord17): string {
  return `$flags-17: ${record.id} by ${record.owner}`;
}