/**
 * Title: Vowel Count
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
 * Language attempt: JavaScript
 **/

function getCount(strings) {
  let total = 0;
  for (const char of strings) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        total++;
        break;
    }
  }
  return total;
}
