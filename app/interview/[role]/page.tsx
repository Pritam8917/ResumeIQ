"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Brain,
  Clock3,
  Sparkles,
  ArrowRight,
  Mic,
  ShieldCheck,
  BarChart3,
  Play,
  CheckCircle2,
} from "lucide-react";

const interviewTypes = [
  {
    title: "Technical Interview",
    description: "Role-based technical interview questions powered by AI.",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Behavioral Interview",
    description: "Practice communication, teamwork, and real-world scenarios.",
    icon: Mic,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "HR Interview",
    description: "Prepare for HR discussions, strengths, and career goals.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-500",
  },
];

const features = [
  "AI-generated interview questions",
  "Resume-based personalized preparation",
  "Real-time AI answer evaluation",
  "Interview performance analytics",
  "Difficulty-based mock interviews",
  "Timed interview simulation",
];

export default function InterviewPreparationPage() {
  const router = useRouter();
  const params = useParams();
  const role = (params.role as string).replaceAll("-", " ");

  const formattedRole = role
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [selectedType, setSelectedType] = useState("Technical Interview");
  const [difficulty, setDifficulty] = useState("Intermediate");

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        {/* BACK BUTTON */}

        <div className="mb-8">
          <Link
            href="/dashboard-content/jobs"
            className=" group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:bg-white/8 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back
          </Link>
        </div>
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-10 py-2">
          {/* LEFT */}
          <div className="py-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-sm text-emerald-300 mb-6">
              <Sparkles size={16} />
              AI-Powered Interview Preparation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Prepare For
              <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                {formattedRole}
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Practice personalized AI interviews based on your resume, improve
              communication skills, and get instant AI feedback tailored for the
              selected role.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-sm text-gray-400 mt-1">Questions</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <p className="text-2xl font-bold text-white">AI</p>
                <p className="text-sm text-gray-400 mt-1">Evaluation</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-sm text-gray-400 mt-1">Modes</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Practice</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_10px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm font-medium">
                  Selected Role
                </p>

                <h2 className="text-2xl font-bold mt-1">{formattedRole}</h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Briefcase size={24} />
              </div>
            </div>

            {/* Interview Type */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">
                Choose Interview Type
              </p>

              <div className="space-y-4">
                {interviewTypes.map((item) => {
                  const Icon = item.icon;

                  const active = selectedType === item.title;

                  return (
                    <button
                      key={item.title}
                      onClick={() => setSelectedType(item.title)}
                      className={`
                        w-full
                        text-left
                        rounded-2xl
                        border
                        p-4
                        transition-all
                        duration-300
                        ${
                          active
                            ? "border-emerald-400 bg-white/10"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`
                            w-12
                            h-12
                            rounded-xl
                            bg-linear-to-r
                            ${item.color}
                            flex
                            items-center
                            justify-center
                            shrink-0
                          `}
                        >
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Difficulty */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">Difficulty Level</p>

              <div className="flex flex-wrap gap-3">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`
                        px-5
                        py-3
                        rounded-full
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        border
                        ${
                          difficulty === level
                            ? "bg-linear-to-r from-emerald-500 to-cyan-500 border-transparent text-white"
                            : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                        }
                      `}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-emerald-400" size={20} />

                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-semibold mt-1">20 Minutes</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-cyan-400" size={20} />

                  <div>
                    <p className="text-sm text-gray-400">Questions</p>
                    <p className="font-semibold mt-1">10 Questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              className=" mt-8 w-full h-14 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(16,185,129,0.35)] cursor-pointer"
              onClick={() =>
                router.push(
                  `/interview/session/${params.role}?type=${selectedType}&difficulty=${difficulty}`,
                )
              }
            >
              <Play size={18} />
              Start Interview
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-emerald-300 text-sm font-medium">
                Smart Preparation
              </p>

              <h2 className="text-3xl sm:text-4xl font-black mt-2">
                Everything You Need To Crack Interviews
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">
                  <CheckCircle2 size={20} />
                </div>

                <h3 className="text-lg font-semibold leading-relaxed">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
