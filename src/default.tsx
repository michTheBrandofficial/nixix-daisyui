import { render } from 'nixix/dom';
import './index.css';
import Skeleton from './Skeleton';
import SearchSelect, { SearchSelectOption } from './SearchSelect';

export const Test = () => {
  return (
    <div>
      <Skeleton size={'xl'} on:click={() => console.log('object')} />
      <SearchSelect placeholder={'Search'} size="md">
        <SearchSelectOption value={'option'}>Iphone</SearchSelectOption>
      </SearchSelect>
    </div>
  );
};

render(<Test />, document.body);
