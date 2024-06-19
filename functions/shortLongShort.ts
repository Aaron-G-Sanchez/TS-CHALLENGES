// 06/19/24 ShortLongShort returns a combination of two strings with the long string sandwiched between two instances of the short string.
export const ShortLongShort = (strOne: string, strTwo: string): string => {
  const short = strOne.length < strTwo.length ? strOne : strTwo
  const long = strOne.length > strTwo.length ? strOne : strTwo

  return `${short}${long}${short}`
}
