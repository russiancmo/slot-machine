import React, { CSSProperties } from "react";

export interface IStyleProps {
  className?: string;
  style?: CSSProperties;
}

export type WithChildren = {
  children: React.ReactNode;
};
