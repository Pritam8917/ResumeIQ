"use client";

import { useResumeStore } from "@/store/resumeStore";

import PastResumes from "@/components/past-resumes";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
import {
  User,
  Star,
  Brain,
  TrendingUp,
  Sparkles,
  Briefcase,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const data = useResumeStore((s) => s.data);
  const user = useAuthStore((s) => s.user);
  const [reports, setReports] = useState([]);

  const [reportsLoading, setReportsLoading] = useState(true);
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from("interview_reports")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (!error) {
        setReports(data || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setReportsLoading(false);
    }
  };
  if (!data && !user) {
    return (
      <div className="min-h-screen bg-[#081120] text-white px-4 py-6 animate-pulse">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* HERO LOADER */}

          <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* LEFT */}

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/10" />

                <div className="space-y-3">
                  <div className="h-3 w-28 rounded bg-white/10" />

                  <div className="h-8 w-52 rounded bg-white/10" />

                  <div className="h-4 w-72 max-w-full rounded bg-white/5" />
                </div>
              </div>

              {/* RIGHT */}

              <div className="h-28 w-full md:w-56 rounded-3xl bg-white/4 border border-white/10" />
            </div>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-[#101826] p-5 h-36"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-white/10" />

                  <div className="h-10 w-10 rounded-2xl bg-white/10" />
                </div>

                <div className="h-10 w-24 rounded bg-white/10 mt-6" />

                <div className="h-2 w-full rounded-full bg-white/10 mt-6" />
              </div>
            ))}
          </div>

          {/* CONTENT */}

          <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 space-y-4">
            <div className="h-5 w-40 rounded bg-white/10" />

            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-white/3 border border-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const skillsScore = data?.resume_breakdown?.skills_score || 0;

  const presentationScore = data?.resume_breakdown?.presentation_score || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6 text-white">
      {/* HERO */}

      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-linear-to-br from-[#07111f] via-[#0b1728] to-[#10233d] p-6 md:p-8 shadow-2xl">
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* LEFT */}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            {/* USER ICON */}

            <div className="flex items-center justify-center">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center backdrop-blur-xl shrink-0">
                <User size={26} className="text-cyan-300 sm:size-7" />
              </div>
            </div>

            {/* CONTENT */}

            <div className="flex-1 min-w-0 text-center sm:text-left">
              {/* TOP TAG */}

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Sparkles size={14} className="text-cyan-300 shrink-0" />

                <p className="text-cyan-300 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                  Your Profile
                </p>
              </div>

              {/* TITLE */}

              <h1 className="text-2xl sm:text-3xl font-semibold mt-2 leading-tight">
                {user?.name || "Welcome Back"}
              </h1>

              {/* DESCRIPTION */}

              <p className="text-slate-400 text-sm sm:text-[15px] mt-2 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Monitor resume performance, improve skills, and unlock smarter
                opportunities using AI.
              </p>
            </div>
          </div>

          {/* SCORE */}

          <div className="rounded-2xl border border-cyan-400/10 bg-white/3 px-6 py-5 min-w-52.5 backdrop-blur-xl">
            <p className="text-slate-400 text-xs uppercase tracking-wider">
              Resume Score
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {data?.score || 0}
            </h2>

            <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                style={{
                  width: `${data?.score || 0}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: "Skills Score",
            value: skillsScore,
            icon: Star,
            color: "cyan",
          },

          {
            title: "Presentation",
            value: presentationScore,
            icon: Brain,
            color: "violet",
          },

          {
            title: "Job Matches",
            value: data?.total_job_matches || 0,
            icon: TrendingUp,
            color: "blue",
          },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-[#0d1726] p-5 hover:border-cyan-400/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-slate-400 text-sm">{item.title}</p>

                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <Icon size={16} className="text-cyan-300" />
                </div>
              </div>

              <h2 className="text-3xl font-semibold mt-5">{item.value}</h2>

              <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* PAST RESUMES */}

      <div className="rounded-3xl border border-white/5 bg-[#0d1726] p-5">
        <PastResumes userId={user.id} />
      </div>

      {/* INTERVIEW REPORTS */}
      <div className="rounded-3xl border border-white/5 bg-[#0d1726] p-5 sm:p-6">
        {/* HEADER */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-300" />

              <p className="text-cyan-300 text-xs uppercase tracking-[0.2em]">
                AI Interview
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-2">Interview Reports</h2>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center">
            <BarChart3 size={20} className="text-cyan-300" />
          </div>
        </div>

        {/* LOADING */}

        {reportsLoading ? (
          <div className="grid md:grid-cols-2 gap-5">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/5 bg-[#111d2e] p-6 animate-pulse"
              >
                <div className="h-5 w-40 rounded bg-white/10" />

                <div className="h-3 w-28 rounded bg-white/10 mt-4" />

                <div className="h-16 w-16 rounded-2xl bg-white/10 mt-6" />
              </div>
            ))}
          </div>
        ) : reports.length === 0 ? (
          /* EMPTY */

          <div className="rounded-3xl border border-dashed border-white/10 bg-[#111d2e]/60 p-10 text-center">
            <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center mx-auto">
              <Briefcase size={26} className="text-cyan-300" />
            </div>

            <h2 className="text-2xl font-semibold mt-6">
              No Interview Reports
            </h2>

            <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto leading-7">
              Complete your AI interview sessions to view detailed performance
              reports and analytics here.
            </p>
          </div>
        ) : (
          /* REPORTS */

          <div className="grid lg:grid-cols-2 gap-5">
            {reports.map((report, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/5 bg-[#111d2e] p-6 hover:border-cyan-400/20 transition-all duration-300"
              >
                {/* TOP */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{report.role}</h2>

                    <div className="flex items-center gap-3 flex-wrap mt-2 text-sm text-slate-400">
                      <span>{report.type}</span>

                      <span>•</span>

                      <span>{report.difficulty}</span>
                    </div>
                  </div>

                  <div className="w-18 h-18 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shrink-0">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white">
                        {report.overall_score}
                      </h2>

                      <p className="text-[10px] text-white/70 mt-1">SCORE</p>
                    </div>
                  </div>
                </div>

                {/* SCORES */}

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-2xl border border-white/5 bg-[#0d1726] p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Technical
                    </p>

                    <h2 className="text-3xl font-semibold mt-3">
                      {report.technical_score}/10
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-[#0d1726] p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Communication
                    </p>

                    <h2 className="text-3xl font-semibold mt-3">
                      {report.communication_score}/10
                    </h2>
                  </div>
                </div>

                {/* RECOMMENDATION */}

                <div className="mt-5 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={15} className="text-cyan-300" />

                    <p className="text-sm text-cyan-300 font-medium">
                      AI Recommendation
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-7">
                    {report.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* AI INSIGHT */}

      <div className="rounded-3xl border border-cyan-500/10 bg-linear-to-r from-[#0b1728] to-[#13233b] p-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-cyan-300" size={16} />

          <h2 className="text-lg font-medium">AI Career Insight</h2>
        </div>

        <p className="text-slate-400 text-sm leading-7">
          {data?.resume_breakdown?.overall_insight ||
            "Your profile demonstrates a strong balance between technical expertise and professional presentation."}
        </p>
      </div>

      {/* STRENGTHS + SUGGESTIONS */}

      <div className="grid md:grid-cols-2 gap-5">
        {/* STRENGTHS */}

        <div className="rounded-3xl border border-white/5 bg-[#0d1726] p-6">
          <h2 className="text-lg font-semibold mb-5">💪 Strengths</h2>

          <div className="space-y-3">
            {data?.strengths?.length > 0 ? (
              data?.strengths.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-slate-500 text-sm">
                No strengths detected yet.
              </p>
            )}
          </div>
        </div>

        {/* SUGGESTIONS */}

        <div className="rounded-3xl border border-white/5 bg-[#0d1726] p-6">
          <h2 className="text-lg font-semibold mb-5">⚡ Suggestions</h2>

          <div className="space-y-3">
            {data?.suggestions?.length > 0 ? (
              data?.suggestions.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-orange-500/10 bg-orange-500/5 p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-slate-500 text-sm">
                No suggestions available.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SKILLS SUMMARY */}

      <div className="rounded-3xl border border-white/5 bg-[#0d1726] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Skills Summary</h2>

          <p className="text-xs text-slate-500">AI Generated</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total",
              value: data?.skills_summary?.total,
            },

            {
              label: "Job Ready",
              value: data?.skills_summary?.job_ready,
            },

            {
              label: "Developing",
              value: data?.skills_summary?.developing,
            },

            {
              label: "To Learn",
              value: data?.skills_summary?.to_learn,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-[#111d2e] p-5 hover:bg-[#152338] transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {item.value || 0}
              </h2>

              <p className="text-sm text-slate-400 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
