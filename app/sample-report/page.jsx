"use client";

import {
  Brain,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  Target,
} from "lucide-react";

export default function ProfessionalReportPreview() {
  const strengths = [
    "Strong frontend engineering foundation",
    "Excellent React and Next.js ecosystem knowledge",
    "Good UI/UX implementation experience",
    "Modern development workflow understanding",
  ];

  const improvements = [
    "Add scalable backend projects",
    "Improve ATS keyword optimization",
    "Include quantified achievements",
    "Add testing and DevOps experience",
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express",
    "REST APIs",
  ];

  const jobs = [
    {
      role: "Frontend Engineer",
      company: "Vercel",
      match: 92,
    },

    {
      role: "React Developer",
      company: "Linear",
      match: 88,
    },

    {
      role: "Full Stack Engineer",
      company: "Notion",
      match: 84,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white px-4 py-6 md:py-8">
      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-87.5 w-87.5 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-75 w-75 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ================= HERO ================= */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          {/* LEFT */}

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/10 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-300">
              <Sparkles size={14} />
              AI Resume Intelligence
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-5 leading-tight">
              Resume Analysis
              <span className="block bg-linear-to-r from-indigo-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Professional Overview
              </span>
            </h1>

            <p className="text-sm md:text-[15px] text-slate-400 mt-5 max-w-2xl leading-7">
              Advanced AI-powered resume diagnostics, career positioning
              analysis, skill evaluation, and job market compatibility insights.
            </p>
          </div>

          {/* SCORE CARD */}

          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/2.5 backdrop-blur-xl p-6 min-w-70">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Resume Score
              </p>

              <div className="flex items-end gap-3 mt-4">
                <h2 className="text-6xl font-semibold bg-linear-to-r from-indigo-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  89
                </h2>

                <p className="text-cyan-300 text-sm mb-2">+12%</p>
              </div>

              <div className="mt-5 h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[89%] rounded-full bg-linear-to-r from-indigo-500 to-cyan-500" />
              </div>

              <div className="flex items-center gap-2 mt-4 text-cyan-300 text-sm">
                <ArrowUpRight size={15} />
                Excellent ATS Compatibility
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              title: "Technical Skills",
              value: "28",
              icon: Brain,
              color: "text-indigo-300",
              bg: "bg-indigo-500/10",
            },

            {
              title: "Job Matches",
              value: "14",
              icon: Briefcase,
              color: "text-cyan-300",
              bg: "bg-cyan-500/10",
            },

            {
              title: "ATS Score",
              value: "94%",
              icon: TrendingUp,
              color: "text-violet-300",
              bg: "bg-violet-500/10",
            },

            {
              title: "Market Rank",
              value: "Top 9%",
              icon: Target,
              color: "text-slate-300",
              bg: "bg-slate-500/10",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/5 bg-white/2.5 backdrop-blur-xl p-5"
            >
              <div
                className={`h-11 w-11 rounded-2xl ${item.bg} border border-white/5 flex items-center justify-center`}
              >
                <item.icon className={item.color} size={18} />
              </div>

              <h2 className="text-3xl font-semibold mt-5">{item.value}</h2>

              <p className="text-slate-500 text-xs mt-2">{item.title}</p>
            </div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-3 gap-5">
          {/* LEFT */}

          <div className="lg:col-span-2 space-y-5">
            {/* SUMMARY */}

            <div className="rounded-[30px] border border-white/5 bg-white/2.5 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center">
                  <Sparkles className="text-indigo-300" size={18} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Executive Summary</h2>

                  <p className="text-slate-500 text-xs mt-1">
                    AI generated professional evaluation
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-7">
                Your resume demonstrates strong frontend engineering
                capabilities with modern React ecosystem expertise. The profile
                aligns well with current frontend market requirements. Expanding
                backend architecture experience and measurable project impact
                metrics could significantly improve senior-level hiring
                opportunities.
              </p>
            </div>

            {/* STRENGTHS + IMPROVEMENTS */}

            <div className="grid md:grid-cols-2 gap-5">
              {/* STRENGTHS */}

              <div className="rounded-[30px] border border-white/5 bg-white/2.5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center">
                    <CheckCircle2 className="text-cyan-300" size={18} />
                  </div>

                  <h2 className="text-lg font-semibold">Key Strengths</h2>
                </div>

                <div className="space-y-3">
                  {strengths.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/4 bg-white/2 p-4 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* IMPROVEMENTS */}

              <div className="rounded-[30px] border border-white/5 bg-white/2.5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center">
                    <AlertTriangle className="text-indigo-300" size={18} />
                  </div>

                  <h2 className="text-lg font-semibold">Improvement Areas</h2>
                </div>

                <div className="space-y-3">
                  {improvements.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/4 bg-white/2 p-4 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-5">
            {/* SKILLS */}

            <div className="rounded-[30px] border border-white/5 bg-white/2.5 backdrop-blur-xl p-6">
              <h2 className="text-lg font-semibold mb-5">Core Technologies</h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-white/2 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* JOBS */}

            <div className="rounded-[30px] border border-white/5 bg-white/2.5 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold">Recommended Roles</h2>

                <Target className="text-indigo-300" size={18} />
              </div>

              <div className="space-y-4">
                {jobs.map((job, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/5 bg-white/2 p-4"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-medium text-sm">{job.role}</h3>

                        <p className="text-slate-500 text-xs mt-1">
                          {job.company}
                        </p>
                      </div>

                      <div className="rounded-full bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                        {job.match}%
                      </div>
                    </div>

                    <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-indigo-500 to-cyan-500"
                        style={{
                          width: `${job.match}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
