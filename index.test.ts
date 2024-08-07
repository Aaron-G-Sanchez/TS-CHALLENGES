import * as funcs from './functions'
import { describe, test, expect } from '@jest/globals'

// 05/27/24 AbbreviateATwoWordName should take a first and last name and abbreviate the name.
describe('Abbreviate a two word name function:', () => {
  type testCase = {
    name: string
    given: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: 'Chravis Bobussy => C.B',
      given: 'chravis bobussy',
      want: 'C.B'
    },
    {
      name: 'Jane Doe => J.D',
      given: 'Jane Doe',
      want: 'J.D'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.AbbreviateATwoWordName(given)).toBe(want)
  })
})

// 05/28/24 ConvertBoolean function should take a boolean and convert it to its string equivalent.
describe('Convert boolean to string function:', () => {
  type testCase = {
    name: string
    given: boolean
    want: string
  }

  const testCases: testCase[] = [
    {
      name: 'true => Yes',
      given: true,
      want: 'Yes'
    },
    {
      name: 'false => No',
      given: false,
      want: 'No'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.ConvertBoolean(given)).toBe(want)
  })
})

// 05/31/24 WhoLikesIt function should take an array of names and create and easy to read summary of who likes the `post`.
describe('Who likes it function:', () => {
  type testCase = {
    name: string
    given: string[]
    want: string
  }

  const testCases: testCase[] = [
    {
      name: '[] => no one likes this',
      given: [],
      want: 'no one likes this'
    },
    {
      name: "['Peter'] => Peter likes this",
      given: ['Peter'],
      want: 'Peter likes this'
    },
    {
      name: "['Jacob', 'Alex'] => Jacob and Alex like this",
      given: ['Jacob', 'Alex'],
      want: 'Jacob and Alex like this'
    },
    {
      name: "['Alex', 'Jacob', 'Mark', 'Chravis'] => Alex, Jacob and 2 others like this",
      given: ['Alex', 'Jacob', 'Mark', 'Chravis'],
      want: 'Alex, Jacob and 2 others like this'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.WhoLikesIt(given)).toBe(want)
  })
})

// 06/14/24 DetectPangram function should take a phrase and determine if it uses every letter of the alphabet at least once.
describe('DetectPangram function', () => {
  type testCase = {
    name: string
    given: string
    want: boolean
  }

  const testCases: testCase[] = [
    {
      name: 'The  quick brown.... => true',
      given: 'The quick brown fox jumps over the lazy dog',
      want: true
    },
    {
      name: 'This is a test => false',
      given: 'This is a test',
      want: false
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.DetectPangram(given)).toBe(want)
  })
})

// 06/19/24 ShortLongShort takes two strings and returns a combination of the two stirings.
describe('ShortLongShort function', () => {
  type testCase = {
    name: string
    givenOne: string
    givenTwo: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: '1, 22 => 1221',
      givenOne: '1',
      givenTwo: '22',
      want: '1221'
    },
    {
      name: '22, 1 => 1221',
      givenOne: '22',
      givenTwo: '1',
      want: '1221'
    }
  ]

  test.each(testCases)('$name', ({ givenOne, givenTwo, want }) => {
    expect(funcs.ShortLongShort(givenOne, givenTwo)).toBe(want)
  })
})

// 06/20/24 OddOrEven takes a number and return a string "Odd" or "Even".

describe('OddOrEven function', () => {
  type testCase = {
    name: string
    given: number
    want: string
  }

  const testCases: testCase[] = [
    {
      name: '1 => Odd',
      given: 1,
      want: 'Odd'
    },
    {
      name: '4 => Even',
      given: 4,
      want: 'Even'
    },
    {
      name: '3 => Odd',
      given: 3,
      want: 'Odd'
    },
    {
      name: '-1 => Odd',
      given: -1,
      want: 'Odd'
    },
    {
      name: '-12 => Even',
      given: -12,
      want: 'Even'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.OddOrEven(given)).toBe(want)
  })
})

// 06/21/24 ToString takes a number and returns the number as a string. (8ku FOR SURE)
describe('ToString function', () => {
  type testCase = {
    name: string
    given: number
    want: string
  }

  const testCases: testCase[] = [
    {
      name: '1221 => "1221"',
      given: 1221,
      want: '1221'
    },
    {
      name: '87 => "87"',
      given: 87,
      want: '87'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.ToString(given)).toBe(want)
  })
})

