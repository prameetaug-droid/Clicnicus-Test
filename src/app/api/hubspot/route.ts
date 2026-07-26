import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const formPayload = {
    fields: body.fields || [],
    context: {
      pageUri: request.headers.get("referer") || "",
      pageName: "Clinicus Landing Page",
    },
  };

  const response = await fetch(
    "https://api.hsforms.com/submissions/v3/integration/submit/51257300/099516c3-b602-4fcd-aeda-cc07e30085dd",
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

  return NextResponse.json({ success: true });
}
