import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const company = (body.company || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Configure transporter using env vars
    const host = process.env.EMAIL_SERVER_HOST;
    const port = process.env.EMAIL_SERVER_PORT
      ? Number(process.env.EMAIL_SERVER_PORT)
      : 587;
    const user = process.env.EMAIL_SERVER_USER;
    const pass = process.env.EMAIL_SERVER_PASS;
    const from = process.env.EMAIL_FROM || "no-reply@qybercore.com";
    const to =
      process.env.EMAIL_TO || "contact@qybercore.com"; // fallback to your contact email

    if (!host || !user || !pass) {
      console.error("Email environment variables are not set correctly.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server email is not configured yet. Please contact us directly at contact@qybercore.com.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for others
      auth: {
        user,
        pass,
      },
    });

    const mailSubject = `New QyberCore Early Access Request from ${name}`;
    const mailText = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      "",
      "Message:",
      message || "(no additional message)",
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from,
      to,
      subject: mailSubject,
      text: mailText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/early-access:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong while submitting. Please try again.",
      },
      { status: 500 }
    );
  }
}

