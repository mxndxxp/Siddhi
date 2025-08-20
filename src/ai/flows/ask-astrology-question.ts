'use server';

/**
 * @fileOverview A flow that allows users to ask specific questions and receive AI-driven astrological guidance based on their birth chart.
 *
 * - askAstrologyQuestion - A function that handles the process of asking an astrological question and receiving a response.
 * - AskAstrologyQuestionInput - The input type for the askAstrologyQuestion function.
 * - AskAstrologyQuestionOutput - The return type for the askAstrologyQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAstrologyQuestionInputSchema = z.object({
  birthDate: z.string().describe('The birth date of the user (YYYY-MM-DD).'),
  birthTime: z.string().describe('The birth time of the user (HH:MM).'),
  birthLocation: z.string().describe('The birth location of the user.'),
  question: z.string().describe('The specific question the user wants to ask.'),
  language: z.enum(['en', 'mr']).describe('The language for the response (English or Marathi).')
});

export type AskAstrologyQuestionInput = z.infer<typeof AskAstrologyQuestionInputSchema>;

const AskAstrologyQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI-driven astrological guidance based on the user provided information.'),
});

export type AskAstrologyQuestionOutput = z.infer<typeof AskAstrologyQuestionOutputSchema>;

export async function askAstrologyQuestion(input: AskAstrologyQuestionInput): Promise<AskAstrologyQuestionOutput> {
  return askAstrologyQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAstrologyQuestionPrompt',
  input: {schema: AskAstrologyQuestionInputSchema},
  output: {schema: AskAstrologyQuestionOutputSchema},
  prompt: `You are an expert Indian astrologer (Jyotishi) with deep knowledge of Vedic astrology. Your task is to provide an insightful and personalized astrological reading in {{language}}.

You will be given the user's birth details and a specific question. Your response should be structured in two parts:

1.  **Personality Reading:** Based on the birth date, time, and location, provide a brief but insightful overview of the user's core personality traits, strengths, and potential challenges.
2.  **Answer to the Question:** Provide a detailed, thoughtful, and compassionate answer to the user's specific question, using astrological principles to guide your response.

Maintain a tone that is wise, empathetic, and empowering.

**User's Birth Details:**
*   **Birth Date:** {{{birthDate}}}
*   **Birth Time:** {{{birthTime}}}
*   **Birth Location:** {{{birthLocation}}}

**User's Question:**
"{{{question}}}"

Provide your comprehensive reading and answer below.`,
});

const askAstrologyQuestionFlow = ai.defineFlow(
  {
    name: 'askAstrologyQuestionFlow',
    inputSchema: AskAstrologyQuestionInputSchema,
    outputSchema: AskAstrologyQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
