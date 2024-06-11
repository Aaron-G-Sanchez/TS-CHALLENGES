// 06/06/24 Created a function to encode a vowel to its number representation of order in the list of vowels.

const values = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}

export const EncodeVowels = (str: string): string => {
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

// 06/10/24 Created a function to decode a string that has the numercial representation of vowels in the english alphabet based on their order.
export const DecodeVowels = (str: string): string => {
  let newStr: string[] = []

  for (const char of str) {
    newStr.push(char)
    for (const val in values) {
      if (char === values[val].toString()) {
        newStr.pop()
        newStr.push(val)
        break
      }
    }
  }

  return newStr.join('')
}
