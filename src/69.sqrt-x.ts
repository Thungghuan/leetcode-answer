/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 1 || x === 0) return x

  let left = 2
  let right = Math.floor(x / 2)

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    const square = mid * mid

    if (square === x) return mid
    
    if (square > x) right = mid - 1
    else left = mid + 1
  }

  return right
};
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('69.sqrt-x', () => {
    expect(mySqrt(4)).toMatchInlineSnapshot('2')
    expect(mySqrt(8)).toMatchInlineSnapshot('2')
    expect(mySqrt(100)).toMatchInlineSnapshot('10')
    expect(mySqrt(99)).toMatchInlineSnapshot('9')
})
}
