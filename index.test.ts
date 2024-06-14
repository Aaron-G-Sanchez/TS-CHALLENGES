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

  test.each(testCases)('$name', ({given, want}) => {
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

  test.each(testCases)('$name', ({given, want}) => {
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
      name: "[] => no one likes this",
      given: [],
      want: "no one likes this"
    },
    {
      name: "['Peter'] => Peter likes this",
      given: ["Peter"],
      want: "Peter likes this"
    },
    {
      name: "['Jacob', 'Alex'] => Jacob and Alex like this",
      given: ["Jacob", "Alex"],
      want: "Jacob and Alex like this"
    },
    {
      name: "['Alex', 'Jacob', 'Mark', 'Chravis'] => Alex, Jacob and 2 others like this",
      given: ["Alex", "Jacob", "Mark", "Chravis"],
      want: "Alex, Jacob and 2 others like this"
    }
    
  ]

  test.each(testCases)('$name', ({given, want}) => {
    expect(funcs.WhoLikesIt(given)).toBe(want)
  })
})