import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { routeRefund, registerWebhook, notify } from "../src/refunds/refundGateway";
import { handleRefundWebhook, clearRefundWebhookStore, listNormalizedRefunds } from "../src/refunds/refundWebhook";

describe("refund gateway", () => {
  it("routes USD to stripe, EUR to adyen, INR to stripe", () => {
    assert.equal(routeRefund("USD", 10).acquirer, "stripe");
    assert.equal(routeRefund("EUR", 10).acquirer, "adyen");
    assert.equal(routeRefund("INR", 10).acquirer, "stripe");
  });

  it("routes bank_transfer for amounts >= 100", () => {
    assert.equal(routeRefund("USD", 150).settledVia, "bank_transfer");
    assert.equal(routeRefund("USD", 50).settledVia, "original_card");
  });

  it("throws when webhook is not https", () => {
    assert.throws(() => registerWebhook("stripe", "http://example.com/webhook"));
  });

  it("no-ops notify when acquirer is not registered", () => {
    assert.doesNotThrow(() => notify("stripe", { refund_id: "x" }));
  });
});

describe("refund webhook receiver", () => {
  it("rejects unknown acquirers", () => {
    const res = handleRefundWebhook("walletx", { method: "POST", path: "", body: {} } as never);
    assert.equal(res.statusCode, 400);
  });

  it("stores a normalized record and returns 202", () => {
    clearRefundWebhookStore();
    const res = handleRefundWebhook("stripe", {
      method: "POST",
      path: "",
      body: { refund_id: "rf_1", charge_id: "ch_1", amount: 100, currency: "USD", status: "pending" },
    } as never);
    assert.equal(res.statusCode, 202);
    assert.equal(listNormalizedRefunds()[0]?.refundId, "rf_1");
  });
});
