"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-14">

        {/* 🔹 MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              <span className="bg-linear-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Resume
              </span>
              <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                IQ
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              AI-powered resume analyzer that helps you optimize your resume,
              improve ATS compatibility, identify skill gaps, and land better
              job opportunities.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg bg-white border hover:bg-gray-100 transition cursor-pointer"
                >
                  <Icon size={18} className="text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">

            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-black transition">
                    <Link href="#">How It Works</Link>
                  </li>
                  <li className="hover:text-black transition">
                    <Link href="#">Features</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-black transition">
                    <Link href="#">FAQ</Link>
                  </li>
                  <li className="hover:text-black transition">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-black transition">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-black transition">
                    <Link href="#">Terms of Service</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-black transition">
                    <Link href="#">About</Link>
                  </li>
                  <li className="hover:text-black transition">
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} ResumeIQ. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}