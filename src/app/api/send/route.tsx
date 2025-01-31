import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["harold.nwosu03@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Email Body</p>
          <p>New message submitted: </p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
