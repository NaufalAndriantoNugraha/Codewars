/**
 * Title: Some Circle
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/56143efa9d32b3aa65000016/javascript
 * Language attempt: JavaScript
 **/

function sumCircles(...circles) {
  let sum = 0;
  for (const circle of circles) {
    const area = (Math.PI / 4) * Math.pow(circle, 2);
    sum += area;
  }
  const result = Math.round(sum);
  return `We have this much circle: ${result}`;
}
