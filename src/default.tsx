import { render } from 'nixix/dom';
import './index.css';
import Skeleton from './Skeleton';
import Theme from './Theme';
import Select, { SelectOption } from './Select';

export const Test = () => {
  return (
    <Theme
      dataTheme="dark"
      className={'w-full h-full flex items-center justify-center'}
    >
      <Skeleton width={50} height={50} rounded />
      <Select value={'name'}>
        <SelectOption value={'Iphone'}>Iphone</SelectOption>
        <SelectOption value={'Samsung'}>Samsung</SelectOption>
      </Select>
    </Theme>
  );
};

render(<Test />, document.body);
