import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { usePixiInit } from "./hooks/usePixiInit";
import { Application } from "pixi.js";

export const Pixi = (callback: (pixi: Application) => void) => {
  const ref = useRef(null);
  const { pixi } = usePixiInit();

  useEffect(() => {
    ref.current.appendChild(pixi.view);
    pixi.start();

    return () => {
      pixi.destroy(true, true);
    };
  }, []);

  callback(pixi);

  return <div ref={ref} />;
};
