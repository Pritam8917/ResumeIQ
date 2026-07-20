"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is ResumeIQ?",
      a: "ResumeIQ is an AI-powered platform that analyzes resumes, detects missing skills, and helps candidates improve their job readiness.",
    },
    {
      q: "Is ResumeIQ free to use?",
      a: "Yes. ResumeIQ provides free resume analysis tools and AI insights to help improve your resume instantly without hidden fees.",
    },
    {
      q: "How does ResumeIQ analyze my resume?",
      a: "Our AI extracts resume content, detects skills, evaluates ATS (Applicant Tracking System) compatibility, and compares your profile against target job descriptions.",
    },
    {
      q: "How accurate is the AI analysis?",
      a: "ResumeIQ uses modern LLMs and custom career-focused models to evaluate resume keywords, formatting, and impact metrics with high precision.",
    },
    {
      q: "Can ResumeIQ help me prepare for interviews?",
      a: "Yes. ResumeIQ dynamically generates tailored interview questions and answer frameworks based on your specific skills, experience, and target roles.",
    },
    {
      q: "Does ResumeIQ store my resume?",
      a: "Your resume is securely processed for analysis over encrypted channels and is never permanently stored unless you explicitly create an account.",
    },
  ];

  const [open, setOpen] = useState();

  return (
    <section
      className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[#09090B] text-white overflow-hidden selection:bg-white selection:text-black"
      id="faq"
    >
      {/* Background Grid Pattern & Subtle Glows */}
      <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[170px]" />

      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-400/4 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Sticky Info & Help Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20
bg-blue-500/10
text-blue-300 text-xs font-mono uppercase tracking-widest"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-300" />
                Frequently Asked
              </span>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Got questions? <br />
                <span
                  className="bg-linear-to-r
from-white
to-blue-400
bg-clip-text
text-transparent"
                >
                  We have answers.
                </span>
              </h2>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                Everything you need to know about ResumeIQ, our AI analysis
                engine, privacy standards, and ATS optimization.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between group hover:border-zinc-700 transition-colors">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <MessageSquare
                    className="w-4 h-4 bg-linear-to-r
from-white
to-blue-400
bg-clip-text
text-transparent"
                  />{" "}
                  Still have questions?
                </h4>
                <p className="text-xs text-zinc-400">
                  Our support team is always here to help.
                </p>
              </div>
              <a
                href="#contact"
                className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center group-hover:bg-zinc-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Accordion List with Dots */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const active = open === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${
                    active
                      ? "bg-[#111113] border-white/6 shadow-2xl"
                      : "bg-[#111113]/70 border-zinc-800/60 hover:border-blue-500/20 hover:bg-zinc-950/80"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive Dot Indicator */}
                      <div className="flex items-center justify-center w-6 h-6">
                        <motion.span
                          animate={{
                            scale: active ? 1.2 : 1,
                            backgroundColor: active ? "#60A5FA" : "#3F3F46",
                          }}
                          transition={{ duration: 0.2 }}
                          className={`rounded-full ${
                            active
                              ? "w-2.5 h-2.5 shadow-[0_0_12px_rgba(96,165,250,.8)]"
                              : "w-2 h-2"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                          active ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`p-1.5 rounded-lg ${
                        active ? "text-white" : "text-zinc-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-zinc-900/60 mt-2">
                          <p className="pt-4 pl-10">{faq.a}</p>
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
