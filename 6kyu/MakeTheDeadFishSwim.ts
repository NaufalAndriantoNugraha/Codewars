/**
 * Title: Make the Dead Fish Swim
 * Difficulty: 6kyu
 * Link: https://www.codewars.com/kata/51e0007c1f9378fa810002a9/typescript
 * Language attempt: TypeScript
 **/

export function parse(input: string) {
  const dataArray = Array.from(input);
  const result: Array<number> = [];
  let counter = 0;

  for (const data of dataArray) {
    if (data === 'i') counter++;
    if (data === 'd') counter--;
    if (data === 's') counter *= counter;
    if (data === 'o') result.push(counter);
  }
  return result;
}
