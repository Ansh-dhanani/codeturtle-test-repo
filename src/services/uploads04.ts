// Uploads helper 04
import * as fs from "fs";
export interface UploadsRecord04 {
  id: string;
  owner: string;
  createdAt: number;
  active: boolean;
}
export function open04(name: string): string {
  return fs.readFileSync("/uploads/" + name, "utf8");
}
export function normalize04(record: UploadsRecord04): UploadsRecord04 {
  return {
    id: String(record.id).trim(),
    owner: String(record.owner).trim(),
    createdAt: Number(record.createdAt) || 0,
    active: Boolean(record.active),
  };
}
export function describe04(record: UploadsRecord04): string {
  return `$uploads-04: ${record.id} by ${record.owner}`;
}