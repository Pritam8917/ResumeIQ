"use client";

import {
  FileSearch,
  Brain,
  Briefcase,
  TrendingUp,
  Target,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: FileSearch,
    title: "ATS Resume Score",
    desc: "Instantly analyze how well your resume performs with Applicant Tracking Systems used by recruiters.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    desc: "Discover missing skills required for your target roles and receive suggestions to improve your profile.",
    color: "from-cyan-400 to-violet-500",
  },
  {
    icon: Briefcase,
    title: "Job Recommendations",
    desc: "Get personalized job matches based on your resume, skills, and experience level.",
    color: "from-violet-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Resume Optimization",
    desc: "Receive AI suggestions to improve your resume content, structure, and keywords.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    desc: "Understand hiring trends, demand for skills, and salary expectations for your target role.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "AI Interview Practice",
    desc: "Practice with AI-generated interview questions and receive feedback to improve your answers.",
    color: "from-rose-400 to-red-500",
  },
];

export default function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="relative overflow-hidden w-full py-28 px-6 md:px-16 lg:px-24 bg-[#050816] pb-15"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold backdrop-blur-xl">
            ✨ WHAT YOU GET
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-6 leading-tight max-w-5xl mx-auto">
            Everything you need to improve your{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              job readiness
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            ResumeIQ provides AI-powered insights to help you understand your
            strengths, identify skill gaps, and prepare for interviews with
            confidence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-white/3 backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/4.5"
              >
                {/* HEADER */}

                <div className="relative z-10 flex items-start justify-between">
                  {/* ICON */}

                  <div
                    className={`h-12 w-12 rounded-2xl bg-linear-to-br ${feature.color} p-px`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0B1120]">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* TAG */}

                  <div className="rounded-full border border-white/5 bg-white/3 px-3 py-1 text-[10px] font-medium text-slate-400">
                    AI Powered
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.desc}
                  </p>
                </div>

                {/* FOOTER */}

                {/* <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/[0.05] pt-5">
                  <span className="text-xs text-slate-500">
                    Smart Career Tool
                  </span>

                  <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Explore
                    <span>→</span>
                  </div>
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
