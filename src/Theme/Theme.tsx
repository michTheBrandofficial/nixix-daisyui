import { HTMLAttributes } from "nixix";
import { ComponentBaseProps } from "../types";

export type ThemeProps = HTMLAttributes<HTMLDivElement> & ComponentBaseProps;

const Theme = ({ "data:theme": dataTheme, children, ...rest }: ThemeProps): someView => {
  return (
    <section
      data-theme={dataTheme || ''}
      {...rest}>
      {children}
    </section>
  );
};

export default Theme;
