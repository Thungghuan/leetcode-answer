/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n

  const dp = [1, 2]
  for (let i = 3; i <= n; ++i) {
    const sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }

  return dp[1]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('70.climbing-stairs', () => {
    expect(climbStairs(2)).toBe(2)
    expect(climbStairs(3)).toBe(3)
    expect(climbStairs(4)).toBe(5)
    expect(climbStairs(5)).toBe(8)
  })
}
