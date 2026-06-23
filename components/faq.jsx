"use client";

import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Brain,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is ResumeIQ?",
      a: "ResumeIQ is an AI-powered platform that analyzes resumes, detects missing skills, and helps candidates improve their job readiness.",
      icon: Brain,
    },
    {
      q: "Is ResumeIQ free to use?",
      a: "Yes. ResumeIQ provides free resume analysis tools and AI insights to help improve your resume.",
      icon: Sparkles,
    },
    {
      q: "How does ResumeIQ analyze my resume?",
      a: "Our AI extracts resume content, detects skills, evaluates ATS compatibility, and compares your profile with job descriptions.",
      icon: Brain,
    },
    {
      q: "How accurate is the AI analysis?",
      a: "ResumeIQ uses modern AI models to analyze resume keywords, skills, and structure to generate meaningful insights.",
      icon: Sparkles,
    },
    {
      q: "Can ResumeIQ help me prepare for interviews?",
      a: "Yes. ResumeIQ generates AI-powered interview questions based on your skills and projects.",
      icon: Brain,
    },
    {
      q: "Does ResumeIQ store my resume?",
      a: "Your resume is securely processed for analysis and is not permanently stored unless you create an account.",
      icon: ShieldCheck,
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section
      className="relative overflow-hidden w-full py-28 px-6 md:px-16 lg:px-24 bg-[#050816]"
      id="faq"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold backdrop-blur-xl">
            ✨ FAQ
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-6 leading-tight">
            Questions,
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              answered
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Everything you need to know about ResumeIQ, how it works,
            and how it helps improve your resume using AI-powered insights.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-white/6 to-transparent" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg mb-6">
                  <Sparkles className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white leading-snug">
                  Smart answers powered by AI-driven career intelligence.
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  ResumeIQ helps candidates optimize resumes, improve ATS
                  scores, prepare for interviews, and understand market demand
                  using modern AI systems.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-white">95%</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      ATS Optimization
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-white">AI</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Interview Prep
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8 space-y-5">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const active = open === index;

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                    active
                      ? "border-cyan-400/30 bg-white/[0.07]"
                      : "border-white/10 bg-white/5 hover:bg-white/6"
                  } backdrop-blur-2xl`}
                >
                  {/* Glow */}
                  {active && (
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-violet-500/5" />
                  )}

                  {/* Question */}
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="relative z-10 w-full flex items-center justify-between gap-5 p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          active
                            ? "bg-linear-to-r from-cyan-500 to-violet-600 shadow-lg"
                            : "bg-white/10"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={active ? "text-white" : "text-cyan-300"}
                        />
                      </div>

                      {/* Question */}
                      <span
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          active ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        active
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="relative z-10 px-6 pb-6 pl-22 text-gray-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}