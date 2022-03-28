/*
 * @lc app=leetcode id=343 lang=typescript
 *
 * [343] Integer Break
 */

// @lc code=start
function integerBreak(n: number): number {
  const dp = Array.from({ length: n + 1 }, () => 0)

  for (let i = 2; i <= n; ++i) {
    /* 89ms / 50%  ---> 81ms / 65.28% */
    for (let j = 1; j <= Math.ceil(Math.sqrt(i)); ++j) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
    }
  }

  return dp[n]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('343.integer-break', () => {
    expect(integerBreak(2)).toMatchInlineSnapshot('1')
    expect(integerBreak(6)).toMatchInlineSnapshot('9')
    expect(integerBreak(10)).toMatchInlineSnapshot('36')
  })
}
