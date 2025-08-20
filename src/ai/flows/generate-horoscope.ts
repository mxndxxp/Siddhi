'use server';

/**
 * @fileOverview A flow that generates a daily horoscope for a given zodiac sign.
 *
 * - generateHoroscope - A function that handles the horoscope generation process.
 * - GenerateHoroscopeInput - The input type for the generateHoroscope function.
 * - GenerateHoroscopeOutput - The return type for the generateHoroscope function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHoroscopeInputSchema = z.object({
  sign: z.string().describe('The zodiac sign for which to generate the horoscope (e.g., Aries, Taurus).'),
  language: z.enum(['en', 'mr']).describe('The language for the response (English or Marathi).')
});

export type GenerateHoroscopeInput = z.infer<typeof GenerateHoroscopeInputSchema>;

const GenerateHoroscopeOutputSchema = z.object({
  horoscope: z.string().describe('The detailed daily horoscope reading.'),
});

export type GenerateHoroscopeOutput = z.infer<typeof GenerateHoroscopeOutputSchema>;

export async function generateHoroscope(input: GenerateHoroscopeInput): Promise<GenerateHoroscopeOutput> {
  return generateHoroscopeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHoroscopePrompt',
  input: {schema: GenerateHoroscopeInputSchema},
  output: {schema: GenerateHoroscopeOutputSchema},
  prompt: `You are an expert Indian astrologer (Jyotishi) writing a daily horoscope.
Your task is to generate an insightful and unique daily horoscope for the zodiac sign of {{{sign}}}.
The horoscope should be for today's date.
Provide guidance on aspects like career, relationships, health, and finance.
Maintain a wise, encouraging, and slightly mystical tone.
The response must be in the {{language}} language.
Do not repeat horoscopes. Each day should be fresh and different.
Provide a detailed paragraph.`,
});

const generateHoroscopeFlow = ai.defineFlow(
  {
    name: 'generateHoroscopeFlow',
    inputSchema: GenerateHoroscopeInputSchema,
    outputSchema: GenerateHoroscopeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
