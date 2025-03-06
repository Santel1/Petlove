import Icon from "@/shared/components/Icon/Icon";
import clsx from "clsx";
import React from "react";

export interface MobileMenuBtnProps {
  onOpen: () => void;
  visible: boolean;
}

export default function MobileMenuBtn({ onOpen, visible }: MobileMenuBtnProps) {
  return (
    <button
      className={clsx(
        "stroke-[#262626] hover:stroke-[#f6b83d] transition-all",
        visible && "hidden",
        "xl:hidden"
      )}
      onClick={onOpen}
    >
      <Icon iconName="icon-burger" className="w-[32px] h-[32px] stroke-[3px]" />
    </button>
  );
}
