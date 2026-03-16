"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-14 grid-cols-3 grid md:grid-cols-5 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {" "}
            <span className="bg-linear-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Resume
            </span>
            <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              IQ
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            AI-powered resume analyzer that helps you optimize your resume,
            improve ATS score, and get better job opportunities.
          </p>
        </div>

        {/* Product */}
        <div className="ml-6">
          <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
          <ul className="space-y-3 text-gray-600 text-sm ">
            <li className="hover:text-gray-900">
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link href="#what-you-get">What You Get</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="ml-5">
          <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-gray-900">
              <Link href="#faq">FAQ</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-gray-900">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
          <div className="flex gap-4 text-gray-600">
            <Link href="#">
              <Github size={20} />
            </Link>
            <Link href="#">
              <Linkedin size={20} />
            </Link>
            <Link href="#">
              <Twitter size={20} />
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Stay updated with new features and improvements.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-19">
        <div className="max-w-7xl mx-auto border-t border-gray-300 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ResumeIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
