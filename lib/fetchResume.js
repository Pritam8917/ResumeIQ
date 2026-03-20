// Fetch Data After Refresh
import { supabase } from "./supabase";

export async function fetchLatestResume(userId) {
  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("❌ Supabase fetch error:", error);
    return null;
  }

  return data;
}