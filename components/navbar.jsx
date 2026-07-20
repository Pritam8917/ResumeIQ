"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import UploadResumeModal from "@/components/UploadResumeModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();

  const handleUploadClick = () => {
    setOpenModal(true);
    setOpen(false);
  };

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="fixed top-5 left-0 w-full z-50 px-4 md:px-8">
        <nav className="relative mx-auto max-w-8xl">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl" />

          {/* Main Navbar */}
          <div
            className="relative overflow-hidden rounded-full border bg-[#050505]/80
border-white/6 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          >
            {/* Gradient Border */}
            <div
              className="absolute inset-0 rounded-full p-px bg-linear-to-r from-blue-500/15
via-white/3
to-blue-500/15"
            >
              <div className="h-full w-full rounded-full bg-[#050505]" />
            </div>

            <div className="relative z-10 flex items-center justify-between px-5 md:px-7 py-3">
              {/* Logo */}
              <div
                onClick={() => router.push("/")}
                className="flex items-center cursor-pointer"
              >
                <h1 className="text-2xl font-black tracking-tight">
                  <span
                    className="bg-linear-to-r from-white
via-blue-200
to-blue-500 bg-clip-text text-transparent"
                  >
                    Resume
                  </span>

                  <span className="text-white">IQ</span>
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 p-1 rounded-full bg-white/2
border-white/5 border">
                {[
                  {
                    href: "#what-you-get",
                    label: "Features",
                  },
                  {
                    href: "#how-it-works",
                    label: "How It Works",
                  },
                  {
                    href: "#faq",
                    label: "FAQ",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-400
hover:text-white
hover:bg-white/5 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                {/* CTA */}
                <button
                  onClick={handleUploadClick}
                  className="hidden md:flex group relative overflow-hidden items-center gap-2 px-6 py-2.5 rounded-full bg-linear-to-r from-[#2563EB]
to-[#3B82F6] text-white font-semibold shadow-[0_10px_35px_rgba(37,99,235,.25)] hover:shadow-[0_15px_45px_rgba(37,99,235,.45)] transition-all duration-500 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowUpRight
                      size={17}
                      className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Mobile Menu */}
                <motion.button
                  whileTap={{
                    scale: 0.92,
                  }}
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border bg-white/3
border-white/6 backdrop-blur-xl text-white cursor-pointer"
                >
                  <motion.div
                    animate={{
                      rotate: open ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {open ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="md:hidden mt-4 overflow-hidden rounded-4xl border border-white/10 bg-[#09090B]/95 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-blue-500/5
to-transparent" />

                <div className="relative z-10 p-5 flex flex-col gap-3">
                  {[
                    {
                      href: "#what-you-get",
                      label: "Features",
                    },
                    {
                      href: "#how-it-works",
                      label: "How It Works",
                    },
                    {
                      href: "#faq",
                      label: "FAQ",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl border bg-white/3
border-white/5 px-5 py-3 text-gray-200 hover:bg-white/6
hover:border-blue-500/15 transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* CTA */}
                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    onClick={handleUploadClick}
                    className="group mt-2 w-full rounded-2xl bg-linear-to-r from-[#2563EB]
to-[#3B82F6] py-3 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowUpRight
                        size={16}
                        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Modal */}
      <UploadResumeModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
