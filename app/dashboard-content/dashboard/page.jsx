"use client";

import { useRouter } from "next/navigation";
import {
  Brain,
  Briefcase,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  FileText,
  User,
  Wrench,
} from "lucide-react";

import { useResumeStore } from "@/store/resumeStore";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const data = useResumeStore((s) => s.data);

  const [visibleCount, setVisibleCount] = useState(6);

  if (!data) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND */}

        <div className="fixed inset-0 -z-10 bg-[#0B1120]">
          <div className="absolute top-0 left-1/3 h-100 w-100 rounded-full bg-violet-600/5 blur-3xl" />

          <div className="absolute bottom-0 right-1/4 h-75 w-75 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="space-y-6 animate-pulse">
          {/* HERO */}

          <div className="relative overflow-hidden rounded-3xl border border-white/3 bg-linear-to-br from-[#111827] via-[#0F172A] to-[#1A1B3A] p-6 md:p-8">
            <div className="h-6 w-36 rounded-full bg-white/10" />

            <div className="mt-6 space-y-3">
              <div className="h-10 w-full max-w-2xl rounded-2xl bg-white/10" />

              <div className="h-10 w-[80%] rounded-2xl bg-white/5" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-3 w-full max-w-xl rounded-full bg-white/5" />

              <div className="h-3 w-[70%] rounded-full bg-white/5" />
            </div>
          </div>

          {/* QUICK ACTIONS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/3 bg-white/3 p-4"
              >
                <div className="h-3 w-20 rounded-full bg-white/10" />

                <div className="h-5 w-28 rounded-xl bg-white/10 mt-4" />
              </div>
            ))}
          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/3 bg-white/3 p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-white/10" />

                  <div className="h-10 w-10 rounded-xl bg-white/10" />
                </div>

                <div className="h-10 w-20 rounded-2xl bg-white/10 mt-6" />

                <div className="h-3 w-24 rounded-full bg-white/5 mt-4" />
              </div>
            ))}
          </div>

          {/* AI INSIGHTS */}

          <div className="rounded-3xl border border-white/3 bg-white/3 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-5 w-40 rounded-xl bg-white/10" />

                <div className="h-3 w-56 rounded-full bg-white/5 mt-3" />
              </div>

              <div className="h-8 w-20 rounded-xl bg-white/10" />
            </div>

            <div className="mt-8 space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-white/10 shrink-0" />

                  <div className="flex-1 rounded-2xl border border-white/3 bg-white/2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-40 rounded-full bg-white/10" />

                      <div className="h-3 w-16 rounded-full bg-white/5" />
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="h-3 w-full rounded-full bg-white/5" />

                      <div className="h-3 w-[80%] rounded-full bg-white/5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS + JOBS */}

          <div className="grid lg:grid-cols-2 gap-5">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/3 bg-white/3 p-5"
              >
                <div className="h-5 w-40 rounded-xl bg-white/10" />

                <div className="h-3 w-56 rounded-full bg-white/5 mt-3" />

                <div className="space-y-4 mt-6">
                  {[1, 2, 3].map((_, j) => (
                    <div
                      key={j}
                      className="rounded-2xl border border-white/3 bg-white/2 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-4 w-32 rounded-full bg-white/10" />

                        <div className="h-5 w-14 rounded-full bg-white/10" />
                      </div>

                      <div className="space-y-3 mt-4">
                        <div className="h-3 w-full rounded-full bg-white/5" />

                        <div className="h-3 w-[70%] rounded-full bg-white/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* TOOLS */}

          <div className="rounded-3xl border border-white/3 bg-white/3 p-5">
            <div className="h-5 w-36 rounded-xl bg-white/10" />

            <div className="h-3 w-52 rounded-full bg-white/5 mt-3" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/3 bg-white/2 p-4"
                >
                  <div className="h-10 w-10 rounded-2xl bg-white/10 mx-auto" />

                  <div className="h-3 w-24 rounded-full bg-white/10 mt-4 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const allSkills = [
    ...(data.skill_gaps?.missing || []).map((s) => ({
      name: s,
      status: "Missing",
      color: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
      priority: 1,
    })),

    ...(data.skill_gaps?.improving || []).map((s) => ({
      name: s,
      status: "Improve",
      color: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
      priority: 2,
    })),

    ...(data.skill_gaps?.strong || []).map((s) => ({
      name: s,
      status: "Strong",
      color: "bg-slate-500/10 text-slate-300 border border-slate-500/20",
      priority: 3,
    })),
  ].sort((a, b) => a.priority - b.priority);

  const visibleSkills = allSkills.slice(0, visibleCount);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 bg-[#0B1120]">
        <div className="absolute top-0 left-1/3 h-100 w-100 rounded-full bg-violet-600/5 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-75 w-75 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="space-y-6">
        {/* HERO */}

        <div className="relative overflow-hidden rounded-3xl border border-white/3 bg-linear-to-br from-[#111827] via-[#0F172A] to-[#1A1B3A] p-6 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_30%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-[11px] text-violet-300">
              ✨ AI Career Dashboard
            </div>

            <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-2xl">
              Build a stronger career with AI-powered resume intelligence
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-400 leading-relaxed">
              Discover missing skills, improve ATS compatibility, explore better
              job opportunities, and accelerate your career growth with
              personalized AI insights.
            </p>
          </div>
        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-5">
          {/* CARD */}

          <div className="group rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5 hover:border-violet-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-xs">Resume Strength</p>

              <div className="p-2.5 rounded-xl border border-violet-500/20 bg-violet-500/10">
                <TrendingUp className="text-violet-400" size={16} />
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight mt-5">
              {data.score}
            </h2>

            <p className="text-violet-300 text-xs mt-2">
              {data.grade} Performance
            </p>
          </div>

          {/* CARD */}

          <div className="group rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5 hover:border-cyan-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-xs">Core Skills</p>

              <div className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                <Brain className="text-cyan-400" size={16} />
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight mt-5">
              {data.skills_summary?.total}
            </h2>

            <p className="text-cyan-300 text-xs mt-2">AI Analyzed</p>
          </div>

          {/* CARD */}

          <div className="group rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5 hover:border-violet-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-xs">Career Matches</p>

              <div className="p-2.5 rounded-xl border border-violet-500/20 bg-violet-500/10">
                <Briefcase className="text-violet-400" size={16} />
              </div>
            </div>

            <h2 className="text-3xl font-bold tracking-tight mt-5">
              {data.total_job_matches}
            </h2>

            <p className="text-violet-300 text-xs mt-2">Recommended Roles</p>
          </div>
        </div>

        {/* AI INSIGHTS */}

        <div className="rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                AI Career Insights
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Personalized analysis generated from your resume
              </p>
            </div>

            <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] text-violet-300">
              Live AI
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* ITEM */}

            <div className="flex gap-4">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-violet-400" />
                </div>

                <div className="absolute top-12 left-1/2 -translate-x-1/2 h-14 w-px bg-white/10" />
              </div>

              <div className="flex-1 rounded-2xl border border-white/3 bg-white/2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">
                    Resume Strength Increased
                  </h3>

                  <span className="text-[10px] text-slate-500">
                    AI Analysis
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Your profile shows strong alignment with modern software
                  development roles.
                </p>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-4">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <AlertCircle size={16} className="text-cyan-300" />
                </div>

                <div className="absolute top-12 left-1/2 -translate-x-1/2 h-14 w-px bg-white/10" />
              </div>

              <div className="flex-1 rounded-2xl border border-white/3 bg-white/2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">
                    Missing Skills Detected
                  </h3>

                  <span className="text-[10px] text-slate-500">
                    Recommendation
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {data.skill_gaps?.missing?.slice(0, 5)?.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-violet-500/10 bg-violet-500/5 px-3 py-1 text-[10px] text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-4">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <CheckCircle size={16} className="text-violet-300" />
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-white/3 bg-white/2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">
                    Career Opportunities Found
                  </h3>

                  <span className="text-[10px] text-slate-500">AI Match</span>
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  {data.total_job_matches}+ relevant opportunities available for
                  your profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS + JOBS */}

        <div className="grid lg:grid-cols-2 gap-5">
          {/* SKILLS */}

          <div className="rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold tracking-tight">
                Skill Gap Insights
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Improve these areas for better opportunities
              </p>
            </div>

            <div className="space-y-3">
              {visibleSkills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-white/3 bg-white/2 p-3 hover:border-violet-500/20 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>

                  <span
                    className={`text-[10px] px-3 py-1 rounded-full font-semibold tracking-wide ${skill.color}`}
                  >
                    {skill.status}
                  </span>
                </div>
              ))}

              {visibleCount < allSkills.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="mt-2 text-xs text-violet-300 hover:text-violet-200 transition"
                >
                  + Show More Skills
                </button>
              )}
            </div>
          </div>

          {/* JOBS */}

          <div className="rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold tracking-tight">
                Recommended Jobs
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Best matched opportunities for you
              </p>
            </div>

            <div className="space-y-4">
              {data.job_recommendations?.slice(0, 3)?.map((job, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/3 bg-white/2 p-4 hover:border-violet-500/20 transition-all duration-300"
                >
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold">{job.role}</h3>

                      <p className="text-slate-400 text-xs mt-1">
                        {job.company || "Unknown Company"}
                      </p>

                      <div className="flex flex-wrap gap-3 text-[11px] text-slate-500 mt-3">
                        <span>📍 {job.location || "Remote"}</span>

                        <span>💼 {job.type || "Full Time"}</span>
                      </div>
                    </div>

                    <div className="h-fit rounded-full px-3 py-1 text-[10px] font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {job.match_percentage}% Match
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-4">
                    {job.reason}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/dashboard-content/jobs")}
              className="mt-5 w-full rounded-2xl border border-violet-500/20 bg-violet-500/10 py-2.5 text-xs font-medium text-violet-200 hover:bg-violet-500/20 transition-all duration-300"
            >
              View All Jobs →
            </button>
          </div>
        </div>

        {/* TOOLS */}

        <div className="rounded-3xl border border-white/3 bg-white/3 backdrop-blur-xl p-5">
          <div className="mb-5">
            <h2 className="text-lg font-semibold tracking-tight">
              AI Career Tools
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Smart tools for your career growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => router.push("/dashboard-content/analysis")}
              className="group rounded-2xl border border-white/3 bg-white/2 p-4 hover:border-violet-500/20 transition-all duration-300"
            >
              <FileText className="mx-auto text-violet-400 group-hover:scale-110 transition-transform duration-300" />

              <p className="mt-3 text-xs font-medium text-slate-300">
                Resume Analysis
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard-content/jobs")}
              className="group rounded-2xl border border-white/3 bg-white/2 p-4 hover:border-cyan-500/20 transition-all duration-300"
            >
              <Briefcase className="mx-auto text-cyan-400 group-hover:scale-110 transition-transform duration-300" />

              <p className="mt-3 text-xs font-medium text-slate-300">Jobs</p>
            </button>

            <button
              onClick={() =>
                router.push("/dashboard-content/technical-arsenal")
              }
              className="group rounded-2xl border border-white/3 bg-white/2 p-4 hover:border-violet-500/20 transition-all duration-300"
            >
              <Wrench className="mx-auto text-violet-400 group-hover:scale-110 transition-transform duration-300" />

              <p className="mt-3 text-xs font-medium text-slate-300">
                Technical Arsenal
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard-content/profile")}
              className="group rounded-2xl border border-white/3 bg-white/2 p-4 hover:border-cyan-500/20 transition-all duration-300"
            >
              <User className="mx-auto text-cyan-400 group-hover:scale-110 transition-transform duration-300" />

              <p className="mt-3 text-xs font-medium text-slate-300">Profile</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
