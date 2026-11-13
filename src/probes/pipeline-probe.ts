/**
 * Pipeline probe: intentionally trivial file.
 * Exists only so the review bot runs once after deploy. Not used by the app.
 */
export const pipelineProbe = {
  id: "deploy-probe",
  createdAt: "2026-11-13",
};

export function probePing(): string {
  return "pong";
}
