/**
 * Title: Sum of Multiples
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
 * Language attempt: JavaScript
 **/

function sumMul(start, end) {
  if (end <= 0) {
    return 'INVALID';
  }

  let result = 0;
  for (let i = start; i < end; i += start) {
    result += i;
  }
  return result;
}
