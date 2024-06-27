// 06/26/24 ReplaceWithAlphabetPosition takes a string and returns a new string with every letter
// replaced with its position in the alphabet.
export const ReplaceWithAlphabetPosition = (str: string): string => {
  const letterReg = /[a-zA-Z]/

  let newStr: string = ''

  for (let i = 0; i < str.length; i++) {
    if (letterReg.test(str[i])) {
      newStr += str.toLowerCase().charCodeAt(i) - 96 + ' '
    }
  }

  return newStr.trim()
}
