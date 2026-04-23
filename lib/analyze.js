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

    const responseText = await res.text();
    let raw = "";

    try {
      // Try parsing API response first
      const result = JSON.parse(responseText);
      raw = result?.data || "";
      
      if (!res.ok || !result.success) {
        return {
          error: true,
          message:
            result?.error ||
            "AI analysis failed due to high demand. Please try again later.",
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.warn("Response is not pure JSON, using raw text");
      raw = responseText;
    }

    let parsed = {};

    try {
      if (typeof raw === "string") {
        // Extract JSON from string
        const match = raw.match(/\{[\s\S]*\}/);
        parsed = match ? JSON.parse(match[0]) : {};
      } else if (typeof raw === "object" && raw !== null) {
        // Already parsed JSON
        parsed = raw;
      } else {
        parsed = {};
      }
    } catch (e) {
      console.error("JSON parse error:", e);
      console.error("RAW AI OUTPUT:", raw);
      parsed = {};
    }

    // SAFE NORMALIZATION
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

    //CLEAN ERROR RESPONSE
    return {
      error: true,
      message:
        "AI analysis failed due to server or network issue. Please try again.",
    };
  }
}

export async function generateCoverLetter(resume, job, promptBuilder) {
  return await askAI(promptBuilder(resume, job));
}
