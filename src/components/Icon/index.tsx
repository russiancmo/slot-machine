import React from "react";
import { IconsList } from "./data";
import { IIconComponentProps } from "./icon.types";

const Icon = ({ type, width, height, fill, stroke }: IIconComponentProps) => {
  
  const getIcon = IconsList[type];
  return getIcon({ width, height, fill, stroke });
};

export default Icon;
