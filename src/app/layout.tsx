import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-heading",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Your Name — Creative Developer Portfolio",
  description:
    "Welcome to my hand-crafted portfolio. I build creative digital experiences with a human touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
