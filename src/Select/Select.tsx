import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps, ComponentColor, ComponentSize } from '../types';
import type { NixixNode, SelectHTMLAttributes } from 'nixix';

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'color'
> &
  ComponentBaseProps & {
    children?: NixixNode<any>;
    size?: ComponentSize;
    color?: ComponentColor;
    bordered?: boolean;
    borderOffset?: boolean;
  };

const Select = (props: SelectProps): JSX.Element => {
  const {
    children,
    size,
    color,
    bordered = true,
    borderOffset,
    dataTheme,
    className,
    ...rest
  } = props;

  const classes = twMerge(
    'select',
    className,
    clsx({
      'select-lg': size === 'lg',
      'select-md': size === 'md',
      'select-sm': size === 'sm',
      'select-xs': size === 'xs',
      'select-primary': color === 'primary',
      'select-secondary': color === 'secondary',
      'select-accent': color === 'accent',
      'select-ghost': color === 'ghost',
      'select-info': color === 'info',
      'select-success': color === 'success',
      'select-warning': color === 'warning',
      'select-error': color === 'error',
      'select-bordered': bordered,
      'focus:outline-offset-0': !borderOffset,
    })
  );

  return (
    <select {...rest} data-theme={dataTheme || ''} className={classes}>
      {...children}
    </select>
  );
};

export default Select;
