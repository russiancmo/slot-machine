import { TIcon, TIconProps } from "./icon.types";
import { IconArrowDown } from "./icons/icon-arrow-down";
import { IconBasket } from "./icons/icon-basket";
import { IconCartAdd } from "./icons/icon-cart-add";
import { IconCircle } from "./icons/icon-circle";
import { IconClock } from "./icons/icon-clock";
import { IconClose } from "./icons/icon-close";
import { IconDefaultAvatar } from "./icons/icon-default-avatar";
import { IconEmptyCircle } from "./icons/icon-empty-circle";
import { IconInfo } from "./icons/icon-info";
import { IconPersonAdd } from "./icons/icon-person-add";
import { IconPlus } from "./icons/icon-plus";
import { IconSearch } from "./icons/icon-search";

export const IconsList: {
  [key in TIcon]: ({ width, height, fill, stroke }: TIconProps) => JSX.Element;
} = {
  "icon-basket": IconBasket,
  "icon-info": IconInfo,
  "icon-search": IconSearch,
  "icon-arrow-down": IconArrowDown,
  "icon-plus": IconPlus,
  "icon-circle": IconCircle,
  "icon-empty-circle": IconEmptyCircle,
  "icon-clock": IconClock,
  "icon-default-avatar": IconDefaultAvatar,
  "icon-cart-add": IconCartAdd,
  "icon-person-add": IconPersonAdd,
  "icon-close": IconClose,
};
