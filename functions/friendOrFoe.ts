// 06/27/24 FrinedOrFoe takes a list of names and returns an array of
// confirmed friends (names that have a length of 4). (7ku Friend or Foe?)
export const FriendOrFoe = (names: string[]): string[] => {
  let friendArr: string[] = []

  for (const name of names) {
    if (name.length === 4) {
      friendArr.push(name)
    }
  }

  return friendArr
}
