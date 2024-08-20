/**
 * Title: String Repeat
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript
 * Language attempt: JavaScript
 **/

function repeatStr(count, message) {
  let result = '';
  for (let i = 1; i <= count; i++) {
    result += message;
  }
  return result;
}
