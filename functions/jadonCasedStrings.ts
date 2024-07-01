export const JadonCasedStrings = (str: string): string => {
  let strArr: string[] = str.split(' ')

  let newArr: string[] = strArr.map((word) => {
    return word[0].toUpperCase() + word.substring(1)
  })

  return newArr.join(' ')
}
