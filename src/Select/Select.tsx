import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";
import type { NixixNode, SelectHTMLAttributes } from "nixix";
import { assign } from "../utils";
import SelectOption from "./SelectOption";

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    children?: NixixNode;
    size?: ComponentSize;
    color?: ComponentColor;
    bordered?: boolean;
    borderOffset?: boolean;
  };

const Select = (props: SelectProps): someView => {
  const {
    children,
    size,
    color,
    bordered = true,
    borderOffset,
    "data:theme": dataTheme,
    className,
    ...rest
  } = props;

  const classes = twMerge(
    "select",
    className,
    clsx({
      "select-lg": size === "lg",
      "select-md": size === "md",
      "select-sm": size === "sm",
      "select-xs": size === "xs",
      "select-primary": color === "primary",
      "select-secondary": color === "secondary",
      "select-accent": color === "accent",
      "select-ghost": color === "ghost",
      "select-info": color === "info",
      "select-success": color === "success",
      "select-warning": color === "warning",
      "select-error": color === "error",
      "select-bordered": bordered,
      "focus:outline-offset-0": !borderOffset,
    })
  );

  return (
    <select
      {...rest}
      className={classes}>
      {children}
    </select>
  );
};

export default assign(Select, {
  Option: SelectOption,
});
