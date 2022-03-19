/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const length = s.length
  let idx = 0

  // ignore leading whitespace
  while (idx < length && s[idx] === ' ') idx++

  // check the sign of the number
  let isNegative = false
  if (s[idx] === '-') {
    idx++
    isNegative = true
  } else if (s[idx] === '+') {
    idx++
  }

  // ignore the leading zeros
  while (s[idx] === '0') {
    idx++
    if (idx === length) return 0
  }

  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let base = 1
  const digits: number[] = []

  while (idx < length && numbers.includes(s[idx])) {
    digits.push(+s[idx])

    // overflow
    if (digits.length > 10) {
      return isNegative ? -(2 ** 31) : 2 ** 31 - 1
    }

    idx++
    base *= 10
  }

  let result = 0
  idx = 0
  while (base !== 1) {
    base /= 10
    result += digits[idx] * base
    idx++
  }

  if (isNegative) result *= -1

  // overflow
  if (!isNegative && result > 2 ** 31 - 1) return 2 ** 31 - 1
  if (isNegative && result < -(2 ** 31)) return -(2 ** 31)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('8.string-to-integer-atoi', () => {
    expect(myAtoi('    -42')).toBe(-42)
    expect(myAtoi('4193 with words')).toBe(4193)
    expect(myAtoi('+1')).toBe(1)
  })
}
