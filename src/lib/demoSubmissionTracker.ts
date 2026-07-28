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

    await this.appendToStorage(record);

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
    await fs.mkdir(path.dirname(this.storageFilePath), { recursive: true });
    await fs.appendFile(this.storageFilePath, `${JSON.stringify(record)}\n`, "utf8");
  }
}

export const demoSubmissionTracker = new DemoSubmissionTracker();
