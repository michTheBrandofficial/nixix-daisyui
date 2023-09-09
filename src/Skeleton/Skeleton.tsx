import clsx from "clsx";
import type { HTMLAttributes, CSSProperties  } from "nixix";
import { twMerge } from "tailwind-merge";
import './Skeleton.css'

export type SkeletonProps = {
  size?: 'lg' | 'md' | 'sm' | 'xl';
  color?: CSSProperties['color'],
  rounded?: boolean;
  width?: number;
  height?: number;
} & HTMLAttributes<HTMLDivElement>

const Skeleton = (props: SkeletonProps) => {
  const { size = 'xs', width = 150, height = 20, className, rounded = false, color, ...rest} = props || {};
  return (
    <div className={
      twMerge(className, 'skeleton-load', clsx({
        'rounded-full': rounded,
        'rounded-sm': size === 'sm',
        'rounded-md': size === 'xl',
        'rounded-lg': size === 'lg',
        'rounded-xl ': size === 'xl'
      }))
    } style={{
      width: `${width}px`,
      height: `${height}px`
    }} {...rest} />
  )
}

export default Skeleton;