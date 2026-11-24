// Local check: main.ts must write exactly the winning line to
// /output/entry.txt (UTF-8, 1-160 characters, not only whitespace,
// no trailing newline).
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import assert from "node:assert/strict";

const EXPECTED =
  "CAUTION: This human has read the instructions and will still assemble it wrong, then blame the instructions. Warranty void if questioned.";

rmSync("/output/entry.txt", { force: true });
execFileSync(process.execPath, ["main.ts"], { cwd: import.meta.dirname, stdio: "inherit" });
const buf = readFileSync("/output/entry.txt");
const text = buf.toString("utf8");
assert.equal(text, EXPECTED, "entry text differs from the winning line");
assert.ok([...text].length >= 1 && [...text].length <= 160, "length out of gate range");
assert.ok(text.trim().length > 0, "entry is only whitespace");
assert.ok(!text.endsWith("\n"), "unexpected trailing newline");
assert.equal(Buffer.from(text, "utf8").toString("utf8"), text, "not valid UTF-8 round-trip");
console.log(`OK: ${[...text].length} chars, ${buf.length} bytes, exact match`);
