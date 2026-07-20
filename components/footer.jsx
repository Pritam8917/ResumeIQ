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
    <footer className="relative overflow-hidden w-full border-t border-white/10 bg-[#08090B]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/5 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-blue-400/4 blur-[120px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.03]
bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
bg-size-[22px_22px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Top CTA */}
        <div className="relative overflow-hidden  rounded-4xl border border-white/6 bg-[#111113] backdrop-blur-2xl p-8 md:p-12 mb-20 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span
                className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-5"
              >
                🚀 AI-Powered Resume Intelligence
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
                Ready to accelerate your career?
              </h2>

              <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                Upload your resume once and let AI uncover opportunities, improve ATS compatibility, and prepare you for interviews.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="group px-7 py-4 rounded-2xl bg-linear-to-r from-blue-600
to-blue-500 text-white font-semibold shadow-[0_10px_35px_rgba(37,99,235,.25)]
hover:shadow-[0_15px_45px_rgba(37,99,235,.4)]  transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
            <h2 className="text-3xl font-black tracking-[-0.04em]">
              <span
                className="bg-linear-to-r from-white
via-blue-200
to-blue-500 bg-clip-text text-transparent"
              >
                Resume
              </span>

              <span className="text-white">IQ</span>
            </h2>

            <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
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
                    className="w-12 h-12 rounded-2xl border border-white/6 bg-[#111113] backdrop-blur-xl flex items-center justify-center text-gray-300 hover:border-blue-500/20
hover:bg-[#18181B]
hover:text-blue-300 transition-all duration-300"
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
                        className="text-zinc-400 hover:text-blue-300 transition-colors duration-300"
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
      <div className="relative z-10 border-t border-white/5">
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
