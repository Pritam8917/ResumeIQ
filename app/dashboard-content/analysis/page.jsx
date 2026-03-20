"use client";

import { useState } from "react";
import { Trophy, Target, TrendingUp, Wrench, Brain } from "lucide-react";
import { useResumeStore } from "@/store/resumeStore";
import { useRouter } from "next/navigation";

export default function ResumeAnalysisPage() {
  const [activeTab, setActiveTab] = useState("score");
  const [activeRole, setActiveRole] = useState(0);
  const router = useRouter();
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
  const roles = data.career_roadmap || [];
  return (
    <div className="space-y-10 ml-0 md:ml-8">
      {/* ---------------- RESUME INTELLIGENCE ---------------- */}

      <div className="space-y-6 border border-slate-300 rounded-xl p-6 bg-white shadow-md">
        <h2 className="text-lg font-semibold text-slate-800">
          Resume Intelligence
        </h2>

        {/* SCORE BANNER */}

        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
          <div className="bg-linear-to-r from-teal-600 to-slate-700 text-white p-6 flex justify-between items-center ">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Trophy size={16} />
                <span className="font-medium">Grade {data.grade}</span>
              </div>

              <div className="flex gap-2 text-xs flex-wrap">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {data.ats_compliance ? "ATS Compliant" : "Not ATS Friendly"}
                </span>

                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {data.grade_label || "Performance Insight"}
                </span>

                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {data.skill_gaps?.missing?.length || 0} Areas
                </span>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-4xl font-bold">{data.score}</h2>
              <p className="text-sm text-slate-200">/100</p>
            </div>
          </div>

          {/* TABS */}

          <div className="flex gap-3 px-6 py-4 bg-white border-t border-slate-200 text-sm">
            <button
              onClick={() => setActiveTab("score")}
              className={`px-3 py-1 rounded-full text-gray-800 cursor-pointer ${
                activeTab === "score"
                  ? "bg-slate-100 font-medium"
                  : "text-slate-500"
              }`}
            >
              Score
            </button>

            <button
              onClick={() => setActiveTab("actions")}
              className={`px-3 py-1 rounded-full text-gray-800 cursor-pointer ${
                activeTab === "actions"
                  ? "bg-slate-100 font-medium"
                  : "text-slate-500"
              }`}
            >
              Actions
            </button>
          </div>
        </div>

        {/* ---------------- SCORE TAB ---------------- */}

        {activeTab === "score" && (
          <div className="space-y-6">
            <h3 className="font-semibold text-slate-800">Score Breakdown</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SKILLS CARD */}

              <div className="border border-teal-200 rounded-xl p-5 bg-teal-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Skills
                      <span className="ml-2 text-xs bg-teal-600 text-white px-2 py-1 rounded-full">
                        TOP
                      </span>
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      {data.summary?.skills_insight ||
                        "Skill analysis based on your resume."}
                    </p>
                  </div>

                  <span className="text-xl font-bold text-teal-700">
                    {data.resume_breakdown?.skills_score || 0}
                  </span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full mt-4">
                  <div
                    className="h-2 bg-teal-600 rounded-full"
                    style={{
                      width: `${data.resume_breakdown?.skills_score || 0}%`,
                    }}
                  ></div>
                </div>

                <button
                  className="mt-4 flex items-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-[12px] bg-slate-100 text-gray-800 cursor-pointer hover:bg-slate-200 transition w-full justify-center"
                  onClick={() =>
                    router.push("/dashboard-content/technical-arsenal")
                  }
                >
                  <Wrench size={14} />
                  View My Skill Ratings
                </button>
              </div>

              {/* PRESENTATION CARD */}

              <div className="border border-orange-200 rounded-xl p-5 bg-orange-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Presentation
                      <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                        FOCUS
                      </span>
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      {data.summary?.presentation_insight ||
                        "Resume formatting and structure feedback."}
                    </p>
                  </div>

                  <span className="text-xl font-bold text-orange-600">
                    {data.resume_breakdown?.presentation_score || 0}
                  </span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full mt-4">
                  <div
                    className="h-2 bg-orange-500 rounded-full"
                    style={{
                      width: `${data.resume_breakdown?.presentation_score || 0}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* ACTION CTA */}

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                ⚡
                <div>
                  <p className="font-medium text-slate-800">
                    Ready to improve?
                  </p>

                  <p className="text-sm text-slate-500">
                    Get personalized action items
                  </p>
                </div>
              </div>

              <button
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                onClick={() => setActiveTab("actions")}
              >
                See Actions →
              </button>
            </div>
          </div>
        )}

        {/* ---------------- ACTIONS TAB ---------------- */}

        {activeTab === "actions" && (
          <div className="space-y-6">
            <h3 className="font-semibold text-slate-800">
              How to Improve Each Area
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SKILLS IMPROVEMENT */}

              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded">
                    {data.resume_breakdown?.skills_score || 0}
                  </span>

                  <h4 className="font-semibold text-slate-800">Skills</h4>
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  {data.recommendations?.skills ||
                    "Improve your technical depth and projects."}
                </p>

                <div className="flex gap-3">
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">
                    Take Assessment
                  </button>

                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                    Browse Courses
                  </button>
                </div>
              </div>

              {/* PRESENTATION IMPROVEMENT */}

              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    {data.resume_breakdown?.presentation_score || 0}
                  </span>

                  <h4 className="font-semibold text-slate-800">Presentation</h4>
                </div>

                <p className="text-sm text-slate-600">
                  {data.recommendations?.presentation ||
                    "Improve formatting and bullet clarity."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- CAREER ROADMAP ---------------- */}

      <div className="space-y-6 bg-white p-6 border border-slate-300 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-slate-800">Career Roadmap</h2>

        {/* ROLE TABS */}

        <div className="flex gap-3 overflow-x-auto pb-2  scroll-smooth">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setActiveRole(index)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm border whitespace-nowrap transition cursor-pointer ${
                activeRole === index
                  ? "bg-teal-600 text-white border-teal-600"
                  : "border-slate-200 text-black hover:bg-slate-50"
              }`}
            >
              {role.role}

              <span
                className={`ml-2 text-xs  ${activeRole === index ? "text-white" : "text-gray-800"}`}
              >
                {role.match_percentage}% Match
              </span>
            </button>
          ))}
        </div>

        {/* ROADMAP CARD */}

        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-md">
          <div className="bg-linear-to-r from-teal-600 to-cyan-600 text-white p-4 md:p-6 rounded-t-xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              {/* LEFT CONTENT */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {roles[activeRole]?.role}
                  </h3>

                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    BEST MATCH
                  </span>
                </div>

                {/* STATS */}
                <div className="flex flex-wrap gap-3 text-xs md:text-sm opacity-90">
                  <span>🏆 {roles[activeRole]?.match_percentage}% Fit</span>

                  <span>
                    ⚡ {roles[activeRole]?.required_skills?.length || 0} Skills
                  </span>

                  <span>⏱ {roles[activeRole]?.estimated_time || "N/A"}</span>
                </div>
              </div>

              {/* RIGHT SIDE (PATH) */}
              <div className="text-xs md:text-sm opacity-80 text-left md:text-right">
                PATH {activeRole + 1}/{roles.length}
              </div>
            </div>
          </div>

          {/* WHY ROLE */}

          <div className="p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-slate-800">
              <Target size={18} className="text-teal-600" />
              Why This Role?
            </h3>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
              <span className="font-medium">Career Impact:</span> With a strong
              role fit you are closer than most candidates. Closing a few skill
              gaps will significantly improve shortlisting chances.
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
              Based on your resume, you already have a solid foundation in
              front-end and back-end technologies. Strengthening architecture
              and cloud skills can further improve your role readiness.
            </div>
          </div>

          {/* CTA */}

          <div className="border-t border-slate-200 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <TrendingUp className="text-orange-500" size={16} />
              Skill Gaps to Focus
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Missing Skills (Top Priority) */}
              {roles[activeRole]?.missing_skills.slice(0, 4).map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200"
                >
                  {skill}
                </span>
              ))}

              {/* Improving Skills */}
              {/* {data.skill_gaps?.improving?.slice(0, 2).map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200"
                >
                  {skill}
                </span>
              ))} */}
            </div>

            {/* Optional CTA */}
            <button
              onClick={() =>
                router.push("/dashboard-content/technical-arsenal")
              }
              className="text-sm text-white font-medium hover:bg-teal-700  cursor-pointer rounded-xl bg-teal-600 px-4 py-1 mt-6"
            >
              Improve Skills →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
