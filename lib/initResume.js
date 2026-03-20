import { fetchLatestResume } from "./fetchResume";
import { useResumeStore } from "@/store/resumeStore";

export async function initResume(userId) {
  if (!userId) {
    console.log("❌ userId not found");
    return;
  }

  try {
    // console.log("🔍 Fetching resume for user:", userId);

    const data = await fetchLatestResume(userId);

    // console.log("📄 Resume data:", data);

    if (!data) {
      console.log("⚠️ No resume found for user");
      return null;
    }

    const analysis = data?.analysis || null;

    if (analysis) {
      useResumeStore.getState().setData(analysis);
    }

    return data;
  } catch (err) {
    console.error("❌ initResume error:", err);
    return null;
  }

  return data;
}
