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
      className="w-full py-26 px-6 md:px-16 lg:px-24 bg-[#070B14]"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-semibold text-sm backdrop-blur-xl">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 leading-tight">
            Simple Steps to
            <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Improve Your Resume
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-base md:text-lg">
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
            className="absolute left-6 top-0 w-0.5 bg-linear-to-b from-cyan-500/50 to-violet-500/50"
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
                  whileHover={!isComingSoon ? { scale: 1.08 } : {}}
                  className={`w-12 h-12 rounded-2xl bg-linear-to-r ${step.color} p-px z-10 shadow-lg`}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0B1120] flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={!isComingSoon ? { y: -4 } : {}}
                  className="relative w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
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

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}