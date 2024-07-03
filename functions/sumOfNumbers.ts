// 07/02/25 SumOfNumbers returns the sum of every number between two given numbers.

export const SumOfNumbers = (a: number, b: number): number => {
  // check if given numbers are equal.
  if (a === b) return a

  let sum: number = 0

  let smallestNum: number = a < b ? a : b
  let largestNum: number = a > b ? a : b

  for (let i = smallestNum; i <= largestNum; i++) {
    sum += i
  }

  return sum
}
