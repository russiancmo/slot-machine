import { Color } from "../../types/app/colors";
import { IStyleProps } from "../../types/app/common";
import { TIcon } from "../Icon/icon.types";

export interface IButton
  extends IStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  onClick?: () => void;
  color?: Color;
  icon?: TIcon;
  iconFill?: string;
  iconStroke?: string;
  iconWidth?: number;
  iconHeight?: number;
  onlyIcon?: boolean;
  fullWidth?: boolean;
}
