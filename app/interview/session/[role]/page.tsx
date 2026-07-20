"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Clock3,
  Loader2,
  CheckCircle2,
  Briefcase,
  BarChart3,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type ReportScore = {
  overallScore: number;
  technicalScore: number;
  communicationScore: number;
  strengths: string[];
  improvements: string[];
  recommendation: string;
};
export default function InterviewSessionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const role = (params.role as string).replaceAll("-", " ");
  const router = useRouter();
  const formattedRole = useMemo(() => {
    return role
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [role]);

  const interviewType = searchParams.get("type") || "Technical Interview";
  const difficulty = searchParams.get("difficulty") || "Intermediate";
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [report, setReport] = useState<ReportScore | null>(null);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    generateQuestions();
  }, []);

  useEffect(() => {
    if (isPaused || evaluating || report) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, evaluating, report]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const generateQuestions = async () => {
    setLoading(true);
    setError("");
    setQuestions([]);

    try {
      const response = await fetch("/api/interview/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: formattedRole,
          difficulty,
          type: interviewType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to generate interview questions.",
        );
      }

      if (!data.success) {
        throw new Error(
          data.message || "Unable to generate interview questions.",
        );
      }

      if (!data.questions || data.questions.length === 0) {
        throw new Error(
          "No interview questions were generated. Please try again.",
        );
      }

      setQuestions(data.questions);
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const evaluateInterview = async (finalAnswers: string | number | null) => {
    try {
      setEvaluating(true);
      const response = await fetch("/api/interview/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          role: formattedRole,
          difficulty,
          type: interviewType,
          answers: finalAnswers,
        }),
      });

      const data = await response.json();

      if (data.success) {
        await supabase.from("interview_reports").insert({
          role: formattedRole,
          type: interviewType,
          difficulty,
          overall_score: data.report.overallScore,
          technical_score: data.report.technicalScore,
          communication_score: data.report.communicationScore,
          strengths: data.report.strengths,
          improvements: data.report.improvements,
          recommendation: data.report.recommendation,
        });
        setReport(data.report);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEvaluating(false);
      setSubmitting(false);
    }
  };

  const handleNext = async () => {
    if (!answer.trim()) return;
    setSubmitting(true);

    const updatedAnswers = [
      ...answers,
      {
        question: questions[currentQuestion],
        answer,
      },
    ];

    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);

        setAnswer("");

        setSubmitting(false);
      }, 300);
    } else {
      await evaluateInterview(
        updatedAnswers as unknown as string | number | null,
      );
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (evaluating) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px]" />

        <div className="relative z-10 w-full max-w-md rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto shadow-[0_10px_40px_rgba(16,185,129,0.35)]">
            <Loader2 size={28} className="animate-spin" />
          </div>

          <h2 className="text-2xl font-bold mt-6">Evaluating Interview</h2>

          <p className="text-sm text-gray-400 mt-3 leading-7">
            AI is analyzing your answers and generating your interview
            performance report.
          </p>
        </div>
      </div>
    );
  }

  if (report) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white px-4 py-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-emerald-300">
                  <Sparkles size={14} />
                  AI Analysis
                </div>

                <h1 className="text-4xl font-black mt-5">Interview Report</h1>

                <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                  Personalized AI-powered interview analysis based on your
                  communication, technical performance, and confidence.
                </p>
              </div>

              <div className="w-20 h-20 rounded-3xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-[0_10px_40px_rgba(16,185,129,0.35)]">
                <CheckCircle2 size={36} />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                {
                  title: "Overall",
                  value: report.overallScore,
                },
                {
                  title: "Technical",
                  value: report.technicalScore,
                },
                {
                  title: "Communication",
                  value: report.communicationScore,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <p className="text-sm text-gray-400">{item.title}</p>

                  <h2 className="text-5xl font-black mt-4 bg-linear-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                    {item.value}/10
                  </h2>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h2 className="text-xl font-bold">Strengths</h2>

                <div className="space-y-4 mt-6">
                  {report.strengths?.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4 text-sm text-gray-300 leading-7"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h2 className="text-xl font-bold">Improvements</h2>

                <div className="space-y-4 mt-6">
                  {report.improvements?.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4 text-sm text-gray-300 leading-7"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 p-6">
              <p className="text-sm text-emerald-300">AI Recommendation</p>

              <h2 className="text-2xl font-bold mt-3">
                {report.recommendation}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* TOP */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <button
              onClick={() => setShowExitModal(true)}
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back
            </button>

            <div className="flex items-start sm:items-center gap-4 mt-6">
              {/* ICON */}

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shrink-0">
                <Briefcase size={20} className="sm:w-6 sm:h-6" />
              </div>

              {/* CONTENT */}

              <div className="min-w-0 flex-1">
                <h1 className="text-2xl sm:text-3xl font-black leading-tight wrap-break-word">
                  {formattedRole}
                </h1>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3 text-xs sm:text-sm text-gray-400">
                  <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                    {interviewType}
                  </div>

                  <div className="hidden sm:block text-gray-600">•</div>

                  <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                    {difficulty}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIMER */}

          <div className="flex flex-wrap items-center gap-4">
            {/* TIMER */}

            <div className="h-14 px-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3">
              <Clock3 size={18} className="text-emerald-300 shrink-0" />

              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 leading-none">
                  Time Left
                </p>

                <h2 className="text-lg font-bold mt-1 leading-none">
                  {formatTime(timeLeft)}
                </h2>
              </div>
            </div>

            {/* PAUSE / RESUME */}

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="h-14 px-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium cursor-pointer"
            >
              {isPaused ? (
                <>
                  <Play size={17} className="text-emerald-300 shrink-0" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause size={17} className="text-orange-300 shrink-0" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* PROGRESS */}

            <div className="h-14 px-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3">
              <BarChart3 size={18} className="text-cyan-300 shrink-0" />

              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 leading-none">
                  Progress
                </p>

                <h2 className="text-lg font-bold mt-1 leading-none">
                  {currentQuestion + 1}/{questions.length || 10}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}

        <div className="grid xl:grid-cols-[1fr_320px] gap-6 mt-8">
          {/* LEFT */}

          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-400">Current Question</p>

                <h2 className="text-lg font-semibold mt-1">
                  AI Interview Session
                </h2>
              </div>

              <div className="text-sm text-gray-400">
                Answer clearly and confidently.
              </div>
            </div>

            <div className="p-6">
              {loading ? (
                <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-300/30 border-t-blue-300" />

                    <div>
                      <p className="text-sm font-medium text-blue-200">
                        Generating interview questions...
                      </p>

                      <p className="text-xs text-blue-300/70">
                        AI is preparing personalized questions for your role.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* QUESTION CARD */}

                  <div className="rounded-[30px] border border-white/10 bg-[#111827]/60 backdrop-blur-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
                        <Brain size={22} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                              Question {currentQuestion + 1}
                            </p>

                            <h2 className="text-2xl font-bold leading-relaxed">
                              {questions[currentQuestion]}
                            </h2>
                          </div>

                          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-300">
                            <Sparkles size={14} />
                            AI Generated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QUICK TIPS */}

                  <div className="grid sm:grid-cols-3 gap-4 mt-5">
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                        Structure
                      </p>

                      <h3 className="font-semibold mt-2">Use STAR Method</h3>

                      <p className="text-sm text-gray-400 mt-2 leading-6">
                        Situation, Task, Action, and Result.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                        Focus
                      </p>

                      <h3 className="font-semibold mt-2">Be Specific</h3>

                      <p className="text-sm text-gray-400 mt-2 leading-6">
                        Mention projects, impact, and outcomes.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                        Communication
                      </p>

                      <h3 className="font-semibold mt-2">Keep It Clear</h3>

                      <p className="text-sm text-gray-400 mt-2 leading-6">
                        Avoid lengthy answers and stay concise.
                      </p>
                    </div>
                  </div>

                  {/* ANSWER */}

                  <div className="mt-6 rounded-[30px] border border-white/10 bg-[#111827]/55 backdrop-blur-xl p-5">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
                      <div>
                        <h3 className="text-lg font-semibold">Your Answer</h3>

                        <p className="text-sm text-gray-400 mt-1">
                          Keep answers concise, structured, and impactful.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-xs text-cyan-300">
                        <Clock3 size={14} />
                        Real-time AI Evaluation
                      </div>
                    </div>

                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Write your answer here..."
                      className="w-full min-h-65 rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl p-5 outline-none resize-none text-sm leading-7 text-white placeholder:text-gray-500 focus:border-emerald-400/40 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                    />

                    {/* BOTTOM */}

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mt-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300">
                          AI Evaluation Enabled
                        </div>

                        <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300">
                          {answer.trim().split(/\s+/).filter(Boolean).length}{" "}
                          Words
                        </div>

                        <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300">
                          {questions.length - currentQuestion - 1} Remaining
                        </div>
                      </div>

                      <button
                        onClick={handleNext}
                        disabled={submitting || !answer.trim()}
                        className="h-13 px-7 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(16,185,129,0.35)] disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Saving
                          </>
                        ) : currentQuestion === questions.length - 1 ? (
                          <>
                            Finish Interview
                            <CheckCircle2 size={16} />
                          </>
                        ) : (
                          <>
                            Next Question
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* continue Interview Modal */}
          <AnimatePresence>
            {showExitModal && (
              <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
                <div className="w-full max-w-md rounded-3xl bg-[#111113] border border-white/6 p-8">
                  <h2 className="text-2xl font-bold">Leave Interview?</h2>

                  <p className="mt-4 text-zinc-400">
                    Your interview is still in progress. Leaving now will
                    discard your answers.
                  </p>

                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => setShowExitModal(false)}
                      className="flex-1 rounded-xl bg-[#1B1B20] py-3"
                    >
                      Continue Interview
                    </button>

                    <button
                      onClick={() => router.push(`/interview/${params.role}`)}
                      className="flex-1 rounded-xl bg-red-500 py-3 text-white"
                    >
                      Leave
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* RIGHT */}

          <div className="space-y-6">
            {/* SESSION CARD */}

            <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
              {/* TOP */}

              <div className="relative p-5 border-b border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                      Live Session
                    </p>

                    <h2 className="text-xl font-bold mt-2">
                      Interview Details
                    </h2>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Briefcase size={18} />
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div className="p-5 space-y-5">
                {[
                  {
                    label: "Role",
                    value: formattedRole,
                  },
                  {
                    label: "Interview",
                    value: interviewType,
                  },
                  {
                    label: "Difficulty",
                    value: difficulty,
                  },
                  {
                    label: "Completed",
                    value: `${answers.length}/${questions.length || 10}`,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-gray-400">{item.label}</span>

                    <span className="text-sm font-semibold text-white text-right">
                      {item.value}
                    </span>
                  </div>
                ))}

                {/* PROGRESS */}

                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-400">Overall Progress</p>

                    <p className="text-sm font-semibold text-emerald-300">
                      {Math.round(
                        ((currentQuestion + 1) / (questions.length || 10)) *
                          100,
                      )}
                      %
                    </p>
                  </div>

                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                      style={{
                        width: `${
                          ((currentQuestion + 1) / (questions.length || 10)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PERFORMANCE TIPS */}

            <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                      AI Suggestions
                    </p>

                    <h2 className="text-xl font-bold mt-2">Quick Tips</h2>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-linear-to-r from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <Sparkles size={18} />
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    "Use real-world project examples.",
                    "Keep answers concise and structured.",
                    "Explain your approach clearly.",
                    "Focus on measurable impact.",
                  ].map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827]/50 p-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>

                      <p className="text-sm text-gray-300 leading-6">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 blur-2xl rounded-full" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                    <Brain size={18} />
                  </div>

                  <h2 className="text-3xl font-black">
                    {questions.length || 10}
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">Questions</p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl rounded-full" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-linear-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg">
                    <BarChart3 size={18} />
                  </div>

                  <h2 className="text-3xl font-black bg-linear-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                    AI
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
