/*
 * @lc app=leetcode id=154 lang=typescript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) left = mid + 1
    else if (nums[mid] < nums[right]) right = mid
    else right--
  }

  return nums[right]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('154.find-minimum-in-rotated-sorted-array-ii', () => {
    expect(findMin([1, 3, 5])).toMatchInlineSnapshot('1')
    expect(findMin([2, 2, 2, 0, 1])).toMatchInlineSnapshot('0')
    expect(findMin([2, 3, 4, 5, 1])).toMatchInlineSnapshot('1')
  })
}
