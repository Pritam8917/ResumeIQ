"use client";


export default function CTA() {
  return (
    <section className="w-full py-14 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="bg-linear-to-r from-blue-50 via-white to-cyan-50 border border-gray-200 rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">

          {/* Left Content */}
          <div className="max-w-xl">

            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Start in minutes
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Ready to improve your resume?
            </h2>

            <p className="text-gray-600 mt-4">
              Upload your resume and get AI-powered insights to improve
              your job readiness, detect missing skills, and optimize
              your resume for modern hiring systems.
            </p>

          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 px-5">

            <button className="md:px-6 px-24 py-3 rounded-xl bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold flex items-center gap-2 shadow-md hover:opacity-90 transition cursor-pointer text-center">
              Upload Resume
            </button>

            <button className="md:px-5  py-3 rounded-xl border border-gray-300  cursor-pointer text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition justify-center font-bold">
              Log in
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}