import { callRef, signal } from "nixix/primitives";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import { type NixixNode, type HTMLAttributes } from "nixix";
import { type FocusEvent } from "nixix/types/eventhandlers";
import { assign } from "../utils";
import CollapseContent from "./CollapseContent";
import CollapseTitle from "./CollapseTitle";
import CollapseDetails from "./CollapseDetails";

export type CollapseProps<T extends HTMLElement = HTMLDivElement> =
  HTMLAttributes<T> &
    ComponentBaseProps & {
      checkbox?: boolean;
      icon?: "arrow" | "plus";
      open?: boolean;
      onOpen?: () => void;
      onClose?: () => void;
      onToggle?: () => void;
      children?: NixixNode;
    };

export const classesFn = ({
  className,
  icon,
  open,
}: Pick<CollapseProps, "className" | "icon" | "open">) =>
  twMerge(
    "collapse",
    className,
    clsx({
      "collapse-arrow": icon === "arrow",
      "collapse-plus": icon === "plus",
      "collapse-open": open === true,
      "collapse-close": open === false,
    })
  );

const Collapse = ({
  children,
  checkbox,
  icon,
  open,
"data:theme":  dataTheme,
  className,
  onOpen,
  onClose,
  onToggle,
  ...props
}: CollapseProps): someView => {
  const [isChecked, setIsChecked] = signal(open === true ? 0 : 1);
  const checkboxRef = callRef<HTMLInputElement>();

  // Handle events for checkbox changes
  const handleCheckboxChange = () => {
    onToggle?.();
    checkboxRef.current?.checked ? (onOpen?.(), setIsChecked(0)) : onClose?.();
  };

  // Handle blur events, specifically handling open/close for non checkbox types
  const handleBlur = (event: FocusEvent<HTMLDivElement, Element>) => {
    !checkbox && (onToggle?.(), onClose?.());
    props["on:blur"]?.(event);
  };

  // Handle focus events, specifically handling open/close for non checkbox types
  const handleFocus = (event: FocusEvent<HTMLDivElement, Element>) => {
    !checkbox && (onToggle?.(), onClose?.());
    props["on:focus"]?.(event);
  };

  return (
    <div
      aria:expanded={open || "false"}
      {...props}
      tabindex={isChecked}
      data-theme={dataTheme || ""}
      className={classesFn({ className, icon, open })}
      on:blur={handleBlur}
      on:focus={handleFocus}>
      {checkbox && (
        <input
          type='checkbox'
          tabindex={isChecked}
          className='peer'
          bind:ref={checkboxRef}
          on:change={handleCheckboxChange}
        />
      )}
      {children}
    </div>
  );
};

export default assign(Collapse, {
  Content: CollapseContent,
  Details: CollapseDetails,
  Title: CollapseTitle,
});
