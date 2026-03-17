"use client";

import { useState } from "react";
import {
  Trophy,
  Target,
} from "lucide-react";

export default function ResumeAnalysisPage() {
  const [activeTab, setActiveTab] = useState("score");
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    { name: "Junior Full-Stack Developer", match: "85%" },
    { name: "Junior AI/ML Engineer", match: "80%" },
    { name: "Junior Data Scientist", match: "70%" },
    { name: "Junior Cloud Engineer", match: "65%" },
  ];

  return (
    <div className="space-y-10 ml-0 md:ml-8">
      {/* ---------------- RESUME INTELLIGENCE ---------------- */}

      <div className="space-y-6 border border-slate-300 rounded-xl p-6 bg-white">
        <h2 className="text-lg font-semibold text-slate-800">
          Resume Intelligence
        </h2>

        {/* SCORE BANNER */}

        <div className="rounded-xl overflow-hidden border border-slate-200">
          <div className="bg-linear-to-r from-teal-600 to-slate-700 text-white p-6 flex justify-between items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Trophy size={16} />
                <span className="font-medium">Grade A-</span>
              </div>

              <div className="flex gap-2 text-xs flex-wrap">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  ATS Compliant
                </span>

                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Above Average
                </span>

                <span className="bg-white/20 px-3 py-1 rounded-full">
                  2 Areas
                </span>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-4xl font-bold">82</h2>
              <p className="text-sm text-slate-200">/100</p>
            </div>
          </div>

          {/* TABS */}

          <div className="flex gap-3 px-6 py-4 bg-white border-t border-slate-200 text-sm">
            <button
              onClick={() => setActiveTab("score")}
              className={`px-3 py-1 rounded-full ${
                activeTab === "score"
                  ? "bg-slate-100 font-medium"
                  : "text-slate-500"
              }`}
            >
              Score
            </button>

            <button
              onClick={() => setActiveTab("actions")}
              className={`px-3 py-1 rounded-full ${
                activeTab === "actions"
                  ? "bg-slate-100 font-medium"
                  : "text-slate-500"
              }`}
            >
              Actions
            </button>
          </div>
        </div>

        {/* TAB CONTENT */}

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
                      The candidate demonstrates a solid foundation in web
                      development and AI/ML technologies with proficiency levels
                      provided.
                    </p>
                  </div>

                  <span className="text-xl font-bold text-teal-700">85</span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full mt-4">
                  <div className="h-2 bg-teal-600 rounded-full w-[85%]"></div>
                </div>

                <button className="mt-4 border border-slate-300 rounded-lg px-4 py-2 text-sm">
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
                      The resume utilizes standard section headers and clean
                      layout aiding ATS parsing. Some bullet points need
                      improvement.
                    </p>
                  </div>

                  <span className="text-xl font-bold text-orange-600">78</span>
                </div>

                <div className="h-2 bg-slate-200 rounded-full mt-4">
                  <div className="h-2 bg-orange-500 rounded-full w-[78%]"></div>
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

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm">
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
                    85
                  </span>

                  <h4 className="font-semibold text-slate-800">Skills</h4>
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  Add more context to your proficiency levels and showcase
                  advanced applications of your technical skills.
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
                    78
                  </span>

                  <h4 className="font-semibold text-slate-800">Presentation</h4>
                </div>

                <p className="text-sm text-slate-600">
                  Ensure experience bullet points are complete and verify
                  chronological consistency of dates.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- CAREER ROADMAP ---------------- */}

      <div className="space-y-6 bg-white p-9 border border-slate-300 rounded-xl">
        <h2 className="text-lg font-semibold text-slate-800">Career Roadmap</h2>

        {/* ROLE TABS */}

        <div className="flex gap-3 flex-wrap">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setActiveRole(index)}
              className={`px-4 py-2 rounded-lg text-sm border ${
                activeRole === index
                  ? "bg-teal-600 text-white border-teal-600"
                  : "border-slate-200 text-slate-600"
              }`}
            >
              {role.name}

              <span className="ml-2 text-xs opacity-80">
                {role.match} Match
              </span>
            </button>
          ))}
        </div>

        {/* ROADMAP CARD */}

        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-linear-to-r from-teal-600 to-cyan-600 text-white p-6 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">
                  {roles[activeRole].name}
                </h3>

                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  BEST MATCH
                </span>
              </div>

              <div className="flex gap-4 text-sm opacity-90">
                <span>🏆 {roles[activeRole].match} Fit</span>
                <span>⚡ 4 Skills</span>
                <span>⏱ 3-6 mo</span>
              </div>
            </div>

            <span className="text-sm opacity-80">PATH {activeRole + 1}/4</span>
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
            {/* 
          <div className="border-t border-slate-200 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <TrendingUp className="text-orange-500" />
              Ready to start? Unlock to see skill gaps
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <Crown size={16} />
              Unlock ₹249
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
