"use client";

import { FileText, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useResumeStore } from "@/store/resumeStore";
export default function CurrentResume() {
  const router = useRouter();
  const data = useResumeStore((s) => s.data);


  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* ICON */}
        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
          <FileText className="text-slate-600" size={22} />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="font-semibold text-slate-800">Current Resume</h2>

          {/* <p className="text-sm text-slate-500">
            Last updated: {new Date(data?.created_at).toLocaleString()}
          </p> */}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => router.push(`/resume/${data.id}`)}
        className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-gray-600 font-semibold rounded-lg text-sm hover:bg-slate-50 transition cursor-pointer"
      >
        <Eye size={16} />
        View Resume
      </button>
    </div>
  );
}
