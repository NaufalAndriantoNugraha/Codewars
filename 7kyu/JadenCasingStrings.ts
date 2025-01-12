/**
 * Title: Jaden Casing Strings
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/typescript
 * Language attempt: TypeScript
 **/

interface String {
  toJadenCase(): string;
}

String.prototype.toJadenCase = function (): string {
  const strToArr: Array<string> = this.split(' ');
  for (let i = 0; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
  }
  return strToArr.join(' ');
};
