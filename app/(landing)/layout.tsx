
import "../globals.css";
import Navbar from "@/components/navbar";
import WhatYouGet from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <WhatYouGet />
        <HowItWorks />
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
