
import "../globals.css";
import Navbar from "@/components/navbar";
import WhatYouGet from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTA from "@/components/cta-section";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white`}
      >
        <Navbar />
        {children}
        <WhatYouGet />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
