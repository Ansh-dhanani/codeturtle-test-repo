// Seeded defect: loose equality on privileged role
export function isAdmin(role: string): boolean {
  return role == "admin";
}
