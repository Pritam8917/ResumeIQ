"use client";

import { useResumeStore } from "@/store/resumeStore";
import { User, Star, Brain, TrendingUp } from "lucide-react";

export default function ProfilePage() {
  const data = useResumeStore((s) => s.data);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-8 bg-linear-to-br from-slate-50 via-white to-slate-100">
        {/* AI ICON + RING */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center shadow-inner">
            <Brain className="text-teal-600 animate-pulse" size={32} />
          </div>

          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>

          {/* Glow */}
          <div className="absolute -inset-2 rounded-full bg-teal-200 opacity-20 blur-xl"></div>
        </div>

        {/* HEADING */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-slate-800">
            Building Your Profile
          </h2>

          <p className="text-sm text-slate-500">
            AI is analyzing your resume and generating insights...
          </p>
        </div>

        {/* PROGRESS STEPS */}
        <div className="space-y-2 text-xs text-slate-500 text-center">
          <p className="animate-pulse">🔍 Extracting skills & experience</p>
          <p className="animate-pulse delay-150">📊 Calculating match scores</p>
          <p className="animate-pulse delay-300">
            🤖 Generating career insights
          </p>
        </div>

        {/* DOT LOADER */}
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    );
  }

  const skillsScore = data.resume_breakdown?.skills_score || 0;
  const presentationScore = data.resume_breakdown?.presentation_score || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* HERO HEADER */}
      <div className="relative overflow-hidden rounded-2xl p-6 bg-linear-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
              <User />
            </div>

            <div>
              <h1 className="text-xl font-semibold">Your AI Profile</h1>
              <p className="text-sm opacity-80">
                Smart insights powered by ResumeIQ
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm opacity-80">Overall Score</p>
            <p className="text-3xl font-bold">{data.score || 0}</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            label: "Skills",
            value: skillsScore,
            icon: Star,
            color: "teal",
          },
          {
            label: "Presentation",
            value: presentationScore,
            icon: Brain,
            color: "orange",
          },
          {
            label: "Job Matches",
            value: data.total_job_matches || 0,
            icon: TrendingUp,
            color: "green",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-600">{item.label}</p>
              <item.icon className={`text-${item.color}-500`} size={18} />
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-2">
              {item.value}
            </h2>

            <div className="h-2 bg-slate-200 rounded-full mt-4">
              <div
                className={`h-2 rounded-full bg-${item.color}-500`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* INSIGHT */}
      <div className="bg-linear-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-slate-800 mb-2">🧠 Expert Insight</h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          {data.resume_breakdown?.overall_insight ||
            "Your profile shows a balanced combination of technical skills and presentation."}
        </p>
      </div>

      {/*  STRENGTHS + SUGGESTIONS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* STRENGTHS */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">💪 Strengths</h2>

          <div className="space-y-3">
            {data.strengths?.length > 0 ? (
              data.strengths.map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 border border-green-100 p-3 rounded-lg text-sm text-green-700"
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-slate-500">No strengths detected yet.</p>
            )}
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">⚡ Suggestions</h2>

          <div className="space-y-3">
            {data.suggestions?.length > 0 ? (
              data.suggestions.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-50 border border-orange-100 p-3 rounded-lg text-sm text-orange-700"
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-slate-500">No suggestions available.</p>
            )}
          </div>
        </div>
      </div>

      {/* SKILLS SUMMARY */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-slate-800 mb-4">Skills Summary</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Total", value: data.skills_summary?.total },
            { label: "Job Ready", value: data.skills_summary?.job_ready },
            { label: "Developing", value: data.skills_summary?.developing },
            { label: "To Learn", value: data.skills_summary?.to_learn },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200"
            >
              <p className="text-xl font-bold text-teal-600">
                {item.value || 0}
              </p>
              <p className="text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
