"use client";

import {
  Search,
  Brain,
  CheckCircle,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
// import { useState } from "react";
import { useResumeStore } from "@/store/resumeStore";

export default function TechnicalArsenal() {
  const data = useResumeStore((s) => s.data);
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-6 bg-linear-to-br from-slate-50 to-white">
        {/* Animated Logo / Icon */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center animate-pulse">
            <Brain className="text-teal-600" size={28} />
          </div>

          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-slate-800">
            Analyzing Your Resume
          </h2>

          <p className="text-sm text-slate-500 animate-pulse">
            AI is reviewing your skills, experience, and job fit...
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    );
  }

  const skills = data.technical_arsenal || [];

  return (
    <div className="space-y-8 border border-slate-200 rounded-xl p-6  bg-white shadow-md md:ml-8">
      {/* HEADER */}

      <div className="flex justify-between items-start border border-slate-200 rounded-xl p-6 bg-white ">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            {"</>"} Technical Arsenal
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            This section shows how strong each skill is based on your resume,
            employer expectations, and exactly how to improve your job
            readiness.
          </p>
        </div>

        <span className="flex items-center gap-2 bg-slate-200 text-slate-800 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm w-fit">
          {/* DOT */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>

          {/* TEXT */}
          <span className="whitespace-nowrap font-semibold">
            {skills.length} skills
          </span>
        </span>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Skills */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {skills.length}
            </h2>
            <p className="text-sm text-slate-500">Total Skills</p>
          </div>
          <Brain className="text-slate-600" size={28} />
        </div>

        {/* Job Ready */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-teal-600">
              {skills.filter((s) => s.status === "Job-ready").length}
            </h2>
            <p className="text-sm text-slate-500">Job Ready</p>
          </div>
          <CheckCircle className="text-teal-600" size={28} />
        </div>
        {/* Nearly job Ready*/}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-700">
              {skills.filter((s) => s.status === "Nearly job-ready").length}
            </h2>
            <p className="text-sm text-slate-500">Nearly Job Ready</p>
          </div>
          <AlertCircle className="text-slate-600" size={28} />
        </div>
        {/* Developing */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-orange-500">
              {skills.filter((s) => s.status === "Developing").length}
            </h2>
            <p className="text-sm text-slate-500">Developing</p>
          </div>
          <TrendingUp className="text-orange-500" size={28} />
        </div>
      </div>

      {/* SEARCH */}

      <div className="flex gap-4">
        <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 w-full  bg-gray-100">
          <Search size={16} className="text-slate-600" />

          <input
            placeholder="Search skills..."
            className="outline-none text-sm w-full text-slate-600 focus:text-slate-800"
          />
        </div>

        {/* <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
          All
        </button>

        <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-gray-400">
          Ready
        </button>

        <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-gray-400">
          Developing
        </button> */}
      </div>

      {/* SKILL CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={skill.id || i}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* CARD HEADER */}
            <div className="bg-linear-to-r from-slate-800 to-teal-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {skill.name}
                </h3>

                {/* STATUS BADGE */}
                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-medium mt-1 inline-block
              ${
                skill.status === "Job-ready"
                  ? "bg-green-100 text-green-700"
                  : skill.status === "Developing"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-slate-100 text-slate-600"
              }`}
                >
                  {skill.status}
                </span>
              </div>

              {/* SCORE */}
              <span className="bg-white/20 px-2 py-1 rounded text-sm">
                {skill.score}/10
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-4">
              {/* DEMAND */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={14} className="text-teal-600" />
                {skill.demand}
              </div>

              {/* PROGRESS BAR */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.score * 10}%</span>
                </div>

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-500"
                    style={{ width: `${skill.score * 10}%` }}
                  ></div>
                </div>
              </div>

              {/* STRENGTH */}
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-1">
                  What&apos;s Strong
                </h4>
                <p className="text-xs text-slate-600">{skill.strength}</p>
              </div>

              {/* EXPECTATION */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-orange-700 mb-1">
                  Employer Expectations
                </h4>
                <p className="text-xs text-orange-600">{skill.expectation}</p>
              </div>

              {/* AI INSIGHT */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <p className="text-xs text-slate-600">
                  <span className="font-bold">⚡ AI Confidence:</span> {skill.aiInsight?.confidence || "N/A"}{" "}
                  { `- ${skill.aiInsight.reason}`}
                </p>
              </div>

              {/* SUGGESTED ACTION */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-teal-700 mb-1">
                  {skill.suggestion?.title || "Suggested Next Step"}
                </h4>
                <p className="text-xs text-teal-600">
                  {skill.suggestion?.action || "No suggestion available"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
