"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    // 🔥 Save user in Zustand
    setUser(data.user);

    setLoading(false);

    // 🔥 Redirect to upload
    router.push("/upload");
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-6 bg-white border p-6 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold text-slate-800">
        Login to ResumeIQ
      </h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          disabled={loading}
          className="w-full bg-linear-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
