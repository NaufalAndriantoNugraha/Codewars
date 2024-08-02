/**
 * Title: Partial Word Searching
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/54b81566cd7f51408300022d/javascript
 * Language attempt: JavaScript
 **/

function wordSearch(query, seq) {
  const result = [];
  for (const word of seq) {
    if (word.toLowerCase().includes(query.toLowerCase())) {
      result.push(word);
    }
  }
  return result.length === 0 ? ['Empty'] : result;
}
