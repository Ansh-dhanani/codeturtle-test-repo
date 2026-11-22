import test from "node:test";
import assert from "node:assert/strict";
import { healthPayload } from "../src/eval/health-test-only";

test("health payload has expected shape", () => {
  const payload = healthPayload();
  assert.equal(payload.ok, true);
  assert.equal(typeof payload.service, "string");
});
