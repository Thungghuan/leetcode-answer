/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((right + left) / 2)
    if (nums[middle] === target) return middle

    if (nums[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('704.binary-search', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toMatchInlineSnapshot('4')
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toMatchInlineSnapshot('-1')
  })
}
