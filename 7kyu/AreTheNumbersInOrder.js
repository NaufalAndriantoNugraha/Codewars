/**
 * Title: Are the numbers in order?
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/56b7f2f3f18876033f000307/javascript
 * Language attempt: JavaScript
 **/

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
