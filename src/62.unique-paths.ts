/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  )

  for (let col = 0; col < n; ++col) dp[0][col] = 1
  for (let row = 0; row < m; ++row) dp[row][0] = 1

  for (let col = 1; col < n; ++col) {
    for (let row = 1; row < m; ++row) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
    }
  }

  return dp[m - 1][n - 1]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('62.unique-paths', () => {
    expect(uniquePaths(3, 7)).toBe(28)
    expect(uniquePaths(3, 2)).toBe(3)
  })
}
