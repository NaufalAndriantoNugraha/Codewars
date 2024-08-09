/**
 * Title: Count the Monkeys!
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/javascript
 * Language attempt: JavaScript
 **/

function monkeyCount(monkeys) {
  const result = [];
  for (let i = 1; i <= monkeys; i++) {
    result.push(i);
  }
  return result;
}
