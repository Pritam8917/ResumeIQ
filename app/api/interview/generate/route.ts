import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenAI({});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const role = body.role;
    const difficulty = body.difficulty;
    const type = body.type;

    if (!role) {
      return NextResponse.json({
        success: false,
        message: "Role is required",
      });
    }

    const prompt = `
You are an expert AI interview system.

Generate 10 realistic interview questions.

Role:
${role}

Interview Type:
${type}

Difficulty:
${difficulty}

Requirements:
- Questions should feel like real interviews
- Include practical and conceptual questions
- Keep questions concise
- Do NOT use markdown
- Do NOT number questions
- Return ONLY a valid JSON array

Example:
[
  "Explain React hooks.",
  "What is API caching?"
]
`;

    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text =
      result.text
        ?.replace(/```json/g, "")
        .replace(/```/g, "")
        .trim() || "[]";

    let questions = [];

    try {
      questions = JSON.parse(text);
    } catch {
      questions = [
        "Tell me about yourself.",
        "Explain a challenging project you worked on.",
        "How do you solve performance issues?",
      ];
    }

    return NextResponse.json({
      success: true,
      questions,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Failed to generate questions",
    });
  }
}
