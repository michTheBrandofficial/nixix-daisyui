import { render } from 'nixix/dom';
import './index.css';
import Button from './Button';
import Collapse, { CollapseContent, CollapseTitle } from './Collapse';
import Accordion from './Accordion';
import SearchSelect, { SearchSelectOption } from './SearchSelect';

export const Test = () => {
  return (
    <Accordion icon='arrow' dataTheme='dark' >
      <CollapseTitle >Click me to see hello</CollapseTitle>
      <CollapseContent>Hello World</CollapseContent>
    </Accordion>
  );
};

render(<Test></Test>, document.body);
