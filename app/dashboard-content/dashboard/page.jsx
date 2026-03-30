"use client";

import { useRouter } from "next/navigation";
import {
  Brain,
  Briefcase,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  User,
  Wrench,
} from "lucide-react";
import { useResumeStore } from "@/store/resumeStore";
import SkillDonutChart from "@/components/charts/SkillDonutChart";
import JobBarChart from "@/components/charts/JobBarChart";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const data = useResumeStore((s) => s.data);
  const [visibleCount, setVisibleCount] = useState(6);

if (!data) {
  return (
    <div className="space-y-6 md:space-y-8 ml-0 md:ml-8 bg-slate-50 p-4 md:p-6 rounded-xl animate-pulse">

      {/* WELCOME */}
      <div className="border rounded-2xl p-6 bg-white">
        <div className="h-5 w-40 bg-slate-300 rounded mb-2"></div>
        <div className="h-4 w-60 bg-slate-200 rounded"></div>
      </div>

      {/* ANALYTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="border rounded-2xl p-6 bg-white space-y-3">
            <div className="h-4 w-24 bg-slate-300 rounded"></div>
            <div className="h-8 w-16 bg-slate-300 rounded"></div>
            <div className="h-3 w-20 bg-slate-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="h-64 bg-slate-300 rounded-xl"></div>
        <div className="h-64 bg-slate-300 rounded-xl"></div>
      </div>

      {/* INSIGHTS */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* SKILLS */}
        <div className="bg-white rounded-xl p-6 border space-y-4">
          <div className="h-5 w-40 bg-slate-300 rounded"></div>

          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-4 w-32 bg-slate-200 rounded"></div>
              <div className="h-6 w-16 bg-slate-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* JOBS */}
        <div className="bg-white rounded-xl p-6 border space-y-4">
          <div className="h-5 w-40 bg-slate-300 rounded"></div>

          {[1, 2].map((_, i) => (
            <div key={i} className="border rounded-xl p-4 space-y-3">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-slate-300 rounded"></div>
                  <div className="h-3 w-24 bg-slate-200 rounded"></div>
                </div>
                <div className="h-6 w-16 bg-slate-300 rounded-full"></div>
              </div>

              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-3 w-full bg-slate-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="bg-white rounded-xl p-6 space-y-3">
        <div className="h-5 w-40 bg-slate-300 rounded"></div>

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="h-4 w-60 bg-slate-200 rounded"></div>
        ))}
      </div>

      {/* TOOLS */}
      <div className="bg-white rounded-xl p-6 space-y-4">
        <div className="h-5 w-40 bg-slate-300 rounded"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="border p-4 rounded-lg space-y-2">
              <div className="h-6 w-6 bg-slate-300 rounded mx-auto"></div>
              <div className="h-3 w-20 bg-slate-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  const allSkills = [
    ...(data.skill_gaps?.missing || []).map((s) => ({
      name: s,
      status: "Missing",
      color: "text-red-600",
      priority: 1,
    })),
    ...(data.skill_gaps?.improving || []).map((s) => ({
      name: s,
      status: "Improve",
      color: "text-amber-600",
      priority: 2,
    })),
    ...(data.skill_gaps?.strong || []).map((s) => ({
      name: s,
      status: "Strong",
      color: "text-emerald-600",
      priority: 3,
    })),
  ].sort((a, b) => a.priority - b.priority);

  const visibleSkills = allSkills.slice(0, visibleCount);

  const previewJobs = data.job_recommendations?.slice(0, 2);

  return (
    <div className="space-y-6 md:space-y-8 ml-0 md:ml-8 bg-slate-50  md:p-6 rounded-xl">
      {/* WELCOME */}
      <div className="bg-linear-to-r from-teal-50 via-white to-indigo-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Welcome back 👋
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Here’s your AI-powered career insights.
        </p>
      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {/* SCORE */}
        <div className="bg-linear-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-slate-800 ">Resume Score</p>
            <TrendingUp className="text-teal-600 " size={18} />
          </div>
          <h2 className="text-3xl font-bold text-black">{data.score}</h2>
          <p className="text-xs text-slate-500">{data.grade}</p>
        </div>

        {/* SKILLS */}
        <div className="bg-linear-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-slate-800">Skills</p>
            <Brain className="text-indigo-600" size={18} />
          </div>
          <h2 className="text-3xl font-bold text-black">
            {data.skills_summary?.total}
          </h2>
          <p className="text-xs text-slate-500">Detected</p>
        </div>

        {/* JOB MATCH */}
        <div className="bg-linear-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-slate-800">Job Matches</p>
            <Briefcase className="text-orange-500" size={18} />
          </div>
          <h2 className="text-3xl font-bold text-black">
            {data.total_job_matches}
          </h2>
          <p className="text-xs text-slate-400">Recommended</p>
        </div>
      </div>

      {/* 🔥 NEW: CHART SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">
        <SkillDonutChart data={data.skill_gaps} />
        <JobBarChart jobs={data.job_recommendations} />
      </div>
      {/* INSIGHTS */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* SKILL GAPS */}
        <div className="bg-white rounded-xl p-6 border border-slate-300 shadow-md">
          <h2 className="font-semibold text-slate-800 mb-4">
            Skill Gap Insights
          </h2>

          <div className="space-y-3">
            {visibleSkills.map((skill, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-slate-200 p-3 rounded-xl hover:bg-slate-50 hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-500">{skill.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200 ${skill.color}`}
                >
                  {skill.status}
                </span>
              </div>
            ))}

            {/* + More Button */}
            {visibleCount < allSkills.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="text-sm text-teal-600 font-semibold hover:text-teal-700 transition cursor-pointer"
              >
                + Show More
              </button>
            )}
          </div>
        </div>

        {/* JOBS */}
        <div className="bg-white rounded-xl p-6 border border-slate-300 shadow-md">
          <h2 className="font-semibold text-slate-800 mb-4">
            Recommended Jobs
          </h2>

          <div className="space-y-4">
            {previewJobs.map((job, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 hover:shadow-sm transition"
              >
                <div className="flex justify-between items-start">
                  {/* LEFT */}
                  <div>
                    <h3 className="font-semibold text-gray-800">{job.role}</h3>

                    <p className="text-sm text-slate-500">
                      {job.company || "Unknown Company"}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-2">
                      <span>📍 {job.location || "Remote"}</span>
                      <span>💼 {job.type || "N/A"}</span>
                    </div>
                  </div>

                  {/* MATCH BADGE */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium
              ${
                job.match_percentage >= 80
                  ? "bg-green-100 text-green-700"
                  : job.match_percentage >= 60
                    ? "bg-teal-100 text-teal-700"
                    : "bg-orange-100 text-orange-700"
              }`}
                  >
                    {job.match_percentage}% Match
                  </span>
                </div>

                {/* SKILL COVERAGE BAR */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Skill Coverage</span>
                    <span>{job.skill_coverage_percentage || 0}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-teal-500 to-cyan-500"
                      style={{
                        width: `${job.skill_coverage_percentage || 0}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* REASON (AI Insight) */}
                <p className="text-xs text-slate-500 mt-3 line-clamp-2">
                  {job.reason}
                </p>
              </div>
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          {data.job_recommendations?.length > 4 && (
            <button
              onClick={() => router.push("/dashboard-content/jobs")}
              className="mt-4 w-full border border-slate-200 rounded-xl py-2 text-sm font-medium hover:bg-gray-100 transition cursor-pointer text-gray-600"
            >
              View All Jobs →
            </button>
          )}
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="font-semibold text-slate-800 mb-4">Recent Activity</h2>

        <div className="space-y-3 text-sm">
          <div className="flex gap-3 items-center text-gray-600">
            <Clock className="text-teal-600" size={18} />
            Resume analyzed successfully
          </div>

          {data.skill_gaps?.missing?.length > 0 && (
            <div className="flex gap-3 items-center text-gray-600">
              <AlertCircle className="text-amber-500" size={18} />
              Skill gaps detected
            </div>
          )}

          <div className="flex gap-3 items-center text-gray-600">
            <CheckCircle className="text-emerald-600" size={18} />
            AI insights generated
          </div>
        </div>
      </div>

      {/* QUICK TOOLS */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="font-semibold text-slate-800 mb-4">AI Career Tools</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <button
            className="border p-4 rounded-lg  cursor-pointer"
            onClick={() => router.push("/dashboard-content/analysis")}
          >
            <FileText className="text-teal-600 mx-auto" />
            <span className="text-gray-600">Resume Analysis</span>
          </button>

          <button
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => router.push("/dashboard-content/jobs")}
          >
            <Briefcase className="text-orange-500 mx-auto" />
            <span className="text-gray-600">Jobs</span>
          </button>

          <button
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => router.push("/dashboard-content/technical-arsenal")}
          >
            <Wrench className="text-purple-600 mx-auto" />
            <span className="text-gray-600">Technical Arsenal</span>
          </button>
          <button
            className="border p-4 rounded-lg cursor-pointer"
            onClick={() => router.push("/dashboard-content/profile")}
          >
            <User className="text-purple-600 mx-auto" />
            <span className="text-gray-600">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
