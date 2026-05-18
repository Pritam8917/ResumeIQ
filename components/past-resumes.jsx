"use client";

import { useEffect, useState } from "react";
import { FileText, Sparkles, Clock } from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function PastResumes({ userId }) {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchResumes = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("resumes")
          .select("id, score, created_at")
          .eq("user_id", userId)
          .order("created_at", {
            ascending: false,
          })
          .limit(3);

        if (error) throw error;

        setResumes(data || []);
      } catch (err) {
        console.error(err);

        setError("Failed to load resumes");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [userId]);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#101826] p-4 sm:p-6 animate-pulse">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-2xl bg-white/10" />

          <div className="space-y-2">
            <div className="h-4 w-36 rounded bg-white/10" />

            <div className="h-3 w-24 rounded bg-white/5" />
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-2xl bg-white/3 border border-white/10"
            />
          ))}
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-4 sm:p-6">
        <p className="text-red-300 text-sm font-medium">{error}</p>
      </div>
    );
  }

  /* ================= EMPTY ================= */

  if (!resumes.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#101826] p-8 sm:p-10 text-center">
        <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
          <FileText className="text-cyan-300" size={28} />
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-5">
          No Resume History
        </h2>

        <p className="text-slate-400 text-sm sm:text-[15px] mt-3 max-w-md mx-auto leading-relaxed">
          Upload your first resume to unlock AI-powered analysis, job matching,
          and career insights.
        </p>

        <button className="mt-6 px-5 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 text-sm font-medium text-white hover:opacity-90 transition-all duration-300">
          Upload Resume
        </button>
      </div>
    );
  }

  /* ================= MAIN UI ================= */

  return (
    <div className="rounded-3xl border border-white/10 bg-[#101826] p-4 sm:p-6 md:p-7 shadow-xl">
      {/* HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-7">
        {/* LEFT */}

        <div className="flex items-center gap-4 min-w-0">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
            <FileText className="text-cyan-300" size={22} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Sparkles className="text-cyan-300 shrink-0" size={14} />

              <p className="text-cyan-300 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em]">
                Resume History
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1">
              Recent Resumes
            </h2>
          </div>
        </div>

        {/* COUNT */}

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 w-fit">
          <p className="text-slate-400 text-[10px] uppercase tracking-wider">
            Total Records
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {resumes.length}
          </h3>
        </div>
      </div>

      {/* RESUME LIST */}

      <div className="space-y-4">
        {resumes.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-4 sm:p-5 hover:border-cyan-400/20 transition-all duration-300"
          >
            {/* GLOW */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_35%)]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              {/* LEFT */}

              <div className="flex items-center gap-4 min-w-0">
                {/* INDEX */}

                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold text-base sm:text-lg shrink-0">
                  {index + 1}
                </div>

                {/* INFO */}

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white break-all">
                    Resume #{item.id}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-slate-400 text-xs sm:text-sm">
                    <Clock size={13} />

                    <span>
                      {new Date(item.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              {/* SCORE CIRCLE */}

              <div className="flex justify-center sm:justify-end">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
                  {/* THIN PROGRESS RING */}

                  <svg
                    className="absolute inset-0 -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    {/* BACKGROUND */}

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
                      stroke="url(#gradient)"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={276}
                      strokeDashoffset={276 - (276 * item.score) / 100}
                    />

                    {/* GRADIENT */}

                    <defs>
                      <linearGradient
                        id="gradient"
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

                  {/* SCORE */}

                  <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {item.score}%
                    </h2>

                    <p className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">
                      Score
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
