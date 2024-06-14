import * as funcs from './functions'
import { describe, test, expect } from '@jest/globals'

// 05/27/24
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

// 05/28/24
describe('Convert boolean function:', () => {
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
