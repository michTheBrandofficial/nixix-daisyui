export const assign = Object.assign.bind(Object)

export function forEach<U>(array: Array<U>, callbackfn: ((value: U, index: number) => U)): void {
  array.forEach(callbackfn)
  return undefined;
}

export function map<U>(array: Array<U>, callbackfn: ((value: U, index: number) => U)): U[] {
  return array.map(callbackfn);
};