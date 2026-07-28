import { NextResponse } from "next/server";
import { demoSubmissionTracker } from "@/lib/demoSubmissionTracker";

export const runtime = "nodejs";

const DEFAULT_PORTAL_ID = "51257300";
const DEFAULT_FORM_GUID = "099516c3-b602-4fcd-aeda-cc07e30085dd";

export async function POST(request: Request) {
  const body = await request.json();
  const portalId = process.env.HUBSPOT_PORTAL_ID?.trim() || DEFAULT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID?.trim() || DEFAULT_FORM_GUID;

  const formPayload = {
    fields: body.fields || [],
    context: {
      pageUri: request.headers.get("referer") || "",
      pageName: "Clinicus Landing Page",
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    }
  );

  const payload = await response.text();

  if (!response.ok) {
    return new NextResponse(payload || "HubSpot submission failed", {
      status: response.status,
    });
  }

  const email = body.fields?.find((field: { name?: string; value?: string }) => field.name === "email")?.value || "";
  const tracked = await demoSubmissionTracker.recordSuccessfulSubmission({
    email,
    pageUri: formPayload.context.pageUri,
  });

  return NextResponse.json({ success: true, tracking: tracked });
}
