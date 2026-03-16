import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatYouGet from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTA from "@/components/cta-section";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: 'Resume Analyzer - AI-Powered Career Tools',
  description: 'Analyze your resume, match jobs, generate cover letters, and ace interviews with AI-powered tools. Optimize your career with personalized insights and recommendations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <Sidebar />
        {children}
        <WhatYouGet />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Footer/>
      </body>
    </html>
  );
}
