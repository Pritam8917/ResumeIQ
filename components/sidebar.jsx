"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileSearch,
  Wrench,
  Briefcase,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { createClient } from "@supabase/supabase-js";
import { useResumeStore } from "@/store/resumeStore";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      useResumeStore.getState().clearData?.();

      window.location.href = "/";
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard-content/dashboard",
    },
    {
      name: "Analysis",
      icon: FileSearch,
      href: "/dashboard-content/analysis",
    },
    {
      name: "Technical Arsenal",
      icon: Wrench,
      href: "/dashboard-content/technical-arsenal",
    },
    {
      name: "Jobs",
      icon: Briefcase,
      href: "/dashboard-content/jobs",
    },
    {
      name: "Profile",
      icon: User,
      href: "/dashboard-content/profile",
    },
  ];

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="md:hidden sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Resume
            </span>

            <span className="text-white">IQ</span>
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`
    fixed top-0 right-0 md:left-0 md:right-auto
    h-screen w-72.5
    bg-[#09090B]
    border-l border-white/6 md:border-l-0 md:border-r md:border-white/6
    z-50 flex flex-col
    transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
    md:translate-x-0
  `}
      >
        {/* TOP */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                <span className="bg-linear-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                  Resume
                </span>

                <span className="text-white">IQ</span>
              </h1>

              <p className="text-sm text-gray-500 mt-1">AI Resume Dashboard</p>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    group flex items-center gap-4 px-4 py-3.5 rounded-2xl
                    transition-all duration-300 group-hover:bg-blue-500/10
group-hover:text-blue-300

                    ${
                      isActive
                        ? "bg-blue-500/10 border border-blue-500/20"
                        : "hover:bg-[#141416]"
                    }
                  `}
                >
                  {/* ICON */}
                  <div
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300

                      ${
                        isActive
                          ? "bg-linear-to-r from-blue-600 to-blue-500"
                          : "bg-[#18181B]"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className={`
                        text-sm font-semibold transition-colors duration-300

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }
                      `}
                    >
                      {item.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="p-4 border-t border-white/10">

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-red-500/10 border border-red-500/10 text-red-300 hover:bg-red-500/15 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <LogOut size={18} />
            </div>

            <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}
