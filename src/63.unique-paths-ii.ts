/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  )
  for (let col = 0; col < n; ++col) {
    if (obstacleGrid[0][col] === 1) break
    dp[0][col] = 1
  }
  for (let row = 0; row < m; ++row) {
    if (obstacleGrid[row][0]) break
    dp[row][0] = 1
  }

  for (let row = 1; row < m; ++row) {
    for (let col = 1; col < n; ++col) {
      if (obstacleGrid[row][col] === 0) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('63.unique-paths-ii', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ])
    ).toBe(2)

    expect(
      uniquePathsWithObstacles([
        [0, 1],
        [0, 0]
      ])
    ).toBe(1)
  })
}
