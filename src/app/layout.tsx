import React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/header";
import { getUser } from "@/auth/dal";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petlove",
  icons: "/icons/logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
