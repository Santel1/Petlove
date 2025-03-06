import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="min-w-[320px] max-w-[1280px] mx-auto px-[20px] md:px-[32px] xl:px-[32px] pb-[20px] md:pb-[32px] xl:pb-[32px]">
      {children}
    </div>
  );
}
