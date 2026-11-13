// Table-driven tests for the refund policy engine.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { decide, type RefundRequest } from "../src/refunds/refundPolicy";

const base: RefundRequest = {
  chargeId: "ch_123",
  amount: 49.99,
  currency: "USD",
  reason: "customer_request",
  ageInDays: 7,
};

describe("decide()", () => {
  it("allows a small refund inside the default window", () => {
    const d = decide(base);
    assert.equal(d.allowed, true);
    assert.equal(d.requiresApproval, false);
  });

  it("rejects ages outside the customer_request window", () => {
    const d = decide({ ...base, ageInDays: 45 });
    assert.equal(d.allowed, false);
    assert.ok(d.reasons.includes("outside_window"));
  });

  it("forces approval for high-value customer_requests >= 500", () => {
    const d = decide({ ...base, amount: 750 });
    assert.equal(d.allowed, true);
    assert.equal(d.requiresApproval, true);
  });

  it("flags fraud_suspected as high risk even at small amounts", () => {
    const d = decide({ ...base, reason: "fraud_suspected", amount: 12.5 });
    assert.equal(d.allowed, true);
    assert.equal(d.requiresApproval, true);
  });

  it("rejects invalid amounts outright", () => {
    const d = decide({ ...base, amount: 0 });
    assert.equal(d.allowed, false);
    assert.deepEqual(d.reasons, ["invalid_amount"]);
  });
});
