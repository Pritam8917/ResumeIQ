import { GoogleGenAI } from "@google/genai";

import { NextResponse } from "next/server";

const genAI = new GoogleGenAI({});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const role = body.role;

    const difficulty = body.difficulty;

    const type = body.type;

    const answers = body.answers;

    if (!answers || answers.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Answers are required",
      });
    }
    const prompt = `
        You are an expert AI technical interviewer.

        Analyze this complete interview carefully.

        Role:
        ${role}

        Interview Type:
        ${type}

        Difficulty:
        ${difficulty}

        Questions and Answers:
        ${JSON.stringify(answers)}

        Requirements:
        - Analyze technical knowledge
        - Analyze communication clarity
        - Analyze problem solving ability
        - Analyze confidence level
        - Give concise and professional feedback

        Return ONLY valid JSON.

        JSON Format:
        {
       "overallScore": 8,
       "technicalScore": 8,
       "communicationScore": 7,
       "confidenceScore": 8,
       "strengths": [
        "Strong React fundamentals"
       ],
        "improvements": [
        "Improve optimization explanations"
        ],
        "recommendation": "Recommended for frontend developer roles"
        }
    `;

    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const rawText = result.text || "";

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let report;

    try {
      report = JSON.parse(cleanedText);
    } catch (error) {
      console.log(error);

      report = {
        overallScore: 7,
        technicalScore: 7,
        communicationScore: 7,
        confidenceScore: 7,
        strengths: ["Good technical understanding"],
        improvements: ["Improve answer structure"],
        recommendation: "Continue practicing interviews",
      };
    }

    return NextResponse.json({
      success: true,
      report,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Failed to evaluate interview",
    });
  }
}
