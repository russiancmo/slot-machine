import * as PIXI from "pixi.js";

export type ReelType = {
  container: PIXI.Container<PIXI.DisplayObject>;
  symbols: unknown[];
  position: number;
  previousPosition: number;
  blur: any;
};
