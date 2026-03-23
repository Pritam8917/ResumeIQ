"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useResumeStore } from "@/store/resumeStore";
import { extractTextFromPDF } from "@/lib/pdf";
import { analyzeResume } from "@/lib/analyze";
// import { resumePrompt } from "@/lib/prompt";

export default function UploadResumeModal({ isOpen, onClose }) {
  const router = useRouter();

  const setUser = useAuthStore((s) => s.setUser);
  const setData = useResumeStore((s) => s.setData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

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
      // AUTH
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        const signup = await supabase.auth.signUp({ email, password });
        if (signup.error) throw signup.error;
        // NO NEED to login again
        data = signup.data;
      }

      const user = data.user;
      if (!user) throw new Error("Authentication failed");
      // Unique file path
      const filePath = `${user.id}/${Date.now()}_${file.name}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Extract text
      const text = await extractTextFromPDF(file);

      // AI analysis
      const aiResult = await analyzeResume(text);

      if (!aiResult) throw new Error("AI analysis failed");

      // Save to DB
      const { error: dbError } = await supabase.from("resumes").insert({
        user_id: user.id,
        file_path: filePath,
        score: aiResult.score,
        analysis: aiResult,
      });

      if (dbError) throw dbError;

      // Store globally
      setUser(user);
      setData(aiResult);

      //  Redirect
      router.push("/dashboard-content/dashboard");
    } catch (err) {
      console.error("FULL ERROR:", err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl px-7 py-8 space-y-4">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-5 text-gray-500 font-bold cursor-pointer hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">Upload Resume</h2>

        {/* Terms */}
        <div className="flex items-center gap-2 text-sm bg-gray-100 p-3 rounded-lg">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="cursor-pointer"
          />
          <span className="text-gray-500">I agree to Terms & Privacy</span>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg text-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg text-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Upload */}
        <div
          className="relative border-2 border-dashed border-gray-300 hover:border-cyan-500 transition rounded-xl p-6 text-center bg-gray-50 hover:bg-white cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile) setFile(droppedFile);
          }}
        >
          {/* Hidden Input */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />

          {!file ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-3 text-cyan-600">📄</div>

              {/* Text */}
              <p className="font-medium text-gray-700">
                Drag & drop your resume here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse files
              </p>

              <p className="text-xs text-gray-400 mt-2">
                PDF, DOC, DOCX (Max 5MB)
              </p>
            </>
          ) : (
            <>
              {/* File Preview */}
              <div className="flex items-center justify-between bg-white border rounded-lg px-4 py-2 shadow-sm">
                <div className="flex items-center gap-2 text-left">
                  <span className="text-cyan-600">📄</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 truncate max-w-45">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </>
          )}
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg cursor-pointer"
        >
          {loading && <span className="animate-spin">⏳</span>}
          {loading ? "Analyzing your resume..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
