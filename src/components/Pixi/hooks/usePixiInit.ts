import React from "react";
import { Application } from "pixi.js";

export const usePixiInit = () => {
  const pixi = new Application({
    width: 640,
    height: 580,
    backgroundColor: "#1099bb",
  });

  return { pixi };
};
