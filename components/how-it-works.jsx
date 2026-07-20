"use client";

import {
  Upload,
  Brain,
  Target,
  Sparkles,
  Briefcase,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Resume",
      desc: "Upload your resume in PDF format and our system securely extracts the important information like skills, projects, and experience.",
      color: "from-blue-500 to-cyan-500",
      status: "active",
    },
    {
      icon: Brain,
      title: "AI Resume Analysis",
      desc: "Our AI analyzes your resume structure, keywords, and experience to understand your professional profile.",
      color: "from-cyan-500 to-teal-500",
      status: "active",
    },
    {
      icon: Target,
      title: "ATS & Skill Detection",
      desc: "ResumeIQ evaluates your ATS compatibility and extracts important technical skills from your resume.",
      color: "from-violet-500 to-purple-500",
      status: "active",
    },
    {
      icon: Briefcase,
      title: "Job Match Analysis",
      desc: "Compare your resume with job descriptions and discover how well you match the requirements.",
      color: "from-green-500 to-emerald-500",
      status: "active",
    },
    {
      icon: Sparkles,
      title: "AI Resume Suggestions",
      desc: "Get smart suggestions to improve your resume including keyword optimization and stronger project descriptions.",
      color: "from-yellow-500 to-orange-500",
      status: "active",
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      desc: "Generate AI-powered interview questions based on your skills to prepare confidently for interviews.",
      color: "from-red-500 to-pink-500",
      status: "active",
    },
  ];

  return (
    <section
      className="relative overflow-hidden w-full py-28 px-6 md:px-16 lg:px-24 bg-[#050505]"
      id="how-it-works"
    >
      <div className="absolute -top-40 -left-40 h-105 w-105 rounded-full bg-blue-500/6 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 h-87.5 w-87.5 rounded-full bg-blue-400/5 blur-[180px]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className="inline-flex px-5 py-2 rounded-full bg-blue-500/10
border-blue-500/20
text-blue-300 font-semibold text-sm backdrop-blur-xl"
          >
            HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 leading-tight">
            Simple Steps to
            <span
              className="bg-linear-to-r from-white
via-blue-200
to-blue-500 bg-clip-text text-transparent"
            >
              {" "}
              Improve Your Resume
            </span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            ResumeIQ uses AI to analyze your resume, identify missing skills,
            and help you optimize your profile for better job opportunities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10 relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 w-0.5 bg-linear-to-b
from-blue-500/30
via-blue-500/15
to-transparent"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isComingSoon = step.status === "coming soon";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-6 relative"
              >
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-r ${step.color} p-px z-10 shadow-lg`}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0B1120] flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className="relative w-full rounded-3xl border border-white/6
bg-[#111113]/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-blue-500/20
hover:bg-[#151518]
hover:shadow-[0_20px_60px_rgba(37,99,235,.12)]"
                >
                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <span className="absolute top-4 right-4 flex items-center gap-2 text-xs font-semibold text-orange-300 bg-orange-500/10 border border-orange-400/20 px-3 py-1 rounded-full backdrop-blur-xl">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>

                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                      </span>
                      Coming Soon
                    </span>
                  )}
                  <div className="absolute right-6 top-6 text-5xl font-black text-white/3">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
