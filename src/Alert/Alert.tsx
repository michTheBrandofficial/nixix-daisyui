import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps, ComponentStatus } from '../types';

export type AlertProps = Nixix.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    icon?: Nixix.NixixNode;
    status?: ComponentStatus;
  };

const Alert = 
    ({ children, icon, status, "data:theme": dataTheme, className, ...props }: AlertProps
  ): someView => {
    const classes = twMerge(
      'alert',
      className,
      clsx({
        'alert-info': status === 'info',
        'alert-success': status === 'success',
        'alert-warning': status === 'warning',
        'alert-error': status === 'error',
      })
    );

    return (
      <section
        role="alert"
        {...props}
        data-theme={dataTheme || ''}
        className={classes}
      >
        {icon}
        {children}
      </section>
    );
  }
export default Alert;
