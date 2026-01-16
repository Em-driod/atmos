import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStylistAdvice = async (userQuery: string, productContext?: string): Promise<string> => {
  try {
    const prompt = `
      You are "Vesta", the AI concierge for 'Atmos Vestiaty', an elite avant-garde fashion house.
      Your tone is minimalist, poetic, and highly sophisticated.
      Do not use emojis. Be brief.
      
      Atelier Location Information:
      - Physical Address: Behind Ebenezer High School, Agba Dam Area, Ilorin, Nigeria.
      - Contact/WhatsApp: 08069813105 or 08032250283.
      
      User Context: ${productContext ? `User is viewing: ${productContext}` : 'User is browsing the gallery.'}
      
      User Question: "${userQuery}"
      
      If the user asks for location or contact info, provide the Ilorin address or WhatsApp numbers elegantly.
      Otherwise, provide a sophisticated styling recommendation or answer regarding fabrics and care.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "I cannot discern the pattern at this moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The signal is faint. Please inquire again.";
  }
};