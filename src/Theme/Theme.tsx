import { HTMLAttributes } from "nixix";
import { ComponentBaseProps } from "../types";

export type ThemeProps = HTMLAttributes<HTMLDivElement> & ComponentBaseProps;

const Theme = ({ dataTheme, children, ...rest }: ThemeProps) => {
  return (
    <section
      data-theme={dataTheme}
      {...rest}>
      {children}
    </section>
  );
};

export default Theme;
