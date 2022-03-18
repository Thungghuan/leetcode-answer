/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 3) return NaN

  nums.sort((a, b) => a - b)

  let result = nums[0] + nums[1] + nums[2]
  if (result >= target) return result

  let diff = Infinity

  for (let i = 0; i < nums.length - 2; ++i) {
    if (i === 0 && nums[i] === nums[i - 1]) continue

    let current = nums[i] + nums[i + 1] + nums[i + 2]

    if (current > target) {
      if (Math.abs(current - target) < diff) {
        diff = Math.abs(current - target)
        result = current
      }
      break
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      current = nums[i] + nums[left] + nums[right]
      if (current === target) return current

      if (Math.abs(current - target) < diff) {
        diff = Math.abs(current - target)
        result = current
      }

      if (current < target) {
        left++
        while (nums[left] === nums[left - 1]) left++
      } else {
        right--
        while (nums[right] === nums[right + 1]) right--
      }
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('three-sum-closest-1', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
  })
  it('three-sum-closest-2', () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
  })
  it('three-sum-closest-3', () => {
    expect(threeSumClosest([0, 2, 1, -3], 1)).toBe(0)
  })
  it('time-limit', () => {
    expect(threeSumClosest([0,5,-1,-2,4,-1,0,-3,4,-5], 1)).toMatchInlineSnapshot('1')
  })
}
