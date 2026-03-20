// Example function to analyze resume text using a prompt builder

export async function analyzeResume(text) {
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const result = await res.json();
    const raw = result?.data || "";

    // console.log("RAW GEMINI:", raw);

    let parsed = {};

    try {
      const match = raw?.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : {};
    } catch (e) {
      console.error("JSON parse error:", e);
      parsed = {};
    }

    // 🔥 SAFE NORMALIZATION
    return {
      score: parsed?.score || 0,
      grade: parsed?.grade || "",
      tags: parsed?.tags || [],

      skills_summary: parsed?.skills_summary || {
        total: 0,
        job_ready: 0,
        developing: 0,
        to_learn: 0,
      },

      technical_arsenal: parsed?.technical_arsenal || [],

      skill_gaps: parsed?.skill_gaps || {
        strong: [],
        improving: [],
        missing: [],
      },

      job_recommendations: parsed?.job_recommendations || [],

      total_job_matches: parsed?.total_job_matches || 0,

      resume_breakdown: parsed?.resume_breakdown || {
        skills_score: 0,
        presentation_score: 0,
        skills_feedback: "",
        presentation_feedback: "",
      },

      actions: parsed?.actions || [],
      career_roadmap: parsed?.career_roadmap || [],

      strengths: parsed?.strengths || [],
      suggestions: parsed?.suggestions || [],
    };

  } catch (err) {
    console.error("Frontend AI error:", err);

    // 🔥 SAME STRUCTURE (VERY IMPORTANT)
    return {
      score: 0,
      grade: "",
      tags: [],

      skills_summary: {
        total: 0,
        job_ready: 0,
        developing: 0,
        to_learn: 0,
      },

      technical_arsenal: [],
      skill_gaps: { strong: [], improving: [], missing: [] },

      job_recommendations: [],
      total_job_matches: 0,

      resume_breakdown: {
        skills_score: 0,
        presentation_score: 0,
        skills_feedback: "",
        presentation_feedback: "",
      },

      actions: [],
      career_roadmap: [],

      strengths: [],
      suggestions: ["AI analysis failed"],
    };
  }
}

export async function generateCoverLetter(resume, job, promptBuilder) {
  return await askAI(promptBuilder(resume, job));
}
