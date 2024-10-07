// app/api/contact/route.ts
import { NextResponse } from "next/server";

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, content } = await req.json();

    if (!email || !subject || !content) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Resend API를 통해 이메일 발송
    await resend.emails.send({
      from: "owner@pomme.dev",
      to: ["nahsooyeon@gmail.com"],
      subject: subject,
      html: `<p><br/>
      From: ${email}<br />
      ${content}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
