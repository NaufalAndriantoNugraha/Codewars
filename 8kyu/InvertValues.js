/**
 * Title: Invert values
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
 * Language attempt: JavaScript
 **/

function invert(array) {
  const reversed = [];
  if (array.length === 0) {
    return [];
  }

  for (const element of array) {
    if (element > 0) {
      reversed.push(-element);
    } else {
      reversed.push(Math.abs(element));
    }
  }
  return reversed;
}
