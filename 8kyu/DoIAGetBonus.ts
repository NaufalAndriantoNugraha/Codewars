/**
 * Title: Do I get a bonus?
 * Difficulty: 8kyu
 * Link: https://www.codewars.com/kata/56f6ad906b88de513f000d96/typescript
 * Language attempt: TypeScript
 **/

export class Kata {
  public static bonusTime(salary: number, bonus: boolean) {
    return bonus === true ? `£${salary * 10}` : `£${salary}`;
  }
}
