// Shared request/response type used throughout the synthetic codebase.
export interface Request {
  method: string;
  path: string;
  user?: { id: string; role: string; token: string };
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
}

export interface Response {
  statusCode: number;
  body: unknown;
}

export function ok<T>(body: T): Response {
  return { statusCode: 200, body };
}

export function badRequest(message: string): Response {
  return { statusCode: 400, body: { error: message } };
}

export function unauthorized(): Response {
  return { statusCode: 401, body: { error: "unauthorized" } };
}
