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
    <section className="relative overflow-hidden w-full pt-28 pb-16 sm:pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#050816] text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <span className="inline-block bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 backdrop-blur-xl px-4 py-1 rounded-full text-sm mb-6">
            🚀 AI-powered career insights
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
            Understand your
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUploadClick}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-violet-600 text-white px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer font-bold backdrop-blur-xl"
            >
              Upload Resume <ArrowRight size={18} />
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
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-cyan-400/30 transition-all duration-300"
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
            </motion.div>

            {/* Fast Activation Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-violet-400/30 transition-all duration-300"
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
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl p-5 sm:p-6 w-full max-w-md md:max-w-none mx-auto"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Career Intelligence Report
              </p>

              <span className="text-xs text-gray-500">v1</span>
            </div>

            {/* Resume Score */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm text-gray-400">Resume Score</p>

                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  92
                </h2>

                <p className="text-sm text-gray-500">Strong for senior roles</p>
              </div>

              <button className="border border-white/10 bg-white/5 px-3 py-2 rounded-full text-xs sm:text-sm text-gray-300 backdrop-blur-lg">
                Top Roles
              </button>
            </div>

            {/* Role Match */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-4 mb-5 backdrop-blur-xl">
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-white text-sm sm:text-base">
                  Principal Architect
                </p>

                <span className="text-xs sm:text-sm text-gray-400">
                  88% match
                </span>
              </div>

              {/* Progress */}
              <div className="w-full bg-white/10 h-2 rounded-full mb-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1 }}
                  className="bg-linear-to-r from-cyan-400 to-violet-500 h-2 rounded-full"
                />
              </div>

              <div className="flex gap-2 flex-wrap text-xs text-gray-300">
                {["Cloud-native", "Platform", "Leadership"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="border border-white/10 bg-white/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Market Insights */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-4 mb-5 backdrop-blur-xl">
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-white">Market Insights</p>

                <span className="border border-white/10 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400">
                  coming soon
                </span>
              </div>

              <p className="text-sm text-gray-400">
                Salary range, demand signals, and role-fit drivers.
              </p>
            </div>

            {/* AI Interview */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-4 mb-5 backdrop-blur-xl">
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-white">AI Interview</p>

                <span className="border border-white/10 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400">
                  Text-based
                </span>
              </div>

              <p className="text-sm text-gray-400">
                Your assessment adapts dynamically to your answers.
              </p>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 text-gray-300">
              {["Skill gaps", "Salary", "Market"].map((item, index) => (
                <button
                  key={index}
                  className="border border-white/10 bg-white/5 py-2 rounded-full text-sm hover:bg-white/10 transition-all duration-300"
                >
                  {item}
                </button>
              ))}

              <button className="bg-linear-to-r from-cyan-500 to-violet-600 text-white py-2 rounded-full text-sm hover:scale-105 transition-all duration-300 shadow-lg">
                Get report
              </button>
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
