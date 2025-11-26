import type { Metadata } from "next";
import { Anton, Shantell_Sans, Caveat } from "next/font/google";
import "./globals.css";

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
        className={`${shantellSans.variable} ${anton.variable} ${caveat.variable} antialiased bg-white text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
