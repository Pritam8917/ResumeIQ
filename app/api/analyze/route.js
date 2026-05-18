import { GoogleGenAI } from "@google/genai";
import { resumePrompt } from "../../../lib/prompt";
const genAI = new GoogleGenAI({});

export async function POST(req) {
  try {
    const { text } = await req.json();

    const response = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: resumePrompt(text),
    });

    console.log("Gemini API Work Successfully!");

    const raw = response.text;

    console.log(raw);
    return Response.json({ success: true, data: raw });
  } catch (error) {
    console.error("Gemini Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          "AI is currently under high demand. Please try again in a moment.",
        type: "OVERLOADED", // optional (useful for UI logic)
      }),
      { status: 503 },
    );
  }
}
