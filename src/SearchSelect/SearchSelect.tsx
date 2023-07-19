import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  DataTheme,
} from '../types';
import type { InputHTMLAttributes } from 'nixix';
import { callRef, callSignal, effect } from 'nixix/primitives';
import type { KeyboardEvent, MouseEvent } from 'nixix/types/eventhandlers';
import './SearchSelect.css';

export type SearchSelectProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> & ComponentBaseProps & {
  placeholder: string;
  searchPlaceholder?: string;
  dataTheme?: DataTheme;
  value?: string;
  size?: ComponentSize;
  color?: ComponentColor
}

const SearchSelect = (props: SearchSelectProps) => {
  const {
    placeholder,
    children,
    dataTheme,
    value,
    size,
    color,
    ...rest
  } = props;
  const refs = {
    options: callRef<HTMLDivElement>(),
    chevron: callRef<HTMLDivElement>(),
  }
  const setOptDisplay = (display: boolean) => {
    if (display) return () => {
      refs.options.current.classList.toggle('hidden');
      refs.chevron.current.classList.toggle('chevron-active');
      refs.options.current.querySelectorAll('option').forEach(_ => {
        _.style.display = 'block';
      })
    }
    
    else return (e: MouseEvent<HTMLOptionElement>) => {
      (refs.chevron.prevElementSibling as HTMLInputElement).value = e.currentTarget.value;
      refs.options.current.classList.toggle('hidden')
      refs.chevron.current.classList.toggle('chevron-active');
      refs.options.current.querySelectorAll('option').forEach(_ => {
        _.style.display = 'block';
      })
      
    }
  };
  const search = (e: KeyboardEvent<HTMLInputElement>) => { 
    let filter: string, li: NodeListOf<HTMLOptionElement>,  textValue: string;

    filter = e.currentTarget.value.toUpperCase();
    li = refs.options.current.querySelectorAll('option');
    li.forEach((optionEl) => {
      textValue = optionEl.value || optionEl.textContent;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        optionEl.style.display = 'block';
      } else {
        optionEl.style.display = 'none';
      }
    })
  }
  effect(() => {
      refs.options.current.querySelectorAll('option').forEach((optionEl) => {
        optionEl.addEventListener('click', setOptDisplay(false) as any)
      })
    },
    'once',
  )

  return (
    <div className="w-fit relative flex flex-col">
      <div
        className={"h-fit relative shadow "+ clsx({
          'rounded-[1rem] ': size === 'xs',
          "rounded-[1rem]": size === 'sm' || size === 'md' || size === 'lg',
          'min-w-[120px]': size === 'xs',
          'min-w-[180px]': size === 'sm',
          'min-w-[240px]': size === 'md',
          'min-w-[300px]': size === 'lg',
        })}
        data-theme={dataTheme || ''}
        on:click={setOptDisplay(true) as unknown as ((e: MouseEvent<HTMLDivElement>) => void)}
        >
        <input
          type="text"
          placeholder={placeholder}
          className={twMerge('input focus:outline-blue-300 ', clsx({
            'input': true,
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
          }))}
          name="input"
          on:keyup={search}
          value={value||'name'}
          {...rest}
        />
        <i className="chevron" bind:ref={refs.chevron} ></i>
      </div>
      <div
        className=" mt-[4px] absolute top-10 z-[1000] w-full border border-gray-100 dark:border-gray-300 shadow-md rounded-[.6rem] "
        data-theme={dataTheme || ''}
        bind:ref={refs.options}
      >
        <ul className="options max-h-[250px] overflow-y-auto p-0  ">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default SearchSelect;
