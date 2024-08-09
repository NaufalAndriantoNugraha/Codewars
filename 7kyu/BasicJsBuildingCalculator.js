/**
 * Title: Basic JS - Building Calculator
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/529f2d1c403a58f660000656/javascript
 * Language attempt: JavaScript
 **/

const Calculator = {
  add: (firstValue, secondValue) => {
    return firstValue + secondValue;
  },

  subtract: (firstValue, secondValue) => {
    return firstValue - secondValue;
  },

  multiply: (firstValue, secondValue) => {
    return firstValue * secondValue;
  },

  divide: (firstValue, secondValue) => {
    return secondValue === 0 ? false : firstValue / secondValue;
  },
};
