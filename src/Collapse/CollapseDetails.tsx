import { classesFn, CollapseProps } from './Collapse';

export type DetailsProps = Omit<
  CollapseProps<HTMLDetailsElement>,
  'checkbox' | 'onOpen' | 'onClose' | 'onToggle'
>;
const Details = ({
  children,
  icon,
  open,
  dataTheme,
  className,
  ...props
}: DetailsProps): JSX.Element => {
  return (
    <details
      {...props}
      data-theme={dataTheme || ''}
      className={classesFn({ className, icon, open })}
      open={open}
    >
      {children}
    </details>
  );
};

export default Details;
