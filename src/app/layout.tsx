import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoxelTox AI — 4D Spatial Intelligence for Drug Discovery",
  description:
    "The first platform fusing World Models with LLMs for 4D dynamic drug discovery. Transforming static probability screening into deterministic spatial-temporal prediction.",
  keywords: ["drug discovery", "AI", "world model", "LLM", "4D spatial intelligence", "molecular dynamics", "VoxelTox"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0a0a0f] text-[#e0e0e8] antialiased overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
