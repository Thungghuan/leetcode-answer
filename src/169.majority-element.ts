/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
type ElementCount = {
  [key: number]: number
}

function majorityElement(nums: number[]): number {
  const elementCount: ElementCount = {}
  const length = nums.length
  const halfLength = length / 2
  let majority: number

  for (let i = 0; i < length; ++i) {
    elementCount[nums[i]]
      ? elementCount[nums[i]]++
      : (elementCount[nums[i]] = 1)
    
    if (elementCount[nums[i]] > halfLength) {
      majority = nums[i]
      break
    }
  }

  return majority
}
// @lc code=end
