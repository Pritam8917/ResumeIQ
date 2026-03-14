"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f3f4f6] border-b border-gray-200 shadow-sm sticky top-0 z-50">

      <div className="max-w-8xl mx-auto px-15 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold">
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
            href="#"
            className="px-4 py-2 bg-gray-200 rounded-full text-gray-600"
          >
            What You Get
          </Link>

          <Link href="#" className="hover:text-blue-300">
            How It Works
          </Link>

          <Link href="#" className="hover:text-blue-300">
            Pricing
          </Link>

          <Link href="#" className="hover:text-blue-300">
            FAQ
          </Link>

        </div>

        {/* Right Side Desktop */}
        <div className="hidden md:flex items-center gap-3">

          <button className="px-5 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
            Login
          </button>

          <button className="px-5 py-1 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-sm">
            Get Started →
          </button>

          <button className="p-2 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 transition">
            <Sun size={16} />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-[#f3f4f6]">

          <Link
            href="#"
            className="block px-4 py-2 bg-gray-200 rounded-full text-gray-800"
          >
            What You Get
          </Link>

          <Link href="#" className="block text-gray-700">
            How It Works
          </Link>

          <Link href="#" className="block text-gray-700">
            Pricing
          </Link>

          <Link href="#" className="block text-gray-700">
            FAQ
          </Link>

          <button className="w-full px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
            Login
          </button>

          <button className="w-full px-4 py-2 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white font-medium">
            Get Started →
          </button>

        </div>
      )}

    </nav>
  );
}