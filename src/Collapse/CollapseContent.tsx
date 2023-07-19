import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps } from '../types';
import { type HTMLAttributes } from 'nixix';

export type CollapseContentProps = HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

const CollapseContent = ({
  children,
  className,
  ...props
}: CollapseContentProps): JSX.Element => {
  const classes = twMerge('collapse-content', className);

  return (
    <div {...props} className={classes}>
      {...children}
    </div>
  );
};

export default CollapseContent;
