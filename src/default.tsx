import { render } from 'nixix/dom';
import './index.css';
import Button from './Button';
import Collapse, { CollapseContent, CollapseTitle } from './Collapse';
import Accordion from './Accordion';
import SearchSelect, { SearchSelectOption } from './SearchSelect';
import Skeleton from './Skeleton';

export const Test = () => {
  return (
    <div>
      <Skeleton size={'xl'} on:click={() => console.log('object')} />
    </div>
  );
};

render(<Test></Test>, document.body);
