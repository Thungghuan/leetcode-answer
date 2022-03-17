/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const lastNumbers: number[] = []
  while (k > nums.length) k -= nums.length

  for (let i = k; i > 0; --i) {
    lastNumbers.push(nums[nums.length - i])
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    if (i > k - 1) {
      nums[i] = nums[i - k]
    } else {
      nums[i] = lastNumbers[i]
    }
  }

  // for (let i = 0; i < k; ++i) {
  //   nums.unshift(nums.pop()!)
  // }
}
// @lc code=end

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('rotate-array', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums1, 3)
    expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4])

    const nums2 = [-1, -100, 3, 99]
    rotate(nums2, 2)
    expect(nums2).toEqual([3, 99, -1, -100])

    const nums3 = [1, 2]
    rotate(nums3, 5)
    expect(nums3).toEqual([2, 1])
  })
}
