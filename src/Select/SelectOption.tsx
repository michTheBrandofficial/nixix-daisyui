import type { OptionHTMLAttributes } from 'nixix';

export type SelectOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = ({
  children,
  ...props
}: SelectOptionProps): someView => {
  return <option {...props}>{children}</option>;
};

export default SelectOption;
