/**
 * Title: Well of Ideas - Easy Version
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/57f222ce69e09c3630000212/typescript
 * Language attempt: TypeScript
 **/

export function well(review: string[]) {
  const goodIdeasCounter = review.filter(
    (comment) => comment === 'good',
  ).length;

  if (goodIdeasCounter >= 1 && goodIdeasCounter <= 2) return 'Publish!';
  else if (goodIdeasCounter > 2) return 'I smell a series!';
  else return 'Fail!';
}
