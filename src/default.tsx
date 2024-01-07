import { render } from "nixix/dom";
import "./index.css";
import { Theme, Rating, Toast, Alert } from ".";
import { DynamicAlerts } from "./Toast/Toast.stories";
import { Primitive } from "nixix/primitives";

const View = (): someView => {
  return (
    <>
      {/* <Rating value={0}>
        <Rating.Item className={'bg-green-900 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-green-800 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-green-700 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-green-600 mask mask-star-2'} readonly />
        <Rating.Item className={'bg-green-500 mask mask-star-2'} readonly />
      </Rating> */}
      <DynamicAlerts />
    </>
  );
};

export default function Mount() {
  render(() => <View />, document.body);
}

Mount();
