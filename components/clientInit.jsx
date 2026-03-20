"use client";

import { useEffect } from "react";
import { initAuth } from "@/lib/initAuth";
import { initResume } from "@/lib/initResume";
import { useAuthStore } from "@/store/authStore";

export default function ClientInit() {
  const user = useAuthStore((s) => s.user);

  // Init auth once
  useEffect(() => {
    console.log("initAuth running after refresh")
    initAuth();
  }, []);

  // Run when user is available
  useEffect(() => {
    if (!user?.id) return;
    console.log("User ready:", user.id);
    initResume(user.id);
  }, [user]);

  return null;
}