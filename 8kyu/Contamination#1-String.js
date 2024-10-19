/**
 * Title: Contamination #1-String
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/596fba44963025c878000039/javascript
 * Language attempt: JavaScript
 **/

/**
 * @param {string} text
 * @param {string} char
 * @returns {string}
 */
function contamination(text, char) {
  if (text === '' && char === '') {
    return '';
  }

  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += char;
  }
  return result;
}
