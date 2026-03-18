import { supabase } from "./supabase";
import { useAuthStore } from "@/store/authStore";

export async function initAuth() {
  const { setUser, setLoading } = useAuthStore.getState();

  const { data } = await supabase.auth.getUser();
  console.log("User after refresh:", data?.user);
  setUser(data?.user || null);

  setLoading(false);

  // Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user || null);
  });
}
