import { render } from 'nixix/dom';
import './index.css';
import Select, { SelectOption } from './Select';
import { callStore } from 'nixix/primitives';
import { For } from 'nixix/hoc';
import Button from './Button';

const [array, setArray] = callStore<string[]>(['Iphone', 'Samsung', 'Tecno']);

render(
  <div>
    <For
      each={array}
      parent={<Select size="md" borderOffset color="primary"/>}
      fallback={'Select'}
    >
      {(props: string[]) => {
        return <SelectOption>{props}</SelectOption>;
      }}
    </For>
    <Button tag='button' dataTheme='autumn' size='sm' active on:click={() => setArray(['Only Sam'])} >Click me</Button>
  </div>,
  document.body
);
