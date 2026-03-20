"use client";

import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
// import { useAuthStore } from "@/store/authStore";
// import { useRouter } from "next/navigation";
import UploadResumeModal from "@/components/UploadResumeModal";
import { useState } from "react";
export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const handleUploadClick = () => {
    setOpenModal(true);
  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm mb-6">
            🚀 AI-powered career insights
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            Understand your
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              career potential
            </span>{" "}
            before applying for jobs.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            ResumeIQ analyzes your resume and generates a complete career report
            — including ATS score, skill gaps, role matching, and interview
            readiness.
          </p>
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
              className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition shadow-md hover:shadow-lg cursor-pointer font-bold"
            >
              Upload Resume <ArrowRight size={18} />
            </motion.button>

            {/* Sample Report */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 border border-blue-200 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-50 transition cursor-pointer font-bold"
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
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              Resume-based insights
            </span>
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              AI assessments + interviews
            </span>
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              Recruiter-ready outputs
            </span>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 mt-4">
            {/* Privacy Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl shrink-0">
                <Shield size={20} className="text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Privacy-first
                </h3>
                <p className="text-gray-600 text-sm">
                  Your resume is processed to generate your report.
                </p>
              </div>
            </motion.div>

            {/* Fast Activation Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl shrink-0">
                <Zap size={20} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Fast activation
                </h3>
                <p className="text-gray-600 text-sm">
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
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-5 sm:p-6 w-full max-w-md md:max-w-none mx-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Career Intelligence Report
            </p>

            <span className="text-xs text-gray-400">v1</span>
          </div>

          {/* Resume Score */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm text-gray-500">Resume Score</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                92
              </h2>
              <p className="text-sm text-gray-500">Strong for senior roles</p>
            </div>

            <button className="border border-gray-200 px-3 py-2 rounded-full text-xs sm:text-sm text-gray-600">
              Top Roles
            </button>
          </div>

          {/* Role Match */}
          <div className="border border-gray-200 rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Principal Architect
              </p>
              <span className="text-xs sm:text-sm text-gray-500">
                88% match
              </span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "88%" }}
                transition={{ duration: 1 }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>

            <div className="flex gap-2 flex-wrap text-xs text-gray-600">
              <span className="border border-gray-200 px-3 py-1 rounded-full">
                Cloud-native
              </span>
              <span className="border border-gray-200 px-3 py-1 rounded-full">
                Platform
              </span>
              <span className="border border-gray-200 px-3 py-1 rounded-full">
                Leadership
              </span>
            </div>
          </div>

          {/* Market Insights */}
          <div className="border border-gray-200 rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-800">Market Insights</p>

              <span className="border border-gray-200 px-3 py-1 rounded-full text-xs text-gray-500">
                Premium
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Salary range, demand signals, and role-fit drivers.
            </p>
          </div>

          {/* AI Interview */}
          <div className="border border-gray-200 rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-800">AI Interview</p>

              <span className="border border-gray-200 px-3 py-1 rounded-full text-xs text-gray-500">
                Text-based
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Your assessment adapts dynamically to your answers.
            </p>
          </div>

          {/* Unlock Insights */}
          <div className="grid grid-cols-2 gap-3 text-gray-600">
            <button className="border border-gray-200 py-2 rounded-full text-sm">
              Skill gaps
            </button>

            <button className="border border-gray-200 py-2 rounded-full text-sm">
              Salary
            </button>

            <button className="border border-gray-200 py-2 rounded-full text-sm">
              Market
            </button>

            <button className="bg-blue-700 text-white py-2 rounded-full text-sm">
              Get report
            </button>
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
