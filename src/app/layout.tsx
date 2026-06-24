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
    "VoxelTox fuses World Models with LLMs to predict molecular binding dynamics in full 4D. Replacing months of simulation with seconds of deterministic inference.",
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
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
