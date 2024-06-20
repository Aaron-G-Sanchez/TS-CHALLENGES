export const OddOrEven = (num: number): string => {
  const remain: number = num % 2
  return remain === 0 ? 'Even' : 'Odd'
}
