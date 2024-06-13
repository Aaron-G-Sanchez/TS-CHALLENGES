import * as funcs from './functions'
import { describe, test, expect } from '@jest/globals'

describe('Abbreviate a two word name:', () => {
  test('`chravis bobussy` ==> `C.B`', () => {
    expect(funcs.AbbreviateATwoWordName('chravis bobussy')).toBe('C.B')
  })
})

describe('Convert boolean to `yes` or `no`', () => {
  test('`True` ==> `Yes`', () => {
    expect(funcs.ConvertBoolean(true)).toBe('Yes')
  })
})
