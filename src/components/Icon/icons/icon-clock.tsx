import React from "react";
import { TIconProps } from "../icon.types";

export const IconClock = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112.07 112.07"
    >
      <g>
        <path
          d="M144,76.13a56,56,0,1,0,56,56A56,56,0,0,0,144,76.13Zm4.23,103.42v-3.77a4.23,4.23,0,0,0-8.46,0v3.77a47.65,47.65,0,0,1-43.16-43.29h3.65a4.23,4.23,0,0,0,0-8.46H96.63a47.64,47.64,0,0,1,43.14-43v3.5a4.23,4.23,0,0,0,8.46,0v-3.5a47.64,47.64,0,0,1,43.14,43h-3.62a4.23,4.23,0,1,0,0,8.46h3.64A47.65,47.65,0,0,1,148.23,179.55Z"
          transform="translate(-87.96 -76.13)"
          fill={fill ?? "#3e4349"}
        />
        <path
          d="M169.19,104.87l-25.05,26.25H144a4.7,4.7,0,0,0-.92.09l-21-15.84a3.17,3.17,0,0,0-3.82,5.07l21,15.83a4.76,4.76,0,0,0,9.5-.39c0-.13,0-.25,0-.37l25-26.26a3.17,3.17,0,0,0-4.6-4.37Z"
          transform="translate(-87.96 -76.13)"
          fill={fill ?? "#3e4349"}
        />
      </g>
    </svg>
  );
};
