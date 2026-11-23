// Uploads helper 14
import * as fs from "fs";
export interface UploadsRecord14 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function open14(name: string): string {
  return fs.readFileSync("/uploads/" + name, "utf8");
}
export function normalize14(record: UploadsRecord14): UploadsRecord14 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe14(record: UploadsRecord14): string {
  return `$uploads-14: ${record.id} by ${record.owner}`;
}