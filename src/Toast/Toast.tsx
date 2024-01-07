import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";

const horizontalOptions = {
  start: "toast-start",
  center: "toast-center",
  end: "toast-end",
};

const verticalOptions = {
  top: "toast-top",
  middle: "toast-middle",
  bottom: "toast-bottom",
};

export type ToastProps = Nixix.HTMLAttributes<HTMLDivElement> & {
  horizontal?: keyof typeof horizontalOptions;
  vertical?: keyof typeof verticalOptions;
  className?: string;
} & ComponentBaseProps;

const Toast = ({
  horizontal = "end",
  vertical = "bottom",
  className,
  children,
  ...props
}: ToastProps) => {
  return (
    <section
      {...props}
      className={twMerge(
        "toast",
        horizontalOptions[horizontal],
        verticalOptions[vertical],
        className
      )}>
      {children}
    </section>
  );
};
export default Toast;
