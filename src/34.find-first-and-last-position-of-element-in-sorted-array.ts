/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  const end = left - 1
  if (right >= 0 && nums[right] != target) return [-1, -1]

  left = 0
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  const start = right + 1
  if (left >= 0 && nums[left] != target) return [-1, -1]

  return [start, end]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('34.find-first-and-last-position-of-element-in-sorted-array', () => {
    expect(searchRange([], 5)).toMatchInlineSnapshot(`
      [
        -1,
        -1,
      ]
    `)

    expect(searchRange([1], 0)).toMatchInlineSnapshot(`
      [
        -1,
        -1,
      ]
    `)

    expect(searchRange([5, 7, 7, 8, 8, 10], 5)).toMatchInlineSnapshot(`
      [
        0,
        0,
      ]
    `)
  })
}
