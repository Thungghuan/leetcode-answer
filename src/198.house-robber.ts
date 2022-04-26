/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const dp: number[] = []

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[dp.length - 1]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('198.house-robber', () => {
    expect(rob([1, 2, 3, 1])).toMatchInlineSnapshot('4')
    expect(rob([2, 7, 9, 3, 1])).toMatchInlineSnapshot('12')
  })
}
