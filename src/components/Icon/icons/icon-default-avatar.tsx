import React from "react";
import { TIconProps } from "../icon.types";

export const IconDefaultAvatar = ({
  width,
  height,
  fill,
  stroke,
}: TIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.53 129.53"
    >
      <g>
        <circle
          cx="243.75"
          cy="201.33"
          r="64.76"
          transform="translate(-185.96 257.34) rotate(-77.08)"
          fill={fill ?? "#b9c4e1"}
        />
        <ellipse
          cx="64.76"
          cy="56.48"
          rx="25.19"
          ry="34.89"
          fill={fill ?? "#fff"}
        />
        <path
          d="M243.35,225.71c-21.09,0-39.94,5-52.48,13a64.73,64.73,0,0,0,105.5.35C283.84,230.91,264.75,225.71,243.35,225.71Z"
          transform="translate(-178.98 -136.56)"
          fill={fill ?? "#fff"}
        />
        <rect
          x="51.3"
          y="64.76"
          width="26.92"
          height="41.13"
          rx="9.62"
          fill={fill ?? "#fff"}
        />
        <path
          d="M222.53,195c.76,5.59-.49,10.44-2.77,10.83s-4.75-3.83-5.51-9.42S214.74,186,217,185.6,221.78,189.43,222.53,195Z"
          transform="translate(-178.98 -136.56)"
          fill={fill ?? "#fff"}
        />
        <path
          d="M265,195c-.75,5.59.49,10.44,2.78,10.83s4.75-3.83,5.5-9.42-.49-10.45-2.77-10.84S265.72,189.43,265,195Z"
          transform="translate(-178.98 -136.56)"
          fill={fill ?? "#fff"}
        />
        <path
          d="M219.43,191.67q-1.26-8.37-2.54-16.76c-.31-2-.6-4.16.14-6.07s2.91-3.44,4.83-2.72c-.77-3.89,3.53-6.76,7.28-8.05a43.47,43.47,0,0,1,19.59-2.41,28.38,28.38,0,0,1,17.45,8.7,15.57,15.57,0,0,1,3.28,5.33c1.29,3.83.47,8-.36,12l-2,9.44a4.2,4.2,0,0,1-.81,2c-.78.87-2.1.94-3.27.94l-37.47.08c-2.35,0-5.42-.57-5.73-2.9"
          transform="translate(-178.98 -136.56)"
          fill={fill ?? "#fff"}
        />
      </g>
    </svg>
  );
};
