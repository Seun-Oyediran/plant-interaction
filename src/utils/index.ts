export function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

export function clamp(min: number, max: number, val: number) {
  return Math.min(Math.max(val, min), max);
}

export function isEven(number: number) {
  return number % 2 === 0;
}
