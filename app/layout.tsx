import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientInit from "@/components/clientInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Analyzer - AI-Powered Career Tools",
  description:
    "Analyze your resume, match jobs, generate cover letters, and ace interviews with AI-powered tools. Optimize your career with personalized insights and recommendations.",
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
