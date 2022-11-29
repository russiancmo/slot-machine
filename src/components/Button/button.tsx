import React, { useMemo } from "react";
import { IButton } from "./button.types";
import Icon from "../Icon";
import cn from "classnames";
import styles from "./button.module.scss";

export const Button = ({
  title,
  color,
  onClick,
  children,
  icon,
  type,
  onlyIcon = false,
  iconFill,
  iconWidth,
  iconHeight,
  iconStroke,
  className,
  fullWidth,
  disabled,
}: IButton) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick?.();
  };

  const getTitle = useMemo(() => {
    return !onlyIcon && <div className={styles["button__title"]}>{title}</div>;
  }, [title]);

  return (
    <button
      title={title ?? ""}
      onClick={(e) => (onClick ? handleClick(e) : {})}
      disabled={disabled}
      className={cn(
        styles.button,
        onlyIcon && styles["button_onlyicon_true"],
        fullWidth && styles["button_width_full-width"],
        className
      )}
    >
      {icon && (
        <div
          className={
            onlyIcon
              ? styles["button__icon_onlyicon_true"]
              : styles["button__icon"]
          }
        >
          <Icon
            type={icon}
            width={iconWidth ?? 16}
            height={iconHeight}
            stroke={iconStroke ?? "#ffffff"}
            fill={onlyIcon ? iconFill : ""}
          />
        </div>
      )}
      {getTitle}
    </button>
  );
};
