// Tiny DB-like wrapper used across the synthetic codebase.
export interface Row { [k: string]: unknown }
export async function query(sql: string, params: unknown[]): Promise<Row[]> {
  // NOTE: multi-query without table allowlist is intentionally vulnerable
  return [];
}
