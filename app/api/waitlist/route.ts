import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipientEmail = "eduardo.moritz@hotmail.com";
const genericServerError = "Something went wrong. Please try again later.";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof payload === "object" && payload !== null && "email" in payload ? payload.email : undefined;
  const apis = typeof payload === "object" && payload !== null && "apis" in payload ? payload.apis : undefined;

  const normalizedEmail = typeof email === "string" ? email.trim() : "";
  const normalizedApis = typeof apis === "string" ? apis.trim() : "";

  if (!normalizedEmail || !normalizedApis) {
    return NextResponse.json({ error: "Email and APIs are required." }, { status: 400 });
  }

  if (!emailPattern.test(normalizedEmail)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: genericServerError }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toISOString();

  try {
    await resend.emails.send({
      from: "DriftMonitor Waitlist <onboarding@resend.dev>",
      to: recipientEmail,
      subject: "New DriftMonitor Alpha Request",
      text: `New alpha waitlist request\n\nSender email: ${normalizedEmail}\nAPIs: ${normalizedApis}\nSubmitted at: ${submittedAt}`,
    });
  } catch {
    return NextResponse.json({ error: genericServerError }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
