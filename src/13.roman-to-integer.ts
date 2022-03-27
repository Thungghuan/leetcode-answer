/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0

  let strIdx = 0
  while (strIdx < s.length) {
    const c = s[strIdx] as keyof typeof romanMap
    const next = s[strIdx + 1]

    if (
      next &&
      ((c === 'I' && (next === 'V' || next === 'X')) ||
        (c === 'X' && (next === 'L' || next === 'C')) ||
        (c === 'C' && (next === 'D' || next === 'M')))
    ) {
      result += romanMap[next] - romanMap[c]
      strIdx++
    } else {
      result += romanMap[c]
    }

    strIdx++
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('13.roman-to-integer', () => {
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('LVIII')).toBe(58)
    expect(romanToInt('MCMXCIV')).toBe(1994)
  })
}
