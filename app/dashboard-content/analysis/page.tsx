"use client";

import { useState } from "react";
import { Trophy, Sparkles, BrainCircuit, ArrowRight } from "lucide-react";

import { useResumeStore } from "@/store/resumeStore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type CareerRole = {
  role: string;
  match_percentage: number;
  required_skills?: string[];
  estimated_time?: string;
  why_this_role?: string;
  career_impact?: string;
  missing_skills?: string[];
};

export default function ResumeAnalysisPage() {
  const [activeTab, setActiveTab] = useState("score");
  const [activeRole, setActiveRole] = useState(0);

  const router = useRouter();

  const data = useResumeStore((s) => s.data);

  if (!data) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#081120] text-white">
        {/* BACKGROUND */}

        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/3 h-100 w-100 rounded-full bg-cyan-500/5 blur-3xl" />

          <div className="absolute bottom-0 right-1/4 h-87.5 w-87.5 rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-pulse">
          {/* ================= HERO ================= */}

          <div className="relative overflow-hidden rounded-4xl border border-white/4 bg-linear-to-br from-[#121826] via-[#161B2E] to-[#1F1B4B] p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* LEFT */}

              <div className="max-w-2xl flex-1">
                <div className="h-8 w-40 rounded-full bg-white/10" />

                <div className="mt-6 space-y-3">
                  <div className="h-10 w-full max-w-xl rounded-2xl bg-white/10" />

                  <div className="h-10 w-[70%] rounded-2xl bg-white/5" />
                </div>

                <div className="space-y-3 mt-6">
                  <div className="h-3 w-full max-w-lg rounded-full bg-white/5" />

                  <div className="h-3 w-[80%] rounded-full bg-white/5" />
                </div>

                {/* TAGS */}

                <div className="flex gap-3 mt-7">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-28 rounded-full bg-white/10"
                    />
                  ))}
                </div>
              </div>

              {/* SCORE */}

              <div className="relative shrink-0">
                <div className="h-44 w-44 rounded-full border border-white/5 bg-white/3" />
              </div>
            </div>
          </div>

          {/* ================= TABS ================= */}

          <div className="flex gap-3">
            {[1, 2].map((_, i) => (
              <div key={i} className="h-12 w-40 rounded-2xl bg-white/4" />
            ))}
          </div>

          {/* ================= ANALYTICS ================= */}

          <div className="grid lg:grid-cols-2 gap-5">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="rounded-[28px] border border-white/4 bg-[#12141B]/95 p-6"
              >
                {/* HEADER */}

                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-white/10" />

                    <div>
                      <div className="h-5 w-36 rounded-xl bg-white/10" />

                      <div className="h-3 w-28 rounded-full bg-white/5 mt-3" />
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="h-10 w-16 rounded-2xl bg-white/10" />

                    <div className="h-3 w-20 rounded-full bg-white/5 mt-3" />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="space-y-3 mt-6">
                  <div className="h-3 w-full rounded-full bg-white/5" />

                  <div className="h-3 w-[90%] rounded-full bg-white/5" />

                  <div className="h-3 w-[75%] rounded-full bg-white/5" />
                </div>

                {/* PROGRESS */}

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-3 w-32 rounded-full bg-white/5" />

                    <div className="h-3 w-10 rounded-full bg-white/5" />
                  </div>

                  <div className="h-2 rounded-full bg-white/4]" />
                </div>

                {/* BUTTON */}

                <div className="h-12 rounded-2xl bg-white/4 mt-7" />
              </div>
            ))}
          </div>

          {/* ================= ROADMAP ================= */}

          <div className="rounded-4xl border border-white/4 bg-[#0f1724]/95 p-6 md:p-8">
            {/* HEADER */}

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <div className="h-7 w-32 rounded-full bg-white/10" />

                <div className="h-8 w-64 rounded-2xl bg-white/10 mt-5" />

                <div className="h-3 w-72 rounded-full bg-white/5 mt-4" />
              </div>

              <div className="h-20 w-32 rounded-2xl bg-white/4" />
            </div>

            {/* ROLE TABS */}

            <div className="flex gap-3 mt-8 overflow-hidden">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-36 rounded-2xl bg-white/4"
                />
              ))}
            </div>

            {/* MAIN CARD */}

            <div className="mt-7 rounded-[28px] border border-white/4 bg-[#121826] overflow-hidden">
              {/* TOP */}

              <div className="border-b border-white/4 bg-white/2   p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <div className="h-9 w-72 rounded-2xl bg-white/10" />

                    <div className="flex gap-3 mt-5">
                      {[1, 2, 3].map((_, i) => (
                        <div
                          key={i}
                          className="h-9 w-24 rounded-full bg-white/10"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="h-20 w-32 rounded-2xl bg-white/4" />
                </div>
              </div>

              {/* BODY */}

              <div className="p-6 space-y-7">
                {/* WHY */}

                <div>
                  <div className="h-6 w-40 rounded-xl bg-white/10" />

                  <div className="space-y-3 mt-5">
                    <div className="h-3 w-full rounded-full bg-white/5" />

                    <div className="h-3 w-[90%] rounded-full bg-white/5" />

                    <div className="h-3 w-[70%] rounded-full bg-white/5" />
                  </div>
                </div>

                {/* IMPACT */}

                <div className="rounded-3xl border border-white/4 bg-white/2 p-6">
                  <div className="h-5 w-36 rounded-xl bg-white/10" />

                  <div className="space-y-3 mt-5">
                    <div className="h-3 w-full rounded-full bg-white/5" />

                    <div className="h-3 w-[80%] rounded-full bg-white/5" />
                  </div>
                </div>

                {/* SKILLS */}

                <div>
                  <div className="h-6 w-40 rounded-xl bg-white/10 mb-5" />

                  <div className="flex flex-wrap gap-3">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div
                        key={i}
                        className="h-9 w-24 rounded-full bg-white/4"
                      />
                    ))}
                  </div>
                </div>

                {/* BUTTON */}

                <div className="h-12 w-44 rounded-2xl bg-white/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const roles: CareerRole[] = (data.career_roadmap as CareerRole[]) || [];

  const score = data.resume_breakdown?.skills_score || 0;

  const presentationScore = data.resume_breakdown?.presentation_score || 0;

  const getSkillLabel = (score: number) => {
    if (score >= 85) return "Expert";
    if (score >= 70) return "Strong";
    if (score >= 50) return "Developing";

    return "Beginner";
  };

  const getPresentationLabel = (score: number) => {
    if (score >= 85) return "ATS Optimized";
    if (score >= 70) return "Structured";
    if (score >= 50) return "Needs Work";

    return "Poor";
  };

  return (
    <div className="space-y-6">
      {/* ================= HERO ================= */}

      <div className="relative overflow-hidden rounded-4xl border border-white/4 bg-linear-to-br from-[#121826] via-[#161B2E] to-[#1F1B4B] p-6 md:p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        {/* GLOW */}

        <div className="absolute top-0 right-0 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
          {/* LEFT */}

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-500/8 px-4 py-2 text-[11px] font-medium text-cyan-300">
              <Sparkles size={13} />
              AI Resume Intelligence
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-5 leading-none">
              Resume Analysis
            </h1>

            <p className="text-[13px] text-gray-400 mt-4 leading-relaxed max-w-xl">
              AI-powered evaluation of your resume, ATS optimization, technical
              skills, and career readiness.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-2 mt-6">
              <div className="rounded-full border border-white/6 bg-white/5 px-4 py-2 text-[11px] text-gray-200">
                Grade {data.grade}
              </div>

              <div className="rounded-full border border-white/6 bg-white/5 px-4 py-2 text-[11px] text-gray-200">
                {data.ats_compliance ? "ATS Optimized" : "Needs ATS Work"}
              </div>

              <div className="rounded-full border border-white/6 bg-white/5 px-4 py-2 text-[11px] text-gray-200">
                {data.skill_gaps?.missing?.length || 0} Skill Gaps
              </div>
            </div>
          </div>

          {/* SCORE */}

          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative h-45 w-45 rounded-full border border-white/4 bg-black/20 backdrop-blur-2xl flex items-center justify-center">
              <div className="absolute inset-3 rounded-full border border-white/4" />

              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  Score
                </p>

                <h2 className="text-6xl font-black text-white mt-2 leading-none">
                  {data.score}
                </h2>

                <p className="text-cyan-300 text-[12px] mt-2">AI Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TABS ================= */}

      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {[
          {
            key: "score",
            label: "Score Breakdown",
          },

          {
            key: "actions",
            label: "Improvement Plan",
          },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-2xl px-5 py-3 text-[13px] font-medium transition-all duration-300 border
            
            ${
              activeTab === tab.key
                ? "border-cyan-500/20 bg-cyan-500/8 text-cyan-300"
                : "border-white/4 bg-white/3  text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= SCORE TAB ================= */}

      {activeTab === "score" && (
        <div className="grid lg:grid-cols-2 gap-5">
          {/* SKILLS */}

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/4 bg-[#12141B]/95 p-6 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center">
                    <BrainCircuit size={16} className="text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Skills Analysis
                    </h3>

                    <p className="text-[11px] text-gray-500 mt-1">
                      Technical capability evaluation
                    </p>
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed text-gray-400 mt-5">
                  {data.resume_breakdown?.skills_insight}
                </p>
              </div>

              <div className="text-right shrink-0">
                <h2 className="text-3xl font-black text-white">{score}</h2>

                <p className="text-[11px] text-cyan-300 mt-2">
                  {getSkillLabel(score)}
                </p>
              </div>
            </div>

            {/* PROGRESS */}

            <div className="mt-7">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] uppercase tracking-wider text-gray-500">
                  Technical Strength
                </p>

                <p className="text-[11px] text-cyan-300">{score}%</p>
              </div>

              <div className="h-2 rounded-full overflow-hidden bg-white/4">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 to-violet-500"
                  style={{
                    width: `${score}%`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={() =>
                router.push("/dashboard-content/technical-arsenal")
              }
              className="mt-7 w-full rounded-2xl border border-white/4 bg-white/3 px-5 py-3.5 text-[13px] font-medium text-white hover:bg-white/6 transition-all duration-300"
            >
              View Technical Skills
            </button>
          </motion.div>

          {/* PRESENTATION */}

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/4    bg-[#12141B]/95 p-6 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center">
                    <Trophy size={16} className="text-violet-300" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Presentation
                    </h3>

                    <p className="text-[11px] text-gray-500 mt-1">
                      ATS & formatting evaluation
                    </p>
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed text-gray-400 mt-5">
                  {data.resume_breakdown?.presentation_insight}
                </p>
              </div>

              <div className="text-right shrink-0">
                <h2 className="text-3xl font-black text-white">
                  {presentationScore}
                </h2>

                <p className="text-[11px] text-violet-300 mt-2">
                  {getPresentationLabel(presentationScore)}
                </p>
              </div>
            </div>

            {/* PROGRESS */}

            <div className="mt-7">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] uppercase tracking-wider text-gray-500">
                  Resume Quality
                </p>

                <p className="text-[11px] text-violet-300">
                  {presentationScore}%
                </p>
              </div>

              <div className="h-2 rounded-full overflow-hidden bg-white/4">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-400 to-pink-500"
                  style={{
                    width: `${presentationScore}%`,
                  }}
                />
              </div>
            </div>

            <button className="mt-7 w-full rounded-2xl border border-white/4 bg-white/3 px-5 py-3.5 text-[13px] font-medium text-white hover:bg-white/6 transition-all duration-300">
              Improve Resume Formatting
            </button>
          </motion.div>
        </div>
      )}

      {/* ================= IMPROVEMENTS ================= */}

      {activeTab === "actions" && (
        <div className="grid lg:grid-cols-2 gap-5">
          {/* LEFT */}

          <div className="rounded-[28px] border border-white/4 bg-[#12141B]/95 p-6">
            <h3 className="text-xl font-semibold text-white">
              Skills Improvement
            </h3>

            <p className="text-[12px] text-gray-500 mt-2">
              AI recommended actions
            </p>

            <div className="space-y-3 mt-7">
              {(data.resume_breakdown?.skills_improvement || []).map(
                (item: string, i: number) => (
                  <div
                    key={`${item}-${i}`}
                    className="rounded-2xl border border-cyan-500/10 bg-cyan-500/4 p-4 text-[13px] text-cyan-100/80"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-[28px] border border-white/4 bg-[#12141B]/95 p-6">
            <h3 className="text-xl font-semibold text-white">
              ATS Improvements
            </h3>

            <p className="text-[12px] text-gray-500 mt-2">
              Resume optimization tips
            </p>

            <div className="space-y-3 mt-7">
              {(data.resume_breakdown?.presentation_improvement || []).map(
                (item: string, i: number) => (
                  <div
                    key={`${item}-${i}`}
                    className="rounded-2xl border border-violet-500/10 bg-violet-500/4 p-4 text-[13px] text-violet-100/80"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= ROADMAP ================= */}

      <div className="rounded-4xl border border-white/10 bg-[#0f1724]/95 backdrop-blur-xl p-6 sm:p-6 md:p-8 shadow-2xl shadow-black/20">
        {/* HEADER */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-300">
              Career Direction
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
              Career Roadmap
            </h2>

            <p className="text-sm text-slate-400 mt-2">
              Explore AI-recommended career paths based on your skills.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 w-fit">
            <p className="text-[10px] uppercase tracking-wider text-slate-500">
              Career Paths
            </p>

            <h3 className="text-xl font-semibold text-white mt-1">
              {roles.length}
            </h3>
          </div>
        </div>

        {/* ROLE TABS */}

        <div className="flex gap-3 overflow-x-auto no-scrollbar mt-7 pb-2">
          {roles.map((role: CareerRole, index: number) => (
              <button
                key={`${role.role}-${index}`}
                onClick={() => setActiveRole(index)}
                className={`shrink-0 rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-[13px] font-medium border transition-all duration-300 cursor-pointer

          ${
            activeRole === index
              ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white border-transparent"
              : "border-white/10 bg-white/3 text-slate-300 hover:bg-white/6"
          }`}
              >
                {role.role}
              </button>
            ))}
        </div>

        {/* MAIN CARD */}

        <div className="mt-7 overflow-hidden rounded-[28px] border border-white/10 bg-[#121826]">
          {/* TOP */}

          <div className="relative overflow-hidden border-b border-white/5 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-5 sm:p-7">
            <div className="absolute top-0 right-0 h-52 w-52 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* LEFT */}

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {roles[activeRole]?.role}
                </h3>

                {/* TAGS */}

                <div className="flex flex-wrap gap-2 mt-5">
                  <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[11px] font-medium text-cyan-300">
                    {roles[activeRole]?.match_percentage}% Match
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[11px] text-slate-300">
                    {roles[activeRole]?.required_skills?.length} Skills
                  </div>

                  <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-[11px] text-violet-300">
                    {roles[activeRole]?.estimated_time}
                  </div>
                </div>
              </div>

              {/* PATH */}

              <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 w-fit">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Current Path
                </p>

                <h3 className="text-xl font-semibold text-white mt-1">
                  {activeRole + 1}/{roles.length}
                </h3>
              </div>
            </div>
          </div>

          {/* BODY */}

          <div className="p-5 sm:p-7 space-y-7">
            {/* WHY */}

            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Why This Role?
              </h4>

              <p className="text-sm sm:text-[15px] leading-7 text-slate-400 mt-4">
                {roles[activeRole]?.why_this_role}
              </p>
            </div>

            {/* IMPACT */}

            <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/4 p-5 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Career Impact
              </h4>

              <p className="text-sm sm:text-[15px] leading-7 text-slate-300 mt-3">
                {roles[activeRole]?.career_impact}
              </p>
            </div>

            {/* SKILLS */}

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Missing Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {roles[activeRole]?.missing_skills
                  ?.slice(0, 8)
                  .map((skill: string, i: number) => (
                    <div
                      key={`${skill}-${i}`}
                      className="rounded-full border border-red-500/10 bg-red-500/6 px-4 py-2 text-[11px] sm:text-[12px] text-red-300"
                    >
                      {skill}
                    </div>
                  ))}
              </div>
            </div>

            {/* BUTTON */}

            <button
              onClick={() =>
                router.push("/dashboard-content/technical-arsenal")
              }
              className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Improve Skills
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
          