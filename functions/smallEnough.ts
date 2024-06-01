export const SmallEnough = (numbers: number[], target: number): boolean => {
  let output: boolean = true

  for (const num of numbers) {
    if (num > target) {
      output = false
    }
  }
  return output
}
