import React from "react";
import { TIconProps } from "../icon.types";

export const IconInfo = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <path
        d="M16,14v9M16,8v2"
        transform="translate(-1 -1)"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="15"
        cy="15"
        r="14"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
