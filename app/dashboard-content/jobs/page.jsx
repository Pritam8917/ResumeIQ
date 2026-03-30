"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Star, Zap, Target, Grid, Funnel } from "lucide-react";
import { useResumeStore } from "@/store/resumeStore";
export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [minMatch, setMinMatch] = useState(0);
  const data = useResumeStore((s) => s.data);

  if (!data) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* HEADER */}
        <div className="md:px-6 pt-3">
          <div className="border rounded-2xl p-6 bg-white space-y-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <div className="h-6 w-48 bg-slate-300 rounded"></div>
              <div className="h-4 w-72 bg-slate-200 rounded"></div>
            </div>

            <div className="flex gap-4 mt-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-200 px-4 py-2 rounded-xl space-y-2"
                >
                  <div className="h-4 w-10 bg-slate-300 rounded"></div>
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-10 md:pl-8 pb-10 pr-3">
          {/* SIDEBAR */}
          <div className="w-full lg:w-85 bg-white border rounded-2xl p-5 space-y-6">
            <div className="h-5 w-32 bg-slate-300 rounded"></div>

            <div className="h-10 w-full bg-slate-200 rounded"></div>

            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="h-10 w-full bg-slate-200 rounded"></div>
            ))}

            <div className="h-16 w-full bg-slate-200 rounded"></div>
          </div>

          {/* JOB LIST */}
          <div className="flex-1 space-y-6">
            {/* TOP BAR */}
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-6 w-40 bg-slate-300 rounded"></div>
                <div className="h-4 w-32 bg-slate-200 rounded"></div>
              </div>

              <div className="h-8 w-32 bg-slate-300 rounded-full"></div>
            </div>

            {/* JOB CARDS */}
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-5 space-y-4"
              >
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-slate-300 rounded"></div>
                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-6 w-16 bg-slate-300 rounded-full"></div>
                </div>

                <div className="h-3 w-60 bg-slate-200 rounded"></div>

                <div className="h-2 w-full bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const jobs = data.job_recommendations || [];

  const filteredJobs = jobs.filter((job) => job.role.toLowerCase().includes(query.toLowerCase()) && job.match_percentage >= minMatch );

  const bestMatch = Math.max(...jobs.map((j) => j.match_percentage));
  const avgMatch = Math.round(
    jobs.reduce((a, b) => a + b.match_percentage, 0) / jobs.length,
  );
  return (
    <div className="space-y-6 ">
      {/* ================= HEADER ================= */}

      <div className=" md:px-6 pt-3">
        <div className="bg-linear-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">
              Job Recommendations
            </h1>
            <p className="text-sm text-slate-500">
              AI-powered matches based on your ResumeIQ analysis
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-white px-4 py-2 rounded-xl text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-800">
                {jobs.length}
              </p>
              <p className="text-xs text-slate-500">Total Jobs</p>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl text-center shadow-sm">
              <p className="text-lg font-semibold text-teal-700">
                {bestMatch}%
              </p>
              <p className="text-xs text-slate-500">Best Match</p>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl text-center shadow-sm">
              <p className="text-lg font-semibold text-blue-700">{avgMatch}%</p>
              <p className="text-xs text-slate-500">Avg Match</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- FILTER SIDEBAR ---------------- */}
      <div className="flex flex-col lg:flex-row gap-10 md:pl-8 pb-10 pr-3 ">
        {/* SIDEBAR */}
        <div className="w-full lg:w-85 md:w-85 bg-white border border-slate-200 rounded-2xl p-5 space-y-6 lg:sticky lg:top-8 h-fit shadow-sm">
          {/* HEADER */}
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Funnel size={18} /> Filters
            </h2>
            <button
              onClick={() => {
                setQuery("");
                setMinMatch(0);
              }}
              className="text-xs text-gray-500 hover:text-gray-900 hover:bg-amber-600 rounded-md px-3 py-1.5 transition font-semibold hover:shadow-md cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* SEARCH */}
          <div className="space-y-2">
            <p className="text-sm text-slate-600 text-center font-semibold">
              Search Jobs
            </p>

            <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-xl px-3 py-2">
              <Search size={14} className="text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, company, or location"
                className="w-full outline-none text-sm text-slate-700"
              />
            </div>
          </div>

          {/* MATCH SCORE */}
          <div className="space-y-5">
            <p className="text-sm text-gray-600 text-center font-semibold">
              Minimum Match Score
            </p>

            {/* OPTIONS */}
            <div className="space-y-5 ">
              <button
                onClick={() => setMinMatch(50)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg cursor-pointer transition ${
                  minMatch === 50
                    ? "bg-[#2b4c6f] text-white"
                    : "hover:bg-amber-50 text-slate-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    minMatch === 50 ? "bg-white" : "bg-orange-500"
                  }`}
                ></span>
                <Star size={16} />
                <span className="text-sm">Good Match (50%+)</span>
              </button>

              <button
                onClick={() => setMinMatch(70)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg cursor-pointer transition ${
                  minMatch === 70
                    ? "bg-[#2b4c6f] text-white"
                    : "hover:bg-teal-50 text-slate-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    minMatch === 70 ? "bg-white" : "bg-teal-600"
                  }`}
                ></span>
                <Zap size={16} />
                <span className="text-sm">Strong Match (70%+)</span>
              </button>

              <button
                onClick={() => setMinMatch(85)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg cursor-pointer transition ${
                  minMatch === 85
                    ? "bg-[#2b4c6f] text-white"
                    : "hover:bg-blue-50 text-slate-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    minMatch === 85 ? "bg-white" : "bg-blue-600"
                  }`}
                ></span>
                <Target size={16} />
                <span className="text-sm">Excellent (85%+)</span>
              </button>

              <button
                onClick={() => setMinMatch(0)}
                className={`flex items-center gap-3 w-full py-3 p-2 rounded-lg cursor-pointer transition ${
                  minMatch === 0
                    ? "bg-[#2b4c6f] text-white"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    minMatch === 0 ? "bg-white" : "bg-slate-600"
                  }`}
                ></span>
                <Grid size={16} />
                <span className="text-sm">Show All Jobs</span>
              </button>
            </div>
          </div>

          {/* TIP CARD */}
          <div className="bg-slate-100 rounded-xl p-4 text-sm text-slate-600 text-center">
            <span className="font-semibold">Tip:</span> Update your skills
            regularly for better matches
          </div>
        </div>

        {/* ---------------- JOB LIST ---------------- */}

        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-5">
            {/* LEFT */}
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">
                {filteredJobs.length} Opportunities Found
              </h1>
              <p className="text-md text-slate-500">Sorted by match score</p>
            </div>

            {/* RIGHT BUTTON  */}
            <div
              className={`px-4 py-1 rounded-full text-sm font-semibold border ${
                minMatch === 85
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : minMatch === 70
                    ? "bg-teal-50 text-teal-700 border-teal-200"
                    : minMatch === 50
                      ? "bg-orange-50 text-orange-700 border-orange-200"
                      : "bg-white text-black border-slate-300"
              }`}
            >
              {minMatch === 85
                ? "Excellent (85%+)"
                : minMatch === 70
                  ? "Strong Match (70%+)"
                  : minMatch === 50
                    ? "Good Match (50%+)"
                    : "All Jobs"}
            </div>
          </div>

          {/* JOB CARDS */}
          {filteredJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-2xl py-16 text-center">
              <div className="text-5xl mb-4">🔍</div>

              <h2 className="text-lg font-semibold text-slate-800">
                No matches found
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Try adjusting your filters or search query
              </p>

              <button
                onClick={() => {
                  setQuery("");
                  setMinMatch(0);
                }}
                className="mt-5 px-4 py-2 bg-[#2b4c6f] text-white rounded-lg text-sm hover:opacity-90 cursor-pointer transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  {/* LEFT CONTENT */}
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-teal-600 transition">
                      {job.role}
                    </h3>

                    <p className="text-sm text-slate-500">{job.company}</p>

                    <div className="flex gap-4 text-xs text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.type}
                      </span>

                      <span>{job.required_experience} years</span>
                    </div>
                  </div>

                  {/* MATCH BADGE */}
                  <div className="text-right">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                      {job.match_percentage}% Match
                    </div>
                  </div>
                </div>

                {/* SKILL COVERAGE */}

                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Skill Coverage</span>
                    <span>{job.skill_coverage_percentage}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-linear-to-r from-teal-500 to-cyan-500 rounded-full"
                      style={{ width: `${job.skill_coverage_percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
