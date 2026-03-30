"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileSearch,
  Wrench,
  Briefcase,
  // FileText,
  User,
  LogOut,
  Menu,
} from "lucide-react";
// lib/supabase.js
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

      // optional: clear Zustand
      useResumeStore.getState().clearData?.();

      // redirect
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
    { name: "Analysis", icon: FileSearch, href: "/dashboard-content/analysis" },
    {
      name: "Technical Arsenal",
      icon: Wrench,
      href: "/dashboard-content/technical-arsenal",
    },
    { name: "Jobs", icon: Briefcase, href: "/dashboard-content/jobs" },
    // {
    //   name: "Assessments",
    //   icon: ClipboardCheck,
    //   href: "/dashboard-content/assessments",
    // },
    // {
    //   name: "Cover Letter",
    //   icon: FileText,
    //   href: "/dashboard-content/cover-letter",
    // },
    { name: "Profile", icon: User, href: "/dashboard-content/profile" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 border-b bg-white sticky top-0 z-50 ">
        <h1 className="text-lg font-semibold text-teal-600 hidden md:block">
          ResumeIQ
        </h1>

        <button
          className="cursor-pointer text-gray-800 bg-gray-200 rounded-md p-1"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 md:w-74 bg-white border-r border-slate-200 z-50
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 shadow-lg
        flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-200">
          <div className="flex items-center text-2xl font-bold">
            <span className="bg-linear-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Resume
            </span>

            <span className="bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              IQ
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-2 py-5 space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-5 rounded-lg text-sm transition font-semibold
                  
                ${
                  isActive
                    ? "bg-teal-50 text-teal-600 font-semibold border-l-4 border-teal-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Logout */}
        <div className="p-3 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="group flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition">
                <LogOut size={18} className="text-red-600" />
              </div>

              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
