import { NextResponse } from "next/server";
import { inquiryConfig } from "@/lib/site";

const allowedTypes = new Set(["contact", "quote"]);

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ ok: true });
    }

    if (!allowedTypes.has(body.type) || !body.name || !isValidEmail(body.email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, and inquiry type." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Inquiry delivery is not configured: RESEND_API_KEY is missing.");
      return NextResponse.json({ error: "Inquiry delivery is temporarily unavailable. Please email our team directly." }, { status: 503 });
    }

    const subject = body.type === "quote" ? `New quote request from ${body.name}` : `New website inquiry from ${body.name}`;
    const details = Object.entries(body)
      .filter(([key, value]) => key !== "website" && value !== undefined && value !== "")
      .map(([key, value]) => `<p><strong>${key}:</strong> ${String(value).replace(/[<>]/g, "")}</p>`)
      .join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: inquiryConfig.from,
        to: [inquiryConfig.to],
        reply_to: body.email,
        subject,
        html: `<h2>${subject}</h2>${details}`,
      }),
    });

    if (!response.ok) {
      console.error("Inquiry provider rejected the request", await response.text());
      return NextResponse.json({ error: "We could not send your inquiry. Please try again or email our team directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry submission failed", error);
    return NextResponse.json({ error: "We could not process your inquiry. Please try again." }, { status: 500 });
  }
}
