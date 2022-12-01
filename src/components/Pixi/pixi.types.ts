import { Application } from "pixi.js";

export type UsePixiInitProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
};

export interface PixiProps {
  callback: (pixi: Application, store?: any) => void;
  store: any;
  size: { width: number; height: number };
}
