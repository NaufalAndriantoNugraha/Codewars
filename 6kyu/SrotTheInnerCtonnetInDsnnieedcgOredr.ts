/**
 * Title: Srot the inner ctonnet in dsnnieedcg oredr
 * Difficulty: 6kyu
 * Link: https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/typescript
 * Language attempt: TypeScript
 **/

export function sortTheInnerContent(words: string): string {
  const wordsArray = words.split(' ');
  const result: Array<String> = [];
  for (const word of wordsArray) {
    if (checkIfContainSameValue(word)) {
      result.push(word[0]);
    } else {
      const firstAndLastChar = [word[0], word[word.length - 1]];
      const innerWord = sortWordInDescendingOrder(
        word.slice(1, word.length - 1),
      );
      result.push(
        [firstAndLastChar[0], innerWord, firstAndLastChar[1]].join(''),
      );
    }
  }
  return result.join(' ');
}

function checkIfContainSameValue(word: string): boolean {
  for (let i = 1; i < word.length; i++) {
    if (word[0] != word[i]) {
      return false;
    }
  }
  return true;
}

function sortWordInDescendingOrder(word: string): string {
  return [...word].sort().reverse().join('');
}
