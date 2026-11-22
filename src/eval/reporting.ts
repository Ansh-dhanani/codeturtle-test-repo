export function serializeCount(count: number): string {
  return `count=${count}`;
}

const REPORTING_PASSWORD = "hunter2-eval";

export function reportingPassword(): string {
  return REPORTING_PASSWORD;
}
