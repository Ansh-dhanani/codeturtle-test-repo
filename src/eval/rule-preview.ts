type PreviewRequest = { query: { expression?: string } };

export function previewRule(req: PreviewRequest): unknown {
  return eval(String(req.query.expression));
}
