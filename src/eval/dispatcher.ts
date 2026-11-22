type Handler = (body: unknown) => Promise<void>;

export async function dispatch(handlers: Handler[], body: unknown): Promise<void> {
  for (const handler of handlers) {
    await handler(body);
  }
}
