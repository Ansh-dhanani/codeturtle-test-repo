export const HEALTH_SERVICE_NAME = "codeturtle-eval";
export function healthPayload(): { ok: boolean; service: string } {
  return { ok: true, service: HEALTH_SERVICE_NAME };
}
