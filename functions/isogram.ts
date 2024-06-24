// 06/24/24 Isogram function is a function that validates if a string conatins no repeated letters.
export const Isogram = (str: string): boolean => {
  let seenChars: { [key: string]: number } = {}

  for (let s of str) {
    if (seenChars[s.toLowerCase()]) {
      return false
    }
    seenChars[s.toLowerCase()] = 1
  }

  return true
}
