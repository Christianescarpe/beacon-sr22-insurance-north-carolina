import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_INFO } from "@/data/content";
import { Phone } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SR22 Insurance North Carolina | DL-123 Insurance NC",
  description: "Need SR-22 or DL-123 insurance in North Carolina? Beacon SR22 Insurance NC gets high-risk drivers affordable coverage and fast NCDMV filings. Call (980) 443-7856.",
  metadataBase: new URL("https://beaconsr22insurancenc.com"),
  keywords: [
    "SR22 Insurance North Carolina",
    "DL-123 Insurance NC",
    "Non-owner SR-22 North Carolina",
    "NCDMV Insurance Filing",
    "DWI Insurance North Carolina",
    "Charlotte SR22 Insurance"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer with visible Google Map */}
        <Footer />

        {/* Sticky Mobile Call Button (strictly phone button CTA) */}
        <div className="fixed bottom-4 right-4 z-40 sm:hidden">
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-5 py-3.5 rounded-full font-black text-sm text-white bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-600/50 active:scale-95 border-2 border-white animate-pulse-glow"
            aria-label={`Call ${SITE_INFO.phone}`}
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call {SITE_INFO.phone}</span>
          </a>
        </div>

      </body>
    </html>
  );
}
