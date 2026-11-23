// Seeded defect: eval on user-controlled input
export function previewRule(rule: string): unknown {
  return eval(rule);
}
