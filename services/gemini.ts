
import { GoogleGenAI } from "@google/genai";

export const generateStorySpark = async (keywords: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, cinematic 2-sentence movie premise or "narrative spark" based on these keywords: ${keywords}. Focus on light, shadow, and visual storytelling.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text?.trim() || "No spark found. The shadows are quiet tonight.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The muse is silent. (API Error)";
  }
};
