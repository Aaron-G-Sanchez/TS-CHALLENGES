// 05/27/24 Function written to abbreviate a two word name.

export const abbreviateATwoWordName = (name: string): string => {
  let [first, last] = name.split(' ')

  let firstArr = first.split('')
  let lastArr = last.split('')

  return `${firstArr[0]}.${lastArr[0]}`.toUpperCase()
}