// 06/24/24 Isogram is a function that validates that a string has no repeating letters.
describe('Isogram function', () => {
  type testCase = {
    name: string
    given: string
    want: boolean
  }

  const testCases: testCase[] = [
    {
      name: 'Dermatoglyphics => true',
      given: 'Dermatoglyphics',
      want: true
    },
    {
      name: 'aba => false',
      given: 'aba',
      want: false
    },
    {
      name: 'moOse => false',
      given: 'moOse',
      want: false
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.Isogram(given)).toBe(want)
  })
})

// 06/26/24 ReplaceWithAlphabetPositon function should take a string and return a new string
// with every letter replaced with its position in the alphabet.
describe('ReplaceWithAlphabetPositon function', () => {
  type testCase = {
    name: string
    given: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: "'The' => '20 8 5'",
      given: 'The',
      want: '20 8 5'
    },
    {
      name: "'gg}u+_b,' => '7 7 21 2'",
      given: 'gg}u+_b,',
      want: '7 7 21 2'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.ReplaceWithAlphabetPosition('The')).toBe('20 8 5')
  })
})

// 06/27/24 FriendOrFoe takes an array of names and returns a list of "Friends" or
// any name that is exactly 4 letters.
describe('FriendOrFoe function', () => {
  type testCase = {
    name: string
    given: string[]
    want: string[]
  }

  const testCases: testCase[] = [
    {
      name: '[Ryan, Kieran, Mark] => [Ryan, Mark]',
      given: ['Ryan', 'Kieran', 'Mark'],
      want: ['Ryan', 'Mark']
    },
    {
      name: '[This, Is, A, List, Of, Names] => [This, List]',
      given: ['This', 'Is', 'A', 'List', 'Of', 'Names'],
      want: ['This', 'List']
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.FriendOrFoe(given)).toEqual(want)
  })
})

// 06/30/24 JadonCasedStrings takes a string and returns the string with each word capitalized.
describe('JadonCasedStrings function', () => {
  type testCase = {
    name: string
    given: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: 'hello world => Hello World',
      given: 'hello world',
      want: 'Hello World'
    },
    {
      name: 'this is a test => This Is A Test',
      given: 'this is a test',
      want: 'This Is A Test'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.JadonCasedStrings(given)).toBe(want)
  })
})

//  07/02/24 SumOfNumbers takes two numbers and return the sum of every number
//  between and including the given numbers.
describe('SumOfNumbers function', () => {
  type testCase = {
    name: string
    givenOne: number
    givenTwo: number
    want: number
  }

  const testCases: testCase[] = [
    {
      name: '(-1, 1) => -1 + 0 +1 = 0',
      givenOne: -1,
      givenTwo: 1,
      want: 0
    },
    {
      name: '(5, 0) => 0 + 1 + ... + 5 = 15',
      givenOne: 5,
      givenTwo: 0,
      want: 15
    },
    {
      name: '(-1, 2) => -1 + 0 + 1 + 2 = 2',
      givenOne: -1,
      givenTwo: 2,
      want: 2
    }
  ]

  test.each(testCases)('$name', ({ givenOne, givenTwo, want }) => {
    expect(funcs.SumOfNumbers(givenOne, givenTwo)).toBe(want)
  })
})

// 07/05/24 TwoToOne takes two strings and returns the longest possible sorted string
// using only unique letters from each string.
describe('TwoToOne function', () => {
  type testCase = {
    name: string
    givenOne: string
    givenTwo: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: 'xxa + dxbc => abcdx',
      givenOne: 'xxa',
      givenTwo: 'dxbc',
      want: 'abcdx'
    }
  ]

  test.each(testCases)('$name', ({ givenOne, givenTwo, want }) => {
    expect(funcs.TwoToOne(givenOne, givenTwo)).toBe(want)
  })
})

// 07/23/24 RemoveFirstAndLast removes the first and last characters from a string. (Needed the commit lol)
describe('RemoveFirstAndLast', () => {
  type testCase = {
    name: string
    given: string
    want: string
  }

  const testCases: testCase[] = [
    {
      name: 'name => am',
      given: 'name',
      want: 'am'
    },
    {
      name: 'eloquent => loquen',
      given: 'eloquent',
      want: 'loquen'
    }
  ]

  test.each(testCases)('$name', ({ given, want }) => {
    expect(funcs.RemoveFirstAndLast(given)).toBe(want)
  })
})
