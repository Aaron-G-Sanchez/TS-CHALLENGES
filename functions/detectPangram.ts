// 06/14/24 DetectPangram checks if a string uses every letter of the alphabet at least once.

// TODO Rewrite with regex.
export const DetectPangram = (phrase: string): boolean => {
  let letterMap = {}

  for (const char of phrase) {
    if (char === "") {
      continue
    }

    if (letterMap[char]) {
      letterMap[char]++
    }else{
      letterMap[char] = 1
    }
  }

  return Object.keys(letterMap).length < 26 ? false : true

}
