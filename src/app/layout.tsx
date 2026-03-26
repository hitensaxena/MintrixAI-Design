import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mintrix AI Design",
  description: "Illustrated design documentation website for Mintrix AI — an editorial-first intelligence platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <body 
        className="bg-[#f9faf6] text-[#191c1a] selection:bg-[#a7dbbf] selection:text-[#31624b]"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        <TopNav />
        <div className="pt-20 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
