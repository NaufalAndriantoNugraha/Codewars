/**
 * Title: Short Long Short
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
 * Language attempt: JavaScript
 **/

function solution(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}
