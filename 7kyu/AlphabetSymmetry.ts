/**
 * Title: Alphabet Symmetry
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
 * Language attempt: TypeScript
 **/

export function solve(arr: Array<String>): Array<Number> {
  const arrLowerCase: Array<String> = [];
  arr.forEach((word) => arrLowerCase.push(word.toLowerCase()));

  const alphabet: Array<String> = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const result: Array<Number> = [];
  arrLowerCase.forEach((value) => {
    let counter = 0;
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (value[i] === alphabet[j] && i === j) {
          counter++;
          break;
        }
      }
    }
    result.push(counter);
    counter = 0;
  });
  return result;
}
