"use client";

import {
  Search,
  Brain,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useResumeStore } from "@/store/resumeStore";

export default function TechnicalArsenal() {
  const data = useResumeStore((s) => s.data);
  const [search, setSearch] = useState("");
  if (!data) {
    return (
      <div className="relative overflow-hidden min-h-screen animate-pulse">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_30%)]" />

        {/* MAIN WRAPPER */}

        <div className="relative overflow-hidden border border-white/4 bg-[#0F1117] p-6 md:p-8">
          {/* HERO */}

          <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
            {/* LEFT */}

            <div className="flex-1">
              {/* BADGE */}

              <div className="h-9 w-44 rounded-full bg-white/6" />

              {/* TITLE */}

              <div className="space-y-3 mt-6">
                <div className="h-10 w-full max-w-md rounded-2xl bg-white/8" />

                <div className="h-10 w-[70%] rounded-2xl bg-white/4" />
              </div>

              {/* DESC */}

              <div className="space-y-3 mt-6">
                <div className="h-3 w-full max-w-2xl rounded-full bg-white/4" />

                <div className="h-3 w-[85%] rounded-full bg-white/4" />

                <div className="h-3 w-[65%] rounded-full bg-white/4" />
              </div>
            </div>

            {/* RIGHT */}

            <div className="rounded-[28px] border border-white/4 bg-[#181A20] px-6 py-5 min-w-40">
              <div className="h-3 w-24 rounded-full bg-white/5" />

              <div className="h-12 w-20 rounded-2xl bg-white/8 mt-4" />
            </div>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="rounded-[28px] border border-white/4 bg-[#181A20] p-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/6" />

                <div className="h-10 w-20 rounded-2xl bg-white/8 mt-5" />

                <div className="h-3 w-24 rounded-full bg-white/4 mt-4" />
              </div>
            ))}
          </div>

          {/* SEARCH */}

          <div className="mt-10 rounded-2xl border border-white/4 bg-[#181A20] px-5 py-4">
            <div className="h-5 w-full rounded-full bg-white/4" />
          </div>

          {/* SKILL GRID */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[28px] border border-white/4 bg-[#12141B]/95"
              >
                {/* HEADER */}

                <div className="p-5 border-b border-white/4">
                  <div className="flex items-start justify-between gap-4">
                    {/* LEFT */}

                    <div className="flex gap-3 flex-1">
                      <div className="h-11 w-11 rounded-2xl bg-white/6 shrink-0" />

                      <div className="flex-1">
                        <div className="h-5 w-32 rounded-xl bg-white/8" />

                        <div className="h-3 w-24 rounded-full bg-white/4 mt-3" />

                        <div className="h-7 w-24 rounded-full bg-white/6 mt-5" />
                      </div>
                    </div>

                    {/* SCORE */}

                    <div className="h-14 w-14 rounded-2xl bg-white/6 shrink-0" />
                  </div>

                  {/* PROGRESS */}

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-3 w-24 rounded-full bg-white/4" />

                      <div className="h-3 w-10 rounded-full bg-white/4" />
                    </div>

                    <div className="h-2 rounded-full bg-white/4" />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-5 space-y-4">
                  {[1, 2, 3].map((_, j) => (
                    <div
                      key={j}
                      className="rounded-2xl border border-white/4 bg-white/2 p-4"
                    >
                      <div className="h-3 w-28 rounded-full bg-white/6" />

                      <div className="space-y-3 mt-4">
                        <div className="h-3 w-full rounded-full bg-white/4" />

                        <div className="h-3 w-[80%] rounded-full bg-white/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const skills = data.technical_arsenal || [];

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative overflow-hidden ">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.10),transparent_30%)]" />

      {/* MAIN WRAPPER */}
      <div className="relative overflow-hidden border border-white/5 bg-[#0F1117] p-6 md:p-8 shadow-[0_20px_100px_rgba(0,0,0,0.55)]">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
              <Sparkles size={14} />
              Technical Intelligence
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-white">
              Technical Arsenal
            </h1>

            {/* DESC */}
            <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed">
              Analyze your technical strengths, identify skill gaps, and receive
              AI-powered recommendations to improve your resume and job
              readiness.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-white/6 bg-[#181A20] px-6 py-5 min-w-40">
            <p className="text-sm text-gray-500">Skills Analyzed</p>

            <h2 className="mt-2 text-4xl font-black text-white">
              {skills.length}
            </h2>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {/* TOTAL */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/6 bg-[#181A20] p-5 hover:bg-[#1F222A] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-black/30 border border-white/6 flex items-center justify-center">
              <Brain className="text-cyan-300" size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white">
              {skills.length}
            </h2>

            <p className="text-sm text-gray-500 mt-1">Total Skills</p>
          </motion.div>

          {/* READY */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/6 bg-[#181A20] p-5 hover:bg-[#1F222A] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="text-emerald-300" size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white">
              {skills.filter((s) => s.status === "Job-ready").length}
            </h2>

            <p className="text-sm text-gray-500 mt-1">Job Ready</p>
          </motion.div>

          {/* DEVELOPING */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/6 bg-[#181A20] p-5 hover:bg-[#1F222A] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <TrendingUp className="text-orange-300" size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white">
              {skills.filter((s) => s.status === "Developing").length}
            </h2>

            <p className="text-sm text-gray-500 mt-1">Developing</p>
          </motion.div>

          {/* NEEDS IMPROVEMENT */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/6 bg-[#181A20] p-5 hover:bg-[#1F222A] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <AlertCircle className="text-violet-300" size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white">
              {skills.filter((s) => s.status !== "Job-ready").length}
            </h2>

            <p className="text-sm text-gray-500 mt-1">Needs Improvement</p>
          </motion.div>
        </div>

        {/* SEARCH */}
        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/6 bg-[#181A20] px-5 py-4 focus-within:border-cyan-500/30 transition-all duration-300">
          <Search size={18} className="text-gray-500" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills..."
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
          />
        </div>

        {/* SKILL GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-[28px] border border-white/6 bg-[#12141B]/95 backdrop-blur-xl hover:border-cyan-400/20 transition-all duration-300"
            >
              {/* SOFT GLOW */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_35%)]" />

              {/* HEADER */}

              <div className="relative p-5 border-b border-white/5">
                <div className="flex items-start justify-between gap-4">
                  {/* LEFT */}

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      {/* ICON */}

                      <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-cyan-500/10 to-violet-500/10 border border-white/6 flex items-center justify-center shrink-0">
                        <span className="text-lg">⚡</span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold text-white truncate">
                          {skill.name}
                        </h3>

                        <p className="text-[11px] text-gray-500 mt-1">
                          AI Skill Analysis
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}

                    <div className="mt-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border
                ${
                  skill.status === "Job-ready"
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                    : skill.status === "Developing"
                      ? "bg-orange-500/10 text-orange-300 border-orange-500/20"
                      : "bg-violet-500/10 text-violet-300 border-violet-500/20"
                }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />

                        {skill.status}
                      </span>
                    </div>
                  </div>

                  {/* SCORE */}

                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl" />

                    <div className="relative h-14 w-14 rounded-2xl border border-white/6 bg-black/30 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-lg font-bold text-white leading-none">
                          {skill.score}
                        </p>

                        <p className="text-[9px] uppercase tracking-wider text-gray-500 mt-1">
                          Score
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROGRESS */}

                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Proficiency
                    </p>

                    <p className="text-[11px] font-medium text-cyan-300">
                      {skill.score * 10}%
                    </p>
                  </div>

                  <div className="relative h-2 rounded-full overflow-hidden bg-white/4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${skill.score * 10}%`,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div className="relative p-5 space-y-4">
                {/* MARKET */}

                <div className="rounded-2xl border border-white/4 bg-white/2 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Market Demand
                    </h4>

                    <span className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/10">
                      High
                    </span>
                  </div>

                  <p className="text-[12px] leading-relaxed text-gray-400">
                    {skill.demand}
                  </p>
                </div>

                {/* AI INSIGHT */}

                <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/4 p-4">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                    AI Insight
                  </h4>

                  <p className="text-[12px] leading-relaxed text-cyan-100/80">
                    {skill.aiInsight?.reason}
                  </p>
                </div>

                {/* ACTION */}

                <div className="rounded-2xl border border-violet-500/10 bg-violet-500/4 p-4">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-violet-300 mb-2">
                    Suggested Action
                  </h4>

                  <p className="text-[12px] leading-relaxed text-violet-100/80">
                    {skill.suggestion?.action}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* EMPTY */}

          {filteredSkills.length === 0 && (
            <div className="col-span-full rounded-[30px] border border-dashed border-white/6 bg-[#12141B] p-14 text-center">
              <div className="h-20 w-20 rounded-full border border-white/6 bg-black/30 flex items-center justify-center mx-auto text-3xl">
                🔍
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                No Skills Found
              </h3>

              <p className="text-sm text-gray-500 mt-3">
                No results matching &quot;{search}&quot;
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-6 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-3 text-xs font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
