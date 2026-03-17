"use client";
import {
  FileSearch,
  Brain,
  Briefcase,
  TrendingUp,
  Target,
  MessageSquare,
} from "lucide-react";
export default function WhatYouGet() {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white shadow-sm" id="what-you-get">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          
          <span className=" text-blue-700 px-4 py-1   font-semibold text-xl">
            
            WHAT YOU GET
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            
            Everything you need to improve your {""}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              
              job readiness
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            
            ResumeIQ provides AI-powered insights to help you understand your
            strengths, identify skill gaps, and prepare for interviews with
            confidence.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
              
              <FileSearch className="text-blue-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              ATS Resume Score
            </h3>
            <p className="text-gray-600 text-sm">
              
              Instantly analyze how well your resume performs with Applicant
              Tracking Systems used by recruiters.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-xl mb-4">
              
              <Brain className="text-cyan-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              Skill Gap Analysis
            </h3>
            <p className="text-gray-600 text-sm">
              
              Discover missing skills required for your target roles and receive
              suggestions to improve your profile.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mb-4">
              
              <Briefcase className="text-purple-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              Job Recommendations
            </h3>
            <p className="text-gray-600 text-sm">
              
              Get personalized job matches based on your resume, skills, and
              experience level.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mb-4">
              
              <Target className="text-green-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              Resume Optimization
            </h3>
            <p className="text-gray-600 text-sm">
              
              Receive AI suggestions to improve your resume content, structure,
              and keywords.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl mb-4">
              
              <TrendingUp className="text-yellow-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              Market Insights
            </h3>
            <p className="text-gray-600 text-sm">
              
              Understand hiring trends, demand for skills, and salary
              expectations for your target role.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl mb-4">
              
              <MessageSquare className="text-red-600" size={22} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              
              AI Interview Practice
            </h3>
            <p className="text-gray-600 text-sm">
              
              Practice with AI-generated interview questions and receive
              feedback to improve your answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
