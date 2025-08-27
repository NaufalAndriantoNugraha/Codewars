/**
 * Title: Multiply the number
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/typescript
 * Language attempt: JavaScript
 **/

/**
 *  @param {Number} number
 */
function multiply(number) {
  const string = number.toString();
  let length = string.length;
  if (number < 0) {
    length = string.substring(1).length;
  }

  if (length === 1) {
    return number * 5;
  } else {
    return number * Math.pow(5, length);
  }
}
