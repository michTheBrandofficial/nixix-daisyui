import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  DataTheme,
} from "../types";
import type { InputHTMLAttributes } from "nixix";
import { callEffect, callRef, signal, store } from "nixix/primitives";
import type { KeyboardEvent, MouseEvent } from "nixix/types/eventhandlers";
import "./SearchSelect.css";

export type SearchSelectProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    placeholder: string;
    searchPlaceholder?: string;
    dataTheme?: DataTheme;
    value?: string;
    size?: ComponentSize;
    color?: ComponentColor;
    "on:valuechange"?: (e: string) => void;
  };

function getSize(size: ComponentSize) {
  return clsx({
    "rounded-[1rem] ": size === "xs",
    "rounded-[1rem]": size === "sm" || size === "md" || size === "lg",
    "min-w-[120px]": size === "xs",
    "min-w-[180px]": size === "sm",
    "min-w-[240px]": size === "md",
    "min-w-[300px]": size === "lg",
  });
}

function getColor(color: ComponentColor) {
  return clsx({
    input: true,
    "input-bordered": true,
    "input-ghost": color === "ghost",
    "input-primary": color === "primary",
    "input-secondary": color === "secondary",
    "input-error": color === "error",
    "input-info": color === "info",
    "input-success": color === "success",
    "input-warning": color === "warning",
    "input-accent": color === "accent",
    "min-w-full": true,
    "w-0": true,
    "h-10": true,
    "cursor-pointer": true,
    "pl-4": true,
    "pr-0": true,
  });
}

const SearchSelect = (props: SearchSelectProps) => {
  const {
    "on:valuechange": onvaluechange,
    placeholder,
    children,
    dataTheme,
    className,
    value,
    size = "md",
    color,
    name,
    ...rest
  } = props;
  const [optValue, setOptValue] = signal<string>(value || "");
  const [optionDisplay, setOptionDisplay] = store<OptionDisplay>({
    chevronDisplay: "chevron",
    ulDisplay: "none",
  });
  const options = callRef<HTMLDivElement>();

  console.log(optionDisplay);
  function setOptDisplay() {
    setOptionDisplay((e) => {
      const { chevronDisplay, ulDisplay } = e;
      e.chevronDisplay =
        chevronDisplay === "chevron" ? "chevron chevron-active" : "chevron";
      e.ulDisplay = ulDisplay === "block" ? "none" : "block";
      if (e.ulDisplay === "block")
        options.current
          ?.querySelectorAll("option")
          .forEach((option) => (option.style.display = "block"));
      return e;
    });
  }
  function selectOpt(e: MouseEvent<HTMLOptionElement>) {
    const newOptValue = e.currentTarget.value;
    setOptValue(newOptValue);
    setOptDisplay();
    onvaluechange?.(newOptValue);
  }
  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    type Key_Map = keyof typeof KEY_MAP;
    const KEY_MAP = {
      Escape: () => {
        setOptDisplay();
      },
      Enter: () => {
        setOptDisplay();
      },
      ArrowDown: () => {
        options.current?.querySelector("option")?.focus();
      },
    };
    if (KEY_MAP[e.key as Key_Map]) return KEY_MAP[e.key as Key_Map]();

    let filter: string,
      optionEls: NodeListOf<HTMLOptionElement>,
      textValue: string;
    filter = e.currentTarget.value.toUpperCase();
    optionEls = options.current!.querySelectorAll("option");
    optionEls.forEach((optionEl) => {
      textValue = optionEl.textContent!;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        optionEl.style.display = "block";
      } else {
        optionEl.style.display = "none";
      }
    });
  }
  callEffect(() => {
    options.current?.querySelectorAll("option").forEach((optionEl) => {
      optionEl.addEventListener("click", selectOpt as any);
    });
  });

  return (
    <section className='w-fit relative flex flex-col'>
      <section
        className={`h-fit relative shadow ${getSize(size)}`}
        data-theme={dataTheme || ""}
        on:click={setOptDisplay}>
        <input
          type='text'
          placeholder={placeholder}
          className={twMerge(
            className,
            "input focus:outline-blue-300 ",
            getColor(color!)
          )}
          name={name}
          on:keyup={handleKeyUp}
          on:focus={setOptDisplay}
          value={optValue}
          {...rest}
        />
        <i className={optionDisplay.chevronDisplay}></i>
      </section>
      <section
        className='mt-[4px] absolute top-10 z-[1000] w-full border border-gray-100 dark:border-gray-300 shadow-md rounded-[.6rem] '
        data-theme={dataTheme || ""}
        style={{ display: optionDisplay.ulDisplay }}
        bind:ref={options}>
        <ul className='options max-h-[250px] overflow-y-auto p-0 rounded-[inherit]  '>
          {children}
        </ul>
      </section>
    </section>
  );
};

export default SearchSelect;
