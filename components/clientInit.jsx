"use client";

import { useEffect } from "react";
import { initAuth } from "@/lib/initAuth";
import { initResume } from "@/lib/initResume";

export default function ClientInit() {
  useEffect(() => {
    async function init() {
      const user = await initAuth(); // ✅ get user

      if (user) {
        await initResume(user.id); // ✅ pass user id
      } else {
        return;
      }
    }

    init();
  }, []);

  return null;
}
