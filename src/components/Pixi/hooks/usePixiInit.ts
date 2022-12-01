import React from "react";
import { Application } from "pixi.js";
import { UsePixiInitProps } from "../pixi.types";

export const usePixiInit = ({
  width = 640,
  height = 480,
  backgroundColor = "#45b6f8",
}: UsePixiInitProps) => {
  const pixi = new Application({
    width,
    height,
    backgroundColor,
  });

  return { pixi };
};
