/**
 * Returns random integer from min (including) to max (including)
 */
function getRandomInteger(min: number, max: number): number {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

export function createRandomArray(
  arrayValueRange: [number, number],
  arrayLengthRange: [number, number],
): number[] {
  return Array
    .from({ length: getRandomInteger(...arrayLengthRange) })
    .map(() => getRandomInteger(...arrayValueRange));
}
