/**
 * Title: Who likes it?
 * Difficulty: 6kyu
 * Link: https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/typescript
 * Language attempt: TypeScript
 **/

export function likes(inputArray: Array<string>): string {
  const length = inputArray.length;
  let message = '';
  if (length === 0) {
    message = 'no one likes this';
  } else if (length === 1) {
    message = `${inputArray[0]} likes this`;
  } else if (length === 2) {
    message = `${inputArray[0]} and ${inputArray[1]} like this`;
  } else if (length === 3) {
    message = `${inputArray[0]}, ${inputArray[1]} and ${inputArray[2]} like this`;
  } else {
    message = `${inputArray[0]}, ${inputArray[1]} and ${
      inputArray.length - 2
    } others like this`;
  }
  return message;
}

export function likes(inputArray: Array<string>): string {
  switch (inputArray.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${inputArray[0]} likes this`;
    case 2:
      return `${inputArray[0]} and ${inputArray[1]} like this`;
    case 3:
      return `${inputArray[0]}, ${inputArray[1]} and ${inputArray[2]} like this`;
    default:
      return `${inputArray[0]}, ${inputArray[1]} and ${
        inputArray.length - 2
      } others like this`;
  }
}
