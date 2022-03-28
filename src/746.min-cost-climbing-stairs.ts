/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = [cost[0], cost[1]]
  const length = cost.length

  for (let i = 2; i < length; ++i) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }

  return Math.min(dp[length - 1], dp[length - 2])
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('746.min-cost-climbing-stairs', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toMatchInlineSnapshot('15')
    expect(
      minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
    ).toMatchInlineSnapshot('6')
  })
}
