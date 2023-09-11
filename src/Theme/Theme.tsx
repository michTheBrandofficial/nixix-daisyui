import { HTMLAttributes } from 'nixix';
import { defaultTheme } from '../constants';
import { ComponentBaseProps } from '../types';

export type ThemeProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> &
  ComponentBaseProps;

const Theme = ({ dataTheme, children, ...rest }: ThemeProps) => {
  return (
    <section data-theme={dataTheme} {...rest}>
      {children}
    </section>
  );
};

export default Theme;
