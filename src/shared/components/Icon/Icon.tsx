import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
}

export default function Icon({ iconName, className, ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
}
