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

  const KEYCODE_MAP = {
    Enter: (e: HTMLOptionElement) => {
      console.log('enter pressed');
      e.click();
    },
    ArrowDown: (e: HTMLOptionElement) => {
      (e.nextElementSibling as typeof e)?.focus();
    },
    ArrowUp: (e: HTMLOptionElement) => {
      (e.previousElementSibling as typeof e)?.focus();
    },
  };
  return (
    <option
      role="option"
      tabindex={0}
      on:keyup={(e) => {
        // KEYCODE_MAP keys can be enter, arrowdown or arrowup
        const keyCode = KEYCODE_MAP[e.key];
        return keyCode ? keyCode(e.currentTarget) : null;
      }}
      className={twMerge(
        'cursor-pointer focus:bg-gray-100 focus:outline-none first:rounded-t-[inherit] pl-4 py-2 border-gray-300 ',
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
