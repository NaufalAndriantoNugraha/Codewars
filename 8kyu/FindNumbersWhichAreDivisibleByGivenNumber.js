/**
 * Title: Find numbers which are divisible by given number
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/55edaba99da3a9c84000003b/javascript
 * Language attempt: JavaScript
 **/

function divisibleBy(numbers, divisor) {
  const result = [];
  for (const number of numbers) {
    if (number % divisor == 0) {
      result.push(number);
    }
  }
  return result;
}
