import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pzillas — Mediendesigner Frankfurt",
  description:
    "Michael Pzillas — freischaffender Mediendesigner in Frankfurt. Fotografie, UX/UI Design, Videoproduktion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
