import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps } from '../types';
import { type HTMLAttributes } from 'nixix';

export type CollapseTitleProps<T extends HTMLElement = HTMLDivElement> =
  HTMLAttributes<T> & ComponentBaseProps;

const classesFn = ({ className }: Pick<CollapseTitleProps, 'className'>) =>
  twMerge('collapse-title', className);

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  return (
    <div {...props} className={classesFn({ className })}>
      {children}
    </div>
  );
};

export type SummaryProps = CollapseTitleProps<HTMLElement>;
export const Summary = ({ children, className }, ref): JSX.Element => {
  return (
    <summary className={classesFn({ className })}>
      {children}
    </summary>
  );
};

export default CollapseTitle;
