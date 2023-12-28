import { render } from "nixix/dom";
import "./index.css";
import Theme from "./Theme";
import SearchSelect, { SearchSelectOption } from "./SearchSelect";

const View = (): someView => {
  return (
    <Theme
      dataTheme='dark'
      className={"w-full h-full flex items-center justify-center"}>
      <SearchSelect
        placeholder='Yeah'
        value={"name"}>
        <SearchSelectOption value={"Iphone"}>Iphone</SearchSelectOption>
        <SearchSelectOption value={"Samsung"}>Samsung</SearchSelectOption>
      </SearchSelect>
    </Theme>
  );
};

export default function Mount() {
  render(() => <View />, document.body);
}

Mount();
