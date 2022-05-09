/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  if (num === 1) return true

  let left = 1
  let right = Math.floor(num / 2)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    const square = mid * mid

    if (square === num) return true

    if (square > num)  right = mid - 1
    else left = mid + 1
  }

  return false
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('367.valid-perfect-square', () => {
    expect(isPerfectSquare(1)).toMatchInlineSnapshot('true')
    expect(isPerfectSquare(16)).toMatchInlineSnapshot('true')
    expect(isPerfectSquare(10000)).toMatchInlineSnapshot('true')
    expect(isPerfectSquare(4)).toMatchInlineSnapshot('true')
  })
}
