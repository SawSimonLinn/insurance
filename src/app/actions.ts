"use server";

import nodemailer from "nodemailer";
import { format } from "date-fns";

export async function handleQuoteRequest(data: any) {
  try {
    // ---- 1. Configure Gmail transporter ----
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ---- 2. Format date (safe for string or Date object) ----
    const formattedBirthday = data.birthday
      ? format(new Date(data.birthday), "MMMM d, yyyy")
      : "N/A";

    // ---- 3. Email to Business (Admin) ----
    const adminMail = {
      from: `"Ventures Quality Insurance" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER || process.env.GMAIL_USER,
      subject: `New Quote Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #0b5394;">New Quote Request</h2>
          <p><strong>Full Name:</strong> ${data.name}</p>
          <p><strong>Date of Birth:</strong> ${formattedBirthday}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
          <p><strong>Address:</strong><br>${data.address}</p>
          <hr>
          <p style="color:#666;font-size:12px;">This message was sent from your website form.</p>
        </div>
      `,
    };

    // ---- 4. Email to User (Confirmation Copy) ----
    const userMail = {
      from: `"Ventures Quality Insurance" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: "We've received your quote request!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #0b5394;">Thank you, ${data.name}!</h2>
          <p>We’ve received your quote request and our team will contact you soon to discuss your coverage options.</p>
          <p><strong>Here’s what you submitted:</strong></p>
          <ul>
            <li><strong>Insurance Type:</strong> ${data.insuranceType}</li>
            <li><strong>Date of Birth:</strong> ${formattedBirthday}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Address:</strong> ${data.address}</li>
          </ul>
          <p>If you have any additional details, feel free to reply directly to this email.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Ventures Quality Insurance Team</strong><br>
          <a href="https://www.venturesqualityinsurance.com">www.venturesqualityinsurance.com</a></p>
        </div>
      `,
    };

    // ---- 5. Send both emails ----
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return { success: true };
  } catch (error: any) {
    console.error("Email send failed:", error);
    return { success: false, error: `Email sending failed: ${error.message}` };
  }
}
