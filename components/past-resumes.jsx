"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function PastResumes({ userId }) {
  // const router = useRouter();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchResumes = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("resumes")
          .select("id, score, created_at")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(2);

        if (error) throw error;

        setResumes(data || []);
      } catch (err) {
        setError("Failed to load resumes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [userId]);

  // 🔄 Loading State
  if (loading) {
    return (
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">Loading recent resumes...</p>
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  }

  // 📭 Empty State
  if (!resumes.length) {
    return (
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          No past resumes found. Upload one to get started 🚀
        </p>
      </div>
    );
  }

  // ✅ UI
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="font-semibold text-slate-800 mb-4">
        📄 Recent Resumes
      </h2>

      <div className="space-y-3">
        {resumes.map((item) => (
          <div
            key={item.id}
            // onClick={() => router.push(`/resume/${item.id}`)}
            className="flex justify-between items-center p-4 rounded-lg border hover:bg-slate-50  transition"
          >
            <div>
              <p className="text-sm font-medium text-slate-700">
                Resume #{item.id}
              </p>
              <p className="text-xs text-slate-500">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </div>

            <p className="text-lg font-bold text-teal-600">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}