export const resumePrompt = (resumeText) => `
You are an expert AI recruiter, career strategist, and ATS evaluator.

Analyze the following resume and generate a highly structured career intelligence report.

RESUME:
${resumeText}

----------------------------------
TASKS
----------------------------------

1. OVERALL EVALUATION
- Assign:
  - score (0–100)
  - grade (A+, A, A-, B, etc.)
  - tags (e.g., ATS Compliant, Strong Profile, Needs Improvement)

2. SKILL ANALYSIS (for Technical Arsenal)
For EACH detected skill:
- name
- score (0–10)
- status:
    - "Job-ready"
    - "Nearly job-ready"
    - "Developing"
    - "Beginner"
- demand: ("In Demand" or "Low Demand")
- strength: explain why strong (based on resume)
- expectation: what employers expect to improve

Also return:
- total_skills
- job_ready_count
- developing_count
- to_learn_count

3. SKILL GAP INSIGHTS (for Dashboard)
Classify important skills into:
- strong_skills
- improving_skills
- missing_skills

4. JOB RECOMMENDATIONS (VERY IMPORTANT)
Return TOP 15 roles.

For each role:
- role
- match_percentage (realistic)
- reason (why this role fits)
- missing_skills (specific gaps)
- estimated_prep_time (e.g., "2-4 months")

Also return:
- total_job_matches

5. RESUME BREAKDOWN (Resume Analysis section)
Return:
- skills_score (0–100)
- presentation_score (0–100)

Also provide:
- skills_feedback
- presentation_feedback

6. ACTIONABLE IMPROVEMENTS (Actions Tab)
Return list of actions:
- title
- description
- type ("course", "project", "resume_fix", "assessment")

7. CAREER ROADMAP (VERY IMPORTANT)
For TOP 4 roles:
- role
- match_percentage
- required_skills
- missing_skills
- steps_to_achieve (ordered list)
- estimated_time (e.g., "3-6 months")

8. SUMMARY INSIGHTS (for dashboard)
Return:
- strengths (list)
- suggestions (list)

----------------------------------
OUTPUT FORMAT (STRICT JSON)
----------------------------------

{
  "score": number,
  "grade": "",
  "tags": [],

  "skills_summary": {
    "total": number,
    "job_ready": number,
    "developing": number,
    "to_learn": number
  },

  "technical_arsenal": [
    {
      "name": "",
      "score": number,
      "status": "",
      "demand": "",
      "strength": "",
      "expectation": ""
    }
  ],

  "skill_gaps": {
    "strong": [],
    "improving": [],
    "missing": []
  },

  "job_recommendations": [
    {
      "role": "",
      "match_percentage": number,
      "reason": "",
      "missing_skills": [],
      "estimated_prep_time": ""
    }
  ],

  "total_job_matches": number,

  "resume_breakdown": {
    "skills_score": number,
    "presentation_score": number,
    "skills_feedback": "",
    "presentation_feedback": ""
  },

  "actions": [
    {
      "title": "",
      "description": "",
      "type": ""
    }
  ],

  "career_roadmap": [
    {
      "role": "",
      "match_percentage": number,
      "required_skills": [],
      "missing_skills": [],
      "steps_to_achieve": [],
      "estimated_time": ""
    }
  ],

  "strengths": [],
  "suggestions": []
}
`;

export const coverLetterPrompt = (resume, job) => `
Write a professional cover letter based on:

Resume:
${resume}

Job Description:
${job}
`;