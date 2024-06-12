import * as funcs from './functions'
import { describe, test, expect} from '@jest/globals'

describe('Abbreviate a two word name:', () => {
  test('abbreviate `chravis bobussy`', ()=> {
    expect(funcs.AbbreviateATwoWordName('chravis bobussy')).toBe('C.B')
  })
})
