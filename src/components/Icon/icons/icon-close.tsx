import React from "react";
import { TIconProps } from "../icon.types";

export const IconClose = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.96 14.96"
    >
      <path
        d="M6.23,4.81A1,1,0,1,0,4.81,6.23L10.59,12,4.81,17.77a1,1,0,1,0,1.42,1.42L12,13.41l5.78,5.78a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42L13.41,12l5.78-5.77a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L12,10.59Z"
        transform="translate(-4.52 -4.52)"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};
