import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientInit from "@/components/clientInit";
import SmoothScroll from "@/components/SmoothScroll";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "ResumeIQ - Smart AI Resume Analysis & Career Optimization",
description:
  "Boost your career with ResumeIQ. Analyze resumes, get ATS scores, optimize content, and receive AI-powered insights to land your dream job faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <SmoothScroll />
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
/* I use Supabase for persistent storage and rehydrate Zustand state on app load to ensure data consistency after refresh. */

/*
Final flow after refresh:

Refresh
   ↓
initAuth() → user restored
   ↓
initResume() → resume restored
   ↓
Zustand updated again
   ↓
UI works normally

On refresh, I rehydrate application state by fetching user session from Supabase and restoring resume data into Zustand.
*/
