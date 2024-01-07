import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentBaseProps, ComponentSize } from "../types";
import RatingItem from "./RatingItem";
import { HTMLAttributes, NixixNode } from "nixix";
import { assign } from "../utils";

export type RatingProps = HTMLAttributes<HTMLElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
    half?: boolean;
    hidden?: boolean;
    value: number;
    children?: NixixNode;
    onChange?: (newRating: number) => void;
  };

const Rating = (props: RatingProps): someView => {
  const {
    children,
    size,
    half,
    hidden,
    "data:theme": dataTheme,
    className,
    value,
    onChange,
    ...rest
  } = props;
  const classes = twMerge(
    "rating",
    className,
    clsx({
      "rating-lg": size === "lg",
      "rating-md": size === "md",
      "rating-sm": size === "sm",
      "rating-xs": size === "xs",
      "rating-half": half,
      "rating-hidden": hidden || value === 0,
    })
  );

  return (
    <section
      aria-label='Rating'
      {...rest}
      data-theme={dataTheme || ""}
      className={classes}>
      {children}
    </section>
  );
};

/**
 * ```jsx
 * import { Rating } from 'daisyui-nixix'
 * 
 * const View = (): someView => {
 *  return (
 *    <Rating value={0}>
        <Rating.Item className={'bg-orange-700 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-orange-600 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-orange-500 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-orange-400 mask mask-star-2'} readonly />
      </Rating> 
 *  )
 * };
 * ```
 */
export default assign(Rating, { Item: RatingItem });
