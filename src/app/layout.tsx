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
  keywords: ["Graphics Designer", "Abraham Lincoln Macbeth", "University of Ibadan", "UI/UX Designer", "Video Editor", "Portfolio"],
  authors: [{ name: "Abraham Lincoln Macbeth" }],
  themeColor: "#2563eb",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Lincoln Macbeth | Graphics Designer",
    description: "Creative portfolio of Abraham Lincoln Macbeth, a visionary graphics designer and student at the University of Ibadan.",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Lincoln Macbeth Logo",
      },
    ],
  },
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

