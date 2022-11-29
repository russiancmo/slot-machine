import React from "react";
import { TIconProps } from "../icon.types";

export const IconPlus = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <path
        d="M20,12H4m8-8V20"
        transform="translate(-3 -3)"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
