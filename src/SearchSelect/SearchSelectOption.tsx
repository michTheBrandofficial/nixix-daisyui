import clsx from 'clsx';
import type { NixixNode, OptionHTMLAttributes } from 'nixix';
import { ComponentSize } from '../types';
import { twMerge } from 'tailwind-merge';

export type SearchSelectOptionProps = {
  children?: NixixNode<any>;
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
      role="option"
      className={twMerge(
        'cursor-pointer rounded-[inherit] pl-4 py-2 border-gray-300 ',
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
