import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getAllDocs } from "@/lib/docs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mintrix AI Design Documentation",
  description: "Illustrated design documentation website for Mintrix AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const docs = getAllDocs();
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body 
        className="flex min-h-screen selection:bg-indigo-500/30 bg-[#fdfcff] text-[#1a1c1e]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 0%, rgba(224, 231, 255, 0.4) 0%, transparent 70%), radial-gradient(ellipse at 80% 100%, rgba(252, 231, 243, 0.4) 0%, transparent 70%)`,
          backgroundAttachment: 'fixed'
        }}
      >
        <Sidebar docs={docs} />
        <main className="flex-1 min-w-0 overflow-y-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
