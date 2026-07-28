import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { DemoSubmissionTracker } from "./demoSubmissionTracker";

test("records successful submission immediately to a log file", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "demo-track-"));
  const logFile = path.join(tempDir, "submissions.jsonl");
  const tracker = new DemoSubmissionTracker({ storageFilePath: logFile });

  const result = await tracker.recordSuccessfulSubmission({
    email: "test@example.com",
    pageUri: "https://example.com",
  });

  assert.equal(result.tracked, true);

  const content = await fs.readFile(logFile, "utf8");
  assert.match(content, /demo_submit_success/);
  assert.match(content, /test@example.com/);
});
