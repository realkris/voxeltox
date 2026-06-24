import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniBind AI — Decoding the Micro-Environment with 4D Spatial Intelligence",
  description:
    "The first World Model + LLM fusion platform for 4D dynamic drug discovery. Applying multi-modal sensor fusion and spatial-temporal occupancy forecasting to revolutionize molecular dynamics.",
  keywords: ["drug discovery", "AI", "world model", "LLM", "4D spatial intelligence", "molecular dynamics"],
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
        {children}
      </body>
    </html>
  );
}
