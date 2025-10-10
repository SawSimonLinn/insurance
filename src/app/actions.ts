"use server";

import { summarizeQuoteRequest, type SummarizeQuoteRequestInput } from "@/ai/flows/summarize-quote-request";

export async function handleQuoteRequest(data: SummarizeQuoteRequestInput) {
    try {
        const result = await summarizeQuoteRequest(data);

        if (result.emailSent) {
            return { success: true };
        } else {
            return { success: false, error: "Failed to process quote request." };
        }
    } catch (error) {
        console.error("Quote request failed:", error);
        return { success: false, error: "An unexpected error occurred while processing your request." };
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
        return { success: false, error: "An unexpected error occurred while sending your message." };
    }
}
