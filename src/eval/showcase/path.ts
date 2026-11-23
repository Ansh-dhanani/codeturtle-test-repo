import * as fs from "fs";
export function readProfile(userId: string): string {
  return fs.readFileSync("/profiles/" + userId, "utf8");
}
