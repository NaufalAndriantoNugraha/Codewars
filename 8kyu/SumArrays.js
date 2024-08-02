/**
 * Title: Sum Arrays
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * Language attempt: JavaScript
 **/

function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}
