"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  X,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Loader2,
  Trash2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/authStore";
import { useResumeStore } from "@/store/resumeStore";
import { extractTextFromPDF } from "@/lib/pdf";
import { analyzeResume } from "@/lib/analyze";

export default function UploadResumeModal({ isOpen, onClose }) {
  const router = useRouter();

  const setUser = useAuthStore((s) => s.setUser);
  const setData = useResumeStore((s) => s.setData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [aiResult, setAIResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const features = [
    "ATS Score Optimization",
    "Skill Gap Detection",
    "Interview Prep Questions",
    "Market Demand Analysis",
  ];

  const handleClose = () => {
    setError("");
    setLoading(false);
    onClose();
  };

  const handleSubmit = async () => {
    setError("");

    if (!agree)
      return setError("Please accept Terms & Privacy Policy to continue.");
    if (!email || !password)
      return setError("Please enter your email and password.");
    if (!file) return setError("Please upload a resume.");

    setLoading(true);

    try {
      let { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        const signup = await supabase.auth.signUp({ email, password });
        if (signup.error) throw signup.error;
        data = signup.data;
      }

      const user = data.user;
      if (!user) throw new Error("Authentication failed");

      const cleanFileName = file.name
        .replace(/\s+/g, "_")
        .replace(/[\[\]]/g, "");

      const filePath = `${user.id}/${Date.now()}_${cleanFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const text = await extractTextFromPDF(file);
      const result = await analyzeResume(text);

      if (result?.error) {
        setAIResult(result);
        setLoading(false);
        return;
      }

      setAIResult(result);

      const { error: dbError } = await supabase.from("resumes").insert({
        user_id: user.id,
        file_path: filePath,
        score: result.score,
        analysis: result,
      });

      if (dbError) throw dbError;

      setUser(user);
      setData({
        ...result,
        created_at: new Date().toISOString(),
      });

      router.push("/dashboard-content/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto selection:bg-blue-500 selection:text-white">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Glowing Background Radial Highlights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-zinc-950/90 border border-zinc-800/80 rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden z-10 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 transition-all duration-200 cursor-pointer z-20 hover:scale-105"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-none md:min-h-135 w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              {/* LEFT COLUMN: Feature Highlights (Stacks on top on mobile) */}
              <div className="md:col-span-5 relative bg-linear-to-b from-blue-950/40 via-zinc-950 to-zinc-950 p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-800/80 flex flex-col justify-between space-y-4 md:space-y-8 overflow-hidden">
                {/* Decorative Blue Glow */}
                <div className="absolute -top-12 -left-12 w-28 h-28 md:w-40 md:h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

                <div className="space-y-3 sm:space-y-6 relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] sm:text-xs font-mono uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                    ResumeIQ Engine
                  </div>

                  {/* Header & Subtext */}
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight tracking-tight">
                      AI Resume{" "}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-blue-200">
                        Analysis
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-snug mt-1 hidden sm:block">
                      Instantly evaluate your resume against top ATS standards
                      and land more interview calls.
                    </p>
                  </div>

                  {/* Feature List (Compact 2-column grid on mobile) */}
                  <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 pt-1 sm:pt-2">
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-zinc-200 font-medium"
                      >
                        <div className="p-0.5 sm:p-1 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security Footer (Hidden on mobile to save height) */}
                <div className="pt-3 border-t border-zinc-800/80 relative z-10 hidden sm:block">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Secure • Private • Encrypted</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Form & Upload Area */}
              <div className="md:col-span-7 p-5 sm:p-6 md:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-zinc-950/50">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Upload Resume
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Enter your account details and upload your PDF/DOC resume.
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2.5">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                    />
                  </div>

                  {/* Upload Zone */}
                  <label
                    htmlFor="resume-upload"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`relative block rounded-2xl border border-dashed transition-all duration-200 p-4 sm:p-5 text-center cursor-pointer ${
                      isDragging
                        ? "border-blue-500 bg-blue-500/10"
                        : file
                          ? "border-blue-500/50 bg-blue-950/20"
                          : "border-zinc-800 bg-zinc-900/30 hover:border-blue-500/40 hover:bg-zinc-900/60"
                    }`}
                  >
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {!file ? (
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
                          <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="text-xs font-medium text-zinc-200">
                          Click or drag resume here
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-zinc-500">
                          PDF, DOC, DOCX up to 5MB
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-3 text-left">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-white truncate">
                              {file.name}
                            </p>
                            <p className="text-[10px] text-zinc-500">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setFile(null);
                          }}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </label>

                  {/* Checkbox */}
                  <div
                    onClick={() => setAgree(!agree)}
                    className="flex items-center gap-2.5 cursor-pointer pt-0.5 group"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        agree
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-zinc-700 bg-zinc-900 group-hover:border-zinc-500"
                      }`}
                    >
                      {agree && (
                        <CheckCircle2 className="w-3.5 h-3.5 fill-blue-600 text-white" />
                      )}
                    </div>

                    <span className="text-xs text-zinc-400 select-none flex items-center gap-1 group-hover:text-zinc-300 transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />I
                      agree to Terms & Privacy
                    </span>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-950/50 border border-red-800/60 text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                {/* Submit CTA Button */}
                <div className="space-y-2 pt-1 sm:pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <span>Analyze Resume</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Mobile-Only Security Badge */}
                  <div className="flex sm:hidden items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-mono pt-1">
                    <Lock className="w-3 h-3 text-blue-400" />
                    <span>Secure • Private • Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
