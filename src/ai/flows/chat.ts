'use server';

/**
 * @fileOverview A conversational AI flow for an astrology chatbot.
 *
 * - chat - A function that handles the chat conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
      text: z.string(),
    })),
  })).describe('The history of the conversation.'),
  message: z.string().describe('The user\'s message.'),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe('The AI\'s response.'),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
    return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {history, message} = input;

    const response = await ai.generate({
      model: 'googleai/gemini-2.0-flash',
      history: history,
      prompt: `You are an expert Indian astrologer (Jyotishi) running a friendly chatbot on a website called "Shree Siddhivinayak Jyotish".
      Your tone should be helpful, welcoming, and knowledgeable. Keep your answers concise and easy to understand for a general audience.
      
      User's message: ${message}`,
    });

    return {
      message: response.text,
    };
  }
);
