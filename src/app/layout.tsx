import React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

import Header from "@/modules/header/components/Header/Header";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petlove",
  icons: "./favicon.ico",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
