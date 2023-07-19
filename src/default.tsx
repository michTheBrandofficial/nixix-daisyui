import { render } from 'nixix/dom';
import './index.css';
import Button from './Button';
import Collapse, { CollapseTitle } from './Collapse';
import Accordion from './Accordion';

export const Test = () => {
  return (
    <Accordion icon="arrow" dataTheme='dark' >
        <CollapseTitle>Name </CollapseTitle>
      
    </Accordion>
  );
};

render(<Test></Test>, document.body);
