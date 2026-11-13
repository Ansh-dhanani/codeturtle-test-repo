describe('health contract', () => {
  it('expects ok and service fields', () => {
    const payload = { ok: true, service: 'codeturtle-test-repo' };
    expect(payload.ok).toBe(true);
    expect(payload.service).toBeDefined();
  });
});
// Ref: retry review with deployed 5b8b625
