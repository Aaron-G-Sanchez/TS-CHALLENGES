// 07/05/24 TwoToOne takes two strings and returns a new sorted string made with unique
// characters from the two given strings.
// TODO: Need to attempt with using a set.
export const TwoToOne = (strOne: string, strTwo: string): string => {
  let seenChars: { [key: string]: boolean } = {}

  for (let char of strOne) {
    if (seenChars[char]) {
      continue
    }
    seenChars[char] = true
  }

  for (let char of strTwo) {
    if (seenChars[char]) {
      continue
    }
    seenChars[char] = true
  }

  return Object.keys(seenChars).sort().join('')
}
