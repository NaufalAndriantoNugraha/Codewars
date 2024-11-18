/**
 * Title: Check the exam
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/5a3dd29055519e23ec000074/javascript
 * Language attempt: JavaScript
 **/

function checkExam(correctAnswer, givenAnswer) {
  let score = 0;

  for (let i = 0; i < givenAnswer.length; i++) {
    if (givenAnswer[i] === correctAnswer[i]) {
      score += 4;
    } else if (givenAnswer[i] === '') {
      continue;
    } else {
      score -= 1;
    }
  }

  return score < 0 ? 0 : score;
}
