"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useResumeStore } from "@/store/resumeStore";
import { extractTextFromPDF } from "@/lib/pdf";
import { analyzeResume } from "@/lib/analyze";

import { Upload, X, FileText, ShieldCheck, Sparkles } from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  if (!isOpen) return null;

  // MAIN LOGIC
  const handleSubmit = async () => {
    setError("");

    if (!agree) return setError("Accept Terms first");
    if (!email || !password) return setError("Fill all fields");
    if (!file) return setError("Upload resume");

    setLoading(true);

    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
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
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-4"
        >
          {/* Background Glow */}
          <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-cyan-500/20 blur-[100px] rounded-full" />

          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-violet-500/20 blur-[100px] rounded-full" />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1120]/95 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-[28px] p-px bg-linear-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20">
              <div className="h-full w-full rounded-[28px] bg-[#0B1120]/95" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>

                <h2 className="text-2xl font-bold text-white">Upload Resume</h2>

                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Get ATS insights, skill analysis, and AI-powered resume
                  improvements instantly.
                </p>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl mb-4">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="w-4 h-4 accent-cyan-500 cursor-pointer"
                />

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ShieldCheck size={15} className="text-cyan-400" />

                  <span>I agree to Terms & Privacy</span>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 focus:bg-white/[0.07] transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 focus:bg-white/[0.07] transition-all duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Upload Area */}
              <label
                htmlFor="resume-upload"
                className="group relative mt-4 block rounded-3xl border-2 border-dashed border-white/10 bg-white/3 hover:bg-white/5 hover:border-cyan-400/30 transition-all duration-300 p-6 text-center cursor-pointer overflow-hidden"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();

                  const droppedFile = e.dataTransfer.files[0];

                  if (droppedFile) setFile(droppedFile);
                }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hidden Input */}
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />

                {!file ? (
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Upload className="text-white" size={24} />
                    </div>

                    <h3 className="text-white font-medium text-base">
                      Upload your resume
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Drag & drop or click to browse
                    </p>

                    <p className="text-xs text-gray-500 mt-3">
                      PDF, DOC, DOCX • Max 5MB
                    </p>
                  </div>
                ) : (
                  <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-11 h-11 rounded-xl bg-linear-to-r from-cyan-500 to-violet-600 flex items-center justify-center">
                        <FileText className="text-white" size={20} />
                      </div>

                      <div>
                        <p className="text-white text-sm font-medium truncate max-w-45">
                          {file.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
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
                      className="text-xs text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </label>

              {/* Error */}
              {error && (
                <div className="mt-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="relative overflow-hidden mt-5 w-full rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-violet-600 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-cyan-500/40 transition-all duration-500 disabled:opacity-70 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}

                  {loading
                    ? "Analyzing Resume..."
                    : aiResult?.error
                      ? "Retry Analysis"
                      : "Analyze Resume"}
                </span>
              </button>

              {/* Loading */}
              {loading && (
                <p className="text-xs text-cyan-300 text-center mt-3 animate-pulse">
                  AI is analyzing your resume...
                </p>
              )}

              {/* AI Error */}
              {aiResult?.error && !loading && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-red-400 font-medium">
                    AI is currently under high demand
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Please try again in a few seconds.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
