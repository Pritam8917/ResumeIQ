"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";
import UploadResumeModal from "@/components/UploadResumeModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  // const user  = useAuthStore((state) => state.user);

  const [openModal, setOpenModal] = useState(false);

  const handleUploadClick = () => {
    setOpenModal(true);
  };

  return (
    <nav className="w-full bg-[#f3f4f6] border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto md:px-15 px-7 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold cursor-pointer" onClick={()=>router.push("/")}>
          <span className="bg-linear-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Resume
          </span>
          <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            IQ
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-semibold text-sm">
          <Link
            href="#what-you-get"
            className="px-4 py-2 bg-gray-200 rounded-full text-gray-600"
          >
            What You Get
          </Link>

          <Link href="#how-it-works" className="hover:text-blue-300">
            How It Works
          </Link>

          <Link href="#faq" className="hover:text-blue-300">
            FAQ
          </Link>
        </div>

        {/* Right Side Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={handleUploadClick} className="px-5 py-1 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-sm cursor-pointer">
            Get Started →
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white border border-gray-200 shadow-sm  hover:bg-gray-50 transition-all duration-300 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu with Professional Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="md:hidden absolute left-0 top-full w-full px-6 pt-4 pb-6
      bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-gray-900 text-sm">
              <Link
                href="#what-you-get"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"onClick={() => setOpen(false)} 
              >
                What You Get
              </Link>

              <Link
                href="#how-it-works"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"onClick={() => setOpen(false)}
              >
                How It Works
              </Link>

              <Link
                href="#faq"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"onClick={() => setOpen(false)}
              >
                FAQ
              </Link>

              <div className="flex flex-col gap-3 pt-2">
                <button className="w-full py-2 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold shadow-md hover:opacity-90 transition cursor-pointer"
                onClick={handleUploadClick}>
                  Get Started →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
            <UploadResumeModal
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
            />
    </nav>
  );
}
