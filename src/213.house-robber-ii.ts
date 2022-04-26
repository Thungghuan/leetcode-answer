/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function originRob(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const dp: number[] = []

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; ++i) {
    const next = Math.max(dp[1], dp[0] + nums[i])
    dp[0] = dp[1]
    dp[1] = next
  }

  return dp[1]
}

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const dpFirst = originRob(nums.slice(0, nums.length - 1))
  const dpLast = originRob(nums.slice(1))

  return Math.max(dpFirst, dpLast)
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('213.house-robber-ii', () => {
    expect(rob([2, 3, 2])).toMatchInlineSnapshot('3')
    expect(rob([0])).toMatchInlineSnapshot('0')
    expect(rob([3, 1])).toMatchInlineSnapshot('3')
    expect(rob([1, 3, 1, 3, 100])).toMatchInlineSnapshot('103')
  })
}
