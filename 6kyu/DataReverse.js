/**
 * Title: Data Reverse
 * Difficulty: 6kyu
 * Link: https://www.codewars.com/kata/569d488d61b812a0f7000015/javascript
 * Language attempt: JavaScript
 **/

function dataReverse(data) {
  let dataSeparated = [];

  let counter = 1;
  let arr = [];

  for (const element of data) {
    arr.push(element);
    counter++;

    if (counter === 9) {
      dataSeparated.push(arr);
      arr = [];
      counter = 1;
    }
  }
  dataSeparated = dataSeparated.reverse();
  return dataSeparated.flat();
}
