// Fetch Data After Refresh
import { supabase } from "./supabase";

export async function fetchLatestResume(userId) {

  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error(error);
    return null;
  }

  return data[0];
}