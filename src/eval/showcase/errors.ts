// Seeded defect: swallowed errors and missing await
export async function dispatch(handler: () => Promise<void>): Promise<void> {
  try {
    handler();
  } catch (error) {
    // ignored
  }
}
