"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {

  const faqs = [
    {
      q: "What is ResumeIQ?",
      a: "ResumeIQ is an AI-powered platform that analyzes resumes, detects missing skills, and helps candidates improve their job readiness."
    },
    {
      q: "Is ResumeIQ free to use?",
      a: "Yes. ResumeIQ provides free resume analysis tools and AI insights to help improve your resume."
    },
    {
      q: "How does ResumeIQ analyze my resume?",
      a: "Our AI extracts resume content, detects skills, evaluates ATS compatibility, and compares your profile with job descriptions."
    },
    {
      q: "How accurate is the AI analysis?",
      a: "ResumeIQ uses modern AI models to analyze resume keywords, skills, and structure to generate meaningful insights."
    },
    {
      q: "Can ResumeIQ help me prepare for interviews?",
      a: "Yes. ResumeIQ generates AI-powered interview questions based on your skills and projects."
    },
    {
      q: "Does ResumeIQ store my resume?",
      a: "Your resume is securely processed for analysis and is not permanently stored unless you create an account."
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="w-full py-24 pb-0 px-6 md:px-16 lg:px-24 bg-white" id="faq">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gray-100 rounded-4xl p-10 md:p-16">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <span className="text-blue-600 font-semibold tracking-wide">
                FAQ
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
                Questions,
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}answered
                </span>
              </h2>

              <p className="text-gray-600 mt-6 max-w-md">
                Everything you need to know about ResumeIQ, how it works,
                and how it helps improve your resume using AI-powered insights.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >

                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.q}
                    </span>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        open === index ? "rotate-180 text-blue-600" : "text-gray-500"
                      }`}
                      size={20}
                    />
                  </button>

                  <AnimatePresence>
                    {open === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-600 text-sm">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}