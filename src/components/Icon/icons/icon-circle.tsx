import React from "react";
import { TIconProps } from "../icon.types";

export const IconCircle = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" fill={fill ?? "000"} />
    </svg>
  );
};
