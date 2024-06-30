export const JadonCasedStrings = (str: string): string => {
  let strArr = str.split(' ')

  let newArr = strArr
    .map((word) => {
      const wordArr = word.split('')
      let firstChar: string = wordArr[0].toUpperCase()
      let newWord = firstChar + wordArr.slice(1).join('')
      return newWord
    })
    .join(' ')

  return newArr
}
