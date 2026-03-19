// example puter.js file to interact with the AI model
// export async function askAI(prompt) {
//   if (typeof window === "undefined" || !window.puter) {
//     throw new Error("Puter not initialized");
//   }

//   try {
//     const res = await window.puter.ai.chat({
//       model: "gpt-4.1-mini",
//       messages: [{ role: "user", content: prompt }],
//     });

//     console.log("FULL AI RESPONSE:", res);

//     const content =
//       res?.message?.content || res?.choices?.[0]?.message?.content || null;

//     if (!content) {
//       throw new Error("Invalid AI response format");
//     }

//     return content;
//   } catch (err) {
//     console.error("PUTER ERROR:", err);

//     // RETURN SAFE FALLBACK
//     return JSON.stringify({
//       score: 0,
//       skills: [],
//       missing: [],
//       suggestions: [
//         "AI analysis is temporarily unavailable.",
//         "Please try again in a few seconds.",
//       ],
//     });
//   }
// }


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

    const raw = result.data;

    console.log("RAW GEMINI:", raw);

    let parsed = {};

    try {
      const match = raw.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : {};
    } catch {
      parsed = {};
    }

    const safeArray = (value) => {
      if (Array.isArray(value)) return value;
      if (typeof value === "string") {
        return value.split(",").map((s) => s.trim());
      }
      return [];
    };

    return {
      score: parsed?.score || 0,
      skills: safeArray(parsed?.skills),
      missing: safeArray(parsed?.missing),
      suggestions: safeArray(parsed?.suggestions),
    };

  } catch (err) {
    console.error("Frontend AI error:", err);

    return {
      score: 0,
      skills: [],
      missing: [],
      suggestions: ["AI unavailable"],
    };
  }
}

export async function generateCoverLetter(resume, job, promptBuilder) {
  return await askAI(promptBuilder(resume, job));
}
