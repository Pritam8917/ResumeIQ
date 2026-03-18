// Load Data into Zustand on App Start
import { fetchLatestResume } from "./fetchResume";
import { useResumeStore } from "@/store/resumeStore";
import { useAuthStore } from "@/store/authStore";

export async function initResume() {
  const user = useAuthStore.getState().user;
  if (!user) return;

  const data = await fetchLatestResume(user.id);
  console.log("Fetching latest resume data for user:", data);
  if (data) {
    useResumeStore.getState().setData(data);
  }
}
