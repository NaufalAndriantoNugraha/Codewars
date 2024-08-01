/**
 * Title: Pirates!! Are the Cannons ready!??
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript
 * Language attempt: JavaScript
 **/

function cannonsReady(gunners) {
  for (const gunner in gunners) {
    if (gunners[gunner] === 'nay') {
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
}
