import React from "react";
import Header from "../../components/header";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        <div className="min-w-[320px] max-w-[1280px] mx-auto px-[20px] md:px-[32px] xl:px-[32px] pb-[20px] md:pb-[32px] xl:pb-[32px]">
          {children}
        </div>
      </main>
    </>
  );
}
