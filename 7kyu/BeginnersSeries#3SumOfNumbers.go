/**
 * Title: Beginner Series #3 Sum of Numbers
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/go
 * Language attempt: Go
 **/

package kata

func GetSum(firstValue, secondValue int) int {
	if firstValue > secondValue {
		firstValue, secondValue = secondValue, firstValue
	}

	total := 0
	for index := firstValue; index <= secondValue; index++ {
		total += index
	}
	return total
}
