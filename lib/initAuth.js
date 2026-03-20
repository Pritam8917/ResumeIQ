import { supabase } from "./supabase";
import { useAuthStore } from "@/store/authStore";

export async function initAuth() {
  const { setUser, setLoading } = useAuthStore.getState();

  try {
    setLoading(true);

    // Get user
    const { data } = await supabase.auth.getUser();

    const user = data?.user || null; // ✅ DEFINE USER HERE

    // console.log("User after refresh:", user);

    setUser(user);

  } catch (err) {
    console.error("Auth error:", err);
    setUser(null);
  } finally {
    setLoading(false);
  }

  // 🔄 Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user || null);
  });

  return useAuthStore.getState().user; // optional
}