import type { Metadata } from "next";
import { Anton, Shantell_Sans, Caveat, Shadows_Into_Light_Two } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const shadows = Shadows_Into_Light_Two({
  variable: "--font-shadows",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Her Treat Collective",
  description: "She shares what she saves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shantellSans.variable} ${anton.variable} ${caveat.variable} ${shadows.variable} antialiased bg-white text-black font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pb-10">
          <div className="h-40" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
