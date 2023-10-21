import { EmailTemplate } from "@/app/components/EmailTemplete";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <endomamoro9@gmail.com>",
      to: ["endomamoro9@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "test ",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
