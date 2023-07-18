import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps, ComponentColor, ComponentSize } from '../types';
import { type HTMLAttributes } from 'nixix';

export type LoadingProps = HTMLAttributes<HTMLSpanElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  };

const Loading = ({
  size,
  variant = 'spinner',
  color,
  dataTheme,
  className,
  style,
  ...props
}: LoadingProps): JSX.Element => {
  const classes = twMerge(
    'loading',
    className,
    clsx({
      'loading-lg': size === 'lg',
      'loading-md': size === 'md',
      'loading-sm': size === 'sm',
      'loading-xs': size === 'xs',
      'loading-spinner': variant === 'spinner',
      'loading-dots': variant === 'dots',
      'loading-ring': variant === 'ring',
      'loading-ball': variant === 'ball',
      'loading-bars': variant === 'bars',
      'loading-infinity': variant === 'infinity',
      'text-primary': color === 'primary',
      'text-secondary': color === 'secondary',
      'text-accent': color === 'accent',
      'text-info': color === 'info',
      'text-success': color === 'success',
      'text-warning': color === 'warning',
      'text-error': color === 'error',
      'text-ghost': color === 'ghost',
    })
  );

  return (
    <span {...props} data-theme={dataTheme} className={classes} style={style || {}} />
  );
};

export default Loading;
