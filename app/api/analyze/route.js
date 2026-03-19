import { GoogleGenAI } from "@google/genai";
import { resumePrompt } from "../../../lib/prompt";
const genAI = new GoogleGenAI({});

export async function POST(req) {
  try {
    const { text } = await req.json();

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: resumePrompt(text),
    });
    console.log("Gemini API Work Successfully!")
    const raw = response.text;
    console.log(raw);
    return Response.json({ success: true, data: raw });
  } catch (error) {
    console.error("Gemini Error:", error);

    return Response.json({
      success: false,
      data: JSON.stringify({
        score: 0,
        skills: [],
        missing: [],
        suggestions: ["AI analysis failed"],
      }),
    });
  }
}
