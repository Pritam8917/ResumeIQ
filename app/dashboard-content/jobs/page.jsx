"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Search, MapPin, Briefcase, Funnel, Sparkles } from "lucide-react";

import { useResumeStore } from "@/store/resumeStore";
import { useRouter } from "next/navigation";
export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [minMatch, setMinMatch] = useState(0);
  const router = useRouter();
  const data = useResumeStore((s) => s.data);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#081120] text-white px-3 sm:px-4 md:px-6 py-4 sm:py-6 animate-pulse">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* HERO */}

          <div className="rounded-3xl border border-white/10 bg-[#101826] p-5 sm:p-7">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              {/* LEFT */}

              <div className="space-y-4 flex-1">
                <div className="h-7 w-32 rounded-full bg-cyan-500/10 border border-cyan-500/10" />

                <div className="h-10 w-64 rounded-xl bg-white/10" />

                <div className="space-y-2">
                  <div className="h-4 w-full max-w-2xl rounded bg-white/5" />

                  <div className="h-4 w-[80%] rounded bg-white/5" />
                </div>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-3 w-full xl:w-auto">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/3 px-4 py-4 w-full sm:w-32"
                  >
                    <div className="h-3 w-14 rounded bg-white/10" />

                    <div className="h-8 w-16 rounded bg-white/10 mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN */}

          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5">
            {/* FILTER LOADER */}

            <div className="rounded-3xl border border-white/10 bg-[#101826] p-5 space-y-5 h-fit">
              <div className="flex items-center justify-between">
                <div className="h-5 w-24 rounded bg-white/10" />

                <div className="h-7 w-16 rounded-full bg-white/10" />
              </div>

              <div className="space-y-3">
                <div className="h-3 w-24 rounded bg-white/10" />

                <div className="h-12 rounded-2xl bg-white/4 border border-white/10" />
              </div>

              <div className="space-y-3 pt-3">
                <div className="h-3 w-28 rounded bg-white/10" />

                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 rounded-2xl bg-white/4 border border-white/10"
                  />
                ))}
              </div>
            </div>

            {/* JOBS LOADER */}

            <div className="space-y-5">
              {/* TOP */}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-3">
                  <div className="h-8 w-56 rounded bg-white/10" />

                  <div className="h-4 w-40 rounded bg-white/5" />
                </div>

                <div className="h-9 w-36 rounded-full bg-white/4 border border-white/10" />
              </div>

              {/* JOB CARDS */}

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-[#101826] overflow-hidden"
                >
                  {/* TOP */}

                  <div className="p-5 border-b border-white/5">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                      {/* LEFT */}

                      <div className="flex gap-4 flex-1">
                        <div className="h-12 w-12 rounded-2xl bg-white/10 shrink-0" />

                        <div className="space-y-3 flex-1">
                          <div className="h-5 w-52 rounded bg-white/10" />

                          <div className="h-4 w-36 rounded bg-white/5" />

                          <div className="flex flex-wrap gap-2 pt-2">
                            {[1, 2, 3].map((_, j) => (
                              <div
                                key={j}
                                className="h-7 w-24 rounded-full bg-white/4 border border-white/10"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* MATCH */}

                      <div className="h-24 w-28 rounded-2xl bg-cyan-500/10 border border-cyan-500/10" />
                    </div>

                    {/* PROGRESS */}

                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between">
                        <div className="h-3 w-24 rounded bg-white/10" />

                        <div className="h-3 w-10 rounded bg-white/10" />
                      </div>

                      <div className="h-2 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map((_, j) => (
                      <div
                        key={j}
                        className="rounded-2xl border border-white/10 bg-white/3 p-4 space-y-3"
                      >
                        <div className="h-3 w-24 rounded bg-white/10" />

                        <div className="space-y-2">
                          <div className="h-3 w-full rounded bg-white/5" />

                          <div className="h-3 w-[80%] rounded bg-white/5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const jobs = data.job_recommendations || [];

  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(query.toLowerCase()) &&
      job.match_percentage >= minMatch,
  );

  const bestMatch = Math.max(...jobs.map((j) => j.match_percentage));

  const avgMatch = Math.round(
    jobs.reduce((a, b) => a + b.match_percentage, 0) / jobs.length,
  );

  return (
    <div className="min-h-screen bg-[#081120] text-white px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-linear-to-br from-[#0b1728] via-[#10203a] to-[#142b4d] p-5 sm:p-7 shadow-2xl">
          <div className="absolute top-0 right-0 h-60 w-60 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-medium text-cyan-300">
                <Sparkles size={13} />
                AI Job Matching
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 leading-tight">
                Recommended Jobs
              </h1>

              <p className="text-slate-400 text-sm sm:text-[15px] mt-3 max-w-2xl leading-relaxed">
                Personalized opportunities based on your resume, projects, and
                AI-powered skill analysis.
              </p>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-3 w-full xl:w-auto">
              {[
                {
                  label: "Total",
                  value: jobs.length,
                  color: "text-white",
                  bg: "bg-white/[0.04]",
                },

                {
                  label: "Best",
                  value: `${bestMatch}%`,
                  color: "text-cyan-300",
                  bg: "bg-cyan-500/10",
                },

                {
                  label: "Average",
                  value: `${avgMatch}%`,
                  color: "text-violet-300",
                  bg: "bg-violet-500/10",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-white/10 ${item.bg} px-4 py-4 backdrop-blur-xl`}
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>

                  <h2
                    className={`text-2xl sm:text-3xl font-bold mt-2 ${item.color}`}
                  >
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-4 lg:gap-6 mt-6">
          {/* FILTERS */}

          <div className="h-fit rounded-3xl border border-white/10 bg-[#101826] p-6 sm:p-5 xl:sticky xl:top-6">
            {/* HEADER */}

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Funnel size={15} className="text-cyan-300" />

                <h2 className="text-sm font-semibold">Filters</h2>
              </div>

              <button
                onClick={() => {
                  setQuery("");
                  setMinMatch(0);
                }}
                className="text-[11px] text-slate-500 hover:text-white transition border border-white/10 hover:border-white/20 rounded-full px-3 py-1 cursor-pointer"
              >
                Reset
              </button>
            </div>

            {/* SEARCH */}

            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-3">
                Search Jobs
              </p>

              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <Search size={14} className="text-slate-500 shrink-0" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="React Developer..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* FILTERS */}

            <div className="mt-6 space-y-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-3">
                Match Quality
              </p>

              {[
                {
                  label: "Good Match",
                  value: 50,
                },

                {
                  label: "Strong Match",
                  value: 70,
                },

                {
                  label: "Excellent Match",
                  value: 85,
                },

                {
                  label: "All Jobs",
                  value: 0,
                },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setMinMatch(item.value)}
                  className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 border transition-all duration-300 cursor-pointer

          ${
            minMatch === item.value
              ? "border-cyan-400/30 bg-cyan-500/10"
              : "border-white/10 bg-white/2 hover:bg-white/4"
          }`}
                >
                  <span className="text-sm">{item.label}</span>

                  <div
                    className={`h-2 w-2 rounded-full shrink-0 ${
                      minMatch === item.value ? "bg-cyan-300" : "bg-slate-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* JOBS */}

          <div className="space-y-4 sm:space-y-5 pt-4 sm:pt-5 px-5 sm:px-7 py-3 rounded-2xl bg-[#0b1728]/50 border border-white/10">
            {/* TOP BAR */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {filteredJobs.length} Opportunities
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  AI-curated job recommendations
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[11px] text-slate-400 w-fit">
                Sorted by Match %
              </div>
            </div>

            {/* EMPTY */}

            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/10 bg-[#101826] p-10 sm:p-14 text-center">
                <div className="h-20 w-20 rounded-full bg-black/30 border border-white/10 flex items-center justify-center mx-auto text-3xl">
                  🔍
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mt-6">
                  No Jobs Found
                </h3>

                <p className="text-slate-500 mt-3 text-sm">
                  No matching opportunities found.
                </p>
              </div>
            ) : (
              filteredJobs.map((job, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -2,
                  }}
                  className="rounded-3xl border border-white/10 bg-[#101826] overflow-hidden hover:border-cyan-400/20 transition-all duration-300"
                >
                  {/* TOP */}

                  <div className="p-4 sm:p-5 md:p-6 border-b border-white/5">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                      {/* LEFT */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                            <Briefcase size={18} className="text-cyan-300" />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold wrap-break-word">
                              {job.role}
                            </h3>

                            <p className="text-sm text-slate-500 mt-1 wrap-break-word">
                              {job.company}
                            </p>
                          </div>
                        </div>

                        {/* META */}

                        <div className="flex flex-wrap gap-2 mt-5">
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[11px] text-slate-400">
                            <MapPin size={11} />
                            <span className="break-all">{job.location}</span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[11px] text-slate-400">
                            <Briefcase size={11} />
                            {job.type}
                          </div>

                          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[11px] text-slate-400">
                            ⚡ {job.required_experience} yrs
                          </div>
                        </div>
                      </div>

                      {/* MATCH CIRCLE */}

                      <div className="flex justify-center sm:justify-end">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
                          {/* SVG RING */}

                          <svg
                            className="absolute inset-0 -rotate-90"
                            viewBox="0 0 100 100"
                          >
                            {/* BG */}

                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              stroke="rgba(255,255,255,0.08)"
                              strokeWidth="5"
                              fill="none"
                            />

                            {/* PROGRESS */}

                            <circle
                              cx="50"
                              cy="50"
                              r="44"
                              stroke="url(#matchGradient)"
                              strokeWidth="5"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={276}
                              strokeDashoffset={
                                276 - (276 * job.match_percentage) / 100
                              }
                            />

                            {/* GRADIENT */}

                            <defs>
                              <linearGradient
                                id="matchGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#22d3ee" />

                                <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                            </defs>
                          </svg>

                          {/* CONTENT */}

                          <div className="text-center">
                            <h2 className="text-lg sm:text-xl font-bold text-white">
                              {job.match_percentage}%
                            </h2>

                            <p className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">
                              Match
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PROGRESS */}

                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] uppercase tracking-wider text-slate-500">
                          Skill Coverage
                        </p>

                        <p className="text-[11px] text-cyan-300">
                          {job.skill_coverage_percentage}%
                        </p>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${job.skill_coverage_percentage}%`,
                          }}
                          transition={{
                            duration: 1,
                          }}
                          className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-linear-to-br from-[#121826] to-[#0D111B]">
                      {/* SOFT GLOW */}

                      <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-500/10 blur-3xl" />

                      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-5 sm:p-6">
                        {/* LEFT */}

                        <div className="max-w-xl">
                          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                            AI Preparation
                          </div>

                          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white leading-snug">
                            Prepare for{" "}
                            <span className="text-cyan-300">{job.role}</span>
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            Personalized interview preparation based on your
                            skills and resume profile.
                          </p>
                        </div>

                        {/* CTA */}

                        <button
                          className="group shrink-0 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:scale-[1.02] cursor-pointer "
                          onClick={() =>
                            router.push(
                              `/interview/${job.role.toLowerCase().replace(/\s/g, "-")}`,
                            )
                          }
                        >
                          <span className="flex items-center justify-center gap-2">
                            Prepare Now
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
