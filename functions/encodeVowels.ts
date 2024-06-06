// 06/06/24 Created a function to encode a vowel to its number representation of order in the list of vowels.

export const EncodeVowls = (str: string): string => {
  const values = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }

  let newStr: string[] = []

  for (let i = 0; i < str.length; i++) {
    if (values[str[i]]) {
      newStr.push(values[str[i]])
    } else {
      newStr.push(str[i])
    }
  }

  return newStr.join('')
}
