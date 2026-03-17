"use client";

import { useRouter } from "next/navigation";

import {
  Brain,
  Briefcase,
  ClipboardList,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  User,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="space-y-6 md:space-y-8 ml-0 md:ml-8">
      {/* WELCOME SECTION */}
      <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-slate-800">
            Welcome back, Pritam 👋
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Here’s an overview of your resume performance and career insights.
          </p>
        </div>
      </div>
      {/* ANALYTICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <div className="flex justify-between mb-2 md:mb-3">
            <p className="text-xs md:text-sm text-slate-600">Resume Score</p>

            <TrendingUp className="text-teal-600" size={18} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">82</h2>

          <p className="text-xs text-slate-400">ATS optimization score</p>
        </div>

        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <div className="flex justify-between mb-2 md:mb-3">
            <p className="text-xs md:text-sm text-slate-600">Skills Detected</p>

            <Brain className="text-indigo-600" size={18} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">18</h2>

          <p className="text-xs text-slate-400">Extracted from resume</p>
        </div>

        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <div className="flex justify-between mb-2 md:mb-3">
            <p className="text-xs md:text-sm text-slate-600">Assessments</p>

            <ClipboardList className="text-purple-600" size={18} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">4</h2>

          <p className="text-xs text-slate-400">Completed tests</p>
        </div>

        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <div className="flex justify-between mb-2 md:mb-3">
            <p className="text-xs md:text-sm text-slate-600">Job Matches</p>

            <Briefcase className="text-orange-500" size={18} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">12</h2>

          <p className="text-xs text-slate-400">Recommended roles</p>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SKILL GAP */}
        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
            Skill Gap Insights
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            Improve these skills to increase job match score.
          </p>

          <div className="space-y-3">
            <div className="flex justify-between border border-slate-200 rounded-lg p-3">
              <span className="text-slate-700">System Design</span>

              <span className="text-red-500 text-sm font-medium">Missing</span>
            </div>

            <div className="flex justify-between border border-slate-200 rounded-lg p-3">
              <span className="text-slate-700">Cloud Architecture</span>

              <span className="text-amber-500 text-sm font-medium">
                Improve
              </span>
            </div>

            <div className="flex justify-between border border-slate-200 rounded-lg p-3">
              <span className="text-slate-700">Docker</span>

              <span className="text-emerald-600 text-sm font-medium">
                Strong
              </span>
            </div>
          </div>
        </div>

        {/* JOB MATCHES */}
        <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
            Recommended Jobs
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            Based on your resume profile.
          </p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Full Stack Developer
                </h3>

                <p className="text-sm text-slate-500">Match Score: 91%</p>
              </div>

              <Briefcase className="text-teal-600" />
            </div>

            <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Backend Engineer
                </h3>

                <p className="text-sm text-slate-500">Match Score: 86%</p>
              </div>

              <Briefcase className="text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold text-slate-800 mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex gap-3 items-center">
            <Clock className="text-teal-600" size={18} />
            Resume analyzed successfully
          </div>

          <div className="flex gap-3 items-center">
            <CheckCircle className="text-emerald-600" size={18} />
            JavaScript assessment completed
          </div>

          <div className="flex gap-3 items-center">
            <AlertCircle className="text-amber-500" size={18} />
            Skill gap detected in System Design
          </div>
        </div>
      </div>

      {/* QUICK TOOLS */}
      <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold text-slate-800 mb-6">
          AI Career Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            className="border border-slate-200 rounded-lg p-4 hover:bg-teal-50 flex flex-col items-center gap-2 transition text-slate-700 font-medium"
            onClick={() => router.push("/dashboard-content/analysis")}
          >
            <FileText className="text-teal-600" />
            Resume Analysis
          </button>

          <button
            className="border border-slate-200 rounded-lg p-4 hover:bg-indigo-50 flex flex-col items-center gap-2 transition text-slate-700 font-medium"
            onClick={() => router.push("/dashboard-content/assessment")}
          >
            <ClipboardList className="text-indigo-600" />
            Skill Assessment
          </button>

          <button
            className="border border-slate-200 rounded-lg p-4 hover:bg-orange-50 flex flex-col items-center gap-2 transition text-slate-700 font-medium"
            onClick={() => router.push("/dashboard-content/jobs")}
          >
            <Briefcase className="text-orange-500" />
            Find Jobs
          </button>

          <button
            className="border border-slate-200 rounded-lg p-4 hover:bg-purple-50 flex flex-col items-center gap-2 transition text-slate-700 font-medium"
            onClick={() => router.push("/dashboard-content/profile")}
          >
            <User className="text-purple-600" />
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
