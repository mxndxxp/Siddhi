'use server';

/**
 * @fileOverview A flow to handle booking an appointment by collecting user details.
 * This is a placeholder and does not save data.
 *
 * - bookAppointment - A function that receives user details for an appointment.
 * - BookAppointmentInput - The input type for the bookAppointment function.
 * - BookAppointmentOutput - The return type for the bookAppointment function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BookAppointmentInputSchema = z.object({
  fullName: z.string().describe('The full name of the user.'),
  dob: z.string().describe("The user's date of birth."),
  birthPlace: z.string().describe("The user's place of birth."),
  birthTime: z.string().describe("The user's time of birth."),
});

export type BookAppointmentInput = z.infer<typeof BookAppointmentInputSchema>;

const BookAppointmentOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type BookAppointmentOutput = z.infer<typeof BookAppointmentOutputSchema>;

export async function bookAppointment(input: BookAppointmentInput): Promise<BookAppointmentOutput> {
  return bookAppointmentFlow(input);
}

const bookAppointmentFlow = ai.defineFlow(
  {
    name: 'bookAppointmentFlow',
    inputSchema: BookAppointmentInputSchema,
    outputSchema: BookAppointmentOutputSchema,
  },
  async (input) => {
    console.log('Received appointment details:', input);

    // This flow now just confirms receipt and returns a message.
    // The actual sending is handled on the client via a mailto link.
    return {
      success: true,
      message: 'Your info is ready to be sent. Please click the button to open your email client.',
    };
  }
);
