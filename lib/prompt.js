export const resumePrompt = (text) => `
Analyze the following resume and return ONLY valid JSON.

Do NOT include any explanation or text outside JSON.

Format:
{
  "score": number (0-100),
  "skills": string[],
  "missing": string[],
  "suggestions": string[]
}

Resume:
${text}
`;

export const coverLetterPrompt = (resume, job) => `
Write a professional cover letter based on:

Resume:
${resume}

Job Description:
${job}
`;