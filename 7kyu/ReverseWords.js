/**
 * Title: Reversed words
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
 * Language attempt: JavaScript
 **/

function reverseWords(words) {
  const wordsArray = words.split(' ');
  const reversedWordsArray = [];

  for (const word of wordsArray) {
    let reversedWord = word.split('').reverse().join('');
    reversedWordsArray.push(reversedWord);
  }
  return reversedWordsArray.join(' ');
}
