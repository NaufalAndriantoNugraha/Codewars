/**
 * Title: Find Multiples of a Number
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/typescript
 * Language attempt: TypeScript
 **/

export function findMultiples(integer: number, limit: number): number[] {
  const result: number[] = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      result.push(i);
    }
  }
  return result;
}
