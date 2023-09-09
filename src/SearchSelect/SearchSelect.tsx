import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  DataTheme,
} from '../types';
import type { InputHTMLAttributes } from 'nixix';
import { callRef, callSignal, callStore, effect } from 'nixix/primitives';
import type { KeyboardEvent, MouseEvent } from 'nixix/types/eventhandlers';
import './SearchSelect.css';

export interface SearchSelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>,
    ComponentBaseProps {
  placeholder: string;
  searchPlaceholder?: string;
  dataTheme?: DataTheme;
  value?: string;
  size?: ComponentSize;
  color?: ComponentColor;
}

function getSize(size: ComponentSize) {
  return clsx({
    'rounded-[1rem] ': size === 'xs',
    'rounded-[1rem]': size === 'sm' || size === 'md' || size === 'lg',
    'min-w-[120px]': size === 'xs',
    'min-w-[180px]': size === 'sm',
    'min-w-[240px]': size === 'md',
    'min-w-[300px]': size === 'lg',
  });
}

function getColor(color: ComponentColor) {
  return clsx({
    input: true,
    'input-bordered': true,
    'input-ghost': color === 'ghost',
    'input-primary': color === 'primary',
    'input-secondary': color === 'secondary',
    'input-error': color === 'error',
    'input-info': color === 'info',
    'input-success': color === 'success',
    'input-warning': color === 'warning',
    'input-accent': color === 'accent',
    'min-w-full': true,
    'w-0': true,
    'h-10': true,
    'cursor-pointer': true,
    'pl-4': true,
    'pr-0': true,
  });
}

const SearchSelect = (props: SearchSelectProps) => {
  const {
    placeholder,
    children,
    dataTheme,
    className,
    value,
    size = 'md',
    color,
    ...rest
  } = props;
  const [optValue, setOptValue] = callSignal<string>(value || '');
  const [optionDisplay, setOptionDisplay] = callStore<OptionDisplay>({
    chevronDisplay: 'chevron',
    ulDisplay: 'none',
  });
  const options = callRef<HTMLDivElement>();

  function setOptDisplay() {
    setOptionDisplay((e) => {
      e.chevronDisplay =
        e.chevronDisplay === 'chevron' ? 'chevron chevron-active' : 'chevron';
      e.ulDisplay = e.ulDisplay === 'block' ? 'none' : 'block';
      if (e.ulDisplay === 'block')
        options.current
          .querySelectorAll('option')
          .forEach((option) => (option.style.display = 'block'));
      return e;
    });
  }
  function selectOpt(e: MouseEvent<HTMLOptionElement>) {
    setOptValue(e.currentTarget.value);
    setOptDisplay();
  }
  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    const KEY_MAP = {
      Escape: () => {
        setOptDisplay();
      },
      Enter: () => {
        setOptDisplay();
      },
    };
    if (KEY_MAP[e.key]) return KEY_MAP[e.key]();

    let filter: string,
      optionEls: NodeListOf<HTMLOptionElement>,
      textValue: string;
    filter = e.currentTarget.value.toUpperCase();
    optionEls = options.current.querySelectorAll('option');
    optionEls.forEach((optionEl) => {
      textValue = optionEl.textContent;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        optionEl.style.display = 'block';
      } else {
        optionEl.style.display = 'none';
      }
    });
  }
  effect(() => {
    options.current.querySelectorAll('option').forEach((optionEl) => {
      optionEl.addEventListener('click', selectOpt as any);
    });
  }, 'once');

  return (
    <div className="w-fit relative flex flex-col">
      <div
        className={`h-fit relative shadow ${getSize(size)}`}
        data-theme={dataTheme || ''}
        on:click={setOptDisplay}
      >
        <input
          type="text"
          placeholder={placeholder}
          className={twMerge(
            className,
            'input focus:outline-blue-300 ',
            getColor(color)
          )}
          name="input"
          on:keyup={handleKeyUp}
          on:focus={setOptDisplay}
          value={optValue}
          {...rest}
        />
        <i className={optionDisplay.chevronDisplay}></i>
      </div>
      <div
        className="mt-[4px] absolute top-10 z-[1000] w-full border border-gray-100 dark:border-gray-300 shadow-md rounded-[.6rem] "
        data-theme={dataTheme || ''}
        style={{ display: optionDisplay.ulDisplay }}
        bind:ref={options}
      >
        <ul className="options max-h-[250px] overflow-y-auto p-0 rounded-[inherit]  ">
          {...children}
        </ul>
      </div>
    </div>
  );
};

export default SearchSelect;
