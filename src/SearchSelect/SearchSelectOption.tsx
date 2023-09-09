import clsx from 'clsx';
import type { NixixNode, OptionHTMLAttributes } from 'nixix';
import { ComponentSize } from '../types';
import { twMerge } from 'tailwind-merge';

export type SearchSelectOptionProps = {
  children?: NixixNode;
  className?: string;
  hoverBg?: string;
  size?: ComponentSize;
} & OptionHTMLAttributes<HTMLOptionElement>;

const SearchSelectOption = (props: SearchSelectOptionProps) => {
  const {
    children,
    hoverBg = 'hover:bg-gray-50',
    size = 'md',
    className,
    ...rest
  } = props;
  return (
    <option
      role="button"
      tabindex={0}
      className={twMerge(
        'cursor-pointer focus:bg-gray-50 rounded-[inherit] pl-4 py-2 border-gray-300 ',
        clsx({
          [hoverBg]: true,
          'text-sm': size === 'sm',
          'text-xs': size === 'xs',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        }),
        className || ''
      )}
      {...rest}
    >
      {...children}
    </option>
  );
};

export default SearchSelectOption;
