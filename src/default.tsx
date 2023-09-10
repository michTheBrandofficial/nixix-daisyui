import { render } from 'nixix/dom';
import './index.css';
import Skeleton from './Skeleton';
import SearchSelect, { SearchSelectOption } from './SearchSelect';

export const Test = () => {
  return (
    <div>
      <Skeleton size={'lg'} className={'mb-4'} />
      <SearchSelect placeholder={'Search'} size="md">
        <SearchSelectOption value={'Iphone'}>Iphone</SearchSelectOption>
        <SearchSelectOption value={'Samsung'}>Samsung</SearchSelectOption>
        <SearchSelectOption value={'Sany'}>Sany</SearchSelectOption>
        <SearchSelectOption value={'nokia'}>Nokia</SearchSelectOption>
      </SearchSelect>
    </div>
  );
};

render(<Test />, document.body);
