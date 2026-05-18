"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import UploadResumeModal from "@/components/UploadResumeModal";
export default function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const handleUploadClick = () => {
    setOpenModal(true);
  };
  const socialLinks = [
    {
      icon: Github,
      href: "#",
    },
    {
      icon: Linkedin,
      href: "#",
    },
    {
      icon: FaXTwitter,
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden w-full border-t border-white/10 bg-[#050816]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Top CTA */}
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 mb-20 shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-violet-500/5" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold mb-5">
                🚀 AI-Powered Resume Intelligence
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
                Build a resume that stands out to recruiters.
              </h2>

              <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                Improve ATS scores, identify missing skills, optimize projects,
                and prepare for interviews with ResumeIQ.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="group px-7 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              onClick={handleUploadClick}
            >
              Get Started
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Resume
              </span>

              <span className="text-white">IQ</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
              AI-powered resume analyzer designed to help candidates optimize
              resumes, improve ATS compatibility, identify skill gaps, and land
              better opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-5">Product</h3>

              <ul className="space-y-3">
                {["How It Works", "Features", "ATS Analysis"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-5">Resources</h3>

              <ul className="space-y-3">
                {["FAQ", "Contact", "Support"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-5">Legal</h3>

              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-5">Company</h3>

              <ul className="space-y-3">
                {["About", "Careers", "Blog"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ResumeIQ. All rights reserved.
          </p>
        </div>
      </div>
      <UploadResumeModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </footer>
  );
}
