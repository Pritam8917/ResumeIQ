// example puter.js file to interact with the AI model
export async function askAI(prompt) {
  const res = await window.puter.ai.chat({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.message.content;
}
// Example function to analyze resume text using a prompt builder
export async function analyzeResume(text, promptBuilder) {
  const raw = await askAI(promptBuilder(text));

  try {
    return JSON.parse(raw);
  } catch {
    console.error("Parsing error:", raw);
    return null;
  }
}

export async function generateCoverLetter(resume, job, promptBuilder) {
  return await askAI(promptBuilder(resume, job));
}