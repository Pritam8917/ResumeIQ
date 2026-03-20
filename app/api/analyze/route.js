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

    console.log("Gemini API Work Successfully!");

    const raw = response.text;

    console.log(raw);
    return Response.json({ success: true, data: raw });
  } catch (error) {
    console.error("Gemini Error:", error);

    return Response.json({
      success: false,
      data: {
        score: 0,
        grade: "N/A",
        tags: [],

        skills_summary: {
          total: 0,
          job_ready: 0,
          developing: 0,
          to_learn: 0,
        },

        technical_arsenal: [],

        skill_gaps: {
          strong: [],
          improving: [],
          missing: [],
        },

        job_recommendations: [],
        total_job_matches: 0,

        resume_breakdown: {
          skills_score: 0,
          presentation_score: 0,
          skills_feedback: "Analysis failed",
          presentation_feedback: "Analysis failed",
        },

        actions: [
          {
            title: "Retry Analysis",
            description: "Something went wrong. Please upload again.",
            type: "system",
          },
        ],

        career_roadmap: [],

        strengths: [],
        suggestions: ["AI analysis failed. Please try again."],
      },
    });
  }
}
