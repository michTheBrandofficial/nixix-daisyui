import { callRef, callSignal } from 'nixix/primitives';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ComponentBaseProps } from '../types';

import CollapseDetails from './CollapseDetails';
import { type NixixNode, type HTMLAttributes } from 'nixix';
import { type FocusEvent } from 'nixix/types/eventhandlers';

export type CollapseProps<T extends HTMLElement = HTMLDivElement> =
  HTMLAttributes<T> &
    ComponentBaseProps & {
      checkbox?: boolean;
      icon?: 'arrow' | 'plus';
      open?: boolean;
      onOpen?: () => void;
      onClose?: () => void;
      onToggle?: () => void;
      children?: NixixNode<any>
    } ;

export const classesFn = ({
  className,
  icon,
  open,
}: Pick<CollapseProps, 'className' | 'icon' | 'open'>) =>
  twMerge(
    'collapse',
    className,
    clsx({
      'collapse-arrow': icon === 'arrow',
      'collapse-plus': icon === 'plus',
      'collapse-open': open === true,
      'collapse-close': open === false,
    })
  );

const Collapse = ({
  children,
  checkbox,
  icon,
  open,
  dataTheme,
  className,
  onOpen,
  onClose,
  onToggle,
  ...props
}: CollapseProps): JSX.Element => {
  const [isChecked, setIsChecked] = callSignal(open === true ? 0 : undefined);
  const checkboxRef = callRef<HTMLInputElement>(null);

  // Handle events for checkbox changes
  const handleCheckboxChange = () => {
    if (onToggle) {
      onToggle();
    }
    if (onOpen && checkboxRef.current?.checked) {
      onOpen();
    } else if (onClose && !checkboxRef.current?.checked) {
      onClose();
    }

    setIsChecked(checkboxRef.current?.checked && 0);
  };

  // Handle blur events, specifically handling open/close for non checkbox types
  const handleBlur = (event: FocusEvent<HTMLDivElement, Element>) => {
    if (!checkbox && onToggle) onToggle();
    if (!checkbox && onClose) onClose();
    if (props['on:blur']) props['on:blur'](event);
  };

  // Handle focus events, specifically handling open/close for non checkbox types
  const handleFocus = (event: FocusEvent<HTMLDivElement, Element>) => {
    if (!checkbox && onToggle) onToggle();
    if (!checkbox && onOpen) onOpen();
    if (props['on:focus']) props['on:focus'](event);
  };

  return (
    <div
      aria:expanded={open}
      {...props}
      tabindex={isChecked}
      data-theme={dataTheme}
      className={classesFn({ className, icon, open })}
      on:blur={handleBlur}
      on:focus={handleFocus}
    >
      {checkbox && (
        <input
          type="checkbox"
          tabindex={isChecked}
          className="peer"
          on:change={handleCheckboxChange}
        />
      )}
      {children}
    </div>
  );
};

export default Collapse
