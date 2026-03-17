"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileSearch,
  Wrench,
  Briefcase,
  FileText,
  User,
  LogOut,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    {
      name: "Cover Letter",
      icon: FileText,
      href: "/dashboard-content/cover-letter",
    },
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
          <div className="flex items-center gap-1 text-2xl font-bold">
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
          <Link
            href="/logout"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-400 font-semibold hover:bg-red-50 transition"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
