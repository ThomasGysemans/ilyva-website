/**
 * Generates a random integer.
 * @param min The minimum value, included.
 * @param max The maximum value, excluded.
 * @returns A random integer in the interval [min ; max[.
 */
export default function (min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}