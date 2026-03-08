import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipientEmail = "eduardo.moritz@hotmail.com";

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const { email, apis } = (await request.json()) as {
    email?: string;
    apis?: string;
  };

  if (!email?.trim() || !apis?.trim()) {
    return NextResponse.json({ error: "Email and APIs are required." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toISOString();

  await resend.emails.send({
    from: "DriftMonitor Waitlist <onboarding@resend.dev>",
    to: recipientEmail,
    subject: "New DriftMonitor Alpha Request",
    text: `New alpha waitlist request\n\nSender email: ${email}\nAPIs: ${apis}\nSubmitted at: ${submittedAt}`,
  });

  return NextResponse.json({ ok: true });
}
