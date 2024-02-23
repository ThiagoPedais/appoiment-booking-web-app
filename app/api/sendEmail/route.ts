import { EmailTemplate } from "@/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
    const response = await req.json();
    const result = response.data;

    try {
        const data = await resend.emails.send({
            from: "Doctor-Appointment-Booking@tp.com",
            to: [response.data.Email],
            subject: "Appointment Booking Confirmation",
            //@ts-ignore
            react: EmailTemplate({ result }),
        });

        return NextResponse.json({ data });
    } catch (error) {
        console.log("[SEND EMAIL]", error);
        return NextResponse.json({ error });
    }
}
