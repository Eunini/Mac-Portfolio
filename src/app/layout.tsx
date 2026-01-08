import type { Metadata } from "next";
import { Outfit, Syncopate } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Lincoln Macbeth | Graphics Designer",
  description: "Creative portfolio of Abraham Lincoln Macbeth, a visionary graphics designer and student at the University of Ibadan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${syncopate.variable}`}>
        {children}
      </body>
    </html>
  );
}

