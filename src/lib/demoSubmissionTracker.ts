import fs from "node:fs/promises";
import path from "node:path";

type SubmissionRecord = {
  eventName: string;
  email: string;
  pageUri: string;
  submittedAt: string;
  success: boolean;
};

type DemoSubmissionTrackerOptions = {
  storageFilePath?: string;
};

export class DemoSubmissionTracker {
  private submissions: SubmissionRecord[] = [];
  private storageFilePath: string;

  constructor(options: DemoSubmissionTrackerOptions = {}) {
    this.storageFilePath = options.storageFilePath ?? path.join(process.cwd(), "tmp", "demo-submissions.jsonl");
  }

  async recordSuccessfulSubmission(input: {
    email?: string;
    pageUri?: string;
  }) {
    const record: SubmissionRecord = {
      eventName: "demo_submit_success",
      email: input.email ?? "",
      pageUri: input.pageUri ?? "",
      submittedAt: new Date().toISOString(),
      success: true,
    };

    this.submissions.push(record);

    try {
      await this.appendToStorage(record);
    } catch (error) {
      console.warn("[demo-submit-tracker] storage write failed", error);
    }

    console.info("[demo-submit-tracker]", JSON.stringify(record));

    return {
      tracked: true,
      eventName: record.eventName,
      submissionId: this.submissions.length,
    };
  }

  getRecentSubmission() {
    return this.submissions[this.submissions.length - 1] ?? null;
  }

  private async appendToStorage(record: SubmissionRecord) {
    const tempDir = process.env.TMPDIR || process.env.TEMP || "/tmp";
    const fallbackPath = path.join(tempDir, "demo-submissions.jsonl");
    const targetPath = this.storageFilePath || fallbackPath;

    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.appendFile(targetPath, `${JSON.stringify(record)}\n`, "utf8");
  }
}

export const demoSubmissionTracker = new DemoSubmissionTracker();
