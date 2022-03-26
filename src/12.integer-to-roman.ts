/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  /** Answer2
   *  Runtime: 196ms / 58.79%
   *  Memory:  49.3MB / 47.24%
   */
  let result = ''

  type RomanTuple = [number, string][]
  const romanTuple: RomanTuple = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  let tupleIndex = 0

  while (num > 0) {
    if (num >= romanTuple[tupleIndex][0]) {
      result += romanTuple[tupleIndex][1]
      num -= romanTuple[tupleIndex][0]
    } else {
      tupleIndex++
    }
  }

  return result

  /** Answer1:  WTF map it!
   *  Runtime: 204ms  / 53.28%
   *  Memory:  51.4MB / 10.24%
   */

  // interface RomanMap {
  //   [k: number]: string
  // }

  // const romanMap: RomanMap = {
  //   1: 'I',
  //   2: 'II',
  //   3: 'III',
  //   4: 'IV',
  //   5: 'V',
  //   6: 'VI',
  //   7: 'VII',
  //   8: 'VIII',
  //   9: 'IX',
  //   10: 'X',
  //   20: 'XX',
  //   30: 'XXX',
  //   40: 'XL',
  //   50: 'L',
  //   60: 'LX',
  //   70: 'LXX',
  //   80: 'LXXX',
  //   90: 'XC',
  //   100: 'C',
  //   200: 'CC',
  //   300: 'CCC',
  //   400: 'CD',
  //   500: 'D',
  //   600: 'DC',
  //   700: 'DCC',
  //   800: 'DCCC',
  //   900: 'CM',
  //   1000: 'M',
  //   2000: 'MM',
  //   3000: 'MMM'
  // }

  // const decompose: number[] = []

  // let base = 1
  // while (num % base !== num) {
  //   base *= 10
  // }

  // base /= 10

  // while (base >= 1) {
  //   decompose.push(Math.floor(num / base) * base)
  //   num %= base
  //   base /= 10
  // }

  // return decompose.map(n => romanMap[n]).join('')
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('12.integer-to-roman', () => {
    expect(intToRoman(3)).toBe('III')
    expect(intToRoman(58)).toBe('LVIII')
    expect(intToRoman(1994)).toBe('MCMXCIV')
  })
}
