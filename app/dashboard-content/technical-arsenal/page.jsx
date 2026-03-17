"use client";

import {
  Search,
  Brain,
  CheckCircle,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
export default function TechnicalArsenal() {
  const skills = [
    {
      name: "Python",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Used extensively in AI/ML projects and data pipelines with practical applications.",
      expectation:
        "Add measurable outcomes like performance improvements or model accuracy gains.",
    },
    {
      name: "Next.js",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Applied in multiple full-stack projects including ResumeIQ dashboard development.",
      expectation:
        "Explore advanced features like server components and performance optimization.",
    },
    {
      name: "Tailwind CSS",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Used extensively for modern UI design and responsive dashboards.",
      expectation: "Improve component design systems and UI architecture.",
    },
    {
      name: "Python",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Used extensively in AI/ML projects and data pipelines with practical applications.",
      expectation:
        "Add measurable outcomes like performance improvements or model accuracy gains.",
    },
    {
      name: "Next.js",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Applied in multiple full-stack projects including ResumeIQ dashboard development.",
      expectation:
        "Explore advanced features like server components and performance optimization.",
    },
    {
      name: "Tailwind CSS",
      score: 8,
      status: "Nearly job-ready",
      demand: "In Demand",
      strength:
        "Used extensively for modern UI design and responsive dashboards.",
      expectation: "Improve component design systems and UI architecture.",
    },
  ];

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
          <span className="whitespace-nowrap font-semibold">16 skills</span>
        </span>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Skills */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">16</h2>
            <p className="text-sm text-slate-500">Total Skills</p>
          </div>
          <Brain className="text-slate-600" size={28} />
        </div>

        {/* Job Ready */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-teal-600">3</h2>
            <p className="text-sm text-slate-500">Job Ready</p>
          </div>
          <CheckCircle className="text-teal-600" size={28} />
        </div>

        {/* Developing */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-orange-500">13</h2>
            <p className="text-sm text-slate-500">Developing</p>
          </div>
          <TrendingUp className="text-orange-500" size={28} />
        </div>

        {/* To Develop */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-700">0</h2>
            <p className="text-sm text-slate-500">To Develop</p>
          </div>
          <AlertCircle className="text-slate-600" size={28} />
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

        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
          All
        </button>

        <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-gray-400">
          Ready
        </button>

        <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-gray-400">
          Developing
        </button>
      </div>

      {/* SKILL CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white"
          >
            {/* CARD HEADER */}

            <div className="bg-linear-to-r from-slate-800 to-teal-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{skill.name}</h3>

                <p className="text-xs opacity-80">{skill.status}</p>
              </div>

              <span className="bg-white/20 px-2 py-1 rounded text-sm">
                {skill.score}/10
              </span>
            </div>

            {/* CONTENT */}

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle size={14} className="text-teal-600" />
                In Demand
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-1">
                  What&apos;s Strong
                </h4>

                <p className="text-xs text-slate-600">{skill.strength}</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="text-sm font-semibold text-orange-700 mb-1">
                  Employer Expectations
                </h4>

                <p className="text-xs text-orange-600">{skill.expectation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
