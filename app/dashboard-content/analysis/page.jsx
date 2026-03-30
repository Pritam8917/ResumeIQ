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
      <div className="space-y-10 ml-0 md:ml-8 animate-pulse">
        {/* HEADER SKELETON */}
        <div className="space-y-6 border border-slate-300 rounded-xl p-6 bg-white shadow-md">
          <div className="h-6 w-40 bg-slate-300 rounded"></div>

          {/* SCORE BANNER */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <div className="p-6 flex justify-between items-center">
              <div className="space-y-3">
                <div className="h-4 w-32 bg-slate-300 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-slate-300 rounded-full"></div>
                  <div className="h-6 w-24 bg-slate-300 rounded-full"></div>
                  <div className="h-6 w-16 bg-slate-300 rounded-full"></div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <div className="h-10 w-16 bg-slate-300 rounded"></div>
                <div className="h-4 w-10 bg-slate-300 rounded"></div>
              </div>
            </div>

            {/* TABS */}
            <div className="flex gap-3 px-6 py-4 border-t">
              <div className="h-8 w-20 bg-slate-300 rounded-full"></div>
              <div className="h-8 w-24 bg-slate-300 rounded-full"></div>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <div key={i} className="border rounded-xl p-5 space-y-4">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-slate-300 rounded"></div>
                    <div className="h-3 w-40 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-6 w-10 bg-slate-300 rounded"></div>
                </div>

                <div className="h-2 w-full bg-slate-200 rounded"></div>

                <div className="h-10 w-full bg-slate-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-between items-center p-4 border rounded-xl">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-slate-300 rounded"></div>
              <div className="h-3 w-48 bg-slate-200 rounded"></div>
            </div>

            <div className="h-10 w-28 bg-slate-300 rounded"></div>
          </div>
        </div>

        {/* ROADMAP SKELETON */}
        <div className="space-y-6 bg-white p-6 border border-slate-300 rounded-xl shadow-md">
          <div className="h-6 w-40 bg-slate-300 rounded"></div>

          <div className="flex gap-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="h-10 w-28 bg-slate-300 rounded-lg"></div>
            ))}
          </div>

          <div className="border rounded-xl p-6 space-y-4">
            <div className="h-6 w-48 bg-slate-300 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
            <div className="h-4 w-3/4 bg-slate-200 rounded"></div>

            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-slate-300 rounded-full"
                ></div>
              ))}
            </div>

            <div className="h-10 w-36 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const roles = data.career_roadmap || [];

  const getSkillLabel = (score) => {
    if (score >= 9) return "Expert";
    if (score >= 7) return "Strong";
    if (score >= 5) return "Developing";
    return "Beginner";
  };
  const getSkillStyles = (score) => {
    if (score >= 85) {
      return {
        card: "bg-green-50 border-green-200",
        badge: "bg-green-600 text-white",
        text: "text-green-700",
        progress: "bg-green-600",
      };
    } else if (score >= 70) {
      return {
        card: "bg-teal-50 border-teal-200",
        badge: "bg-teal-600 text-white",
        text: "text-teal-700",
        progress: "bg-teal-600",
      };
    } else if (score >= 50) {
      return {
        card: "bg-orange-50 border-orange-200",
        badge: "bg-orange-500 text-white",
        text: "text-orange-700",
        progress: "bg-orange-500",
      };
    } else {
      return {
        card: "bg-red-50 border-red-200",
        badge: "bg-red-500 text-white",
        text: "text-red-700",
        progress: "bg-red-500",
      };
    }
  };

  const score = data.resume_breakdown?.skills_score || 0;
  const styles = getSkillStyles(score);

  const getPresentationLabel = (score) => {
    if (score >= 85) return "ATS Optimized";
    if (score >= 70) return "Well Structured";
    if (score >= 50) return "Needs Improvement";
    return "Poor Format";
  };
  const getPresentationStyles = (score) => {
    if (score >= 85) {
      return {
        card: "bg-green-50 border-green-200",
        badge: "bg-green-600 text-white",
        text: "text-green-700",
        progress: "bg-green-600",
      };
    } else if (score >= 70) {
      return {
        card: "bg-teal-50 border-teal-200",
        badge: "bg-teal-600 text-white",
        text: "text-teal-700",
        progress: "bg-teal-600",
      };
    } else if (score >= 50) {
      return {
        card: "bg-orange-50 border-orange-200",
        badge: "bg-orange-500 text-white",
        text: "text-orange-700",
        progress: "bg-orange-500",
      };
    } else {
      return {
        card: "bg-red-50 border-red-200",
        badge: "bg-red-500 text-white",
        text: "text-red-700",
        progress: "bg-red-500",
      };
    }
  };
  const presentationScore = data.resume_breakdown?.presentation_score || 0;

  const presentationStyles = getPresentationStyles(presentationScore);
  const skillScore = data.resume_breakdown?.skills_score || 0;

  const skillStyles = getSkillStyles(skillScore);

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

              <div className={`border rounded-xl p-5 ${styles.card}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Skills
                      <span
                        className={`ml-2 text-xs px-2 py-1 rounded-full ${styles.badge}`}
                      >
                        {getSkillLabel(score)}
                      </span>
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      {data.resume_breakdown?.skills_insight ||
                        "Skill analysis based on your resume."}
                    </p>
                  </div>

                  <span className={`text-xl font-bold ${styles.text}`}>
                    {score}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${styles.progress}`}
                    style={{
                      width: `${score}%`,
                    }}
                  ></div>
                </div>

                {/* Button */}
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

              <div
                className={`border rounded-xl p-5 ${presentationStyles.card}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Presentation
                      <span
                        className={`ml-2 text-xs px-2 py-1 rounded-full ${presentationStyles.badge}`}
                      >
                        {getPresentationLabel(presentationScore)}
                      </span>
                    </h4>

                    <p className="text-sm text-slate-600 mt-2">
                      {data.resume_breakdown?.presentation_insight ||
                        "Presentation analysis based on ATS and readability."}
                    </p>
                  </div>

                  <span
                    className={`text-xl font-bold ${presentationStyles.text}`}
                  >
                    {presentationScore}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${presentationStyles.progress}`}
                    style={{
                      width: `${presentationScore}%`,
                    }}
                  ></div>
                </div>

                {/* Optional Button */}
                <button className="mt-4 flex items-center gap-2 border border-slate-300 rounded-lg px-4 py-2 text-[12px] bg-slate-100 text-gray-800 cursor-pointer hover:bg-slate-200 transition w-full justify-center">
                  Improve Resume Format
                </button>
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
              <div className={`border rounded-xl p-5 ${skillStyles.card}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded ${skillStyles.badge}`}>
                    {skillScore}
                  </span>

                  <h4 className="font-semibold text-slate-800">Skills</h4>
                </div>

                {/* LIST */}
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  {(data.resume_breakdown?.skills_improvement || []).length >
                  0 ? (
                    data.resume_breakdown.skills_improvement.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        {item}
                      </li>
                    ))
                  ) : (
                    <p className="text-slate-500">
                      Improve your technical depth and projects.
                    </p>
                  )}
                </ul>

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
              <div
                className={`border rounded-xl p-5 ${presentationStyles.card}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded ${presentationStyles.badge}`}
                  >
                    {presentationScore}
                  </span>

                  <h4 className="font-semibold text-slate-800">Presentation</h4>
                </div>

                {/* LIST */}
                <ul className="space-y-2 text-sm text-slate-700">
                  {(data.resume_breakdown?.presentation_improvement || [])
                    .length > 0 ? (
                    data.resume_breakdown.presentation_improvement.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                          {item}
                        </li>
                      ),
                    )
                  ) : (
                    <p className="text-slate-500">
                      Improve formatting and bullet clarity.
                    </p>
                  )}
                </ul>
              </div>
            </div>

            {/* GLOBAL ACTIONS (FROM API) */}
            {data.actions?.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800">
                  Recommended Actions
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {data.actions.map((action, i) => (
                    <div
                      key={i}
                      className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition"
                    >
                      <h5 className="text-sm font-semibold text-slate-800">
                        {action.title}
                      </h5>

                      <p className="text-xs text-slate-600 mt-1">
                        {action.description}
                      </p>

                      <span className="inline-block mt-2 text-[10px] px-2 py-1 bg-slate-100 text-slate-600 rounded">
                        {action.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
              <span className="font-semibold text-black">Career Impact:</span>{" "}
              {roles[activeRole]?.career_impact}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
              {roles[activeRole]?.why_this_role}
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
