"use client";

import { useResumeStore } from "@/store/resumeStore";
import { User, Star, Brain, TrendingUp } from "lucide-react";
import PastResumes from "@/components/past-resumes";
// import CurrentResume from "@/components/current-resume";
import { useAuthStore } from "@/store/authStore";
export default function ProfilePage() {
  const data = useResumeStore((s) => s.data);
  const user = useAuthStore((s) => s.user);

if (!data && !user) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10 animate-pulse">

      {/* HERO SKELETON */}
      <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/60" />
            <div className="space-y-2">
              <div className="h-4 w-40 bg-white/70 rounded" />
              <div className="h-3 w-28 bg-white/60 rounded" />
            </div>
          </div>

          <div className="space-y-2 text-right">
            <div className="h-3 w-20 bg-white/60 rounded" />
            <div className="h-6 w-12 bg-white/70 rounded" />
          </div>
        </div>
      </div>

      {/* STATS SKELETON */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4"
          >
            <div className="flex justify-between">
              <div className="h-3 w-20 bg-slate-200 rounded" />
              <div className="h-4 w-4 bg-slate-200 rounded" />
            </div>

            <div className="h-8 w-16 bg-slate-300 rounded" />

            <div className="h-2 w-full bg-slate-200 rounded-full" />
          </div>
        ))}
      </div>

      {/* INSIGHT SKELETON */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
        <div className="h-4 w-32 bg-slate-300 rounded" />
        <div className="h-3 w-full bg-slate-200 rounded" />
        <div className="h-3 w-5/6 bg-slate-200 rounded" />
      </div>

      {/* STRENGTHS + SUGGESTIONS */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-6 space-y-4"
          >
            <div className="h-4 w-24 bg-slate-300 rounded" />

            {[1, 2, 3].map((_, j) => (
              <div
                key={j}
                className="h-10 bg-slate-100 rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>

      {/* SKILLS SUMMARY */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <div className="h-4 w-40 bg-slate-300 rounded" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-100 space-y-2"
            >
              <div className="h-5 w-10 mx-auto bg-slate-300 rounded" />
              <div className="h-3 w-16 mx-auto bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  const skillsScore = data?.resume_breakdown?.skills_score || 0;
  const presentationScore = data?.resume_breakdown?.presentation_score || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10 border rounded-xl shadow-md">
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
            <p className="text-3xl font-bold">{data?.score || 0}</p>
          </div>
        </div>
      </div>
      {/* <CurrentResume  /> */}
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
            value: data?.total_job_matches || 0,
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
              <item.icon className={`text-${item.color}-600`} size={18} />
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
      <PastResumes userId={user.id} />
      {/* INSIGHT */}
      <div className="bg-linear-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-slate-800 mb-2">🧠 Expert Insight</h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          {data?.resume_breakdown?.overall_insight ||
            "Your profile shows a balanced combination of technical skills and presentation."}
        </p>
      </div>

      {/*  STRENGTHS + SUGGESTIONS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* STRENGTHS */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">💪 Strengths</h2>

          <div className="space-y-3">
            {data?.strengths?.length > 0 ? (
              data?.strengths.map((item, i) => (
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
            {data?.suggestions?.length > 0 ? (
              data?.suggestions.map((item, i) => (
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
            { label: "Total", value: data?.skills_summary?.total },
            { label: "Job Ready", value: data?.skills_summary?.job_ready },
            { label: "Developing", value: data?.skills_summary?.developing },
            { label: "To Learn", value: data?.skills_summary?.to_learn },
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
