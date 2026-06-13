import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getProductById } from "@/data/products";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, interest, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, message)" },
        { status: 400 }
      );
    }

    // Resolve machine/product ID to display name for email legibility
    let interestName = interest;
    if (interest) {
      const productObj = getProductById(interest);
      if (productObj) {
        interestName = `${productObj.name} (${productObj.sub})`;
      } else if (interest === "maintenance") {
        interestName = "After-Sales Maintenance & Support";
      } else if (interest === "detailing-chemical") {
        interestName = "Bulk Chemical & Consumable Orders";
      }
    } else {
      interestName = "General Site Inquiry";
    }

    // Configure fallback values for Gmail to make initial configuration painless
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER || "nexotekclean@gmail.com";
    const smtpPass = process.env.SMTP_PASS;

    // Return warning if SMTP password is not configured yet
    if (!smtpPass) {
      console.warn("SMTP_PASS is not configured in environment variables. Email could not be sent.");
      // We simulate success in development even if keys aren't added, to not crash the form UI
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Form accepted, but SMTP_PASS is missing. Configure it in .env.local to receive emails."
      });
    }

    // Setup SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // Use SSL for port 465, otherwise STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Do not fail on self-signed certificates (fixes VPN, antivirus, and local proxy issues)
        rejectUnauthorized: false,
      },
    });

    // Clean phone number for WhatsApp URL
    const cleanPhone = phone.replace(/[^0-9]/g, "");

    // Premium HTML Email Template matching corporate brand guidelines
    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #0A0D14; padding: 28px 24px; text-align: center; border-bottom: 3px solid #0066FF;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">NexoTek Inquiry</h2>
          <p style="color: #379dd5; margin: 6px 0 0 0; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">New Web Lead Received</p>
        </div>
        <div style="padding: 32px 24px; background-color: #ffffff;">
          <p style="margin-top: 0; color: #525252; font-size: 14px; line-height: 1.6;">You have received a new business lead from the Nexotek website inquiry form. Details are listed below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
            <tr style="border-bottom: 1px solid #f3f3f3;">
              <td style="padding: 14px 0; font-weight: bold; color: #a3a3a3; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Client Name</td>
              <td style="padding: 14px 0; color: #0A0D14; font-weight: bold; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f3f3;">
              <td style="padding: 14px 0; font-weight: bold; color: #a3a3a3; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
              <td style="padding: 14px 0; color: #0A0D14; font-weight: bold; font-size: 14px;">
                <a href="tel:${phone}" style="color: #0066FF; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f3f3;">
              <td style="padding: 14px 0; font-weight: bold; color: #a3a3a3; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Machine Interest</td>
              <td style="padding: 14px 0; color: #0A0D14; font-weight: bold; font-size: 14px;">${interestName}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; font-weight: bold; color: #a3a3a3; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
              <td style="padding: 14px 0; color: #525252; font-size: 14px; line-height: 1.6; white-space: pre-line;">${message}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 36px;">
            <a href="https://wa.me/${cleanPhone}" target="_blank" style="display: inline-block; padding: 14px 28px; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 12px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1.5px; box-shadow: 0 4px 6px rgba(37, 211, 102, 0.25);">Reply on WhatsApp</a>
          </div>
        </div>
        <div style="background-color: #f9f9f9; padding: 18px; text-align: center; border-top: 1px solid #e5e5e5; color: #a3a3a3; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
          Sent via NexoTek Automated Lead System
        </div>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"${name} via Nexotek Website" <${smtpUser}>`,
      to: smtpUser, // Send to yourself
      replyTo: smtpUser, 
      subject: `New Lead: ${name} - ${interestName}`,
      text: `New Lead:\nName: ${name}\nPhone: ${phone}\nInterest: ${interestName}\nMessage: ${message}`,
      html: htmlEmail,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer error: ", error);
    return NextResponse.json(
      { error: "Failed to send email. " + error.message },
      { status: 500 }
    );
  }
}
