import React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petlove",
  icons: "/icons/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
