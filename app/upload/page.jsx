"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { supabase } from "@/lib/supabase";
import { extractTextFromPDF } from "@/lib/pdf";
import { analyzeResume } from "@/lib/analyze";
import { resumePrompt } from "@/lib/prompt";
import { useResumeStore } from "@/store/resumeStore";

export default function UploadPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const loadingAuth = useAuthStore((s) => s.loading);
  const setData = useResumeStore((s) => s.setData);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!loadingAuth && !user) {
      router.push("/login");
    }
  }, [user, loadingAuth, router]);

  const handleUpload = async (e) => {
    if (typeof window === "undefined") return;
    const file = e.target.files[0];
    if (!file) return;
    const filePath = `${user.id}/resume.pdf`;
    setUploading(true);

    try {
      console.log("STEP 1: Uploading file");

      const text = await extractTextFromPDF(file);
      console.log("STEP 2: Extracted text", text);

      const aiResult = await analyzeResume(text, resumePrompt);
      console.log("STEP 3: AI RESULT:", aiResult);

      if (!aiResult) throw new Error("AI returned null");

      console.log("STEP 4: Before DB insert");

      const { error } = await supabase.from("resumes").insert({
        user_id: user.id,
        file_path: filePath,
        score: aiResult.score,
        skills: aiResult.skills,
        missing: aiResult.missing,
        suggestions: aiResult.suggestions,
      });

      if (error) {
        console.error("SUPABASE ERROR:", error);
        throw error;
      }

      console.log("STEP 5: After DB insert");

      setData(aiResult);

      router.push("/dashboard-content/dashboard");
    } catch (error) {
      console.error("❌ FULL ERROR:", error);
    }
    setUploading(false);
  };
  if (loadingAuth) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-semibold text-slate-800">
        Upload Your Resume
      </h1>

      <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center">
        <p className="text-slate-600 mb-4">
          Upload your PDF resume to get AI insights
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleUpload}
          className="block mx-auto"
        />
      </div>

      {uploading && (
        <p className="text-teal-600">Uploading & analyzing resume...</p>
      )}
    </div>
  );
}

/*
User uploads PDF
      ↓
Supabase Storage (file saved)
      ↓
PDF.js → extract text
      ↓
Puter.js → AI analysis
      ↓
Zustand → store result
      ↓
Redirect → dashboard

 “I implemented a pipeline where uploaded resumes are stored in Supabase Storage, processed using PDF.js, analyzed with AI, and results are stored globally for dashboard usage.” 
 
 
 Supabase DB (persistent)
        ↓
Fetch on page load
        ↓
Store in Zustand
        ↓
UI uses Zustand for data
 */
