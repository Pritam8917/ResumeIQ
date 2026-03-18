export const resumePrompt = (text) => `
Return JSON only:

{
  "score": number,
  "skills": [],
  "missing": [],
  "suggestions": []
}

Analyze this resume:
${text}
`;

export const coverLetterPrompt = (resume, job) => `
Write a professional cover letter based on:

Resume:
${resume}

Job Description:
${job}
`;