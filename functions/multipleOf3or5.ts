export const MultipleOf3or5 = (num: number): number => {
  if (num < 0) {
    return 0
  }

  let sum: number = 0

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
