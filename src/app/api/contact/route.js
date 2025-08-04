import { transporter } from "@/lib/transporter";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const mail_html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL,
      subject: `Contact Form Submission from ${name}`,
      html: mail_html,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error({ error: "Error sending email" }, error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
