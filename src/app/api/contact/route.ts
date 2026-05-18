import { contactSchema } from "@/lib/validators";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // EMAIL TO YOU
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nikita.krikunov.dev@gmail.com",
      subject: `New contact form message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>

        <hr />

        <p>${data.message}</p>
      `,
    });

    // COPY TO USER
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: data.email,
      subject: "Your message has been received",
      html: `
        <h2>Thank you for contacting me</h2>

        <p>Your message was received successfully.</p>

        <p>I will get back to you as soon as possible.</p>
      `,
    });

    return Response.json({
      ok: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        ok: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}