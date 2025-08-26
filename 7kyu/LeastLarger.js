/**
 * Title: Least Larger
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/javascript
 * Language attempt: JavaScript
 **/

/**
 * @param {Array<Number>} inputArray
 * @param {Number} inputIndex
 */
function leastLarger(inputArray, inputIndex) {
  const valueOnInputIndex = inputArray[inputIndex];
  const smallestNumbers = [];
  for (const number of inputArray) {
    if (number > valueOnInputIndex) {
      smallestNumbers.push(number);
    }
  }
  smallestNumbers.sort((a, b) => a - b);
  const smallestValueOnSmallestNumbers = smallestNumbers[0];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === smallestValueOnSmallestNumbers) {
      return i;
    }
  }
  return -1;
}
