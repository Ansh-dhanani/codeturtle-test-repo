export function previewRule(rule: string): unknown {
  return eval(rule);
}
