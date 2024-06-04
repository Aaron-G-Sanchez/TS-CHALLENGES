// 06/03/24 Created a function to take an array of numbers and return the invert value of each number in the array

export const InvertValues = (nums: number[]): number[] => {
  const newArr = nums.map((num) => num * -1)

  return newArr
}
