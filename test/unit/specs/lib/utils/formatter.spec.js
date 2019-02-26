import { formatMonney } from '@/lib/utils/formatter'

describe('lib/utils/formatter.js', () => {
  describe('function: formatMonney', () => {
    it('can format number to showing money format', () => {
      const number = 1200
      const result = formatMonney(number)
      const expected = '1,200.00'
      expect(result).toEqual(expected)
    })
  })
})
