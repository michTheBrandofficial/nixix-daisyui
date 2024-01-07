import clsx from 'clsx';
import type { HTMLAttributes, CSSProperties } from 'nixix';
import { twMerge } from 'tailwind-merge';
import './Skeleton.css';
import { ComponentSize } from '../types';

export type SkeletonProps = {
  size?: ComponentSize | 'xl';
  color?: CSSProperties['color'];
  rounded?: boolean;
  width?: number;
  height?: number;
} & HTMLAttributes<HTMLDivElement>;

function getRounded(size: SkeletonProps['size'], rounded: boolean) {
  return clsx({
    'rounded-full': rounded,
    'rounded-sm': size === 'sm',
    'rounded-md': size === 'xl',
    'rounded-lg': size === 'lg',
    'rounded-xl ': size === 'xl',
  });
}

const Skeleton = (props: SkeletonProps): someView => {
  const {
    size = 'xs',
    width = 150,
    height = 20,
    className,
    rounded = false,
    color,
    ...rest
  } = props || {};
  return (
    <div
      className={twMerge(className, 'skeleton-load', getRounded(size, rounded))}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      {...rest}
    />
  );
};

export default Skeleton;
