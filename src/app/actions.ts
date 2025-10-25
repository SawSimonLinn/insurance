"use server";

import nodemailer from "nodemailer";
import { format } from "date-fns";

export async function handleQuoteRequest(data: any) {
  try {
    // ---- Configure Gmail transporter ----
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // sender Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // app password
      },
    });

    // ---- Format date of birth ----
    const formattedBirthday = format(new Date(data.birthday), "MMMM d, yyyy");

    // ---- Email destination (easy to edit) ----
    const receiver = process.env.GMAIL_RECEIVER || process.env.GMAIL_USER;

    // ---- Compose the email ----
    const mailOptions = {
      from: `"Insurance Form" <${process.env.GMAIL_USER}>`,
      to: receiver,
      subject: `New Insurance Quote from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color: #0b5394;">New Insurance Quote Request</h2>
          <p><strong>Full Name:</strong> ${data.name}</p>
          <p><strong>Date of Birth:</strong> ${formattedBirthday}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
          <p><strong>Address:</strong><br/>${data.address}</p>
          <hr/>
          <p style="color:#666;font-size:12px;">This message was automatically generated from your website form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error: any) {
    console.error("Email send failed:", error);
    return { success: false, error: `Email sending failed: ${error.message}` };
  }
}

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  subject: string;
  message: string;
};

export async function handleContactRequest(data: ContactFormData) {
  try {
    // Here you would typically send an email or save the message to a database.
    // For this example, we'll just log it to the console.
    console.log("New contact message received:", data);

    // Simulate a successful submission
    return { success: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      success: false,
      error: "An unexpected error occurred while sending your message.",
    };
  }
}
