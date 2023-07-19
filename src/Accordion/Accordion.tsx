import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type HTMLAttributes } from 'nixix';

import { ComponentBaseProps } from '../types';

export type AccordionProps = Omit<HTMLAttributes<HTMLInputElement>, 'type'> &
  ComponentBaseProps & {
    name?: string;
    icon?: 'arrow' | 'plus';
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
  name = 'accordion',
  icon,
  dataTheme,
  className,
  children,
  ...props
}: AccordionProps): JSX.Element => {
  const classes = twMerge(
    'collapse',
    clsx({
      'collapse-arrow': icon === 'arrow',
      'collapse-plus': icon === 'plus',
    }),
    className
  );

  return (
    <div data-theme={dataTheme || ''} className={classes}>
      <input {...props} type="radio" name={name} />
      {children}
    </div>
  );
};

export default Accordion;
