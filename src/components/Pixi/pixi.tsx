import React, { memo, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { usePixiInit } from "./hooks/usePixiInit";
import { Application } from "pixi.js";
import { PixiProps } from "./pixi.types";

export const Pixi = ({
  callback,
  store,
  size = { width: 640, height: 480 },
}: PixiProps) => {
  const ref = useRef(null);
  const { pixi } = usePixiInit({ width: size.width, height: size.height });

  useEffect(() => {
    ref.current.appendChild(pixi.view);
    pixi.start();

    return () => {
      pixi.destroy(true, true);
    };
  }, []);

  callback(pixi, store);

  return <div ref={ref} />;
};

export const MemoizedPixi = React.memo(Pixi);
