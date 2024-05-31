// 05/31/24 Created a function to take an array of likes and return a string of usernames that liked the post

export const WhoLikesIt = (names: string[]): string => {
  if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4) {
    const remainingLikes = names.length - 2
    return `${names[0]}, ${names[1]} and ${remainingLikes} others like this`
  } else {
    return `no one likes this`
  }
}
