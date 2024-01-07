import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { type InputHTMLAttributes } from "nixix";

import { ComponentBaseProps } from "../types";

export type AccordionProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  ComponentBaseProps & {
    name?: string;
    icon?: "arrow" | "plus";
  };

/**
 * ```jsx
 *  import { Accordion, CollapseTitle, CollapseContent } from 'daisyui-nixix';
 *
 *  export default () => {
 *    return (
 *      <Accordion className="bg-base-400" icon="arrow" >
 *        <CollapseTitle>
 *          Click me to open
 *        </CollapseTitle>
 *      </Accordion>
 *    )
 *  }
 * ```
 */
const Accordion = ({
  name = "accordion",
  icon = "arrow",
  "data:theme": dataTheme,
  className,
  children,
  ...props
}: AccordionProps): someView => {
  const classes = twMerge(
    "collapse",
    clsx({
      "collapse-arrow": icon === "arrow",
      "collapse-plus": icon === "plus",
    }),
    className
  );

  return (
    <section className={classes}>
      <input
        {...props}
        type='radio'
        name={name}
      />
      {children}
    </section>
  );
};

export default Accordion;
