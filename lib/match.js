export function calculateMatch(jobSkills, userSkills) {

  const user = userSkills.map(s => s.toLowerCase());

  const matched = jobSkills.filter(skill =>
    user.includes(skill.toLowerCase())
  );

  const missing = jobSkills.filter(skill =>
    !user.includes(skill.toLowerCase())
  );

  const matchPercent = Math.round(
    (matched.length / jobSkills.length) * 100
  );

  return { matchPercent, matched, missing };
}