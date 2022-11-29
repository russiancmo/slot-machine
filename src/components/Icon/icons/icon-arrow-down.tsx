import React from "react";
import { TIconProps } from "../icon.types";

export const IconArrowDown = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13.5 7.5"
    >
      <path
        d="M18.53,9.47a.75.75,0,0,1,0,1.06l-6,6a.75.75,0,0,1-1.06,0l-6-6A.75.75,0,0,1,6.53,9.47L12,14.94l5.47-5.47A.75.75,0,0,1,18.53,9.47Z"
        transform="translate(-5.25 -9.25)"
        fill={fill ?? "#030d45"}
        fillRule="evenodd"
      />
    </svg>
  );
};
