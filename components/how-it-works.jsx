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
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Brain,
      title: "AI Resume Analysis",
      desc: "Our AI analyzes your resume structure, keywords, and experience to understand your professional profile.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Target,
      title: "ATS & Skill Detection",
      desc: "ResumeIQ evaluates your ATS compatibility and extracts important technical skills from your resume.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Briefcase,
      title: "Job Match Analysis",
      desc: "Compare your resume with job descriptions and discover how well you match the requirements.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Sparkles,
      title: "AI Resume Suggestions",
      desc: "Get smart suggestions to improve your resume including keyword optimization and stronger project descriptions.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      desc: "Generate AI-powered interview questions based on your skills to prepare confidently for interviews.",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-700 font-semibold text-xl">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
            Simple Steps to
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Improve Your Resume
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            ResumeIQ uses AI to analyze your resume, identify missing skills,
            and help you optimize your profile for better job opportunities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 relative">

          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 w-0.5 bg-gray-200"
          ></motion.div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 relative"
              >

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${step.color} z-10`}
                >
                  <Icon size={22} />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition w-full"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
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