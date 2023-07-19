import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import Loading from '../Loading';
import {
  ComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  NixixNode,
} from 'nixix';

type TagProps = {
  a: {
    attr: AnchorHTMLAttributes<HTMLAnchorElement>;
    ele: HTMLAnchorElement;
  };
  button: {
    attr: ButtonHTMLAttributes<HTMLButtonElement>;
    ele: HTMLButtonElement;
  };
  div: {
    attr: HTMLAttributes<HTMLDivElement>;
    ele: HTMLDivElement;
  };
  img: {
    attr: ImgHTMLAttributes<HTMLImageElement>;
    ele: HTMLImageElement;
  };
  input: {
    attr: InputHTMLAttributes<HTMLInputElement>;
    ele: HTMLInputElement;
  };
  label: {
    attr: LabelHTMLAttributes<HTMLLabelElement>;
    ele: HTMLLabelElement;
  };
  span: {
    attr: HTMLAttributes<HTMLSpanElement>;
    ele: HTMLSpanElement;
  };
};

type GetTagProps<T> = T extends keyof TagProps
  ? TagProps[T]
  : TagProps['button'];

export type ButtonProps<
  T = keyof TagProps,
  A extends HTMLAttributes<HTMLElement> = GetTagProps<T>['attr']
> = Omit<A, 'color' | 'size'> &
  ComponentBaseProps & {
    shape?: ComponentShape;
    size?: ComponentSize;
    variant?: 'outline' | 'link';
    color?: ComponentColor;
    glass?: boolean;
    wide?: boolean;
    fullWidth?: boolean;
    responsive?: boolean;
    animation?: boolean;
    loading?: boolean;
    active?: boolean;
    startIcon?: NixixNode<any>;
    endIcon?: NixixNode<any>;
    disabled?: boolean;
    tag: T;
  };

//  https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const VoidElementList: string[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'keygen',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

const Button = ({
  children,
  shape,
  size,
  variant,
  color,
  glass,
  startIcon,
  endIcon,
  wide,
  fullWidth,
  responsive,
  animation = true,
  loading,
  active,
  disabled,
  dataTheme,
  className,
  style,
  tag,
  ...props
}: ButtonProps): JSX.Element => {
  const Tag = tag as unknown as (props?: any) => JSX.Element;
  const classes = twMerge(
    'btn',
    className,
    clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
      'btn-lg': size === 'lg',
      'btn-md': size === 'md',
      'btn-sm': size === 'sm',
      'btn-xs': size === 'xs',
      'btn-circle': shape === 'circle',
      'btn-square': shape === 'square',
      'btn-outline': variant === 'outline',
      'btn-link': variant === 'link',
      'btn-neutral': color === 'neutral',
      'btn-primary': color === 'primary',
      'btn-secondary': color === 'secondary',
      'btn-accent': color === 'accent',
      'btn-info': color === 'info',
      'btn-success': color === 'success',
      'btn-warning': color === 'warning',
      'btn-error': color === 'error',
      'btn-ghost': color === 'ghost',
      glass: glass,
      'btn-wide': wide,
      'btn-block': fullWidth,
      'btn-xs sm:btn-sm md:btn-md lg:btn-lg': responsive,
      'no-animation': !animation,
      'btn-active': active,
      'btn-disabled': disabled,
    })
  );
  if (VoidElementList.includes(tag)) {
    return (
      <Tag
        className={classes}
        style={style || {}}
        {...props}
        data-theme={dataTheme || ''}
      >
        {children}
      </Tag>
    );
  } else {
    return (
      <Tag
        className={classes}
        style={style || {}}
        {...props}
        data-theme={dataTheme || ''}
      >
        {!startIcon && loading && <Loading size={size} />}
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </Tag>
    );
  }
};

export default Button;
