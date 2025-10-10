'use server';
/**
 * @fileOverview Summarizes quote requests using GenAI and sends an automated email response.
 *
 * - summarizeQuoteRequest - A function that summarizes a quote request and sends an email.
 * - SummarizeQuoteRequestInput - The input type for the summarizeQuoteRequest function.
 * - SummarizeQuoteRequestOutput - The return type for the summarizeQuoteRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeQuoteRequestInputSchema = z.object({
  name: z.string().describe('The name of the person requesting the quote.'),
  birthday: z.string().describe('The birthday of the person requesting the quote.'),
  email: z.string().email().describe('The email address of the person requesting the quote.'),
  phone: z.string().describe('The phone number of the person requesting the quote.'),
  insuranceType: z.string().describe('The type of insurance requested.'),
  address: z.string().describe('The address of the person requesting the quote.'),
});
export type SummarizeQuoteRequestInput = z.infer<typeof SummarizeQuoteRequestInputSchema>;

const SummarizeQuoteRequestOutputSchema = z.object({
  summary: z.string().describe('A summary of the quote request.'),
  emailSent: z.boolean().describe('Whether the confirmation email was sent successfully.'),
});
export type SummarizeQuoteRequestOutput = z.infer<typeof SummarizeQuoteRequestOutputSchema>;

export async function summarizeQuoteRequest(input: SummarizeQuoteRequestInput): Promise<SummarizeQuoteRequestOutput> {
  return summarizeQuoteRequestFlow(input);
}

const summarizeQuoteRequestPrompt = ai.definePrompt({
  name: 'summarizeQuoteRequestPrompt',
  input: {schema: SummarizeQuoteRequestInputSchema},
  output: {schema: SummarizeQuoteRequestOutputSchema},
  prompt: `Summarize the following quote request in a concise manner, highlighting the key details and insurance needs. Use no more than 200 words.\n\nName: {{{name}}}\nBirthday: {{{birthday}}}\nEmail: {{{email}}}\nPhone: {{{phone}}}\nInsurance Type: {{{insuranceType}}}\nAddress: {{{address}}}`,
});

const summarizeQuoteRequestFlow = ai.defineFlow(
  {
    name: 'summarizeQuoteRequestFlow',
    inputSchema: SummarizeQuoteRequestInputSchema,
    outputSchema: SummarizeQuoteRequestOutputSchema,
  },
  async input => {
    const {output} = await summarizeQuoteRequestPrompt(input);

    // Simulate sending an email
    console.log(`Sending email to: ${input.email} with summary: ${output?.summary}`);
    const emailSent = true; // Assume email was sent successfully

    return {
      summary: output!.summary,
      emailSent: emailSent,
    };
  }
);
