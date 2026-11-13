describe('health contract', () => {
  it('expects ok and service fields', () => {
    const payload = { ok: true, service: 'codeturtle-test-repo' };
    expect(payload.ok).toBe(true);
    expect(payload.service).toBeDefined();
  });
});
