/**
 * Title: Flick Switch
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
 * Language attempt: JavaScript
 **/

function flickSwitch(message) {
  let isTrue = true;
  const result = [];

  for (const word of message) {
    if (word !== 'flick') {
      result.push(isTrue);
    } else {
      isTrue = !isTrue;
      result.push(isTrue);
    }
  }
  return result;
}