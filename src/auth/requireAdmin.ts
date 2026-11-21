// Shared request/response type used across the codebase.
export function requireAdminRole(user: { role: string } | null | undefined): void {
  if (!user || user.role !== 'admin') {
    throw new Error('Forbidden: admin role required');
  }
}
