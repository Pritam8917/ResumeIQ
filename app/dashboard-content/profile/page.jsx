"use client";

import {
  Edit,
  MapPin,
  Briefcase,
  Mail,
  FileText
} from "lucide-react";

export default function ProfilePage() {

  const skills = [
    "React", "Next.js", "Node.js",
    "Tailwind", "MongoDB", "Python"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* -------- PROFILE HEADER -------- */}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center shadow-sm">

        <div className="flex items-center gap-5">

          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center text-lg font-semibold">
            P
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Pritam Das
            </h2>

            <p className="text-sm text-slate-500">
              Full Stack Developer
            </p>

            <div className="flex gap-4 text-xs text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <MapPin size={12}/> India
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={12}/> Fresher
              </span>
            </div>

          </div>

        </div>

        {/* Button */}
        <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm hover:bg-slate-50 flex items-center gap-2">
          <Edit size={16}/> Edit
        </button>

      </div>



      {/* -------- STATS (MODERN CARDS) -------- */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {[
          { label: "Score", value: "82" },
          { label: "Skills", value: "16" },
          { label: "Matches", value: "12" },
          { label: "Progress", value: "75%" }
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition"
          >
            <p className="text-xs text-slate-500">
              {item.label}
            </p>
            <h2 className="text-xl font-semibold text-slate-800 mt-1">
              {item.value}
            </h2>
          </div>

        ))}

      </div>



      {/* -------- MAIN GRID -------- */}

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}

        <div className="space-y-6">

          {/* CONTACT */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">

            <h3 className="text-sm font-semibold text-slate-700 mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <Mail size={14}/> pritam@email.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14}/> India
              </div>

            </div>

          </div>


          {/* RESUME */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">

            <h3 className="text-sm font-semibold text-slate-700 mb-4">
              Resume
            </h3>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <div className="bg-slate-100 p-2 rounded-lg">
                  <FileText size={16}/>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    resume.pdf
                  </p>
                  <p className="text-xs text-slate-400">
                    Updated recently
                  </p>
                </div>

              </div>

              <button className="text-sm text-teal-600">
                View
              </button>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="md:col-span-2 space-y-6">

          {/* SKILLS */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-sm font-semibold text-slate-700">
                Skills
              </h3>

              <button className="text-xs text-teal-600">
                Manage
              </button>

            </div>

            <div className="flex flex-wrap gap-2">

              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* CTA (MODERN) */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white flex justify-between items-center">

            <div>
              <h3 className="font-semibold">
                Improve your profile
              </h3>
              <p className="text-xs opacity-80">
                Add projects & skills to boost job matches
              </p>
            </div>

            <button className="bg-white text-teal-600 px-4 py-2 rounded-lg text-sm">
              Update
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}