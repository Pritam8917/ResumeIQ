"use client";

import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import UploadResumeModal from "@/components/UploadResumeModal";
import { useState } from "react";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const handleUploadClick = () => {
    setOpenModal(true);
  };

  return (
    <section
      className="relative overflow-hidden w-full pt-28 pb-16 sm:pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 md:px-10 lg:px-20 
bg-[#050505]
text-white"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-44 left-1/2 -translate-x-1/2 h-105 w-105 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <span
            className="
inline-flex
items-center
rounded-full
border
border-blue-500/20
bg-blue-500/10
px-4
py-1
text-sm
text-blue-300
backdrop-blur-xl
mb-3
"
          >
            🚀 AI-powered career insights
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
            Understand your
            <span
              className="bg-linear-to-r from-white
via-blue-100
to-blue-400 bg-clip-text text-transparent"
            >
              {" "}
              career potential
            </span>{" "}
            before applying for jobs.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            ResumeIQ analyzes your resume and generates a complete career report
            — including ATS score, skill gaps, role matching, and interview
            readiness.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
          >
            {/* Upload Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleUploadClick}
              className="group flex items-center justify-center gap-2 rounded-xl
  bg-linear-to-r from-blue-600 to-blue-500
  px-6 py-3
  font-semibold text-white
  shadow-[0_10px_35px_rgba(37,99,235,0.28)]
  transition-all duration-300
  hover:from-blue-500
  hover:to-blue-400
  hover:shadow-[0_15px_45px_rgba(37,99,235,0.45)]
  cursor-pointer"
            >
              Upload Resume
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            {/* Sample Report */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open("/sample-report", "_blank")}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-gray-200 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer font-bold backdrop-blur-xl"
            >
              <FileText size={18} /> View Sample Report
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pb-5"
          >
            {[
              "Resume-based insights",
              "AI assessments + interviews",
              "Recruiter-ready outputs",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white/5 border border-white/10 text-gray-300 backdrop-blur-lg px-4 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 mt-4">
            {/* Privacy Card */}
            <div
              className="relative overflow-hidden flex gap-4 items-start bg-[#101012]/80
border
border-white/6
backdrop-blur-3xl
shadow-[0_20px_60px_rgba(0,0,0,.5)] rounded-2xl p-5 hover:border-blue-500/20
hover:bg-[#121215] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl" />

              <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl shrink-0">
                <Shield size={20} className="text-cyan-300" />
              </div>

              <div className="relative z-10">
                <h3 className="font-semibold text-white mb-1">Privacy-first</h3>

                <p className="text-gray-400 text-sm">
                  Your resume is processed to generate your report.
                </p>
              </div>
            </div>

            {/* Fast Activation Card */}
            <div
              className="relative overflow-hidden flex gap-4 items-start bg-[#101012]/80
border
border-white/6
backdrop-blur-3xl
shadow-[0_20px_60px_rgba(0,0,0,.5)]
 rounded-2xl p-5  hover:border-blue-500/20
hover:bg-[#121215] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-2xl" />

              <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl shrink-0">
                <Zap size={20} className="text-violet-300" />
              </div>

              <div className="relative z-10">
                <h3 className="font-semibold text-white mb-1">
                  Fast activation
                </h3>

                <p className="text-gray-400 text-sm">
                  Get insights in minutes and unlock deeper tools.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[30px] border border-white/5 bg-[#0B0B0E]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl"
        >
          {/* Background Glow */}
          <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                ResumeIQ
              </span>
            </div>

            {/* Resume Score */}
            <div className="mb-8">
              <p className="text-sm text-zinc-500">Resume Score</p>

              <div className="mt-2 flex items-end justify-between">
                <div>
                  <h2 className="bg-linear-to-r from-white to-blue-400 bg-clip-text text-6xl font-black text-transparent">
                    92
                  </h2>

                  <p className="mt-2 text-sm font-medium text-blue-400">
                    ★★★★★ Excellent
                  </p>
                </div>

                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  ATS Ready
                </div>
              </div>
            </div>

            <div className="mb-8 h-px bg-white/5" />

            {/* Best Role */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Best Role
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Software Engineer
                  </h3>
                </div>

                <span className="font-semibold text-blue-400">92%</span>
              </div>

              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-linear-to-r from-blue-600 to-blue-400"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/4 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8 h-px bg-white/5" />

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/3 p-4">
                <p className="text-xs text-zinc-500">Skill Gaps</p>

                <h3 className="mt-2 text-2xl font-bold text-white">3</h3>
              </div>

              <div className="rounded-2xl bg-white/3 p-4">
                <p className="text-xs text-zinc-500">Interview</p>

                <h3 className="mt-2 text-2xl font-bold text-white">86%</h3>
              </div>

              <div className="rounded-2xl bg-white/3 p-4">
                <p className="text-xs text-zinc-500">Demand</p>

                <h3 className="mt-2 text-2xl font-bold text-blue-400">High</h3>
              </div>
            </div>

            <div className="mb-8 h-px bg-white/5" />

            {/* AI Interview */}
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    AI Interview
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Personalized Assessment
                  </h3>
                </div>

                <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  Adaptive
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Resume-based Questions",
                  "20 Minute Session",
                  "Detailed AI Feedback",
                  "Hiring Readiness Score",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />

                    <p className="text-sm text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <UploadResumeModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
