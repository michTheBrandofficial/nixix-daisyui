import { render } from 'nixix/dom';
import Accordion from './Accordion';
import './index.css';
import { CollapseContent, CollapseTitle } from './Collapse';

render(
  <div>
    <Accordion icon="arrow" className="bg-base-300">
      <CollapseTitle>Click to open</CollapseTitle>
      <CollapseContent>Hellow</CollapseContent>
    </Accordion>
    <Accordion icon="arrow" className="bg-base-300">
      <CollapseTitle>Click to open</CollapseTitle>
      <CollapseContent>Hellow</CollapseContent>
    </Accordion>
  </div>,
  document.body
);
