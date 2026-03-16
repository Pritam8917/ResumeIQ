"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileSearch,
  Wrench,
  Briefcase,
  ClipboardCheck,
  FileText,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Analysis", icon: FileSearch, href: "/analysis" },
    { name: "Technical Arsenal", icon: Wrench, href: "/technical-arsenal" },
    { name: "Jobs", icon: Briefcase, href: "/jobs" },
    { name: "Assessments", icon: ClipboardCheck, href: "/assessments" },
    { name: "Cover Letter", icon: FileText, href: "/cover-letter" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
        <h1 className="text-xl font-bold text-teal-600">JobsifyAI</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
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
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white border-r z-50
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300
        flex flex-col justify-between`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-bold text-teal-600">ResumeIQ</h1>

            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* Menu */}
          <div className="px-3 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition
                    ${
                      isActive
                        ? "bg-teal-50 text-teal-600 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <Link
            href="/logout"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-50"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}