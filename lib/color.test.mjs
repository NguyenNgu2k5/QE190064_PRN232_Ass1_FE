import assert from "node:assert/strict";
import test from "node:test";
import { hexToHsv, hsvToHex } from "./color.ts";

test("round-trips tag colors", () => {
  for (const color of ["#3B82F6", "#10B981", "#EF4444", "#0F766E"]) assert.equal(hsvToHex(hexToHsv(color)), color);
});
