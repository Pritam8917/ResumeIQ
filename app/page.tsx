"use client";
import { ArrowRight, FileText, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm mb-6">
            🚀 AI-powered career insights
          </span>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Understand your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              career potential
            </span>
            before applying for jobs.
          </h1>
          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            ResumeIQ analyzes your resume and generates a complete career report
            — including ATS score, skill gaps, role matching, and interview
            readiness.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition shadow-md hover:shadow-lg">
              Upload Resume <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 border border-blue-200 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
              <FileText size={18} /> View Sample Report
            </button>
          </div>
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-10">
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              Resume-based insights
            </span>
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              AI assessments + interviews
            </span>
            <span className="border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 bg-white">
              Recruiter-ready outputs
            </span>
          </div>
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Privacy Card */}
            <div className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl flex-shrink-0">
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
            </div>
            {/* Fast Activation Card */}
            <div className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl flex-shrink-0">
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
            </div>
          </div>
        </div>
        {/* RIGHT CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-5 sm:p-6 w-full max-w-md md:max-w-none mx-auto">
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
              <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>
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
              <p className="font-semibold text-gray-800"> AI Interview </p>
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
        </div>
      </div>
    </section>
  );
}
