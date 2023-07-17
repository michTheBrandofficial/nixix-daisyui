import { classesFn, CollapseProps } from './Collapse'
import { Summary } from './CollapseTitle'

export type DetailsProps = Omit<
  CollapseProps<HTMLDetailsElement>,
  'checkbox' | 'onOpen' | 'onClose' | 'onToggle'
>
const Details = 
  (
    { children, icon, open, dataTheme, className, ...props }
  ): JSX.Element => {
    return (
      <details
        {...props}
        data-theme={dataTheme}
        className={classesFn({ className, icon, open })}
        open={open}
      >
        {children}
      </details>
    )
  }

export default Details;
